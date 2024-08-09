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
    static async connectWithSigner(endpoint, signer, senderAddress, chainId, options) {
        const mergedOptions = {
            ...options,
            registry: nesaRegistry(),
        };
        const tmClient = await (0, tendermint_rpc_1.connectComet)(endpoint);
        const signingClient = await stargate_1.SigningStargateClient.createWithSigner(tmClient, signer, mergedOptions);
        if (!chainId) {
            chainId = await signingClient.getChainId();
        }
        return new NesaClient(signingClient, tmClient, senderAddress, chainId, options);
    }
    constructor(signingClient, tmClient, senderAddress, chainId, options) {
        this.signByModel = {};
        this.queryByModel = {};
        this.tmByModel = {};
        this.senderAddressByModel = {};
        this.sign = signingClient;
        this.tm = tmClient;
        this.query = stargate_1.QueryClient.withExtensions(tmClient, queries_1.setupAgentExtension);
        this.senderAddress = senderAddress;
        this.chainId = chainId;
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
    async registerInferenceAgent(url, version) {
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
    broadcastRegisterSession() {
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
    }
    async signRegisterSession(sessionId, modelName, fee, lockBalance, vrf) {
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
        const hex = Buffer.from(Uint8Array.from(tx_2.TxRaw.encode(this.signResult).finish())).toString("hex");
        this.broadcastPromise = undefined;
        this.broadcastRegisterSession();
        return {
            sessionId,
            transactionHash: (0, encoding_1.toHex)((0, crypto_1.sha256)(Buffer.from(hex, "hex"))).toUpperCase(),
        };
    }
    async registerSession(sessionId, modelName, lockBalance, vrf) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBZ0U7QUFDaEUsK0NBUTBCO0FBQzFCLDJEQUFtRTtBQUNuRSxxQ0FBOEM7QUFDOUMsbUNBQXdEO0FBQ3hELDRDQU82QjtBQUc3Qix1Q0FBZ0U7QUFFaEUsMERBQTBEO0FBQzFELDJDQUF3QztBQUN4QywrQ0FBeUM7QUFTekMsU0FBUyxZQUFZO0lBQ25CLE9BQU8sSUFBSSx3QkFBUSxDQUFDO1FBQ2xCLEdBQUcsK0JBQW9CO1FBQ3ZCLENBQUMsMkJBQTJCLEVBQUUsb0JBQWUsQ0FBQztRQUM5QyxvREFBb0Q7UUFDcEQsQ0FBQyxxQ0FBcUMsRUFBRSw4QkFBeUIsQ0FBQztRQUNsRSxDQUFDLDhCQUE4QixFQUFFLHVCQUFrQixDQUFDO1FBQ3BELENBQUMsNEJBQTRCLEVBQUUscUJBQWdCLENBQUM7UUFDaEQsQ0FBQyxlQUFlLEVBQUUsUUFBRyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFlRCxNQUFhLFVBQVU7SUFzQmQsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FDbkMsUUFBZ0IsRUFDaEIsTUFBcUIsRUFDckIsYUFBcUIsRUFDckIsT0FBMkIsRUFDM0IsT0FBMEI7UUFFMUIsTUFBTSxhQUFhLEdBQUc7WUFDcEIsR0FBRyxPQUFPO1lBQ1YsUUFBUSxFQUFFLFlBQVksRUFBRTtTQUN6QixDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLDZCQUFZLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxhQUFhLEdBQUcsTUFBTSxnQ0FBcUIsQ0FBQyxnQkFBZ0IsQ0FDaEUsUUFBUSxFQUNSLE1BQU0sRUFDTixhQUFhLENBQ2QsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNiLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FB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