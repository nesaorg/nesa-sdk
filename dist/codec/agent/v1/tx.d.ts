import { Params, AgentStatus, AgentModelStatus, TokenPrice, Payment } from "./agent";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial, Exact, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "agent.v1";
export interface MsgUpdateParams {
    authority: string;
    params: Params;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgRegisterInferenceAgent {
    account: string;
    url: string;
    version: Long;
}
export interface MsgRegisterInferenceAgentResponse {
}
export interface MsgUpdateInferenceAgent {
    account: string;
    url?: string;
    version?: Long;
    status?: AgentStatus;
}
export interface MsgUpdateInferenceAgentResponse {
}
export interface MsgRegisterAgentModel {
    account: string;
    modelName: string[];
    lock: Long[];
}
export interface MsgRegisterAgentModelResponse {
}
export interface MsgUpdateAgentModel {
    account: string;
    modelName: string[];
    lock: Long[];
    status: AgentModelStatus;
}
export interface MsgUpdateAgentModelResponse {
}
export interface VRF {
    seed: Uint8Array;
    proof: Uint8Array;
    hashRandom: Uint8Array;
}
export interface MsgRegisterSession {
    sessionId: string;
    account: string;
    modelName: string;
    lockBalance: Coin;
    vrf: VRF;
    tokenPrice: TokenPrice;
}
export interface MsgRegisterSessionResponse {
    account: string;
    modelName: string;
}
export interface MsgCancelSession {
    sessionId: string;
    account: string;
}
export interface MsgCancelSessionResponse {
}
export interface MsgSubmitPayment {
    account: string;
    sessionId: string;
    payment?: Payment;
    signature: Uint8Array;
}
export interface MsgSubmitPaymentResponse {
}
export interface MsgDeleteExpiredSession {
    account: string;
    sessionId: string;
}
export interface MsgDeleteExpiredSessionResponse {
}
export interface MsgSubmitChallengeCID {
    account: string;
    sessionId: string;
    cid: string;
}
export interface MsgSubmitChallengeCIDResponse {
}
export interface MsgSubmitChallengeReply {
    account: string;
    sessionId: string;
    hash: Uint8Array;
}
export interface MsgSubmitChallengeReplyResponse {
}
export interface MsgSubmitChallengeMerkleTree {
    account: string;
    sessionId: string;
    answerHash: Uint8Array;
    merkleTree: Uint8Array[];
}
export interface MsgSubmitChallengeMerkleTreeResponse {
}
export interface MsgSubmitChallengeOriginHash {
    account: string;
    sessionId: string;
    hash: Uint8Array;
}
export interface MsgSubmitChallengeOriginHashResponse {
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
export declare const MsgRegisterInferenceAgent: {
    typeUrl: string;
    encode(message: MsgRegisterInferenceAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInferenceAgent;
    fromJSON(object: any): MsgRegisterInferenceAgent;
    toJSON(message: MsgRegisterInferenceAgent): JsonSafe<MsgRegisterInferenceAgent>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterInferenceAgent>, I>>(object: I): MsgRegisterInferenceAgent;
};
export declare const MsgRegisterInferenceAgentResponse: {
    typeUrl: string;
    encode(_: MsgRegisterInferenceAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInferenceAgentResponse;
    fromJSON(_: any): MsgRegisterInferenceAgentResponse;
    toJSON(_: MsgRegisterInferenceAgentResponse): JsonSafe<MsgRegisterInferenceAgentResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterInferenceAgentResponse>, I>>(_: I): MsgRegisterInferenceAgentResponse;
};
export declare const MsgUpdateInferenceAgent: {
    typeUrl: string;
    encode(message: MsgUpdateInferenceAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInferenceAgent;
    fromJSON(object: any): MsgUpdateInferenceAgent;
    toJSON(message: MsgUpdateInferenceAgent): JsonSafe<MsgUpdateInferenceAgent>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateInferenceAgent>, I>>(object: I): MsgUpdateInferenceAgent;
};
export declare const MsgUpdateInferenceAgentResponse: {
    typeUrl: string;
    encode(_: MsgUpdateInferenceAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInferenceAgentResponse;
    fromJSON(_: any): MsgUpdateInferenceAgentResponse;
    toJSON(_: MsgUpdateInferenceAgentResponse): JsonSafe<MsgUpdateInferenceAgentResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateInferenceAgentResponse>, I>>(_: I): MsgUpdateInferenceAgentResponse;
};
export declare const MsgRegisterAgentModel: {
    typeUrl: string;
    encode(message: MsgRegisterAgentModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAgentModel;
    fromJSON(object: any): MsgRegisterAgentModel;
    toJSON(message: MsgRegisterAgentModel): JsonSafe<MsgRegisterAgentModel>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterAgentModel>, I>>(object: I): MsgRegisterAgentModel;
};
export declare const MsgRegisterAgentModelResponse: {
    typeUrl: string;
    encode(_: MsgRegisterAgentModelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAgentModelResponse;
    fromJSON(_: any): MsgRegisterAgentModelResponse;
    toJSON(_: MsgRegisterAgentModelResponse): JsonSafe<MsgRegisterAgentModelResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterAgentModelResponse>, I>>(_: I): MsgRegisterAgentModelResponse;
};
export declare const MsgUpdateAgentModel: {
    typeUrl: string;
    encode(message: MsgUpdateAgentModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgentModel;
    fromJSON(object: any): MsgUpdateAgentModel;
    toJSON(message: MsgUpdateAgentModel): JsonSafe<MsgUpdateAgentModel>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateAgentModel>, I>>(object: I): MsgUpdateAgentModel;
};
export declare const MsgUpdateAgentModelResponse: {
    typeUrl: string;
    encode(_: MsgUpdateAgentModelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgentModelResponse;
    fromJSON(_: any): MsgUpdateAgentModelResponse;
    toJSON(_: MsgUpdateAgentModelResponse): JsonSafe<MsgUpdateAgentModelResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateAgentModelResponse>, I>>(_: I): MsgUpdateAgentModelResponse;
};
export declare const VRF: {
    typeUrl: string;
    encode(message: VRF, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VRF;
    fromJSON(object: any): VRF;
    toJSON(message: VRF): JsonSafe<VRF>;
    fromPartial<I extends Exact<DeepPartial<VRF>, I>>(object: I): VRF;
};
export declare const MsgRegisterSession: {
    typeUrl: string;
    encode(message: MsgRegisterSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterSession;
    fromJSON(object: any): MsgRegisterSession;
    toJSON(message: MsgRegisterSession): JsonSafe<MsgRegisterSession>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterSession>, I>>(object: I): MsgRegisterSession;
};
export declare const MsgRegisterSessionResponse: {
    typeUrl: string;
    encode(message: MsgRegisterSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterSessionResponse;
    fromJSON(object: any): MsgRegisterSessionResponse;
    toJSON(message: MsgRegisterSessionResponse): JsonSafe<MsgRegisterSessionResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterSessionResponse>, I>>(object: I): MsgRegisterSessionResponse;
};
export declare const MsgCancelSession: {
    typeUrl: string;
    encode(message: MsgCancelSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSession;
    fromJSON(object: any): MsgCancelSession;
    toJSON(message: MsgCancelSession): JsonSafe<MsgCancelSession>;
    fromPartial<I extends Exact<DeepPartial<MsgCancelSession>, I>>(object: I): MsgCancelSession;
};
export declare const MsgCancelSessionResponse: {
    typeUrl: string;
    encode(_: MsgCancelSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSessionResponse;
    fromJSON(_: any): MsgCancelSessionResponse;
    toJSON(_: MsgCancelSessionResponse): JsonSafe<MsgCancelSessionResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgCancelSessionResponse>, I>>(_: I): MsgCancelSessionResponse;
};
export declare const MsgSubmitPayment: {
    typeUrl: string;
    encode(message: MsgSubmitPayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitPayment;
    fromJSON(object: any): MsgSubmitPayment;
    toJSON(message: MsgSubmitPayment): JsonSafe<MsgSubmitPayment>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitPayment>, I>>(object: I): MsgSubmitPayment;
};
export declare const MsgSubmitPaymentResponse: {
    typeUrl: string;
    encode(_: MsgSubmitPaymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitPaymentResponse;
    fromJSON(_: any): MsgSubmitPaymentResponse;
    toJSON(_: MsgSubmitPaymentResponse): JsonSafe<MsgSubmitPaymentResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitPaymentResponse>, I>>(_: I): MsgSubmitPaymentResponse;
};
export declare const MsgDeleteExpiredSession: {
    typeUrl: string;
    encode(message: MsgDeleteExpiredSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteExpiredSession;
    fromJSON(object: any): MsgDeleteExpiredSession;
    toJSON(message: MsgDeleteExpiredSession): JsonSafe<MsgDeleteExpiredSession>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteExpiredSession>, I>>(object: I): MsgDeleteExpiredSession;
};
export declare const MsgDeleteExpiredSessionResponse: {
    typeUrl: string;
    encode(_: MsgDeleteExpiredSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteExpiredSessionResponse;
    fromJSON(_: any): MsgDeleteExpiredSessionResponse;
    toJSON(_: MsgDeleteExpiredSessionResponse): JsonSafe<MsgDeleteExpiredSessionResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteExpiredSessionResponse>, I>>(_: I): MsgDeleteExpiredSessionResponse;
};
export declare const MsgSubmitChallengeCID: {
    typeUrl: string;
    encode(message: MsgSubmitChallengeCID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeCID;
    fromJSON(object: any): MsgSubmitChallengeCID;
    toJSON(message: MsgSubmitChallengeCID): JsonSafe<MsgSubmitChallengeCID>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeCID>, I>>(object: I): MsgSubmitChallengeCID;
};
export declare const MsgSubmitChallengeCIDResponse: {
    typeUrl: string;
    encode(_: MsgSubmitChallengeCIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeCIDResponse;
    fromJSON(_: any): MsgSubmitChallengeCIDResponse;
    toJSON(_: MsgSubmitChallengeCIDResponse): JsonSafe<MsgSubmitChallengeCIDResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeCIDResponse>, I>>(_: I): MsgSubmitChallengeCIDResponse;
};
export declare const MsgSubmitChallengeReply: {
    typeUrl: string;
    encode(message: MsgSubmitChallengeReply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeReply;
    fromJSON(object: any): MsgSubmitChallengeReply;
    toJSON(message: MsgSubmitChallengeReply): JsonSafe<MsgSubmitChallengeReply>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeReply>, I>>(object: I): MsgSubmitChallengeReply;
};
export declare const MsgSubmitChallengeReplyResponse: {
    typeUrl: string;
    encode(_: MsgSubmitChallengeReplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeReplyResponse;
    fromJSON(_: any): MsgSubmitChallengeReplyResponse;
    toJSON(_: MsgSubmitChallengeReplyResponse): JsonSafe<MsgSubmitChallengeReplyResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeReplyResponse>, I>>(_: I): MsgSubmitChallengeReplyResponse;
};
export declare const MsgSubmitChallengeMerkleTree: {
    typeUrl: string;
    encode(message: MsgSubmitChallengeMerkleTree, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeMerkleTree;
    fromJSON(object: any): MsgSubmitChallengeMerkleTree;
    toJSON(message: MsgSubmitChallengeMerkleTree): JsonSafe<MsgSubmitChallengeMerkleTree>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeMerkleTree>, I>>(object: I): MsgSubmitChallengeMerkleTree;
};
export declare const MsgSubmitChallengeMerkleTreeResponse: {
    typeUrl: string;
    encode(_: MsgSubmitChallengeMerkleTreeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeMerkleTreeResponse;
    fromJSON(_: any): MsgSubmitChallengeMerkleTreeResponse;
    toJSON(_: MsgSubmitChallengeMerkleTreeResponse): JsonSafe<MsgSubmitChallengeMerkleTreeResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeMerkleTreeResponse>, I>>(_: I): MsgSubmitChallengeMerkleTreeResponse;
};
export declare const MsgSubmitChallengeOriginHash: {
    typeUrl: string;
    encode(message: MsgSubmitChallengeOriginHash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeOriginHash;
    fromJSON(object: any): MsgSubmitChallengeOriginHash;
    toJSON(message: MsgSubmitChallengeOriginHash): JsonSafe<MsgSubmitChallengeOriginHash>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeOriginHash>, I>>(object: I): MsgSubmitChallengeOriginHash;
};
export declare const MsgSubmitChallengeOriginHashResponse: {
    typeUrl: string;
    encode(_: MsgSubmitChallengeOriginHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeOriginHashResponse;
    fromJSON(_: any): MsgSubmitChallengeOriginHashResponse;
    toJSON(_: MsgSubmitChallengeOriginHashResponse): JsonSafe<MsgSubmitChallengeOriginHashResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeOriginHashResponse>, I>>(_: I): MsgSubmitChallengeOriginHashResponse;
};
export interface Msg {
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /** RegisterInferenceAgent defines a method to register an inference agent to the chain. */
    RegisterInferenceAgent(request: MsgRegisterInferenceAgent): Promise<MsgRegisterInferenceAgentResponse>;
    /** UpdateInferenceAgent defines a method to update an existing inference agent. */
    UpdateInferenceAgent(request: MsgUpdateInferenceAgent): Promise<MsgUpdateInferenceAgentResponse>;
    /** RegisterAgentModel defines a method to register a batch of models belonging to an agent on the blockchain. */
    RegisterAgentModel(request: MsgRegisterAgentModel): Promise<MsgRegisterAgentModelResponse>;
    /** UpdateAgentModel defines a method to update a batch of existing models. */
    UpdateAgentModel(request: MsgUpdateAgentModel): Promise<MsgUpdateAgentModelResponse>;
    RegisterSession(request: MsgRegisterSession): Promise<MsgRegisterSessionResponse>;
    CancelSession(request: MsgCancelSession): Promise<MsgCancelSessionResponse>;
    SubmitPayment(request: MsgSubmitPayment): Promise<MsgSubmitPaymentResponse>;
    DeleteExpiredSession(request: MsgDeleteExpiredSession): Promise<MsgDeleteExpiredSessionResponse>;
    SubmitChallengeCID(request: MsgSubmitChallengeCID): Promise<MsgSubmitChallengeCIDResponse>;
    SubmitChallengeReply(request: MsgSubmitChallengeReply): Promise<MsgSubmitChallengeReplyResponse>;
    SubmitChallengeMerkleTree(request: MsgSubmitChallengeMerkleTree): Promise<MsgSubmitChallengeMerkleTreeResponse>;
    SubmitChallengeOriginHash(request: MsgSubmitChallengeOriginHash): Promise<MsgSubmitChallengeOriginHashResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    RegisterInferenceAgent(request: MsgRegisterInferenceAgent): Promise<MsgRegisterInferenceAgentResponse>;
    UpdateInferenceAgent(request: MsgUpdateInferenceAgent): Promise<MsgUpdateInferenceAgentResponse>;
    RegisterAgentModel(request: MsgRegisterAgentModel): Promise<MsgRegisterAgentModelResponse>;
    UpdateAgentModel(request: MsgUpdateAgentModel): Promise<MsgUpdateAgentModelResponse>;
    RegisterSession(request: MsgRegisterSession): Promise<MsgRegisterSessionResponse>;
    CancelSession(request: MsgCancelSession): Promise<MsgCancelSessionResponse>;
    SubmitPayment(request: MsgSubmitPayment): Promise<MsgSubmitPaymentResponse>;
    DeleteExpiredSession(request: MsgDeleteExpiredSession): Promise<MsgDeleteExpiredSessionResponse>;
    SubmitChallengeCID(request: MsgSubmitChallengeCID): Promise<MsgSubmitChallengeCIDResponse>;
    SubmitChallengeReply(request: MsgSubmitChallengeReply): Promise<MsgSubmitChallengeReplyResponse>;
    SubmitChallengeMerkleTree(request: MsgSubmitChallengeMerkleTree): Promise<MsgSubmitChallengeMerkleTreeResponse>;
    SubmitChallengeOriginHash(request: MsgSubmitChallengeOriginHash): Promise<MsgSubmitChallengeOriginHashResponse>;
}
