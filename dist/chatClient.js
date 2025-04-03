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
        this.agentUrl = '';
        this.agentChatUrl = '';
        this.assistantRoleName = '';
        this.agentSessionId = '';
        this.modelName = options?.modelName?.toLowerCase();
        this.chainInfo = options.chainInfo || default_config_1.defaultChainInfo;
        this.lockAmount = options.lockAmount || default_config_1.defaultLockAmount;
        this.signaturePayment = {};
        this.priceUnit = options.priceUnit || default_config_1.defaultPriceUnit;
        this.lowBalance = options.lowBalance || default_config_1.defaultLowBalance;
        this.lockAmountDenom = '';
        this.walletName = options.walletName || '';
        this.privateKey = options.privateKey || '';
        this.mnemonic = options.mnemonic || '';
        this.isEverRequestSession = false;
        this.isBrowser = typeof window !== 'undefined';
        this.isBrowser && (window.nesaSdkVersion = default_config_1.sdkVersion);
        this.chatId = options.chatId || Date.now().toString();
        this.minerSessionId = '';
        this.isByPass = options.isByPass || false;
        this.agentUrl = options.isByPass ? options.agentUrl || '' : '';
        this.authToken = options.authToken;
        // console.log("client options", options, this.chatId);
        if (!this.isByPass) {
            this.initWallet();
        }
        else {
            if (!this.agentUrl || this.agentUrl === '') {
                throw new Error('Agent url is required in byPass mode');
            }
            if (!this.authToken || this.authToken === '') {
                throw new Error('Auth token is required in byPass mode');
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
                    if (this.walletName === 'npm:@leapwallet/metamask-cosmos-snap') {
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
                        console.log('No wallet installed, please install keplr or metamask wallet first');
                        reject('No wallet installed, please install keplr or metamask wallet first');
                    }
                }
                catch (error) {
                    console.log('initOfflineSigner-error: ', error);
                    reject(error);
                }
            });
        }
        else {
            this.lastInitOfflineSignerPromise = new Promise(async (resolve, reject) => {
                if (!this.privateKey && !this.mnemonic) {
                    reject('In the node environment, please provide the privateKey');
                }
                else {
                    if (this.privateKey) {
                        const wallet = await proto_signing_1.DirectSecp256k1Wallet.fromKey(Buffer.from(this.privateKey, 'hex'), 'nesa');
                        // console.log("private key wallet", wallet);
                        this.offlineSigner = wallet;
                        resolve(this.offlineSigner);
                        this.getNesaClient();
                        return;
                    }
                    if (this.mnemonic) {
                        const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, { prefix: 'nesa', hdPaths: [(0, crypto_1.stringToPath)("m/44'/118'/0'/0/0")] });
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
        console.log('Init nesa client', { th: this.modelName });
        this.lastNesaClientPromise = new Promise((resolve, reject) => {
            if (this.offlineSigner) {
                walletOperation_1.default.getNesaClient(this.chainInfo, this.offlineSigner)
                    .then((client) => {
                    resolve(client);
                    this.getChainParams(client);
                })
                    .catch((error) => {
                    console.log('initNesaClientError: ', error);
                    this.lastNesaClientPromise = undefined;
                    reject(error);
                });
            }
            else {
                this.lastNesaClientPromise = undefined;
                reject(new Error('Wallet connect error'));
            }
        });
        return this.lastNesaClientPromise;
    }
    getChainParams(nesaClient) {
        if (this.lastUserMinimumLockPromise) {
            return this.lastUserMinimumLockPromise;
        }
        console.log('Init params', { modelName: this.modelName });
        this.lastUserMinimumLockPromise = new Promise((resolve) => {
            walletOperation_1.default.requestParams(nesaClient)
                .then((params) => {
                this.chatProgressReadable?.push({
                    code: 301,
                    message: 'Connected to Nesa chain',
                });
                resolve(params);
            })
                .catch((error) => {
                console.log('getChainParamsError: ', error);
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
            return '';
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
    requestChatQueue(readableStream, question) {
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
                const WebSocket = require('ws');
                ws = new WebSocket(this.agentChatUrl, protocols);
            }
            ws.addEventListener('open', () => {
                if (ws.readyState === 1) {
                    const questionStr = JSON.stringify({
                        stream: true,
                        ...question,
                        model: question?.model?.toLowerCase(),
                        miner_session_id: this.minerSessionId,
                    });
                    if (question.messages && this.assistantRoleName) {
                        question.messages = question.messages.map((item) => {
                            if (item.role === 'assistant') {
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
                                message: 'No signature found or the signature has expired, please sign again',
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
                    if (messageJson === 'ack') {
                        this.chatProgressReadable?.push({
                            code: 305,
                            message: 'Conducting inference',
                        });
                    }
                    else {
                        ws.close();
                        readableStream.push({
                            code: 202,
                            message: 'Illegal link',
                        });
                        readableStream.push(null);
                        this.isChatting = false;
                    }
                    messageTimes += 1;
                }
                else if (messageJson?.content?.startsWith('[DONE]')) {
                    ws.close();
                    readableStream.push({
                        code: 203,
                        message: messageJson?.content?.split('[DONE]')[1],
                    });
                    this.chatProgressReadable?.push({
                        code: 307,
                        message: 'Task completed, wait for another query',
                    });
                    readableStream.push(null);
                    this.isChatting = false;
                }
                else {
                    if (messageTimes === 1) {
                        this.chatProgressReadable?.push({
                            code: 306,
                            message: 'Receiving responses',
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
                            session_id: messageJson?.session_id || '',
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
                            session_id: messageJson?.session_id || '',
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
                    message: 'Task completed, wait for another query',
                });
                if (error?.reason) {
                    console.log('onclose: ', error?.reason);
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
                    message: 'Task completed, wait for another query',
                });
                readableStream.push({
                    code: 204,
                    message: error?.reason || 'Error: Connection failed',
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
                message: 'Task completed, wait for another query',
            });
            console.log('websocketCatchError: ', error);
            readableStream.push({
                code: 207,
                message: error?.message || 'Error: Connection failed',
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
                        message: 'Agent not found',
                    });
                    readableStream?.push(null);
                    reject(new Error('No agent found'));
                }
            })
                .catch((error) => {
                console.log('requestAgentInfoError: ', error);
                this.lastGetAgentInfoPromise = undefined;
                readableStream?.push({
                    code: 319,
                    message: 'Agent connection error: ' + error?.message || error.toString(),
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
                reject(new Error('Please wait for the requestSession registration result'));
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
                    console.log('checkSignBroadcastResultError: ', error);
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
        readableStream.push({ code: 300, message: 'Connecting to Nesa chain' });
        this.chatProgressReadable = readableStream;
        return readableStream;
    }
    async requestSession() {
        if (!this.modelName) {
            throw new Error('ModelName is null');
        }
        if (!this.isByPass) {
            if (!(0, getIsChainInfoValid_1.getIsChainInfoValid)(this.chainInfo)) {
                throw new Error('Invalid chainInfo, you must provide rpc, rest, feeCurrencies, feeCurrencies');
            }
            if (this.isRegisteringSession) {
                throw new Error('Registering session, please wait');
            }
            if (!this.lockAmount || new BigNumber(this.lockAmount).isNaN()) {
                throw new Error('LockAmount invalid value');
            }
        }
        this.isEverRequestSession = true;
        const readableStream = new stream_browserify_1.Readable({ objectMode: true });
        readableStream._read = () => { };
        if (this.isByPass) {
            this.agentSessionId = Buffer.from(crypto_1.Random.getBytes(16)).toString('hex');
            readableStream.push({
                code: 200,
                message: this.agentSessionId,
            });
            const selectAgent = {
                url: this.agentUrl,
            };
            this.connectAgent(selectAgent).catch((err) => {
                throw new Error('Agent connection error: ' + err);
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
                            message: 'LockAmount cannot be less than ' +
                                params?.params?.userMinimumLock?.amount,
                        });
                        return readableStream;
                    }
                    try {
                        const result = await walletOperation_1.default.registerSession(this.chatId, nesaClient, this.modelName, this.lockAmount, params?.params?.userMinimumLock?.denom, this.chainInfo, this.offlineSigner);
                        console.log('registerSession-result: ', result);
                        if (result?.transactionHash) {
                            this.chatProgressReadable?.push({
                                code: 302,
                                message: 'Choosing an inference validator',
                            });
                            readableStream.push({
                                code: 200,
                                message: result?.transactionHash,
                            });
                            this.tokenPrice = result?.tokenPrice;
                            this.checkSignBroadcastResult(readableStream).catch((err) => {
                                console.error('checkSignBroadcastResult error', err);
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
                        console.log('313 error', error);
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
            throw new Error('Model is required');
        }
        if (!this.isByPass) {
            if (this.isRegisteringSession) {
                throw new Error('Registering session, please wait');
            }
            if (!this.isEverRequestSession) {
                throw new Error('Please call requestSession first to complete Session registration');
            }
            if (!this.tokenPrice) {
                throw new Error('Please wait for the session registration to complete before requesting chat');
            }
            if (!this.agentChatUrl) {
                const result = await this.checkSignBroadcastResult();
                console.log('checkSignBroadcastResult-result: ', result);
            }
        }
        else if (!this.agentChatUrl) {
            const selectAgent = {
                url: this.agentUrl,
            };
            this.connectAgent(selectAgent).catch((err) => {
                throw new Error('Agent connection error: ' + err);
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
                message: 'Connecting to the validator',
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
                            message: 'Waiting for query',
                        });
                        readableStream?.push(null);
                        firstInitHeartbeat = false;
                        resolve(null);
                    }
                },
                onerror: (e) => {
                    readableStream?.push({
                        code: 319,
                        message: 'Agent connection error: ' + selectAgent.url,
                    });
                    readableStream?.push(null);
                    reject(new Error('Agent heartbeat packet connection failed, ' +
                        e?.message));
                },
            });
        });
    }
}
exports.default = ChatClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGF0Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQTBDO0FBQzFDLHdFQUFnRDtBQUNoRCx5REFBNkM7QUFFN0MscURBTTBCO0FBQzFCLHFDQUFrQztBQUNsQywrQ0FBeUQ7QUFDekQsMkVBQXVFO0FBQ3ZFLHlEQUcrQjtBQUMvQiwyQ0FBc0Q7QUFFdEQseURBQXNEO0FBQ3RELHVFQUFvRTtBQUdwRSxNQUFNLFNBQVMsR0FBRyx3QkFBYSxDQUFDO0FBaUNoQyxNQUFNLFVBQVU7SUFvQ2QsWUFBWSxPQUFzQjtRQTNCMUIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1oscUJBQWdCLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFldkIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFLMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxpQ0FBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksa0NBQWlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksaUNBQWdCLENBQUM7UUFDdkQsSUFBSSxDQUFD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