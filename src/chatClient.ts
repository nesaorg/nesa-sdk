import EncryptUtils from "./encryptUtils";
import WalletOperation from "./walletOperation";
import { Readable } from "stream-browserify";
import { ChainInfo } from "@keplr-wallet/types";
import {
  defaultChainInfo,
  defaultLockAmount,
  defaultSinglePaymentAmount,
  defaultLowBalance,
  sdkVersion,
} from "./default.config";
import { socket } from "./socket";
import { BigNumber } from "bignumber.js";
import { CosmjsOfflineSigner } from "@leapwallet/cosmos-snap-provider";
import {
  DirectSecp256k1HdWallet,
  DirectSecp256k1Wallet,
} from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";
import { NesaClient } from "./client";
import { getAgentUrls } from "./helpers/getAgentUrls";
import { getIsChainInfoValid } from "./helpers/getIsChainInfoValid";

interface ConfigOptions {
  modelName: string;
  lockAmount?: string;
  chainInfo?: ChainInfo;
  walletName?: string;
  singlePaymentAmount?: string;
  lowBalance?: string;
  privateKey?: string;
  mnemonic?: string;
  chatId?: string;
}

interface QuestionParams {
  messages: any;
  model: string;
  stream?: boolean;
  frequency_penalty?: any;
  presence_penalty?: any;
  temperature?: any;
  top_p?: any;
  session_id?: string;
}

class ChatClient {
  public modelName: string;
  public chainInfo: ChainInfo;
  public lockAmount: string;
  public singlePaymentAmount: string;
  public lowBalance: string;
  public lockAmountDenom: string;
  public chatId: string;
  private walletName: string;
  private chatQueue: any = [];
  private chatSeq = 0;
  private totalUsedPayment = 0;
  private totalSignedPayment = 0;
  private isChatting = false;
  private isRegisteringSession = false;
  private agentUrl = "";
  private assistantRoleName = "";
  private lastNesaClientPromise: Promise<NesaClient> | undefined;
  private lastUserMinimumLockPromise: any;
  private lastGetAgentInfoPromise: any;
  private lastInitOfflineSignerPromise: any;
  private chatProgressReadable: any;
  private nesaClient: NesaClient | undefined;
  private offlineSigner: any;
  private signaturePayment: any;
  private isBrowser: boolean;
  private privateKey: string;
  private mnemonic: string;
  private isEverRequestSession: boolean;
  private tokenPrice: number;

  constructor(options: ConfigOptions) {
    this.modelName = options?.modelName?.toLowerCase();
    this.chainInfo = options.chainInfo || defaultChainInfo;
    this.lockAmount = options.lockAmount || defaultLockAmount;
    this.signaturePayment = {};
    this.singlePaymentAmount =
      options.singlePaymentAmount || defaultSinglePaymentAmount;
    this.lowBalance = options.lowBalance || defaultLowBalance;
    this.lockAmountDenom = "";
    this.walletName = options.walletName || "";
    this.privateKey = options.privateKey || "";
    this.mnemonic = options.mnemonic || "";
    this.isEverRequestSession = false;
    this.isBrowser = typeof window !== "undefined";
    this.isBrowser && (window.nesaSdkVersion = sdkVersion);
    this.tokenPrice = 0;
    this.chatId = options.chatId || Date.now().toString();

    console.log("client options", options, this.chatId);
    this.initWallet();
  }

  initWallet() {
    if (this.lastInitOfflineSignerPromise) {
      return this.lastInitOfflineSignerPromise;
    }

    if (this.isBrowser && !this.privateKey && !this.mnemonic) {
      this.lastInitOfflineSignerPromise = new Promise(
        async (resolve, reject) => {
          try {
            if (this.walletName === "npm:@leapwallet/metamask-cosmos-snap") {
              this.offlineSigner = new CosmjsOfflineSigner(
                this.chainInfo.chainId
              );

              resolve(this.offlineSigner);
              this.getNesaClient();
            } else if (window?.keplr) {
              const { keplr } = window;

              await keplr.enable(this.chainInfo.chainId);
              this.offlineSigner = window.getOfflineSigner!(
                this.chainInfo.chainId
              );
              resolve(this.offlineSigner);
              this.getNesaClient();
            } else {
              console.log(
                "No wallet installed, please install keplr or metamask wallet first"
              );
              reject(
                "No wallet installed, please install keplr or metamask wallet first"
              );
            }
          } catch (error) {
            console.log("initOfflineSigner-error: ", error);
            reject(error);
          }
        }
      );
    } else {
      this.lastInitOfflineSignerPromise = new Promise(
        async (resolve, reject) => {
          if (!this.privateKey && !this.mnemonic) {
            reject("In the node environment, please provide the privateKey");
          } else {
            if (this.privateKey) {
              const wallet = await DirectSecp256k1Wallet.fromKey(
                Buffer.from(this.privateKey, "hex"),
                "nesa"
              );
              console.log("private key wallet", wallet);
              this.offlineSigner = wallet;
              resolve(this.offlineSigner);
              this.getNesaClient();

              return;
            }

            if (this.mnemonic) {
              const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
                this.mnemonic,
                { prefix: "nesa", hdPaths: [stringToPath("m/44'/118'/0'/0/0")] }
              );
              console.log("private key wallet", wallet);
              this.offlineSigner = wallet;
              resolve(this.offlineSigner);
              this.getNesaClient();
            }
          }
        }
      );
    }
  }

  getNesaClient() {
    if (this.lastNesaClientPromise) {
      return this.lastNesaClientPromise;
    }

    console.log("Init nesa client", { th: this.modelName });
    this.lastNesaClientPromise = new Promise((resolve, reject) => {
      if (this.offlineSigner) {
        WalletOperation.getNesaClient(this.chainInfo, this.offlineSigner)
          .then((client) => {
            resolve(client);
            this.getChainParams(client);
          })
          .catch((error) => {
            console.log("initNesaClientError: ", error);
            this.lastNesaClientPromise = undefined;
            reject(error);
          });
      } else {
        this.lastNesaClientPromise = undefined;
        reject(new Error("Wallet connect error"));
      }
    });

    return this.lastNesaClientPromise;
  }

  getChainParams(nesaClient: NesaClient) {
    if (this.lastUserMinimumLockPromise) {
      return this.lastUserMinimumLockPromise;
    }
    console.log("Init params", { modelName: this.modelName });

    this.lastUserMinimumLockPromise = new Promise((resolve) => {
      WalletOperation.requestParams(nesaClient)
        .then((params) => {
          this.chatProgressReadable?.push({
            code: 301,
            message: "Connected to Nesa chain",
          });
          resolve(params);
        })
        .catch((error) => {
          console.log("getChainParamsError: ", error);
          this.lastUserMinimumLockPromise = undefined;
        });
    });

    return;
  }

  version() {
    return sdkVersion;
  }

  getSignaturePayment() {
    if (this.signaturePayment[this.totalSignedPayment]) {
      return "";
    }

    const signaturePayment = EncryptUtils.signMessage(
      this.chatId,
      `${this.totalSignedPayment}${this.chainInfo.feeCurrencies[0].coinMinimalDenom}`,
      this.chatSeq,
      false
    );
    this.signaturePayment[this.totalSignedPayment] = signaturePayment;

    return signaturePayment;
  }

  checkSinglePaymentAmount() {
    if (
      new BigNumber(this.totalSignedPayment).isLessThanOrEqualTo(
        this.lowBalance
      )
    ) {
      this.totalSignedPayment = Number(
        new BigNumber(this.totalSignedPayment)
          .plus(this.singlePaymentAmount)
          .toFixed(0, 1)
      );
      return this.getSignaturePayment();
    }
    if (
      new BigNumber(this.totalSignedPayment)
        .minus(this.totalUsedPayment)
        .isLessThanOrEqualTo(this.lowBalance)
    ) {
      if (
        new BigNumber(this.totalSignedPayment).isLessThan(this.totalUsedPayment)
      ) {
        this.totalSignedPayment = Number(this.totalUsedPayment);
        return this.getSignaturePayment();
      }
      if (
        new BigNumber(this.totalSignedPayment)
          .plus(this.singlePaymentAmount)
          .isLessThanOrEqualTo(this.lockAmount)
      ) {
        this.totalSignedPayment = Number(
          new BigNumber(this.totalSignedPayment)
            .plus(this.singlePaymentAmount)
            .toFixed(0, 1)
        );
      } else {
        this.totalSignedPayment = Number(this.lockAmount);
      }
      return this.getSignaturePayment();
    }
    return this.getSignaturePayment();
  }

  requestChatQueue(readableStream: any, question: QuestionParams) {
    this.isChatting = true;
    this.chatSeq += 1;
    let messageTimes = 0;

    try {
      let ws: WebSocket;

      if (this.isBrowser) {
        ws = new WebSocket(this.agentUrl);
      } else {
        const WebSocket = require("ws");
        ws = new WebSocket(this.agentUrl);
      }
      ws.addEventListener("open", () => {
        if (ws.readyState === 1) {
          const questionStr = JSON.stringify({
            stream: true,
            ...question,
            model: question?.model?.toLowerCase(),
          });

          if (question.messages && this.assistantRoleName) {
            question.messages = question.messages.map((item: any) => {
              if (item.role === "assistant") {
                item.role = this.assistantRoleName;
              }
              return item;
            });
          }

          const signedMessage = EncryptUtils.signMessage(
            this.chatId,
            questionStr,
            this.chatSeq,
            true
          );

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
            this.isChatting = false;
            readableStream.push(null);
          }
        }
      });
      ws.onmessage = (event) => {
        let messageJson;
        try {
          messageJson = JSON.parse(event?.data);
          if (messageJson?.role) {
            this.assistantRoleName = messageJson.role;
          }
        } catch (error) {
          messageJson = event?.data;
        }
        if (messageTimes === 0) {
          if (messageJson === "ack") {
            this.chatProgressReadable?.push({
              code: 305,
              message: "Conducting inference",
            });
          } else {
            ws.close();
            readableStream.push({
              code: 202,
              message: "Illegal link",
            });
            readableStream.push(null);
            this.isChatting = false;
          }
          messageTimes += 1;
        } else if (messageJson?.content?.startsWith("[DONE]")) {
          ws.close();
          readableStream.push({
            code: 203,
            message: messageJson?.content?.split("[DONE]")[1],
          });

          this.chatProgressReadable?.push({
            code: 307,
            message: "Task completed, wait for another query",
          });
          readableStream.push(null);
          this.isChatting = false;
        } else {
          if (messageTimes === 1) {
            this.chatProgressReadable?.push({
              code: 306,
              message: "Receiving responses",
            });
            messageTimes += 1;
          }
          const signedMessage = this.checkSinglePaymentAmount();
          const total_payment = {
            amount: this.totalSignedPayment,
            denom: this.chainInfo.feeCurrencies[0].coinMinimalDenom,
          };
          readableStream.push({
            code: 200,
            message: messageJson?.content,
            session_id: messageJson?.session_id || "",
            total_payment,
          });
          this.totalUsedPayment += this.tokenPrice;

          if (
            new BigNumber(this.totalUsedPayment).isGreaterThan(this.lockAmount)
          ) {
            readableStream.push({
              code: 205,
              message: '{"code":1015,"msg":"balance insufficient"}',
            });
            ws.close();
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
        this.chatProgressReadable?.push({
          code: 307,
          message: "Task completed, wait for another query",
        });
        if (error?.reason) {
          console.log("onclose: ", error?.reason);
          readableStream.push({
            code: 205,
            message: error?.reason,
          });
        }
        readableStream.push(null);
        this.isChatting = false;
        if (this.chatQueue.length > 0) {
          const { readableStream: nextReadableStream, question: nextQuestion } =
            this.chatQueue.shift();
          this.requestChatQueue(nextReadableStream, nextQuestion);
        }
      };
      ws.onerror = (error: any) => {
        this.chatProgressReadable?.push({
          code: 307,
          message: "Task completed, wait for another query",
        });
        readableStream.push({
          code: 204,
          message: error?.reason || "Error: Connection failed",
        });
        readableStream.push(null);
        this.isChatting = false;
        if (this.chatQueue.length > 0) {
          const { readableStream: nextReadableStream, question: nextQuestion } =
            this.chatQueue.shift();
          this.requestChatQueue(nextReadableStream, nextQuestion);
        }
      };
    } catch (error: any) {
      this.chatProgressReadable?.push({
        code: 307,
        message: "Task completed, wait for another query",
      });
      console.log("websocketCatchError: ", error);
      readableStream.push({
        code: 207,
        message: error?.message || "Error: Connection failed",
      });
      readableStream.push(null);
      this.isChatting = false;
      if (this.chatQueue.length > 0) {
        const { readableStream: nextReadableStream, question: nextQuestion } =
          this.chatQueue.shift();
        this.requestChatQueue(nextReadableStream, nextQuestion);
      }
    }
  }

  requestCloseHeartbeat() {
    socket.forceClose = true;
    socket.close();
  }

  requestAgentInfo(result: any, readableStream: any) {
    if (this.lastGetAgentInfoPromise) {
      return this.lastGetAgentInfoPromise;
    }
    this.lastGetAgentInfoPromise = new Promise((resolve, reject) => {
      WalletOperation.requestAgentInfo(
        this.nesaClient,
        result?.account,
        this.modelName
      )
        .then((agentInfo) => {
          if (agentInfo && agentInfo?.inferenceAgent) {
            const selectAgent = agentInfo?.inferenceAgent;

            const { agentWsUrl, agentHeartbeatUrl } = getAgentUrls(selectAgent);

            let firstInitHeartbeat = true;

            this.chatProgressReadable?.push({
              code: 303,
              message: "Connecting to the validator",
            });
            socket.init({
              recordId: this.chatId,
              modelName: this.modelName,
              ws_url: agentHeartbeatUrl,
              onopen: () => {
                if (firstInitHeartbeat) {
                  this.agentUrl = agentWsUrl;
                  this.isRegisteringSession = false;

                  this.chatProgressReadable?.push({
                    code: 304,
                    message: "Waiting for query",
                  });
                  readableStream?.push(null);
                  firstInitHeartbeat = false;
                  resolve(result);
                }
              },
              onerror: () => {
                readableStream?.push({
                  code: 319,
                  message: "Agent connection error: " + selectAgent.url,
                });
                readableStream?.push(null);
                reject(new Error("Agent heartbeat packet connection failed"));
              },
            });
          } else {
            this.isRegisteringSession = false;
            readableStream?.push({
              code: 319,
              message: "Agent not found",
            });
            readableStream?.push(null);
            reject(new Error("No agent found"));
          }
        })
        .catch((error) => {
          console.log("requestAgentInfoError: ", error);
          this.lastGetAgentInfoPromise = undefined;

          readableStream?.push({
            code: 319,
            message:
              "Agent connection error: " + error?.message || error.toString(),
          });
          readableStream?.push(null);
          reject(error);
        });
    });
  }

  checkSignBroadcastResult(readableStream?: any) {
    return new Promise((resolve, reject) => {
      if (!this.nesaClient) {
        reject(
          new Error("Please wait for the requestSession registration result")
        );
      } else {
        console.log(
          "checkSignBroadcastResult this.modelName",
          this.modelName,
          this.nesaClient.broadcastRegisterSession()
        );
        this.nesaClient
          .broadcastRegisterSession()
          .then((result: any) => {
            resolve(this.requestAgentInfo(result, readableStream));
          })
          .catch((error: any) => {
            console.log("checkSignBroadcastResultError: ", error);
            readableStream &&
              readableStream.push({
                code: 318,
                message: error?.message,
              });
            readableStream && readableStream.push(null);
            reject(error);
          });
      }
    });
  }

  requestChatStatus() {
    const readableStream = new Readable({ objectMode: true });
    readableStream._read = () => {};
    readableStream.push({ code: 300, message: "Connecting to Nesa chain" });

    this.chatProgressReadable = readableStream;

    return readableStream;
  }

  async requestSession() {
    if (!getIsChainInfoValid(this.chainInfo)) {
      throw new Error(
        "Invalid chainInfo, you must provide rpc, rest, feeCurrencies, feeCurrencies"
      );
    }

    if (!this.modelName) {
      throw new Error("ModelName is null");
    }

    if (this.isRegisteringSession) {
      throw new Error("Registering session, please wait");
    }

    if (
      !this.lockAmount ||
      new BigNumber(this.lockAmount).isNaN() ||
      new BigNumber(this.lockAmount).isLessThan(this.singlePaymentAmount)
    ) {
      throw new Error(
        "LockAmount invalid value or less than singlePaymentAmount"
      );
    }

    this.isEverRequestSession = true;
    const readableStream = new Readable({ objectMode: true });
    readableStream._read = () => {};

    try {
      await this.initWallet();

      try {
        const nesaClient = await this.getNesaClient();
        this.nesaClient = nesaClient;

        try {
          const params = await this.getChainParams(nesaClient);

          if (!params?.params) {
            readableStream.push({
              code: 314,
              message: JSON.stringify(params),
            });

            return readableStream;
          }

          this.tokenPrice = params?.params?.tokenPrice?.low;
          if (
            new BigNumber(this.lockAmount).isLessThan(
              params?.params?.userMinimumLock?.amount
            )
          ) {
            readableStream.push({
              code: 311,
              message:
                "LockAmount cannot be less than " +
                params?.params?.userMinimumLock?.amount,
            });

            return readableStream;
          }

          try {
            const result = await WalletOperation.registerSession(
              this.chatId,
              nesaClient,
              this.modelName,
              this.lockAmount,
              params?.params?.userMinimumLock?.denom,
              this.chainInfo,
              this.offlineSigner
            );

            console.log("registerSession-result: ", result);
            if (result?.transactionHash) {
              this.chatProgressReadable?.push({
                code: 302,
                message: "Choosing an inference validator",
              });
              readableStream.push({
                code: 200,
                message: result?.transactionHash,
              });
              this.checkSignBroadcastResult(readableStream).catch(() => {});

              return readableStream;
            }

            this.isRegisteringSession = false;
            readableStream.push({
              code: 312,
              message: JSON.stringify(result),
            });

            return readableStream;
          } catch (error: any) {
            console.log("313 error", error);
            readableStream.push({
              code: 313,
              message: error?.message || error.toString(),
            });
            this.isRegisteringSession = false;
          }
        } catch (error: any) {
          readableStream.push({
            code: 315,
            message: error?.message || error.toString(),
          });
        }
      } catch (error: any) {
        readableStream.push({
          code: 316,
          message: error?.message || error.toString(),
        });
      }
    } catch (error: any) {
      readableStream.push({
        code: 317,
        message: error?.message || error.toString(),
      });
    }

    return readableStream;
  }

  async requestChat(question: QuestionParams) {
    if (!question?.model) {
      throw new Error("Model is required");
    }

    if (this.isRegisteringSession) {
      throw new Error("Registering session, please wait");
    }

    if (!this.isEverRequestSession) {
      throw new Error(
        "Please call requestSession first to complete Session registration"
      );
    }

    if (!this.agentUrl) {
      const result = await this.checkSignBroadcastResult();
      console.log("checkSignBroadcastResult-result: ", result);
      const readableStream = new Readable({ objectMode: true });
      readableStream._read = () => {};

      if (this.isChatting) {
        this.chatQueue.push({ readableStream, question });
      } else {
        this.requestChatQueue(readableStream, question);
      }

      return readableStream;
    }

    const readableStream = new Readable({ objectMode: true });
    readableStream._read = () => {};

    if (this.isChatting) {
      this.chatQueue.push({ readableStream, question });
    } else {
      this.requestChatQueue(readableStream, question);
    }

    return readableStream;
  }
}

export default ChatClient;
