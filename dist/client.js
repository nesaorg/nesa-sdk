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
    // private signResultByModel: { [modelName: string]: any } = {};
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
        this.sign = signingClient;
        console.log("nesa client - modelName", modelName);
        // if (modelName) {
        //   this.signByModel[modelName] = signingClient;
        // }
        this.tm = tmClient;
        // if (modelName) {
        //   this.tmByModel[modelName] = tmClient;
        // }
        this.query = stargate_1.QueryClient.withExtensions(tmClient, queries_1.setupAgentExtension);
        // if (modelName) {
        //   this.queryByModel[modelName] = QueryClient.withExtensions(
        //     tmClient,
        //     setupAgentExtension
        //   );
        // }
        this.senderAddress = senderAddress;
        // if (modelName) {
        //   this.senderAddressByModel[modelName] = senderAddress;
        // }
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
        console.log("broadcastRegisterSession modelName", modelName);
        // if (!modelName) {
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
        //   return;
        // }
        // if (!this.signResultByModel[modelName]) {
        //   return new Error("Please sign first");
        // }
        // if (this.broadcastPromiseByModel[modelName]) {
        //   return this.broadcastPromiseByModel[modelName];
        // }
        // this.broadcastPromiseByModel[modelName] = new Promise((resolve, reject) => {
        //   this.sign
        //     .broadcastTx(
        //       Uint8Array.from(
        //         TxRaw.encode(this.signResultByModel[modelName]).finish()
        //       )
        //     )
        //     .then((result) => {
        //       if (isDeliverTxFailure(result)) {
        //         reject(new Error(createDeliverTxFailureMessage(result)));
        //       } else {
        //         resolve({
        //           events: result.events,
        //           transactionHash: result.transactionHash,
        //           height: result.height,
        //           account: MsgRegisterSessionResponse.decode(
        //             result.msgResponses[0]?.value
        //           ).account,
        //         });
        //       }
        //     })
        //     .catch((error) => {
        //       reject(error);
        //     });
        // });
    }
    async signRegisterSession(sessionId, modelName, fee, lockBalance, vrf) {
        // if (!modelName) {
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
        // }
        // this.logger.verbose(`Register Session`);
        // const senderAddress = this.senderAddressByModel[modelName];
        // const registerSessionMsg = {
        //   typeUrl: "/agent.v1.MsgRegisterSession",
        //   value: MsgRegisterSession.fromPartial({
        //     account: senderAddress,
        //     sessionId,
        //     modelName,
        //     lockBalance,
        //     vrf,
        //   }),
        // };
        // const signResult = await this.signByModel[modelName]?.sign(
        //   senderAddress,
        //   [registerSessionMsg],
        //   fee,
        //   ""
        // );
        // this.signResultByModel[modelName] = signResult;
        // const hex = Buffer.from(
        //   Uint8Array.from(TxRaw.encode(this.signResultByModel[modelName]).finish())
        // ).toString("hex");
        // this.broadcastPromiseByModel[modelName] = undefined;
        // this.broadcastRegisterSession(modelName);
        // return {
        //   sessionId,
        //   transactionHash: toHex(sha256(Buffer.from(hex, "hex"))).toUpperCase(),
        // };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBZ0U7QUFDaEUsK0NBUTBCO0FBQzFCLDJEQUFtRTtBQUNuRSxxQ0FBOEM7QUFDOUMsbUNBQXdEO0FBQ3hELDRDQU82QjtBQUc3Qix1Q0FBZ0U7QUFZaEUsMERBQTBEO0FBQzFELDJDQUF3QztBQUN4QywrQ0FBeUM7QUFTekMsU0FBUyxZQUFZO0lBQ25CLE9BQU8sSUFBSSx3QkFBUSxDQUFDO1FBQ2xCLEdBQUcsK0JBQW9CO1FBQ3ZCLENBQUMsMkJBQTJCLEVBQUUsb0JBQWUsQ0FBQztRQUM5QyxvREFBb0Q7UUFDcEQsQ0FBQyxxQ0FBcUMsRUFBRSw4QkFBeUIsQ0FBQztRQUNsRSxDQUFDLDhCQUE4QixFQUFFLHVCQUFrQixDQUFDO1FBQ3BELENBQUMsNEJBQTRCLEVBQUUscUJBQWdCLENBQUM7UUFDaEQsQ0FBQyxlQUFlLEVBQUUsUUFBRyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFlRCxNQUFhLFVBQVU7SUFzQnJCLGdFQUFnRTtJQUV6RCxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUNuQyxRQUFnQixFQUNoQixNQUFxQixFQUNyQixhQUFxQixFQUNyQixPQUEyQixFQUMzQixPQUEwQixFQUMxQixTQUFrQjtRQUVsQixNQUFNLGFBQWEsR0FBRztZQUNwQixHQUFHLE9BQU87WUFDVixRQUFRLEVBQUUsWUFBWSxFQUFFO1NBQ3pCLENBQUM7UUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsNkJBQVksRUFBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxNQUFNLGFBQWEsR0FBRyxNQUFNLGdDQUFxQixDQUFDLGdCQUFnQixDQUNoRSxRQUFRLEVBQ1IsTUFBTSxFQUNOLGFBQWEsQ0FDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2IsT0FBTyxHQUFHLE1B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