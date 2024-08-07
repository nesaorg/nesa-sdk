"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encryptUtils_1 = __importDefault(require("./encryptUtils"));
const walletOperation_1 = __importDefault(require("./walletOperation"));
const stream_browserify_1 = require("stream-browserify");
const default_config_1 = require("./default.config");
const socket_1 = require("./socket");
const bignumber_js_1 = require("bignumber.js");
const cosmos_snap_provider_1 = require("@leapwallet/cosmos-snap-provider");
const proto_signing_1 = require("@cosmjs/proto-signing");
const crypto_1 = require("@cosmjs/crypto");
class ChatClient {
    constructor(options) {
        this.chatQueue = [];
        this.chatSeq = 0;
        this.totalUsedPayment = 0;
        this.totalSignedPayment = 0;
        this.isChatinging = false;
        this.isRegisterSessioning = false;
        this.agentUrl = "";
        this.assistantRoleName = "";
        this.modelName = options?.modelName?.toLowerCase();
        this.chainInfo = options.chainInfo || default_config_1.defaultChainInfo;
        this.lockAmount = options.lockAmount || default_config_1.defaultLockAmount;
        this.signaturePayment = {};
        this.singlePaymentAmount =
            options.singlePaymentAmount || default_config_1.defaultSinglePaymentAmount;
        this.lowBalance = options.lowBalance || default_config_1.defaultLowBalance;
        this.lockAmountDenom = "";
        this.walletName = options.walletName || "";
        this.privateKey = options.privateKey || "";
        this.mnemonic = options.mnemonic || "";
        this.isEverRequestSession = false;
        this.isBrowser = typeof window !== "undefined";
        this.isBrowser && (window.nesaSdkVersion = default_config_1.sdkVersion);
        this.tokenPrice = 0;
        this.initWallet();
    }
    initWallet() {
        if (this.lastInitOfflineSignerPromise) {
            return this.lastInitOfflineSignerPromise;
        }
        if (this.isBrowser && !this.privateKey && !this.mnemonic) {
            this.lastInitOfflineSignerPromise = new Promise(async (resolve, reject) => {
                try {
                    if (this.walletName === "npm:@leapwallet/metamask-cosmos-snap") {
                        // await window?.ethereum.request({
                        //   method: 'wallet_requestSnaps',
                        //   params: {
                        //     'npm:@leapwallet/metamask-cosmos-snap': {},
                        //   },
                        // });
                        await (0, cosmos_snap_provider_1.suggestChain)(this.chainInfo, { force: false });
                        const offlineSigner = new cosmos_snap_provider_1.CosmjsOfflineSigner(this.chainInfo.chainId);
                        this.offLinesigner = offlineSigner;
                        resolve(this.offLinesigner);
                        this.getNesaClient();
                    }
                    else if (window?.keplr) {
                        const { keplr } = window;
                        await keplr.experimentalSuggestChain(this.chainInfo);
                        await keplr.enable(this.chainInfo.chainId);
                        this.offLinesigner = window.getOfflineSigner(this.chainInfo.chainId);
                        resolve(this.offLinesigner);
                        this.getNesaClient();
                    }
                    else {
                        console.log("No wallet installed, please install keplr or metamask wallet first");
                        reject("No wallet installed, please install keplr or metamask wallet first");
                    }
                }
                catch (error) {
                    console.log("initOfflineSigner-error: ", error);
                    reject(error);
                }
            });
        }
        else {
            this.lastInitOfflineSignerPromise = new Promise(async (resolve, reject) => {
                if (!this.privateKey && !this.mnemonic) {
                    reject("In the node environment, please provide the privateKey");
                }
                else {
                    if (this.privateKey) {
                        const wallet = await proto_signing_1.DirectSecp256k1Wallet.fromKey(Buffer.from(this.privateKey, "hex"), "nesa");
                        console.log("private key wallet", wallet);
                        this.offLinesigner = wallet;
                        resolve(this.offLinesigner);
                        this.getNesaClient();
                        return;
                    }
                    if (this.mnemonic) {
                        const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, { prefix: "nesa", hdPaths: [(0, crypto_1.stringToPath)("m/44'/118'/0'/0/0")] });
                        console.log("private key wallet", wallet);
                        this.offLinesigner = wallet;
                        resolve(this.offLinesigner);
                        this.getNesaClient();
                    }
                }
            });
        }
    }
    getNesaClient() {
        if (this.lastNesaClientPromise) {
            return this.lastNesaClientPromise;
        }
        console.log("Init nesa client");
        this.lastNesaClientPromise = new Promise((resolve, reject) => {
            if (this.offLinesigner) {
                walletOperation_1.default.getNesaClient(this.chainInfo, this.offLinesigner)
                    .then((client) => {
                    resolve(client);
                    this.getChainParams(client);
                })
                    .catch((error) => {
                    console.log("initNesaClientError: ", error);
                    this.lastNesaClientPromise = undefined;
                    reject(error);
                });
            }
            else {
                this.lastNesaClientPromise = undefined;
                reject(new Error("Wallet connect error"));
            }
        });
    }
    getChainParams(nesaClient) {
        if (this.lastUserMinimumLockPromise) {
            return this.lastUserMinimumLockPromise;
        }
        console.log("Init params");
        this.lastUserMinimumLockPromise = new Promise((resolve) => {
            walletOperation_1.default.requestParams(nesaClient)
                .then((params) => {
                this.chatProgressReadable &&
                    this.chatProgressReadable.push({
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
    }
    version() {
        return default_config_1.sdkVersion;
    }
    checkChainInfo() {
        return (this.chainInfo?.rpc &&
            this.chainInfo?.rest &&
            this.chainInfo?.feeCurrencies &&
            this.chainInfo?.feeCurrencies.length > 0 &&
            this.chainInfo?.feeCurrencies[0]?.coinMinimalDenom);
    }
    getSignaturePayment() {
        if (this.signaturePayment[this.totalSignedPayment]) {
            return "";
        }
        const signaturePayment = encryptUtils_1.default.signMessage(`${this.totalSignedPayment}${this.chainInfo.feeCurrencies[0].coinMinimalDenom}`, this.chatSeq, false);
        this.signaturePayment[this.totalSignedPayment] = signaturePayment;
        return signaturePayment;
    }
    checkSinglePaymentAmount() {
        if (new bignumber_js_1.BigNumber(this.totalSignedPayment).isLessThanOrEqualTo(this.lowBalance)) {
            this.totalSignedPayment = Number(new bignumber_js_1.BigNumber(this.totalSignedPayment)
                .plus(this.singlePaymentAmount)
                .toFixed(0, 1));
            return this.getSignaturePayment();
        }
        if (new bignumber_js_1.BigNumber(this.totalSignedPayment)
            .minus(this.totalUsedPayment)
            .isLessThanOrEqualTo(this.lowBalance)) {
            if (new bignumber_js_1.BigNumber(this.totalSignedPayment).isLessThan(this.totalUsedPayment)) {
                this.totalSignedPayment = Number(this.totalUsedPayment);
                return this.getSignaturePayment();
            }
            if (new bignumber_js_1.BigNumber(this.totalSignedPayment)
                .plus(this.singlePaymentAmount)
                .isLessThanOrEqualTo(this.lockAmount)) {
                this.totalSignedPayment = Number(new bignumber_js_1.BigNumber(this.totalSignedPayment)
                    .plus(this.singlePaymentAmount)
                    .toFixed(0, 1));
            }
            else {
                this.totalSignedPayment = Number(this.lockAmount);
            }
            return this.getSignaturePayment();
        }
        return this.getSignaturePayment();
    }
    requestChatQueue(readableStream, question) {
        this.isChatinging = true;
        this.chatSeq += 1;
        let messageTimes = 0;
        try {
            let ws;
            if (this.isBrowser) {
                ws = new WebSocket(this.agentUrl);
            }
            else {
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
                        question.messages = question.messages.map((item) => {
                            if (item.role === "assistant") {
                                item.role = this.assistantRoleName;
                            }
                            return item;
                        });
                    }
                    const signedMessage = encryptUtils_1.default.signMessage(questionStr, this.chatSeq, true, this.modelName);
                    if (signedMessage) {
                        ws.send(JSON.stringify({
                            chat_seq: this.chatSeq,
                            query: questionStr,
                            signature_query: signedMessage,
                        }));
                    }
                    else {
                        readableStream.push({
                            code: 201,
                            message: "No signature found or the signature has expired, please sign again",
                        });
                        this.isChatinging = false;
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
                }
                catch (error) {
                    messageJson = event?.data;
                }
                if (messageTimes === 0) {
                    if (messageJson === "ack") {
                        this.chatProgressReadable &&
                            this.chatProgressReadable.push({
                                code: 305,
                                message: "Conducting inference",
                            });
                    }
                    else {
                        ws.close();
                        readableStream.push({
                            code: 202,
                            message: "Illegal link",
                        });
                        readableStream.push(null);
                        this.isChatinging = false;
                    }
                    messageTimes += 1;
                }
                else if (messageJson?.content?.startsWith("[DONE]")) {
                    ws.close();
                    readableStream.push({
                        code: 203,
                        message: messageJson?.content?.split("[DONE]")[1],
                    });
                    this.chatProgressReadable &&
                        this.chatProgressReadable.push({
                            code: 307,
                            message: "Task completed, wait for another query",
                        });
                    readableStream.push(null);
                    this.isChatinging = false;
                }
                else {
                    if (messageTimes === 1) {
                        this.chatProgressReadable &&
                            this.chatProgressReadable.push({
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
                    if (new bignumber_js_1.BigNumber(this.totalUsedPayment).isGreaterThan(this.lockAmount)) {
                        readableStream.push({
                            code: 205,
                            message: '{"code":1015,"msg":"balance insufficient"}',
                        });
                        ws.close();
                    }
                    else if (signedMessage) {
                        const data = JSON.stringify({
                            chat_seq: this.chatSeq,
                            total_payment,
                            signature_payment: signedMessage,
                        });
                        ws.send(data);
                    }
                }
            };
            ws.onclose = (error) => {
                this.chatProgressReadable &&
                    this.chatProgressReadable.push({
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
                this.isChatinging = false;
                if (this.chatQueue.length > 0) {
                    const { readableStream: nextReadableStream, question: nextQuestion } = this.chatQueue.shift();
                    this.requestChatQueue(nextReadableStream, nextQuestion);
                }
            };
            ws.onerror = (error) => {
                this.chatProgressReadable &&
                    this.chatProgressReadable.push({
                        code: 307,
                        message: "Task completed, wait for another query",
                    });
                readableStream.push({
                    code: 204,
                    message: error?.reason || "Error: Connection failed",
                });
                readableStream.push(null);
                this.isChatinging = false;
                if (this.chatQueue.length > 0) {
                    const { readableStream: nextReadableStream, question: nextQuestion } = this.chatQueue.shift();
                    this.requestChatQueue(nextReadableStream, nextQuestion);
                }
            };
        }
        catch (error) {
            this.chatProgressReadable &&
                this.chatProgressReadable.push({
                    code: 307,
                    message: "Task completed, wait for another query",
                });
            console.log("websocketCatchError: ", error);
            readableStream.push({
                code: 207,
                message: error?.message || "Error: Connection failed",
            });
            readableStream.push(null);
            this.isChatinging = false;
            if (this.chatQueue.length > 0) {
                const { readableStream: nextReadableStream, question: nextQuestion } = this.chatQueue.shift();
                this.requestChatQueue(nextReadableStream, nextQuestion);
            }
        }
    }
    requestCloseHeartbeat() {
        socket_1.socket.forceClose = true;
        socket_1.socket.close();
    }
    requestAgentInfo(result, readableStream) {
        if (this.lastGetAgentInfoPromise) {
            return this.lastGetAgentInfoPromise;
        }
        this.lastGetAgentInfoPromise = new Promise((resolve, reject) => {
            walletOperation_1.default.requestAgentInfo(this.nesaClient, result?.account, this.modelName)
                .then((agentInfo) => {
                if (agentInfo && agentInfo?.inferenceAgent) {
                    const selectAgent = agentInfo?.inferenceAgent;
                    let agentWsUrl = selectAgent.url;
                    let agentHeartbeatUrl = selectAgent.url;
                    if (selectAgent.url?.endsWith("/")) {
                        agentWsUrl = agentWsUrl + "chat";
                        agentHeartbeatUrl = agentHeartbeatUrl + "heartbeat";
                    }
                    else {
                        agentWsUrl = agentWsUrl + "/chat";
                        agentHeartbeatUrl = agentHeartbeatUrl + "/heartbeat";
                    }
                    let firstInitHeartbeat = true;
                    this.chatProgressReadable &&
                        this.chatProgressReadable.push({
                            code: 303,
                            message: "Connecting to the validator",
                        });
                    socket_1.socket.init({
                        modelName: this.modelName,
                        ws_url: agentHeartbeatUrl,
                        onopen: () => {
                            if (firstInitHeartbeat) {
                                this.agentUrl = agentWsUrl;
                                this.isRegisterSessioning = false;
                                this.chatProgressReadable &&
                                    this.chatProgressReadable.push({
                                        code: 304,
                                        message: "Waiting for query",
                                    });
                                readableStream && readableStream.push(null);
                                firstInitHeartbeat = false;
                                resolve(result);
                            }
                        },
                        onerror: () => {
                            readableStream &&
                                readableStream.push({
                                    code: 319,
                                    message: "Agent connection error: " + selectAgent.url,
                                });
                            readableStream && readableStream.push(null);
                            reject(new Error("Agent heartbeat packet connection failed"));
                        },
                    });
                }
                else {
                    this.isRegisterSessioning = false;
                    readableStream &&
                        readableStream.push({
                            code: 319,
                            message: "Agent not found",
                        });
                    readableStream && readableStream.push(null);
                    reject(new Error("No agent found"));
                }
            })
                .catch((error) => {
                console.log("requestAgentInfoError: ", error);
                this.lastGetAgentInfoPromise = undefined;
                readableStream &&
                    readableStream.push({
                        code: 319,
                        message: "Agent connection error: " + error?.message || error.toString(),
                    });
                readableStream && readableStream.push(null);
                reject(error);
            });
        });
    }
    checkSignBroadcastResult(readableStream) {
        return new Promise((resolve, reject) => {
            if (!this.nesaClient) {
                reject(new Error("Please wait for the requestSession registration result"));
            }
            else {
                this.nesaClient
                    .broadcastRegisterSession()
                    .then((result) => {
                    resolve(this.requestAgentInfo(result, readableStream));
                })
                    .catch((error) => {
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
        return new Promise((resolve) => {
            const readableStream = new stream_browserify_1.Readable({ objectMode: true });
            readableStream._read = () => { };
            readableStream.push({
                code: 300,
                message: "Connecting to Nesa chain",
            });
            this.chatProgressReadable = readableStream;
            resolve(readableStream);
        });
    }
    requestSession() {
        return new Promise((resolve, reject) => {
            if (!this.checkChainInfo()) {
                reject(new Error("Invalid chainInfo, you must provide rpc, rest, feeCurrencies, feeCurrencies"));
            }
            else if (!this.modelName) {
                reject(new Error("ModelName is null"));
            }
            else if (this.isRegisterSessioning) {
                reject(new Error("Registering session, please wait"));
            }
            else if (!this.lockAmount ||
                new bignumber_js_1.BigNumber(this.lockAmount).isNaN() ||
                new bignumber_js_1.BigNumber(this.lockAmount).isLessThan(this.singlePaymentAmount)) {
                reject(new Error("LockAmount invalid value or less than singlePaymentAmount"));
            }
            else {
                this.isEverRequestSession = true;
                const readableStream = new stream_browserify_1.Readable({ objectMode: true });
                readableStream._read = () => { };
                resolve(readableStream);
                this.initWallet()
                    .then(() => {
                    this.getNesaClient()
                        .then((nesaClient) => {
                        this.nesaClient = nesaClient;
                        this.getChainParams(nesaClient)
                            .then((params) => {
                            if (params && params?.params) {
                                this.tokenPrice = params?.params?.tokenPrice?.low;
                                if (new bignumber_js_1.BigNumber(this.lockAmount).isLessThan(params?.params?.userMinimumLock?.amount)) {
                                    // reject(new Error("LockAmount cannot be less than " + params?.params?.userMinimumLock?.amount))
                                    readableStream.push({
                                        code: 311,
                                        message: "LockAmount cannot be less than " +
                                            params?.params?.userMinimumLock?.amount,
                                    });
                                }
                                else {
                                    walletOperation_1.default.registerSession(nesaClient, this.modelName, this.lockAmount, params?.params?.userMinimumLock?.denom, this.chainInfo, this.offLinesigner)
                                        .then((result) => {
                                        console.log("registerSession-result: ", result);
                                        if (result?.transactionHash) {
                                            this.chatProgressReadable &&
                                                this.chatProgressReadable.push({
                                                    code: 302,
                                                    message: "Choosing an inference validator",
                                                });
                                            readableStream.push({
                                                code: 200,
                                                message: result?.transactionHash,
                                            });
                                            this.checkSignBroadcastResult(readableStream).catch(() => { });
                                            // resolve(result)
                                        }
                                        else {
                                            this.isRegisterSessioning = false;
                                            readableStream.push({
                                                code: 312,
                                                message: JSON.stringify(result),
                                            });
                                            // reject(result);
                                        }
                                    })
                                        .catch((error) => {
                                        console.log("313 error", error);
                                        readableStream.push({
                                            code: 313,
                                            message: error?.message || error.toString(),
                                        });
                                        this.isRegisterSessioning = false;
                                        // reject(error);
                                    });
                                }
                            }
                            else {
                                readableStream.push({
                                    code: 314,
                                    message: JSON.stringify(params),
                                });
                                // reject(new Error("Chain configuration loading failed."))
                            }
                        })
                            .catch((error) => {
                            readableStream.push({
                                code: 315,
                                message: error?.message || error.toString(),
                            });
                            // reject(error)
                        });
                    })
                        .catch((error) => {
                        readableStream.push({
                            code: 316,
                            message: error?.message || error.toString(),
                        });
                        // reject(error)
                    });
                })
                    .catch((error) => {
                    readableStream.push({
                        code: 317,
                        message: error?.message || error.toString(),
                    });
                    // reject(error)
                });
            }
        });
    }
    requestChat(question) {
        return new Promise((resolve, reject) => {
            if (!question?.model) {
                reject(new Error("Model is required"));
            }
            else if (this.isRegisterSessioning) {
                reject(new Error("Registering session, please wait"));
            }
            else if (!this.isEverRequestSession) {
                reject(new Error("Please call requestSession first to complete Session registration"));
            }
            else if (!this.agentUrl) {
                this.checkSignBroadcastResult()
                    .then((result) => {
                    console.log("checkSignBroadcastResult-result: ", result);
                    const readableStream = new stream_browserify_1.Readable({ objectMode: true });
                    readableStream._read = () => { };
                    resolve(readableStream);
                    if (this.isChatinging) {
                        this.chatQueue.push({ readableStream, question });
                    }
                    else {
                        this.requestChatQueue(readableStream, question);
                    }
                })
                    .catch((error) => {
                    reject(error);
                });
            }
            else {
                const readableStream = new stream_browserify_1.Readable({ objectMode: true });
                readableStream._read = () => { };
                resolve(readableStream);
                if (this.isChatinging) {
                    this.chatQueue.push({ readableStream, question });
                }
                else {
                    this.requestChatQueue(readableStream, question);
                }
            }
        });
    }
}
exports.default = ChatClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGF0Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQTBDO0FBQzFDLHdFQUFnRDtBQUNoRCx5REFBNkM7QUFFN0MscURBTTBCO0FBQzFCLHFDQUFrQztBQUNsQywrQ0FBeUM7QUFDekMsMkVBRzBDO0FBQzFDLHlEQUcrQjtBQUMvQiwyQ0FBOEM7QUF3QjlDLE1BQU0sVUFBVTtJQThCZCxZQUFZLE9BQXNCO1FBdEIxQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2Qsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBZ0I3QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLGlDQUFnQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxrQ0FBaUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxtQkFBbUI7WUFDdEIsT0FBTyxDQUFDLG1CQUFtQixJQUFJLDJDQUEwQixDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxrQ0FBaUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUks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