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
        this.sign = signingClient;
        this.tm = tmClient;
        this.query = stargate_1.QueryClient.withExtensions(tmClient, queries_1.setupAgentExtension);
        this.senderAddress = senderAddress;
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
    async signRegisterSession(sessionId, 
    // modelName: string = "",
    fee, lockBalance, vrf) {
        console.log("signRegisterSession");
        this.logger.verbose(`Register Session`);
        const senderAddress = this.senderAddress;
        const registerSessionMsg = {
            typeUrl: "/agent.v1.MsgRegisterSession",
            value: tx_1.MsgRegisterSession.fromPartial({
                account: senderAddress,
                sessionId,
                modelName: "Orenguteng/Llama-3-8B-Lexi-Uncensored".toLowerCase(),
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
    async registerSession(
    // account: string,
    sessionId, 
    // modelName: string,
    lockBalance, vrf) {
        this.logger.verbose(`Register Session`);
        const senderAddress = this.senderAddress;
        const registerSessionMsg = {
            typeUrl: "/agent.v1.MsgRegisterSession",
            value: tx_1.MsgRegisterSession.fromPartial({
                account: senderAddress,
                sessionId,
                // modelName,
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
    async submitPayment(
    // account: string,
    sessionId, signature, payment) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBZ0U7QUFDaEUsK0NBUTBCO0FBQzFCLDJEQUFtRTtBQUNuRSxxQ0FBOEM7QUFDOUMsbUNBQXdEO0FBQ3hELDRDQVU2QjtBQUc3Qix1Q0FBZ0U7QUFZaEUsMERBQTBEO0FBQzFELDJDQUF3QztBQUN4QywrQ0FBeUM7QUFTekMsU0FBUyxZQUFZO0lBQ25CLE9BQU8sSUFBSSx3QkFBUSxDQUFDO1FBQ2xCLEdBQUcsK0JBQW9CO1FBQ3ZCLENBQUMsMkJBQTJCLEVBQUUsb0JBQWUsQ0FBQztRQUM5QyxvREFBb0Q7UUFDcEQsQ0FBQyxxQ0FBcUMsRUFBRSw4QkFBeUIsQ0FBQztRQUNsRSxDQUFDLDhCQUE4QixFQUFFLHVCQUFrQixDQUFDO1FBQ3BELENBQUMsNEJBQTRCLEVBQUUscUJBQWdCLENBQUM7UUFDaEQsQ0FBQyxlQUFlLEVBQUUsUUFBRyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFlRCxNQUFhLFVBQVU7SUFlZCxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUNuQyxRQUFnQixFQUNoQixNQUFxQixFQUNyQixhQUFxQixFQUNyQixPQUEyQixFQUMzQixPQUEwQjtRQUUxQixNQUFNLGFBQWEsR0FBRztZQUNwQixHQUFHLE9BQU87WUFDVixRQUFRLEVBQUUsWUFBWSxFQUFFO1NBQ3pCLENBQUM7UUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsNkJBQVksRUFBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxNQUFNLGFBQWEsR0FBRyxNQUFNLGdDQUFxQixDQUFDLGdCQUFnQixDQUNoRSxRQUFRLEVBQ1IsTUFBTSxFQUNOLGFBQWEsQ0FDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2IsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFD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