import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { InferenceType, Availability, Orchestrator } from "./orchestrator";
import { Params } from "./params";
import { Model } from "./model";
import { ModelBlock } from "./model_block";
import { Node } from "./node";
import { Miner } from "./miner";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, Rpc } from "../../helpers";
export declare const protobufPackage = "dht.v1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryGetModelRequest {
    modelName: string;
}
export interface QueryGetModelResponse {
    model?: Model;
}
export interface QueryGetModelBlocksRequest {
    modelName: string;
    pagination?: PageRequest;
}
export interface QueryGetModelBlocksResponse {
    blocks: ModelBlock[];
    pagination?: PageResponse;
}
export interface QueryGetNodeRequest {
    nodeId: string;
}
export interface QueryGetNodeResponse {
    node?: Node;
}
export interface QueryGetMinerRequest {
    nodeId: string;
}
export interface QueryGetMinerResponse {
    miner?: Miner;
    node?: Node;
}
export interface QueryGetOrchestratorRequest {
    nodeId: string;
}
export interface QueryGetOrchestratorResponse {
    orchestrator?: Orchestrator;
    node?: Node;
}
export interface QueryGetOrchestratorsByParamsRequest {
    inferenceType: InferenceType;
    availability: Availability;
    limit: number;
    key: Uint8Array;
}
export interface QueryGetOrchestratorsByParamsResponse {
    orchestrators: Orchestrator[];
    nextKey: Uint8Array;
}
export interface QueryGetAllOrchestratorRequest {
    pagination?: PageRequest;
}
export interface QueryGetAllOrchestratorResponse {
    orchestrators: Orchestrator[];
    pagination?: PageResponse;
}
export interface QueryGetOrchestratorHeartbeatRequest {
    nodeId: string;
}
export interface QueryGetOrchestratorHeartbeatResponse {
    timestamp: number;
}
export interface QueryGetMinerHeartbeatRequest {
    nodeId: string;
}
export interface QueryGetMinerHeartbeatResponse {
    timestamp: number;
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
export declare const QueryGetModelRequest: {
    typeUrl: string;
    encode(message: QueryGetModelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetModelRequest;
    fromJSON(object: any): QueryGetModelRequest;
    toJSON(message: QueryGetModelRequest): JsonSafe<QueryGetModelRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetModelRequest>, I>>(object: I): QueryGetModelRequest;
};
export declare const QueryGetModelResponse: {
    typeUrl: string;
    encode(message: QueryGetModelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetModelResponse;
    fromJSON(object: any): QueryGetModelResponse;
    toJSON(message: QueryGetModelResponse): JsonSafe<QueryGetModelResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetModelResponse>, I>>(object: I): QueryGetModelResponse;
};
export declare const QueryGetModelBlocksRequest: {
    typeUrl: string;
    encode(message: QueryGetModelBlocksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetModelBlocksRequest;
    fromJSON(object: any): QueryGetModelBlocksRequest;
    toJSON(message: QueryGetModelBlocksRequest): JsonSafe<QueryGetModelBlocksRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetModelBlocksRequest>, I>>(object: I): QueryGetModelBlocksRequest;
};
export declare const QueryGetModelBlocksResponse: {
    typeUrl: string;
    encode(message: QueryGetModelBlocksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetModelBlocksResponse;
    fromJSON(object: any): QueryGetModelBlocksResponse;
    toJSON(message: QueryGetModelBlocksResponse): JsonSafe<QueryGetModelBlocksResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetModelBlocksResponse>, I>>(object: I): QueryGetModelBlocksResponse;
};
export declare const QueryGetNodeRequest: {
    typeUrl: string;
    encode(message: QueryGetNodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeRequest;
    fromJSON(object: any): QueryGetNodeRequest;
    toJSON(message: QueryGetNodeRequest): JsonSafe<QueryGetNodeRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetNodeRequest>, I>>(object: I): QueryGetNodeRequest;
};
export declare const QueryGetNodeResponse: {
    typeUrl: string;
    encode(message: QueryGetNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeResponse;
    fromJSON(object: any): QueryGetNodeResponse;
    toJSON(message: QueryGetNodeResponse): JsonSafe<QueryGetNodeResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetNodeResponse>, I>>(object: I): QueryGetNodeResponse;
};
export declare const QueryGetMinerRequest: {
    typeUrl: string;
    encode(message: QueryGetMinerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerRequest;
    fromJSON(object: any): QueryGetMinerRequest;
    toJSON(message: QueryGetMinerRequest): JsonSafe<QueryGetMinerRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetMinerRequest>, I>>(object: I): QueryGetMinerRequest;
};
export declare const QueryGetMinerResponse: {
    typeUrl: string;
    encode(message: QueryGetMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerResponse;
    fromJSON(object: any): QueryGetMinerResponse;
    toJSON(message: QueryGetMinerResponse): JsonSafe<QueryGetMinerResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetMinerResponse>, I>>(object: I): QueryGetMinerResponse;
};
export declare const QueryGetOrchestratorRequest: {
    typeUrl: string;
    encode(message: QueryGetOrchestratorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorRequest;
    fromJSON(object: any): QueryGetOrchestratorRequest;
    toJSON(message: QueryGetOrchestratorRequest): JsonSafe<QueryGetOrchestratorRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorRequest>, I>>(object: I): QueryGetOrchestratorRequest;
};
export declare const QueryGetOrchestratorResponse: {
    typeUrl: string;
    encode(message: QueryGetOrchestratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorResponse;
    fromJSON(object: any): QueryGetOrchestratorResponse;
    toJSON(message: QueryGetOrchestratorResponse): JsonSafe<QueryGetOrchestratorResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorResponse>, I>>(object: I): QueryGetOrchestratorResponse;
};
export declare const QueryGetOrchestratorsByParamsRequest: {
    typeUrl: string;
    encode(message: QueryGetOrchestratorsByParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorsByParamsRequest;
    fromJSON(object: any): QueryGetOrchestratorsByParamsRequest;
    toJSON(message: QueryGetOrchestratorsByParamsRequest): JsonSafe<QueryGetOrchestratorsByParamsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorsByParamsRequest>, I>>(object: I): QueryGetOrchestratorsByParamsRequest;
};
export declare const QueryGetOrchestratorsByParamsResponse: {
    typeUrl: string;
    encode(message: QueryGetOrchestratorsByParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorsByParamsResponse;
    fromJSON(object: any): QueryGetOrchestratorsByParamsResponse;
    toJSON(message: QueryGetOrchestratorsByParamsResponse): JsonSafe<QueryGetOrchestratorsByParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorsByParamsResponse>, I>>(object: I): QueryGetOrchestratorsByParamsResponse;
};
export declare const QueryGetAllOrchestratorRequest: {
    typeUrl: string;
    encode(message: QueryGetAllOrchestratorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllOrchestratorRequest;
    fromJSON(object: any): QueryGetAllOrchestratorRequest;
    toJSON(message: QueryGetAllOrchestratorRequest): JsonSafe<QueryGetAllOrchestratorRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllOrchestratorRequest>, I>>(object: I): QueryGetAllOrchestratorRequest;
};
export declare const QueryGetAllOrchestratorResponse: {
    typeUrl: string;
    encode(message: QueryGetAllOrchestratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllOrchestratorResponse;
    fromJSON(object: any): QueryGetAllOrchestratorResponse;
    toJSON(message: QueryGetAllOrchestratorResponse): JsonSafe<QueryGetAllOrchestratorResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllOrchestratorResponse>, I>>(object: I): QueryGetAllOrchestratorResponse;
};
export declare const QueryGetOrchestratorHeartbeatRequest: {
    typeUrl: string;
    encode(message: QueryGetOrchestratorHeartbeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorHeartbeatRequest;
    fromJSON(object: any): QueryGetOrchestratorHeartbeatRequest;
    toJSON(message: QueryGetOrchestratorHeartbeatRequest): JsonSafe<QueryGetOrchestratorHeartbeatRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorHeartbeatRequest>, I>>(object: I): QueryGetOrchestratorHeartbeatRequest;
};
export declare const QueryGetOrchestratorHeartbeatResponse: {
    typeUrl: string;
    encode(message: QueryGetOrchestratorHeartbeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorHeartbeatResponse;
    fromJSON(object: any): QueryGetOrchestratorHeartbeatResponse;
    toJSON(message: QueryGetOrchestratorHeartbeatResponse): JsonSafe<QueryGetOrchestratorHeartbeatResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorHeartbeatResponse>, I>>(object: I): QueryGetOrchestratorHeartbeatResponse;
};
export declare const QueryGetMinerHeartbeatRequest: {
    typeUrl: string;
    encode(message: QueryGetMinerHeartbeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerHeartbeatRequest;
    fromJSON(object: any): QueryGetMinerHeartbeatRequest;
    toJSON(message: QueryGetMinerHeartbeatRequest): JsonSafe<QueryGetMinerHeartbeatRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetMinerHeartbeatRequest>, I>>(object: I): QueryGetMinerHeartbeatRequest;
};
export declare const QueryGetMinerHeartbeatResponse: {
    typeUrl: string;
    encode(message: QueryGetMinerHeartbeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerHeartbeatResponse;
    fromJSON(object: any): QueryGetMinerHeartbeatResponse;
    toJSON(message: QueryGetMinerHeartbeatResponse): JsonSafe<QueryGetMinerHeartbeatResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetMinerHeartbeatResponse>, I>>(object: I): QueryGetMinerHeartbeatResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    GetModel(request: QueryGetModelRequest): Promise<QueryGetModelResponse>;
    /** Queries a list of GetModelBlocks items. */
    GetModelBlocks(request: QueryGetModelBlocksRequest): Promise<QueryGetModelBlocksResponse>;
    /** Queries a list of GetNode items. */
    GetNode(request: QueryGetNodeRequest): Promise<QueryGetNodeResponse>;
    /** Queries a list of GetMiner items. */
    GetMiner(request: QueryGetMinerRequest): Promise<QueryGetMinerResponse>;
    /** Queries a list of GetOrchestrator items. */
    GetOrchestrator(request: QueryGetOrchestratorRequest): Promise<QueryGetOrchestratorResponse>;
    GetAllOrchestrator(request?: QueryGetAllOrchestratorRequest): Promise<QueryGetAllOrchestratorResponse>;
    GetOrchestratorsByParams(request: QueryGetOrchestratorsByParamsRequest): Promise<QueryGetOrchestratorsByParamsResponse>;
    /** Queries a list of GetOrchestratorHeartbeat items. */
    GetOrchestratorHeartbeat(request: QueryGetOrchestratorHeartbeatRequest): Promise<QueryGetOrchestratorHeartbeatResponse>;
    /** Queries a list of GetMinerHeartbeat items. */
    GetMinerHeartbeat(request: QueryGetMinerHeartbeatRequest): Promise<QueryGetMinerHeartbeatResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    GetModel(request: QueryGetModelRequest): Promise<QueryGetModelResponse>;
    GetModelBlocks(request: QueryGetModelBlocksRequest): Promise<QueryGetModelBlocksResponse>;
    GetNode(request: QueryGetNodeRequest): Promise<QueryGetNodeResponse>;
    GetMiner(request: QueryGetMinerRequest): Promise<QueryGetMinerResponse>;
    GetOrchestrator(request: QueryGetOrchestratorRequest): Promise<QueryGetOrchestratorResponse>;
    GetAllOrchestrator(request?: QueryGetAllOrchestratorRequest): Promise<QueryGetAllOrchestratorResponse>;
    GetOrchestratorsByParams(request: QueryGetOrchestratorsByParamsRequest): Promise<QueryGetOrchestratorsByParamsResponse>;
    GetOrchestratorHeartbeat(request: QueryGetOrchestratorHeartbeatRequest): Promise<QueryGetOrchestratorHeartbeatResponse>;
    GetMinerHeartbeat(request: QueryGetMinerHeartbeatRequest): Promise<QueryGetMinerHeartbeatResponse>;
}
