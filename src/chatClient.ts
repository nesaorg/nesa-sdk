import EncryptUtils from "./encryptUtils";
import WalletOperation from "./walletOperation";
import { Readable } from "stream-browserify";
import { ChainInfo } from "@keplr-wallet/types"
import { defaultChainInfo, defaultLockAmount, defaultSinglePaymentAmount, defaultLowBalance, sdkVersion } from "./default.config";
import { socket } from "./socket";
import { BigNumber } from 'bignumber.js';
import { CosmjsOfflineSigner, suggestChain } from '@leapwallet/cosmos-snap-provider';
import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing"

interface ConfigOptions {
  modelName: string;
  lockAmount?: string;
  chainInfo?: ChainInfo;
  walletName?: string;
  singlePaymentAmount?: string;
  lowBalance?: string;
  privateKey?: string
}

interface questionTypes {
  messages: any
  model: string
  stream?: boolean
  frequency_penalty?: any
  presence_penalty?: any
  temperature?: any
  top_p?: any
  session_id?: string;
}

class ChatClient {
  public modelName: string;
  public chainInfo: ChainInfo;
  public lockAmount: string;
  public singlePaymentAmount: string;
  public lowBalance: string;
  public lockAmountDenom: string;
  private walletName: string;
  private chatQueue: any = [];
  private chatSeq = 0;
  private totalUsedPayment = 0;
  private totalSignedPayment = 0;
  private isChatinging = false;
  private isRegisterSessioning = false;
  private agentUrl = "";
  private assistantRoleName = ""
  private lastNesaClientPromise: any
  private lastUserMinimumLockPromise: any
  private lastGetAgentInfoPromise: any
  private lastInitOfflineSignerPromise: any
  private chatProgressReadable: any
  private nesaClient: any
  private offLinesigner: any
  private signaturePayment: any;
  private isBrowser: boolean
  private privateKey: string
  private isEverRequestSession: boolean
  private tokenPrice: number

  constructor(options: ConfigOptions) {
    this.modelName = options?.modelName?.toLowerCase();
    this.chainInfo = options.chainInfo || defaultChainInfo;
    this.lockAmount = options.lockAmount || defaultLockAmount;
    this.signaturePayment = {}
    this.singlePaymentAmount = options.singlePaymentAmount || defaultSinglePaymentAmount;
    this.lowBalance = options.lowBalance || defaultLowBalance
    this.lockAmountDenom = ''
    this.walletName = options.walletName || ''
    this.privateKey = options.privateKey || ''
    this.isEverRequestSession = false
    this.isBrowser = typeof window !== 'undefined'
    this.isBrowser && (window.nesaSdkVersion = sdkVersion)
    this.tokenPrice = 0
    this.initWallet()
  }

  initWallet() {
    if (this.lastInitOfflineSignerPromise) {
      return this.lastInitOfflineSignerPromise
    }
    if (this.isBrowser) {
      this.lastInitOfflineSignerPromise = new Promise(async (resolve, reject) => {
        try {
          if (this.walletName === 'npm:@leapwallet/metamask-cosmos-snap') {
            // await window?.ethereum.request({
            //   method: 'wallet_requestSnaps',
            //   params: {
            //     'npm:@leapwallet/metamask-cosmos-snap': {},
            //   },
            // });
            await suggestChain(this.chainInfo, { force: false });
            const offlineSigner = new CosmjsOfflineSigner(this.chainInfo.chainId);
            this.offLinesigner = offlineSigner
            resolve(this.offLinesigner)
            this.getNesaClient()
          } else if (window?.keplr) {
            const { keplr } = window;
            await keplr.experimentalSuggestChain(this.chainInfo);
            await keplr.enable(this.chainInfo.chainId);
            this.offLinesigner = window.getOfflineSigner!(this.chainInfo.chainId);
            resolve(this.offLinesigner)
            this.getNesaClient()
          } else {
            console.log('No wallet installed, please install keplr or metamask wallet first')
            reject('No wallet installed, please install keplr or metamask wallet first')
          }
        } catch (error) {
          console.log('initOfflineSigner-error: ', error)
          reject(error)
        }
      })
    } else {
      this.lastInitOfflineSignerPromise = new Promise(async (resolve, reject) => {
        if (!this.privateKey) {
          reject('In the node environment, please provide the privateKey')
        }
        else {
          const wallet = await DirectSecp256k1Wallet.fromKey(Buffer.from(this.privateKey, "hex"), 'nesa')
          this.offLinesigner = wallet
          resolve(this.offLinesigner)
          this.getNesaClient()
        }
      })
    }
  }

  getNesaClient() {
    if (this.lastNesaClientPromise) {
      return this.lastNesaClientPromise
    }
    console.log('Init nesa client')
    this.lastNesaClientPromise = new Promise((resolve, reject) => {
      if (this.offLinesigner) {
        WalletOperation.getNesaClient(this.chainInfo, this.offLinesigner)
          .then((client) => {
            resolve(client)
            this.getChainParams(client)
          })
          .catch((error) => {
            console.log('initNesaClientError: ', error)
            this.lastNesaClientPromise = undefined
            reject(error)
          })
      } else {
        this.lastNesaClientPromise = undefined
        reject(new Error('Wallet connect error'))
      }
    })
  }

  getChainParams(nesaClient: any) {
    if (this.lastUserMinimumLockPromise) {
      return this.lastUserMinimumLockPromise
    }
    console.log('Init params')
    this.lastUserMinimumLockPromise = new Promise((resolve) => {
      WalletOperation.requestParams(nesaClient)
        .then((params) => {
          this.chatProgressReadable && this.chatProgressReadable.push({
            code: 301,
            message: "Connected to Nesa chain",
          })
          resolve(params)
        })
        .catch((error) => {
          console.log('getChainParamsError: ', error)
          this.lastUserMinimumLockPromise = undefined
        })
    })
  }

  version() {
    return sdkVersion;
  }

  checkChainInfo() {
    return this.chainInfo?.rpc
      && this.chainInfo?.rest
      && this.chainInfo?.feeCurrencies
      && this.chainInfo?.feeCurrencies.length > 0
      && this.chainInfo?.feeCurrencies[0]?.coinMinimalDenom
  }

  getSignaturePayment() {
    if (this.signaturePayment[this.totalSignedPayment]) {
      return ''
    }
    const signaturePayment = EncryptUtils.signMessage(`${this.totalSignedPayment}${this.chainInfo.feeCurrencies[0].coinMinimalDenom}`, this.chatSeq, false);
    this.signaturePayment[this.totalSignedPayment] = signaturePayment
    return signaturePayment;
  }

  checkSinglePaymentAmount() {
    if (new BigNumber(this.totalSignedPayment).isLessThanOrEqualTo(this.lowBalance)) {
      this.totalSignedPayment = Number(new BigNumber(this.totalSignedPayment).plus(this.singlePaymentAmount).toFixed(0, 1));
      return this.getSignaturePayment()
    }
    if (new BigNumber(this.totalSignedPayment).minus(this.totalUsedPayment).isLessThanOrEqualTo(this.lowBalance)) {
      if (new BigNumber(this.totalSignedPayment).isLessThan(this.totalUsedPayment)) {
        this.totalSignedPayment = Number(this.totalUsedPayment);
        return this.getSignaturePayment()
      }
      if (new BigNumber(this.totalSignedPayment).plus(this.singlePaymentAmount).isLessThanOrEqualTo(this.lockAmount)) {
        this.totalSignedPayment = Number(new BigNumber(this.totalSignedPayment).plus(this.singlePaymentAmount).toFixed(0, 1));
      } else {
        this.totalSignedPayment = Number(this.lockAmount);
      }
      return this.getSignaturePayment()
    }
    return this.getSignaturePayment()
  }

  requestChatQueue(readableStream: any, question: questionTypes) {
    this.isChatinging = true;
    this.chatSeq += 1;
    let messageTimes = 0;
    try {
      let ws
      if (this.isBrowser) {
        ws = new WebSocket(this.agentUrl);
      } else {
        const WebSocket = require('ws');
        ws = new WebSocket(this.agentUrl);
      }
      ws.addEventListener("open", () => {
        if (ws.readyState === 1) {
          const questionStr = JSON.stringify({
            stream: true,
            ...question,
            model: question?.model?.toLowerCase()
          });
          if (question.messages && this.assistantRoleName) {
            question.messages = question.messages.map((item: any) => {
              if (item.role === 'assistant') {
                item.role = this.assistantRoleName
              }
              return item
            })
          }
          const signedMessage = EncryptUtils.signMessage(questionStr, this.chatSeq, true);
          if (signedMessage) {
            ws.send(
              JSON.stringify({
                chat_seq: this.chatSeq,
                query: questionStr,
                signature_query: signedMessage,
              })
            );
          } else {
            readableStream.push({
              code: 201,
              message:
                "No signature found or the signature has expired, please sign again",
            });
            this.isChatinging = false;
            readableStream.push(null);
          }
        }
      });
      ws.onmessage = (event: any) => {
        let messageJson
        try {
          messageJson = JSON.parse(event?.data)
          if (messageJson?.role) {
            this.assistantRoleName = messageJson.role
          }
        } catch (error) {
          messageJson = event?.data
        }
        if (messageTimes === 0) {
          if (messageJson === "ack") {
            this.chatProgressReadable && this.chatProgressReadable.push({
              code: 305,
              message: "Conducting inference",
            })
          } else {
            ws.close();
            readableStream.push({
              code: 202,
              message: "Illegal link",
            });
            readableStream.push(null);
            this.isChatinging = false;
          }
          messageTimes += 1;
        } else if (messageJson?.content?.startsWith("[DONE]")) {
          ws.close();
          readableStream.push({
            code: 203,
            message: messageJson?.content?.split("[DONE]")[1],
          });
          this.chatProgressReadable && this.chatProgressReadable.push({
            code: 307,
            message: "Task completed, wait for another query"
          })
          readableStream.push(null);
          this.isChatinging = false;
        } else {
          if (messageTimes === 1) {
            this.chatProgressReadable && this.chatProgressReadable.push({
              code: 306,
              message: "Receiving responses",
            })
            messageTimes += 1
          }
          const signedMessage = this.checkSinglePaymentAmount();
          const total_payment = {
            amount: this.totalSignedPayment,
            denom: this.chainInfo.feeCurrencies[0].coinMinimalDenom,
          };
          readableStream.push({
            code: 200,
            message: messageJson?.content,
            session_id: messageJson?.session_id || '',
            total_payment,
          });
          this.totalUsedPayment += this.tokenPrice;
          if (new BigNumber(this.totalUsedPayment).isGreaterThan(this.lockAmount)) {
            readableStream.push({
              code: 205,
              message: '{"code":1015,"msg":"balance insufficient"}',
            });
            ws.close()
          } else if (signedMessage) {
            const data = JSON.stringify({
              chat_seq: this.chatSeq,
              total_payment,
              signature_payment: signedMessage,
            });
            ws.send(data);
          }
        }
      };
      ws.onclose = (error: any) => {
        this.chatProgressReadable && this.chatProgressReadable.push({
          code: 307,
          message: "Task completed, wait for another query"
        })
        if (error?.reason) {
          console.log('onclose: ', error?.reason)
          readableStream.push({
            code: 205,
            message: error?.reason,
          });
        }
        readableStream.push(null);
        this.isChatinging = false;
        if (this.chatQueue.length > 0) {
          const { readableStream: nextReadableStream, question: nextQuestion } =
            this.chatQueue.shift();
          this.requestChatQueue(nextReadableStream, nextQuestion);
        }
      };
      ws.onerror = (error: any) => {
        this.chatProgressReadable && this.chatProgressReadable.push({
          code: 307,
          message: "Task completed, wait for another query"
        })
        readableStream.push({
          code: 204,
          message: error?.reason || "Error: Connection failed",
        });
        readableStream.push(null);
        this.isChatinging = false;
        if (this.chatQueue.length > 0) {
          const { readableStream: nextReadableStream, question: nextQuestion } =
            this.chatQueue.shift();
          this.requestChatQueue(nextReadableStream, nextQuestion);
        }
      };
    } catch (error: any) {
      this.chatProgressReadable && this.chatProgressReadable.push({
        code: 307,
        message: "Task completed, wait for another query"
      })
      console.log('websocketCatchError: ', error)
      readableStream.push({
        code: 207,
        message: error.message || "Error: Connection failed",
      });
      readableStream.push(null);
      this.isChatinging = false;
      if (this.chatQueue.length > 0) {
        const { readableStream: nextReadableStream, question: nextQuestion } =
          this.chatQueue.shift();
        this.requestChatQueue(nextReadableStream, nextQuestion);
      }
    }
  }

  requestCloseHeartbeat() {
    socket.forceClose = true
    socket.close()
  }

  requestAgentInfo(result: any, readableStream: any) {
    if (this.lastGetAgentInfoPromise) {
      return this.lastGetAgentInfoPromise;
    }
    this.lastGetAgentInfoPromise = new Promise((resolve, reject) => {
      WalletOperation.requestAgentInfo(this.nesaClient, result?.account, this.modelName)
        .then((agentInfo: any) => {
          if (agentInfo && agentInfo?.inferenceAgent) {
            const selectAgent = agentInfo?.inferenceAgent
            let agentWsUrl = selectAgent.url
            let agentHeartbeatUrl = selectAgent.url
            if (selectAgent.url?.endsWith("/")) {
              agentWsUrl = agentWsUrl + 'chat';
              agentHeartbeatUrl = agentHeartbeatUrl + 'heartbeat';
            } else {
              agentWsUrl = agentWsUrl + '/chat';
              agentHeartbeatUrl = agentHeartbeatUrl + '/heartbeat';
            }
            let firstInitHeartbeat = true
            this.chatProgressReadable && this.chatProgressReadable.push({
              code: 303,
              message: "Connecting to the validator",
            })
            socket.init({
              ws_url: agentHeartbeatUrl,
              onopen: () => {
                if (firstInitHeartbeat) {
                  this.agentUrl = agentWsUrl;
                  this.isRegisterSessioning = false;
                  this.chatProgressReadable && this.chatProgressReadable.push({
                    code: 304,
                    message: "Waiting for query",
                  })
                  readableStream && readableStream.push(null)
                  firstInitHeartbeat = false
                  resolve(result);
                }
              },
              onerror: () => {
                readableStream && readableStream.push({
                  code: 319,
                  message: 'Agent connection error: ' + selectAgent.url,
                })
                readableStream && readableStream.push(null)
                reject(new Error("Agent heartbeat packet connection failed"));
              }
            });
          } else {
            this.isRegisterSessioning = false;
            readableStream && readableStream.push({
              code: 319,
              message: 'Agent not found',
            })
            readableStream && readableStream.push(null)
            reject(new Error("No agent found"))
          }
        })
        .catch((error) => {
          console.log("requestAgentInfoError: ", error);
          this.lastGetAgentInfoPromise = undefined
          readableStream && readableStream.push({
            code: 319,
            message: 'Agent connection error: ' + error?.message || error.toString()
          })
          readableStream && readableStream.push(null)
          reject(error);
        })
    });
  }

  checkSignBroadcastResult(readableStream?: any) {
    return new Promise((resolve, reject) => {
      if (!this.nesaClient) {
        reject(new Error('Please wait for the requestSession registration result'))
      } else {
        this.nesaClient.broadcastRegisterSession()
          .then((result: any) => {
            resolve(this.requestAgentInfo(result, readableStream))
          })
          .catch((error: any) => {
            console.log('checkSignBroadcastResultError: ', error)
            readableStream && readableStream.push({
              code: 318,
              message: error?.message,
            })
            readableStream && readableStream.push(null)
            reject(error)
          })
      }
    })
  }

  requestChatStatus() {
    return new Promise((resolve) => {
      const readableStream = new Readable({ objectMode: true });
      readableStream._read = () => { };
      readableStream.push({
        code: 300,
        message: "Connecting to Nesa chain",
      })
      this.chatProgressReadable = readableStream
      resolve(readableStream);
    })
  }

  requestSession() {
    return new Promise((resolve, reject) => {
      if (!this.checkChainInfo()) {
        reject(new Error("Invalid chainInfo, you must provide rpc, rest, feeCurrencies, feeCurrencies"));
      } else if (!this.modelName) {
        reject(new Error("ModelName is null"));
      } else if (this.isRegisterSessioning) {
        reject(new Error("Registering session, please wait"));
      } else if (!this.lockAmount || new BigNumber(this.lockAmount).isNaN() || new BigNumber(this.lockAmount).isLessThan(this.singlePaymentAmount)) {
        reject(new Error("LockAmount invalid value or less than singlePaymentAmount"))
      } else {
        this.isEverRequestSession = true
        const readableStream = new Readable({ objectMode: true });
        readableStream._read = () => { };
        resolve(readableStream);
        this.initWallet()
          .then(() => {
            this.getNesaClient()
              .then((nesaClient: any) => {
                this.nesaClient = nesaClient
                this.getChainParams(nesaClient)
                  .then((params: any) => {
                    if (params && params?.params) {
                      this.tokenPrice = params?.params?.tokenPrice?.low
                      if (new BigNumber(this.lockAmount).isLessThan(params?.params?.userMinimumLock?.amount)) {
                        // reject(new Error("LockAmount cannot be less than " + params?.params?.userMinimumLock?.amount))
                        readableStream.push({
                          code: 311,
                          message: "LockAmount cannot be less than " + params?.params?.userMinimumLock?.amount,
                        })
                      } else {
                        WalletOperation.registerSession(nesaClient, this.modelName, this.lockAmount, params?.params?.userMinimumLock?.denom, this.chainInfo, this.offLinesigner)
                          .then((result: any) => {
                            console.log('registerSession-result: ', result)
                            if (result?.transactionHash) {
                              this.chatProgressReadable && this.chatProgressReadable.push({
                                code: 302,
                                message: "Choosing an inference validator",
                              })
                              readableStream.push({
                                code: 200,
                                message: result?.transactionHash,
                              })
                              this.checkSignBroadcastResult(readableStream).catch(() => { })
                              // resolve(result)
                            } else {
                              this.isRegisterSessioning = false;
                              readableStream.push({
                                code: 312,
                                message: JSON.stringify(result),
                              })
                              // reject(result);
                            }
                          })
                          .catch((error) => {
                            readableStream.push({
                              code: 313,
                              message: error?.message || error.toString()
                            })
                            this.isRegisterSessioning = false;
                            // reject(error);
                          });
                      }
                    } else {
                      readableStream.push({
                        code: 314,
                        message: JSON.stringify(params),
                      })
                      // reject(new Error("Chain configuration loading failed."))
                    }
                  })
                  .catch((error: any) => {
                    readableStream.push({
                      code: 315,
                      message: error?.message || error.toString(),
                    })
                    // reject(error)
                  })
              }).catch((error: any) => {
                readableStream.push({
                  code: 316,
                  message: error?.message || error.toString(),
                })
                // reject(error)
              })
          }).catch((error: any) => {
            readableStream.push({
              code: 317,
              message: error?.message || error.toString(),
            })
            // reject(error)
          })
      }
    });
  }

  requestChat(question: questionTypes) {
    return new Promise((resolve, reject) => {
      if (!question?.model) {
        reject(new Error('Model is required'))
      } else if (this.isRegisterSessioning) {
        reject(new Error("Registering session, please wait"));
      } else if (!this.isEverRequestSession) {
        reject(new Error("Please call requestSession first to complete Session registration"));
      } else if (!this.agentUrl) {
        this.checkSignBroadcastResult()
          .then((result: any) => {
            console.log('checkSignBroadcastResult-result: ', result)
            const readableStream = new Readable({ objectMode: true });
            readableStream._read = () => { };
            resolve(readableStream);
            if (this.isChatinging) {
              this.chatQueue.push({ readableStream, question });
            } else {
              this.requestChatQueue(readableStream, question);
            }
          })
          .catch((error) => {
            reject(error)
          })
      } else {
        const readableStream = new Readable({ objectMode: true });
        readableStream._read = () => { };
        resolve(readableStream);
        if (this.isChatinging) {
          this.chatQueue.push({ readableStream, question });
        } else {
          this.requestChatQueue(readableStream, question);
        }
      }
    });
  }
}

export default ChatClient;
