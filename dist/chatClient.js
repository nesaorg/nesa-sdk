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
        // private lastGetAgentInfoPromise: any;
        this.lastGetAgentInfoPromiseMap = {};
        this.chainInfo = options.chainInfo || default_config_1.defaultChainInfo;
        this.lockAmount = options.lockAmount || default_config_1.defaultLockAmount;
        this.signaturePayment = {};
        this.singlePaymentAmount =
            options.singlePaymentAmount || default_config_1.defaultSinglePaymentAmount;
        this.lowBalance = options.lowBalance || default_config_1.defaultLowBalance;
        this.lockAmountDenom = "";
        this.walletName = options.walletName || "";
        this.privateKey = options.privateKey || "";
        this.isEverRequestSession = false;
        this.isBrowser = options.privateKey ? false : typeof window !== "undefined";
        this.isBrowser && (window.nesaSdkVersion = default_config_1.sdkVersion);
        this.tokenPrice = 0;
        this.initWallet();
    }
    initWallet() {
        if (this.lastInitOfflineSignerPromise) {
            return this.lastInitOfflineSignerPromise;
        }
        if (this.isBrowser) {
            this.lastInitOfflineSignerPromise = new Promise(async (resolve, reject) => {
                try {
                    if (this.walletName === "npm:@leapwallet/metamask-cosmos-snap") {
                        const offlineSigner = new cosmos_snap_provider_1.CosmjsOfflineSigner(this.chainInfo.chainId);
                        this.offLinesigner = offlineSigner;
                        resolve(this.offLinesigner);
                        this.getNesaClient();
                    }
                    else if (window?.keplr) {
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
                if (!this.privateKey) {
                    reject("In the node environment, please provide the privateKey");
                }
                else {
                    const wallet = await proto_signing_1.DirectSecp256k1Wallet.fromKey(Buffer.from(this.privateKey, "hex"), "nesa");
                    this.offLinesigner = wallet;
                    resolve(this.offLinesigner);
                    this.getNesaClient();
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
        const getRequestParams = async () => {
            try {
                const params = await walletOperation_1.default.requestParams(nesaClient);
                this.chatProgressReadable?.push({
                    code: 301,
                    message: "Connected to Nesa chain",
                });
                return params;
            }
            catch (error) {
                this.lastUserMinimumLockPromise = undefined;
            }
        };
        this.lastUserMinimumLockPromise = getRequestParams();
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
        console.log("requestChatQueue");
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
                    const signedMessage = encryptUtils_1.default.signMessage(questionStr, this.chatSeq, true);
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
                console.log("Websocket onERROR");
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
            this.chatProgressReadable?.push({
                code: 307,
                message: "Task completed, wait for another query",
            });
            console.log("websocketCatchError: ", error);
            readableStream.push({
                code: 207,
                message: error.message || "Error: Connection failed",
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
        console.log("requestCloseHeartbeat");
        socket_1.socket.forceClose = true;
        socket_1.socket.close();
        setTimeout(() => console.log("socket.socket_open", socket_1.socket.socket_open, { socket: socket_1.socket }));
    }
    requestAgentInfo(result, readableStream, modelName) {
        console.log("requestAgentInfo");
        // if (this.lastGetAgentInfoPromise) {
        //   console.log("requestAgentInfo same promise");
        //   return this.lastGetAgentInfoPromise;
        // }
        if (this.lastGetAgentInfoPromiseMap[modelName]) {
            console.log("requestAgentInfo same promise");
            return this.lastGetAgentInfoPromiseMap[modelName];
        }
        // console.log("requestAgentInfo promise creatoin");
        // this.lastGetAgentInfoPromise = new Promise(
        this.lastGetAgentInfoPromiseMap[modelName] = new Promise((resolve, reject) => {
            walletOperation_1.default.requestAgentInfo(this.nesaClient, result?.account, modelName)
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
                        ws_url: agentHeartbeatUrl,
                        onopen: () => {
                            if (firstInitHeartbeat) {
                                this.agentUrl = agentWsUrl;
                                this.isRegisterSessioning = false;
                                this.chatProgressReadable?.push({
                                    code: 304,
                                    message: "Waiting for query",
                                });
                                readableStream && readableStream?.push(null);
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
                this.lastGetAgentInfoPromiseMap[modelName] = undefined;
                // this.lastGetAgentInfoPromise = undefined;
                readableStream &&
                    readableStream.push({
                        code: 319,
                        message: "Agent connection error: " + error?.message ||
                            error.toString(),
                    });
                readableStream && readableStream.push(null);
                reject(error);
            });
        });
        return this.lastGetAgentInfoPromiseMap[modelName];
        // return this.lastGetAgentInfoPromise;
    }
    checkSignBroadcastResult(readableStream, modelName = ""
    // isNew?: boolean
    ) {
        return new Promise((resolve, reject) => {
            if (!this.nesaClient) {
                reject(new Error("Please wait for the requestSession registration result"));
            }
            else {
                const reqSession = this.nesaClient.broadcastRegisterSession(modelName);
                console.log("reqSession", reqSession);
                reqSession
                    .then((result) => {
                    console.log("broadcastRegisterSession after", modelName);
                    resolve(this.requestAgentInfo(result, readableStream, modelName));
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
                                    walletOperation_1.default.registerSession(nesaClient, "Orenguteng/Llama-3-8B-Lexi-Uncensored".toLowerCase(), this.lockAmount, params?.params?.userMinimumLock?.denom, this.chainInfo, this.offLinesigner)
                                        .then((result) => {
                                        console.log("registerSession-result: ", result);
                                        if (Object.values(result)?.[0]
                                            ?.transactionHash) {
                                            this.chatProgressReadable?.push({
                                                code: 302,
                                                message: "Choosing an inference validator",
                                            });
                                            readableStream.push({
                                                code: 200,
                                                message: result?.transactionHash,
                                            });
                                            Object.keys(result).forEach((modelName) => {
                                                this.checkSignBroadcastResult(readableStream, modelName).catch(() => { });
                                            });
                                        }
                                        else {
                                            this.isRegisterSessioning = false;
                                            readableStream.push({
                                                code: 312,
                                                message: JSON.stringify(result),
                                            });
                                        }
                                    })
                                        .catch((error) => {
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
                        });
                    })
                        .catch((error) => {
                        readableStream.push({
                            code: 316,
                            message: error?.message || error.toString(),
                        });
                    });
                })
                    .catch((error) => {
                    readableStream.push({
                        code: 317,
                        message: error?.message || error.toString(),
                    });
                });
            }
        });
    }
    requestChat(question, modelName) {
        return new Promise((resolve, reject) => {
            if (!question?.model) {
                reject(new Error("Model is required"));
            }
            else if (this.isRegisterSessioning) {
                reject(new Error("Registering session, please wait"));
            }
            else if (!this.isEverRequestSession) {
                reject(new Error("Please call requestSession first to complete Session registration"));
                // } else if (!this.agentUrl) {
            }
            else {
                console.log("requestChat modelName", modelName);
                this.checkSignBroadcastResult(undefined, modelName)
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
        });
    }
}
exports.default = ChatClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGF0Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQTBDO0FBQzFDLHdFQUFnRDtBQUNoRCx5REFBNkM7QUFFN0MscURBTTBCO0FBQzFCLHFDQUFrQztBQUNsQywrQ0FBeUM7QUFDekMsMkVBRzBDO0FBQzFDLHlEQUE4RDtBQXNCOUQsTUFBTSxVQUFVO0lBNkJkLFlBQVksT0FBc0I7UUF0QjFCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQix1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFHL0Isd0NBQXdDO1FBQ2hDLCtCQUEwQixHQUFpQyxFQUFFLENBQUM7UUFZcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLGlDQUFnQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxrQ0FBaUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxtQkFBbUI7WUFDdEIsT0FBTyxDQUFDLG1CQUFtQixJQUFJLDJDQUEwQixDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxrQ0FBaUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdB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