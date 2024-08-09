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
const getAgentUrls_1 = require("./helpers/getAgentUrls");
const getIsChainInfoValid_1 = require("./helpers/getIsChainInfoValid");
class ChatClient {
    constructor(options) {
        this.chatQueue = [];
        this.chatSeq = 0;
        this.totalUsedPayment = 0;
        this.totalSignedPayment = 0;
        this.isChatting = false;
        this.isRegisteringSession = false;
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
        this.chatId = options.chatId || Date.now().toString();
        console.log("client options", options, this.chatId);
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
                        this.offlineSigner = new cosmos_snap_provider_1.CosmjsOfflineSigner(this.chainInfo.chainId);
                        resolve(this.offlineSigner);
                        this.getNesaClient();
                    }
                    else if (window?.keplr) {
                        const { keplr } = window;
                        await keplr.enable(this.chainInfo.chainId);
                        this.offlineSigner = window.getOfflineSigner(this.chainInfo.chainId);
                        resolve(this.offlineSigner);
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
                        this.offlineSigner = wallet;
                        resolve(this.offlineSigner);
                        this.getNesaClient();
                        return;
                    }
                    if (this.mnemonic) {
                        const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, { prefix: "nesa", hdPaths: [(0, crypto_1.stringToPath)("m/44'/118'/0'/0/0")] });
                        console.log("private key wallet", wallet);
                        this.offlineSigner = wallet;
                        resolve(this.offlineSigner);
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
        console.log("Init nesa client", { th: this.modelName });
        this.lastNesaClientPromise = new Promise((resolve, reject) => {
            if (this.offlineSigner) {
                walletOperation_1.default.getNesaClient(this.chainInfo, this.offlineSigner)
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
        return this.lastNesaClientPromise;
    }
    getChainParams(nesaClient) {
        if (this.lastUserMinimumLockPromise) {
            return this.lastUserMinimumLockPromise;
        }
        console.log("Init params", { modelName: this.modelName });
        this.lastUserMinimumLockPromise = new Promise((resolve) => {
            walletOperation_1.default.requestParams(nesaClient)
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
        return default_config_1.sdkVersion;
    }
    getSignaturePayment() {
        if (this.signaturePayment[this.totalSignedPayment]) {
            return "";
        }
        const signaturePayment = encryptUtils_1.default.signMessage(this.chatId, `${this.totalSignedPayment}${this.chainInfo.feeCurrencies[0].coinMinimalDenom}`, this.chatSeq, false);
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
        this.isChatting = true;
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
                    const signedMessage = encryptUtils_1.default.signMessage(this.chatId, questionStr, this.chatSeq, true);
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
                }
                catch (error) {
                    messageJson = event?.data;
                }
                if (messageTimes === 0) {
                    if (messageJson === "ack") {
                        this.chatProgressReadable?.push({
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
                        this.isChatting = false;
                    }
                    messageTimes += 1;
                }
                else if (messageJson?.content?.startsWith("[DONE]")) {
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
                }
                else {
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
                this.isChatting = false;
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
                this.isChatting = false;
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
            this.isChatting = false;
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
                    const { agentWsUrl, agentHeartbeatUrl } = (0, getAgentUrls_1.getAgentUrls)(selectAgent);
                    let firstInitHeartbeat = true;
                    this.chatProgressReadable &&
                        this.chatProgressReadable.push({
                            code: 303,
                            message: "Connecting to the validator",
                        });
                    socket_1.socket.init({
                        recordId: this.chatId,
                        modelName: this.modelName,
                        ws_url: agentHeartbeatUrl,
                        onopen: () => {
                            if (firstInitHeartbeat) {
                                this.agentUrl = agentWsUrl;
                                this.isRegisteringSession = false;
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
                    this.isRegisteringSession = false;
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
                console.log("checkSignBroadcastResult this.modelName", this.modelName, this.nesaClient.broadcastRegisterSession());
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
        const readableStream = new stream_browserify_1.Readable({ objectMode: true });
        readableStream._read = () => { };
        readableStream.push({ code: 300, message: "Connecting to Nesa chain" });
        this.chatProgressReadable = readableStream;
        return readableStream;
    }
    async requestSession() {
        if (!(0, getIsChainInfoValid_1.getIsChainInfoValid)(this.chainInfo)) {
            throw new Error("Invalid chainInfo, you must provide rpc, rest, feeCurrencies, feeCurrencies");
        }
        if (!this.modelName) {
            throw new Error("ModelName is null");
        }
        if (this.isRegisteringSession) {
            throw new Error("Registering session, please wait");
        }
        if (!this.lockAmount ||
            new bignumber_js_1.BigNumber(this.lockAmount).isNaN() ||
            new bignumber_js_1.BigNumber(this.lockAmount).isLessThan(this.singlePaymentAmount)) {
            throw new Error("LockAmount invalid value or less than singlePaymentAmount");
        }
        this.isEverRequestSession = true;
        const readableStream = new stream_browserify_1.Readable({ objectMode: true });
        readableStream._read = () => { };
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
                    if (new bignumber_js_1.BigNumber(this.lockAmount).isLessThan(params?.params?.userMinimumLock?.amount)) {
                        readableStream.push({
                            code: 311,
                            message: "LockAmount cannot be less than " +
                                params?.params?.userMinimumLock?.amount,
                        });
                        return readableStream;
                    }
                    try {
                        const result = await walletOperation_1.default.registerSession(this.chatId, nesaClient, this.modelName, this.lockAmount, params?.params?.userMinimumLock?.denom, this.chainInfo, this.offlineSigner);
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
                            this.checkSignBroadcastResult(readableStream).catch(() => { });
                            return readableStream;
                        }
                        this.isRegisteringSession = false;
                        readableStream.push({
                            code: 312,
                            message: JSON.stringify(result),
                        });
                        return readableStream;
                    }
                    catch (error) {
                        console.log("313 error", error);
                        readableStream.push({
                            code: 313,
                            message: error?.message || error.toString(),
                        });
                        this.isRegisteringSession = false;
                    }
                }
                catch (error) {
                    readableStream.push({
                        code: 315,
                        message: error?.message || error.toString(),
                    });
                }
            }
            catch (error) {
                readableStream.push({
                    code: 316,
                    message: error?.message || error.toString(),
                });
            }
        }
        catch (error) {
            readableStream.push({
                code: 317,
                message: error?.message || error.toString(),
            });
        }
        return readableStream;
    }
    async requestChat(question) {
        if (!question?.model) {
            throw new Error("Model is required");
        }
        if (this.isRegisteringSession) {
            throw new Error("Registering session, please wait");
        }
        if (!this.isEverRequestSession) {
            throw new Error("Please call requestSession first to complete Session registration");
        }
        if (!this.agentUrl) {
            const result = await this.checkSignBroadcastResult();
            console.log("checkSignBroadcastResult-result: ", result);
            const readableStream = new stream_browserify_1.Readable({ objectMode: true });
            readableStream._read = () => { };
            if (this.isChatting) {
                this.chatQueue.push({ readableStream, question });
            }
            else {
                this.requestChatQueue(readableStream, question);
            }
            return readableStream;
        }
        const readableStream = new stream_browserify_1.Readable({ objectMode: true });
        readableStream._read = () => { };
        if (this.isChatting) {
            this.chatQueue.push({ readableStream, question });
        }
        else {
            this.requestChatQueue(readableStream, question);
        }
        return readableStream;
    }
}
exports.default = ChatClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGF0Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQTBDO0FBQzFDLHdFQUFnRDtBQUNoRCx5REFBNkM7QUFFN0MscURBTTBCO0FBQzFCLHFDQUFrQztBQUNsQywrQ0FBeUM7QUFDekMsMkVBQXVFO0FBQ3ZFLHlEQUcrQjtBQUMvQiwyQ0FBOEM7QUFFOUMseURBQXNEO0FBQ3RELHVFQUFvRTtBQXlCcEUsTUFBTSxVQUFVO0lBK0JkLFlBQVksT0FBc0I7UUF0QjFCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQix1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQWdCN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxpQ0FBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksa0NBQWlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsbUJBQW1CO1lBQ3RCLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSwyQ0FBMEIsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksa0NBQWlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUs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