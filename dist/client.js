"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NesaClient = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const logger_1 = require("./logger");
const utils_1 = require("./utils");
const tx_1 = require("./codec/agent/v1/tx");
const queries_1 = require("./queries");
const tx_2 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const crypto_1 = require("@cosmjs/crypto");
const encoding_1 = require("@cosmjs/encoding");
function nesaRegistry() {
    return new proto_signing_1.Registry([
        ...stargate_1.defaultRegistryTypes,
        ["/agent.v1.MsgUpdateParams", tx_1.MsgUpdateParams],
        // ['/agent.v1.MsgRegisterModel', MsgRegisterModel],
        ["/agent.v1.MsgRegisterInferenceAgent", tx_1.MsgRegisterInferenceAgent],
        ["/agent.v1.MsgRegisterSession", tx_1.MsgRegisterSession],
        ["/agent.v1.MsgSubmitPayment", tx_1.MsgSubmitPayment],
        ["/agent.v1.VRF", tx_1.VRF],
    ]);
}
class NesaClient {
    static async connectWithSigner(endpoint, signer, senderAddress, chainId, options, modelName) {
        const mergedOptions = {
            ...options,
            registry: nesaRegistry(),
        };
        const tmClient = await (0, tendermint_rpc_1.connectComet)(endpoint);
        const signingClient = await stargate_1.SigningStargateClient.createWithSigner(tmClient, signer, mergedOptions);
        if (!chainId) {
            chainId = await signingClient.getChainId();
        }
        return new NesaClient(signingClient, tmClient, senderAddress, chainId, options, modelName);
    }
    constructor(signingClient, tmClient, senderAddress, chainId, options, modelName) {
        this.signByModel = {};
        this.queryByModel = {};
        this.tmByModel = {};
        this.senderAddressByModel = {};
        this.broadcastPromiseByModel = {};
        this.signResultByModel = {};
        this.sign = signingClient;
        if (modelName) {
            this.signByModel[modelName] = signingClient;
        }
        this.tm = tmClient;
        if (modelName) {
            this.tmByModel[modelName] = tmClient;
        }
        this.query = stargate_1.QueryClient.withExtensions(tmClient, queries_1.setupAgentExtension);
        if (modelName) {
            this.queryByModel[modelName] = stargate_1.QueryClient.withExtensions(tmClient, queries_1.setupAgentExtension);
        }
        this.senderAddress = senderAddress;
        if (modelName) {
            this.senderAddressByModel[modelName] = senderAddress;
        }
        this.chainId = chainId;
        // this.revisionNumber = parseRevisionNumber(chainId);
        this.gasPrice = options.gasPrice;
        this.logger = options.logger ?? new logger_1.NoopLogger();
        this.estimatedBlockTime = options.estimatedBlockTime;
        this.estimatedIndexerTime = options.estimatedIndexerTime;
    }
    async updateParams(authority, params) {
        this.logger.verbose("Update Params");
        const senderAddress = this.senderAddress;
        const updateParamsMsg = {
            typeUrl: "/agent.v1.MsgUpdateParams",
            value: tx_1.MsgUpdateParams.fromPartial({
                authority,
                params,
            }),
        };
        this.logger.debug("Update Params Message: ", updateParamsMsg);
        const result = await this.sign.signAndBroadcast(senderAddress, [updateParamsMsg], "auto");
        if ((0, stargate_1.isDeliverTxFailure)(result)) {
            throw new Error((0, utils_1.createDeliverTxFailureMessage)(result));
        }
        return {
            events: result.events,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    async registerInferenceAgent(
    // account: string,
    url, version) {
        this.logger.verbose(`Register Inference Agent`);
        const senderAddress = this.senderAddress;
        const registerInferenceAgentMsg = {
            typeUrl: "/agent.v1.MsgRegisterInferenceAgent",
            value: tx_1.MsgRegisterInferenceAgent.fromPartial({
                account: senderAddress,
                url,
                version,
            }),
        };
        this.logger.debug("Register Model Message: ", registerInferenceAgentMsg);
        const result = await this.sign.signAndBroadcast(senderAddress, [registerInferenceAgentMsg], "auto");
        if ((0, stargate_1.isDeliverTxFailure)(result)) {
            throw new Error((0, utils_1.createDeliverTxFailureMessage)(result));
        }
        return {
            events: result.events,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    broadcastRegisterSession(modelName) {
        if (!modelName) {
            if (!this.signResult) {
                return new Error("Please sign first");
            }
            if (this.broadcastPromise) {
                return this.broadcastPromise;
            }
            this.broadcastPromise = new Promise((resolve, reject) => {
                this.sign
                    .broadcastTx(Uint8Array.from(tx_2.TxRaw.encode(this.signResult).finish()))
                    .then((result) => {
                    if ((0, stargate_1.isDeliverTxFailure)(result)) {
                        reject(new Error((0, utils_1.createDeliverTxFailureMessage)(result)));
                    }
                    else {
                        resolve({
                            events: result.events,
                            transactionHash: result.transactionHash,
                            height: result.height,
                            account: tx_1.MsgRegisterSessionResponse.decode(result.msgResponses[0]?.value).account,
                        });
                    }
                })
                    .catch((error) => {
                    reject(error);
                });
            });
            return;
        }
        if (!this.signResultByModel[modelName]) {
            return new Error("Please sign first");
        }
        if (this.broadcastPromiseByModel[modelName]) {
            return this.broadcastPromiseByModel[modelName];
        }
        this.broadcastPromiseByModel[modelName] = new Promise((resolve, reject) => {
            this.sign
                .broadcastTx(Uint8Array.from(tx_2.TxRaw.encode(this.signResultByModel[modelName]).finish()))
                .then((result) => {
                if ((0, stargate_1.isDeliverTxFailure)(result)) {
                    reject(new Error((0, utils_1.createDeliverTxFailureMessage)(result)));
                }
                else {
                    resolve({
                        events: result.events,
                        transactionHash: result.transactionHash,
                        height: result.height,
                        account: tx_1.MsgRegisterSessionResponse.decode(result.msgResponses[0]?.value).account,
                    });
                }
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    async signRegisterSession(sessionId, modelName, fee, lockBalance, vrf) {
        if (!modelName) {
            this.logger.verbose(`Register Session`);
            const senderAddress = this.senderAddress;
            const registerSessionMsg = {
                typeUrl: "/agent.v1.MsgRegisterSession",
                value: tx_1.MsgRegisterSession.fromPartial({
                    account: senderAddress,
                    sessionId,
                    modelName,
                    lockBalance,
                    vrf,
                }),
            };
            const signResult = await this.sign.sign(senderAddress, [registerSessionMsg], fee, "");
            this.signResult = signResult;
            // this.signResultByModel[modelName] = signResult;
            const hex = Buffer.from(Uint8Array.from(tx_2.TxRaw.encode(this.signResult).finish())).toString("hex");
            this.broadcastPromise = undefined;
            this.broadcastRegisterSession();
            return {
                sessionId,
                transactionHash: (0, encoding_1.toHex)((0, crypto_1.sha256)(Buffer.from(hex, "hex"))).toUpperCase(),
            };
        }
        this.logger.verbose(`Register Session`);
        const senderAddress = this.senderAddressByModel[modelName];
        const registerSessionMsg = {
            typeUrl: "/agent.v1.MsgRegisterSession",
            value: tx_1.MsgRegisterSession.fromPartial({
                account: senderAddress,
                sessionId,
                modelName,
                lockBalance,
                vrf,
            }),
        };
        const signResult = await this.signByModel[modelName]?.sign(senderAddress, [registerSessionMsg], fee, "");
        this.signResultByModel[modelName] = signResult;
        const hex = Buffer.from(Uint8Array.from(tx_2.TxRaw.encode(this.signResultByModel[modelName]).finish())).toString("hex");
        this.broadcastPromiseByModel[modelName] = undefined;
        this.broadcastRegisterSession(modelName);
        return {
            sessionId,
            transactionHash: (0, encoding_1.toHex)((0, crypto_1.sha256)(Buffer.from(hex, "hex"))).toUpperCase(),
        };
    }
    async registerSession(
    // account: string,
    sessionId, modelName, lockBalance, vrf) {
        this.logger.verbose(`Register Session`);
        const senderAddress = this.senderAddress;
        const registerSessionMsg = {
            typeUrl: "/agent.v1.MsgRegisterSession",
            value: tx_1.MsgRegisterSession.fromPartial({
                account: senderAddress,
                sessionId,
                modelName,
                lockBalance,
                vrf,
            }),
        };
        this.logger.debug("Register Session Message: ", registerSessionMsg);
        const result = await this.sign.signAndBroadcast(senderAddress, [registerSessionMsg], "auto");
        if ((0, stargate_1.isDeliverTxFailure)(result)) {
            throw new Error((0, utils_1.createDeliverTxFailureMessage)(result));
        }
        return {
            events: result.events,
            transactionHash: result.transactionHash,
            height: result.height,
            account: tx_1.MsgRegisterSessionResponse.decode(result.msgResponses[0]?.value)
                .account,
        };
    }
    async submitPayment(sessionId, signature, payment) {
        this.logger.verbose(`Submit Payment`);
        const senderAddress = this.senderAddress;
        const submitPaymentMsg = {
            typeUrl: "/agent.v1.MsgSubmitPayment",
            value: tx_1.MsgSubmitPayment.fromPartial({
                account: senderAddress,
                sessionId,
                signature,
                payment,
            }),
        };
        this.logger.debug("Submit Payment Message: ", submitPaymentMsg);
        const result = await this.sign.signAndBroadcast(senderAddress, [submitPaymentMsg], "auto");
        if ((0, stargate_1.isDeliverTxFailure)(result)) {
            throw new Error((0, utils_1.createDeliverTxFailureMessage)(result));
        }
        return {
            events: result.events,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    async getParams() {
        const result = await this.query.agent.params();
        return result;
    }
    async getInferenceAgent(account, modelName, limit, key) {
        const result = await this.query.agent.inferenceAgentRequest(account, modelName, limit, key);
        return result;
    }
    async getSession(sessionId) {
        const result = await this.query.agent.sessionRequest(sessionId);
        return result;
    }
    async getSessionByAgent(account, status, limit, orderDesc, key, expireTime) {
        const result = await this.query.agent.sessionByAgentRequest(account, status, limit, orderDesc, key, expireTime);
        return result;
    }
    async getVRFSeed(account) {
        const result = await this.query.agent.VRFSeedRequest(account);
        return result;
    }
}
exports.NesaClient = NesaClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBZ0U7QUFDaEUsK0NBUTBCO0FBQzFCLDJEQUFtRTtBQUNuRSxxQ0FBOEM7QUFDOUMsbUNBQXdEO0FBQ3hELDRDQU82QjtBQUc3Qix1Q0FBZ0U7QUFZaEUsMERBQTBEO0FBQzFELDJDQUF3QztBQUN4QywrQ0FBeUM7QUFTekMsU0FBUyxZQUFZO0lBQ25CLE9BQU8sSUFBSSx3QkFBUSxDQUFDO1FBQ2xCLEdBQUcsK0JBQW9CO1FBQ3ZCLENBQUMsMkJBQTJCLEVBQUUsb0JBQWUsQ0FBQztRQUM5QyxvREFBb0Q7UUFDcEQsQ0FBQyxxQ0FBcUMsRUFBRSw4QkFBeUIsQ0FBQztRQUNsRSxDQUFDLDhCQUE4QixFQUFFLHVCQUFrQixDQUFDO1FBQ3BELENBQUMsNEJBQTRCLEVBQUUscUJBQWdCLENBQUM7UUFDaEQsQ0FBQyxlQUFlLEVBQUUsUUFBRyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFlRCxNQUFhLFVBQVU7SUF3QmQsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FDbkMsUUFBZ0IsRUFDaEIsTUFBcUIsRUFDckIsYUFBcUIsRUFDckIsT0FBMkIsRUFDM0IsT0FBMEIsRUFDMUIsU0FBa0I7UUFFbEIsTUFBTSxhQUFhLEdBQUc7WUFDcEIsR0FBRyxPQUFPO1lBQ1YsUUFBUSxFQUFFLFlBQVksRUFBRTtTQUN6QixDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLDZCQUFZLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxhQUFhLEdBQUcsTUFBTSxnQ0FBcUIsQ0FBQyxnQkFBZ0IsQ0FDaEUsUUFBUSxFQUNSLE1BQU0sRUFDTixhQUFhLENBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNiLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQyxV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