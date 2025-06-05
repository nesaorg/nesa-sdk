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
const BigNumber = bignumber_js_1.BigNumber;
class ChatClient {
    constructor(options) {
        this.chatQueue = [];
        this.chatSeq = 0;
        this.totalUsedPayment = new BigNumber(0);
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
        this.agentUrl = options.isByPass ? options.agentUrl || "" : "";
        this.authToken = options.authToken;
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
                        const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, {
                            prefix: "nesa",
                            hdPaths: [(0, crypto_1.stringToPath)("m/44'/118'/0'/0/0")],
                        });
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
        if (new BigNumber(totalSignedPayment).isLessThanOrEqualTo(this.lockAmount)) {
            this.totalSignedPayment = Number(totalSignedPayment);
        }
        else {
            this.totalSignedPayment = Number(this.lockAmount);
        }
        return this.getSignaturePayment();
    }
    computePaymentAmount(tokenNumber, tokenPrice) {
        const inputAmount = new BigNumber(tokenNumber.inputTokens).multipliedBy(tokenPrice.inputPrice.amount);
        const outputAmount = new BigNumber(tokenNumber.outputTokens).multipliedBy(tokenPrice.outputPrice.amount);
        return inputAmount.plus(outputAmount).div(this.priceUnit).toFixed(0, 1);
    }
    computeRawPaymentAmount(tokenNumber, tokenPrice) {
        const inputAmount = new BigNumber(tokenNumber.inputTokens).multipliedBy(tokenPrice.inputPrice.amount);
        const outputAmount = new BigNumber(tokenNumber.outputTokens).multipliedBy(tokenPrice.outputPrice.amount);
        return inputAmount.plus(outputAmount);
    }
    rawToProcessedPaymentAmount(amount) {
        return amount.div(this.priceUnit).toFixed(0, 1);
    }
    handleQuestionParams(question) {
        const handleData = (value, defaultValue) => {
            if (typeof value === 'undefined') {
                return defaultValue;
            }
            return value;
        };
        if (question.low_rank_adaptation) {
            const { lora_name, lora_path, lora_scale, base_model_name } = question.low_rank_adaptation;
            question.low_rank_adaptation.lora_name = handleData(lora_name, 'None');
            question.low_rank_adaptation.lora_path = handleData(lora_path, 'None');
            question.low_rank_adaptation.lora_scale = handleData(lora_scale, 1.0);
            question.low_rank_adaptation.base_model_name = handleData(base_model_name, 'None');
        }
        return question;
    }
    requestChatQueue(readableStream, question) {
        question = this.handleQuestionParams(question);
        this.isChatting = true;
        this.chatSeq += 1;
        let messageTimes = 0;
        try {
            let ws;
            const protocols = this.isByPass ? this.authToken : undefined;
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
                        miner_session_id: this.minerSessionId,
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
                        const thisPaymentAmount = this.computeRawPaymentAmount({
                            inputTokens: messageJson?.input_tokens,
                            outputTokens: messageJson?.output_tokens,
                        }, this.tokenPrice);
                        this.totalUsedPayment = new BigNumber(this.totalUsedPayment).plus(thisPaymentAmount);
                        const thisProcessedPaymentAmount = this.rawToProcessedPaymentAmount(thisPaymentAmount);
                        const thisSessionProcessedAmount = this.rawToProcessedPaymentAmount(this.totalUsedPayment);
                        const payment = {
                            this: thisProcessedPaymentAmount,
                            session: thisSessionProcessedAmount,
                            denom: this.chainInfo.feeCurrencies[0].coinMinimalDenom,
                        };
                        readableStream.push({
                            code: 200,
                            message: messageJson?.content,
                            session_id: messageJson?.session_id || "",
                            payment,
                        });
                        if (new BigNumber(thisSessionProcessedAmount).isGreaterThan(this.lockAmount)) {
                            this.totalUsedPayment = new BigNumber(0);
                            readableStream.push({
                                code: 205,
                                message: JSON.stringify({
                                    code: 1015,
                                    msg: `balance insufficient`,
                                    info: ` (${thisSessionProcessedAmount} > ${this.lockAmount})`,
                                }),
                            });
                            // TODO If the amount used is greater than lockAmount, the connection is closed, but no signature information is sent.
                            ws.close();
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
            if (!this.lockAmount || new BigNumber(this.lockAmount).isNaN()) {
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
                    if (new BigNumber(this.lockAmount).isLessThan(params?.params?.userMinimumLock?.amount)) {
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
        question = this.handleQuestionParams(question);
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
                    reject(new Error("Agent heartbeat packet connection failed, " +
                        e?.message));
                },
            });
        });
    }
}
exports.default = ChatClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGF0Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQTBDO0FBQzFDLHdFQUFnRDtBQUNoRCx5REFBNkM7QUFFN0MscURBTTBCO0FBQzFCLHFDQUFrQztBQUNsQywrQ0FBeUQ7QUFDekQsMkVBQXVFO0FBQ3ZFLHlEQUcrQjtBQUMvQiwyQ0FBc0Q7QUFFdEQseURBQXNEO0FBQ3RELHVFQUFvRTtBQUdwRSxNQUFNLFNBQVMsR0FBRyx3QkFBYSxDQUFDO0FBMkNoQyxNQUFNLFVBQVU7SUFvQ2QsWUFBWSxPQUFzQjtRQTNCMUIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1oscUJBQWdCLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFldkIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFLMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxpQ0FBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksa0NBQWlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksaUNBQWdCLENBQUM7UUFDdkQsSUFBSSxDQUFD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