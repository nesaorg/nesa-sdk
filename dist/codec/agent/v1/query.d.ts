import { AgentModelStatus, SessionStatus, Params, InferenceAgent, AgentModel, Session } from "./agent";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, DeepPartial, Exact, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "agent.v1";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export interface QueryInferenceAgentRequest {
    account: string;
    modelName: string;
    limit: Long;
    key: Uint8Array;
}
export interface QueryInferenceAgentResponse {
    inferenceAgent?: InferenceAgent;
    agentModels: AgentModel[];
    nextKey: Uint8Array;
}
export interface QueryAgentByModelRequest {
    modelName: string;
    status: AgentModelStatus;
}
export interface ModelAgents {
    modelName: string;
    inferenceAgents: InferenceAgent[];
}
export interface QueryAgentByModelResponse {
    modelAgents: ModelAgents[];
}
export interface QuerySessionRequest {
    id: string;
}
export interface QuerySessionResponse {
    session?: Session;
}
export interface QuerySessionByAgentRequest {
    account: string;
    status?: SessionStatus;
    expireTime: Timestamp;
    limit: Long;
    orderDesc: boolean;
    key: Uint8Array;
}
export interface QuerySessionByAgentResponse {
    sessions: Session[];
    nextKey: Uint8Array;
}
export interface QuerySessionByChallengeRequest {
    account: string;
    limit: Long;
    key: Uint8Array;
}
export interface SessionIdStatus {
    sessionId: string;
    status: SessionStatus;
}
export interface QuerySessionByChallengeResponse {
    sesssionIdStatus: SessionIdStatus[];
    nextKey: Uint8Array;
}
export interface QueryVRFSeedRequest {
    account: string;
}
export interface QueryVRFSeedResponse {
    seed: Uint8Array;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse;
};
export declare const QueryInferenceAgentRequest: {
    typeUrl: string;
    encode(message: QueryInferenceAgentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInferenceAgentRequest;
    fromJSON(object: any): QueryInferenceAgentRequest;
    toJSON(message: QueryInferenceAgentRequest): JsonSafe<QueryInferenceAgentRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentRequest>, I>>(object: I): QueryInferenceAgentRequest;
};
export declare const QueryInferenceAgentResponse: {
    typeUrl: string;
    encode(message: QueryInferenceAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInferenceAgentResponse;
    fromJSON(object: any): QueryInferenceAgentResponse;
    toJSON(message: QueryInferenceAgentResponse): JsonSafe<QueryInferenceAgentResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentResponse>, I>>(object: I): QueryInferenceAgentResponse;
};
export declare const QueryAgentByModelRequest: {
    typeUrl: string;
    encode(message: QueryAgentByModelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentByModelRequest;
    fromJSON(object: any): QueryAgentByModelRequest;
    toJSON(message: QueryAgentByModelRequest): JsonSafe<QueryAgentByModelRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAgentByModelRequest>, I>>(object: I): QueryAgentByModelRequest;
};
export declare const ModelAgents: {
    typeUrl: string;
    encode(message: ModelAgents, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModelAgents;
    fromJSON(object: any): ModelAgents;
    toJSON(message: ModelAgents): JsonSafe<ModelAgents>;
    fromPartial<I extends Exact<DeepPartial<ModelAgents>, I>>(object: I): ModelAgents;
};
export declare const QueryAgentByModelResponse: {
    typeUrl: string;
    encode(message: QueryAgentByModelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentByModelResponse;
    fromJSON(object: any): QueryAgentByModelResponse;
    toJSON(message: QueryAgentByModelResponse): JsonSafe<QueryAgentByModelResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAgentByModelResponse>, I>>(object: I): QueryAgentByModelResponse;
};
export declare const QuerySessionRequest: {
    typeUrl: string;
    encode(message: QuerySessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionRequest;
    fromJSON(object: any): QuerySessionRequest;
    toJSON(message: QuerySessionRequest): JsonSafe<QuerySessionRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySessionRequest>, I>>(object: I): QuerySessionRequest;
};
export declare const QuerySessionResponse: {
    typeUrl: string;
    encode(message: QuerySessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionResponse;
    fromJSON(object: any): QuerySessionResponse;
    toJSON(message: QuerySessionResponse): JsonSafe<QuerySessionResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySessionResponse>, I>>(object: I): QuerySessionResponse;
};
export declare const QuerySessionByAgentRequest: {
    typeUrl: string;
    encode(message: QuerySessionByAgentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionByAgentRequest;
    fromJSON(object: any): QuerySessionByAgentRequest;
    toJSON(message: QuerySessionByAgentRequest): JsonSafe<QuerySessionByAgentRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySessionByAgentRequest>, I>>(object: I): QuerySessionByAgentRequest;
};
export declare const QuerySessionByAgentResponse: {
    typeUrl: string;
    encode(message: QuerySessionByAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionByAgentResponse;
    fromJSON(object: any): QuerySessionByAgentResponse;
    toJSON(message: QuerySessionByAgentResponse): JsonSafe<QuerySessionByAgentResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySessionByAgentResponse>, I>>(object: I): QuerySessionByAgentResponse;
};
export declare const QuerySessionByChallengeRequest: {
    typeUrl: string;
    encode(message: QuerySessionByChallengeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionByChallengeRequest;
    fromJSON(object: any): QuerySessionByChallengeRequest;
    toJSON(message: QuerySessionByChallengeRequest): JsonSafe<QuerySessionByChallengeRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySessionByChallengeRequest>, I>>(object: I): QuerySessionByChallengeRequest;
};
export declare const SessionIdStatus: {
    typeUrl: string;
    encode(message: SessionIdStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SessionIdStatus;
    fromJSON(object: any): SessionIdStatus;
    toJSON(message: SessionIdStatus): JsonSafe<SessionIdStatus>;
    fromPartial<I extends Exact<DeepPartial<SessionIdStatus>, I>>(object: I): SessionIdStatus;
};
export declare const QuerySessionByChallengeResponse: {
    typeUrl: string;
    encode(message: QuerySessionByChallengeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionByChallengeResponse;
    fromJSON(object: any): QuerySessionByChallengeResponse;
    toJSON(message: QuerySessionByChallengeResponse): JsonSafe<QuerySessionByChallengeResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySessionByChallengeResponse>, I>>(object: I): QuerySessionByChallengeResponse;
};
export declare const QueryVRFSeedRequest: {
    typeUrl: string;
    encode(message: QueryVRFSeedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVRFSeedRequest;
    fromJSON(object: any): QueryVRFSeedRequest;
    toJSON(message: QueryVRFSeedRequest): JsonSafe<QueryVRFSeedRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryVRFSeedRequest>, I>>(object: I): QueryVRFSeedRequest;
};
export declare const QueryVRFSeedResponse: {
    typeUrl: string;
    encode(message: QueryVRFSeedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVRFSeedResponse;
    fromJSON(object: any): QueryVRFSeedResponse;
    toJSON(message: QueryVRFSeedResponse): JsonSafe<QueryVRFSeedResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryVRFSeedResponse>, I>>(object: I): QueryVRFSeedResponse;
};
export interface Query {
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    InferenceAgentRequest(request: QueryInferenceAgentRequest): Promise<QueryInferenceAgentResponse>;
    AgentByModelRequest(request: QueryAgentByModelRequest): Promise<QueryAgentByModelResponse>;
    SessionRequest(request: QuerySessionRequest): Promise<QuerySessionResponse>;
    SessionByAgentRequest(request: QuerySessionByAgentRequest): Promise<QuerySessionByAgentResponse>;
    SessionByChallengeRequest(request: QuerySessionByChallengeRequest): Promise<QuerySessionByChallengeResponse>;
    VRFSeedRequest(request: QueryVRFSeedRequest): Promise<QueryVRFSeedResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    InferenceAgentRequest(request: QueryInferenceAgentRequest): Promise<QueryInferenceAgentResponse>;
    AgentByModelRequest(request: QueryAgentByModelRequest): Promise<QueryAgentByModelResponse>;
    SessionRequest(request: QuerySessionRequest): Promise<QuerySessionResponse>;
    SessionByAgentRequest(request: QuerySessionByAgentRequest): Promise<QuerySessionByAgentResponse>;
    SessionByChallengeRequest(request: QuerySessionByChallengeRequest): Promise<QuerySessionByChallengeResponse>;
    VRFSeedRequest(request: QueryVRFSeedRequest): Promise<QueryVRFSeedResponse>;
}
