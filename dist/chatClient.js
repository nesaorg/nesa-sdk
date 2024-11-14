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
        this.agentChatUrl = "";
        this.assistantRoleName = "";
        this.agentSessionId = "";
        this.modelName = options?.modelName?.toLowerCase();
        this.chainInfo = options.chainInfo || default_config_1.defaultChainInfo;
        this.lockAmount = options.lockAmount || default_config_1.defaultLockAmount;
        this.signaturePayment = {};
        this.priceUnit = options.priceUnit || default_config_1.defaultPriceUnit;
        this.lowBalance = options.lowBalance || default_config_1.defaultLowBalance;
        this.lockAmountDenom = "";
        this.walletName = options.walletName || "";
        this.privateKey = options.privateKey || "";
        this.mnemonic = options.mnemonic || "";
        this.isEverRequestSession = false;
        this.isBrowser = typeof window !== "undefined";
        this.isBrowser && (window.nesaSdkVersion = default_config_1.sdkVersion);
        this.chatId = options.chatId || Date.now().toString();
        this.minerSessionId = "";
        this.isByPass = options.isByPass || false;
        this.agentUrl = options.isByPass ? (options.agentUrl || "") : "";
        this.authToken = options.authToken || "";
        // console.log("client options", options, this.chatId);
        if (!this.isByPass) {
            this.initWallet();
        }
        else {
            if (!this.agentUrl || this.agentUrl === "") {
                throw new Error("Agent url is required in byPass mode");
            }
            if (!this.authToken || this.authToken === "") {
                throw new Error("Auth token is required in byPass mode");
            }
        }
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
                        // console.log("private key wallet", wallet);
                        this.offlineSigner = wallet;
                        resolve(this.offlineSigner);
                        this.getNesaClient();
                        return;
                    }
                    if (this.mnemonic) {
                        const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, { prefix: "nesa", hdPaths: [(0, crypto_1.stringToPath)("m/44'/118'/0'/0/0")] });
                        // console.log("private key wallet", wallet);
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
    checkSinglePaymentAmount(totalSignedPayment) {
        if (new bignumber_js_1.BigNumber(totalSignedPayment).isLessThanOrEqualTo(this.lockAmount)) {
            this.totalSignedPayment = Number(totalSignedPayment);
        }
        else {
            this.totalSignedPayment = Number(this.lockAmount);
        }
        return this.getSignaturePayment();
    }
    computePaymentAmount(tokenNumber, tokenPrice) {
        const inputAmount = new bignumber_js_1.BigNumber(tokenNumber.inputTokens).multipliedBy(tokenPrice.inputPrice.amount);
        const outputAmount = new bignumber_js_1.BigNumber(tokenNumber.outputTokens).multipliedBy(tokenPrice.outputPrice.amount);
        return inputAmount.plus(outputAmount).dividedBy(this.priceUnit).toFixed(0, 1);
    }
    requestChatQueue(readableStream, question) {
        this.isChatting = true;
        this.chatSeq += 1;
        let messageTimes = 0;
        try {
            let ws;
            const protocols = [this.authToken || ""];
            if (this.isBrowser) {
                ws = new WebSocket(this.agentChatUrl, protocols);
            }
            else {
                const WebSocket = require("ws");
                ws = new WebSocket(this.agentChatUrl, protocols);
            }
            ws.addEventListener("open", () => {
                if (ws.readyState === 1) {
                    const questionStr = JSON.stringify({
                        stream: true,
                        ...question,
                        model: question?.model?.toLowerCase(),
                        miner_session_id: this.minerSessionId
                    });
                    if (question.messages && this.assistantRoleName) {
                        question.messages = question.messages.map((item) => {
                            if (item.role === "assistant") {
                                item.role = this.assistantRoleName;
                            }
                            return item;
                        });
                    }
                    if (!this.isByPass) {
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
                    else {
                        ws.send(JSON.stringify({
                            chat_seq: this.chatSeq,
                            query: questionStr,
                        }));
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
                    if (!this.isByPass) {
                        const totalSignedPayment = this.computePaymentAmount({
                            inputTokens: messageJson?.input_tokens,
                            outputTokens: messageJson?.output_tokens,
                        }, this.tokenPrice);
                        const signedMessage = this.checkSinglePaymentAmount(totalSignedPayment);
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
                        this.totalUsedPayment = new bignumber_js_1.BigNumber(this.totalUsedPayment).plus(totalSignedPayment).toNumber();
                        if (new bignumber_js_1.BigNumber(this.totalUsedPayment).isGreaterThan(this.lockAmount)) {
                            readableStream.push({
                                code: 205,
                                message: '{"code":1015,"msg":"balance insufficient"}',
                            });
                            // TODO If the amount used is greater than lockAmount, the connection is closed, but no signature information is sent.
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
                    else {
                        readableStream.push({
                            code: 200,
                            message: messageJson?.content,
                            session_id: messageJson?.session_id || "",
                        });
                    }
                    if (messageJson?.session_id) {
                        this.minerSessionId = messageJson?.session_id;
                    }
                }
            };
            ws.onclose = (error) => {
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
                    const { readableStream: nextReadableStream, question: nextQuestion } = this.chatQueue.shift();
                    this.requestChatQueue(nextReadableStream, nextQuestion);
                }
            };
            ws.onerror = (error) => {
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
                    const { readableStream: nextReadableStream, question: nextQuestion } = this.chatQueue.shift();
                    this.requestChatQueue(nextReadableStream, nextQuestion);
                }
            };
        }
        catch (error) {
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
                    this.connectAgent(selectAgent, readableStream)
                        .then(() => {
                        resolve(result);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }
                else {
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
                    message: "Agent connection error: " + error?.message || error.toString(),
                });
                readableStream?.push(null);
                reject(error);
            });
        });
        return this.lastGetAgentInfoPromise;
    }
    checkSignBroadcastResult(readableStream) {
        return new Promise((resolve, reject) => {
            if (!this.nesaClient) {
                reject(new Error("Please wait for the requestSession registration result"));
            }
            else {
                // console.log(
                //   "checkSignBroadcastResult this.modelName",
                //   this.modelName,
                //   this.nesaClient.broadcastRegisterSession()
                // );
                this.nesaClient
                    .broadcastRegisterSession()
                    .then(async (result) => {
                    await this.requestAgentInfo(result, readableStream).catch((err) => {
                        reject(err);
                    });
                    resolve(result);
                })
                    .catch((error) => {
                    console.log("checkSignBroadcastResultError: ", error);
                    readableStream?.push({
                        code: 318,
                        message: error?.message,
                    });
                    readableStream?.push(null);
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
        if (!this.modelName) {
            throw new Error("ModelName is null");
        }
        if (!this.isByPass) {
            if (!(0, getIsChainInfoValid_1.getIsChainInfoValid)(this.chainInfo)) {
                throw new Error("Invalid chainInfo, you must provide rpc, rest, feeCurrencies, feeCurrencies");
            }
            if (this.isRegisteringSession) {
                throw new Error("Registering session, please wait");
            }
            if (!this.lockAmount ||
                new bignumber_js_1.BigNumber(this.lockAmount).isNaN()) {
                throw new Error("LockAmount invalid value");
            }
        }
        this.isEverRequestSession = true;
        const readableStream = new stream_browserify_1.Readable({ objectMode: true });
        readableStream._read = () => { };
        if (this.isByPass) {
            this.agentSessionId = Buffer.from(crypto_1.Random.getBytes(16)).toString("hex");
            readableStream.push({
                code: 200,
                message: this.agentSessionId,
            });
            const selectAgent = {
                url: this.agentUrl,
            };
            this.connectAgent(selectAgent).catch((err) => {
                throw new Error("Agent connection error: " + err);
            });
            return readableStream;
        }
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
                            this.tokenPrice = result?.tokenPrice;
                            this.checkSignBroadcastResult(readableStream).catch((err) => {
                                console.error("checkSignBroadcastResult error", err);
                            });
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
        if (!this.isByPass) {
            if (this.isRegisteringSession) {
                throw new Error("Registering session, please wait");
            }
            if (!this.isEverRequestSession) {
                throw new Error("Please call requestSession first to complete Session registration");
            }
            if (!this.tokenPrice) {
                throw new Error("Please wait for the session registration to complete before requesting chat");
            }
            if (!this.agentChatUrl) {
                const result = await this.checkSignBroadcastResult();
                console.log("checkSignBroadcastResult-result: ", result);
            }
        }
        else if (!this.agentChatUrl) {
            const selectAgent = {
                url: this.agentUrl,
            };
            this.connectAgent(selectAgent).catch((err) => {
                throw new Error("Agent connection error: " + err);
            });
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
    async connectAgent(selectAgent, readableStream) {
        return new Promise((resolve, reject) => {
            let firstInitHeartbeat = true;
            const { agentChatUrl, agentHeartbeatUrl } = (0, getAgentUrls_1.getAgentUrls)(selectAgent, this.chatId, this.agentSessionId);
            this.chatProgressReadable?.push({
                code: 303,
                message: "Connecting to the validator",
            });
            socket_1.socket.init({
                recordId: this.chatId,
                modelName: this.modelName,
                wsUrl: agentHeartbeatUrl,
                isBypass: this.isByPass,
                authToken: this.authToken,
                onopen: () => {
                    if (firstInitHeartbeat) {
                        this.agentChatUrl = agentChatUrl;
                        this.isRegisteringSession = false;
                        this.chatProgressReadable?.push({
                            code: 304,
                            message: "Waiting for query",
                        });
                        readableStream?.push(null);
                        firstInitHeartbeat = false;
                        resolve(null);
                    }
                },
                onerror: (e) => {
                    readableStream?.push({
                        code: 319,
                        message: "Agent connection error: " + selectAgent.url,
                    });
                    readableStream?.push(null);
                    reject(new Error("Agent heartbeat packet connection failed, " + e?.message));
                },
            });
        });
    }
}
exports.default = ChatClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGF0Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQTBDO0FBQzFDLHdFQUFnRDtBQUNoRCx5REFBNkM7QUFFN0MscURBTTBCO0FBQzFCLHFDQUFrQztBQUNsQywrQ0FBeUM7QUFDekMsMkVBQXVFO0FBQ3ZFLHlEQUcrQjtBQUMvQiwyQ0FBc0Q7QUFFdEQseURBQXNEO0FBQ3RELHVFQUFvRTtBQWtDcEUsTUFBTSxVQUFVO0lBb0NkLFlBQVksT0FBc0I7UUEzQjFCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQix1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQWV2QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUsxQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLGlDQUFnQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxrQ0FBaUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxpQ0FBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksa0NBQWlCLENBQUM7UUFDMUQsSUFB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