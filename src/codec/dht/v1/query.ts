/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { InferenceType, Availability, Orchestrator, inferenceTypeFromJSON, availabilityFromJSON, inferenceTypeToJSON, availabilityToJSON } from "./orchestrator";
import { Params } from "./params";
import { Model } from "./model";
import { ModelBlock } from "./model_block";
import { Node } from "./node";
import { Miner } from "./miner";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes, Rpc } from "../../helpers";
export const protobufPackage = "dht.v1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/dht.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/dht.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  }
};
function createBaseQueryGetModelRequest(): QueryGetModelRequest {
  return {
    modelName: ""
  };
}
export const QueryGetModelRequest = {
  typeUrl: "/dht.v1.QueryGetModelRequest",
  encode(message: QueryGetModelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelName !== "") {
      writer.uint32(10).string(message.modelName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetModelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetModelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetModelRequest {
    const obj = createBaseQueryGetModelRequest();
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    return obj;
  },
  toJSON(message: QueryGetModelRequest): JsonSafe<QueryGetModelRequest> {
    const obj: any = {};
    message.modelName !== undefined && (obj.modelName = message.modelName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetModelRequest>, I>>(object: I): QueryGetModelRequest {
    const message = createBaseQueryGetModelRequest();
    message.modelName = object.modelName ?? "";
    return message;
  }
};
function createBaseQueryGetModelResponse(): QueryGetModelResponse {
  return {
    model: undefined
  };
}
export const QueryGetModelResponse = {
  typeUrl: "/dht.v1.QueryGetModelResponse",
  encode(message: QueryGetModelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.model !== undefined) {
      Model.encode(message.model, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetModelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetModelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.model = Model.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetModelResponse {
    const obj = createBaseQueryGetModelResponse();
    if (isSet(object.model)) obj.model = Model.fromJSON(object.model);
    return obj;
  },
  toJSON(message: QueryGetModelResponse): JsonSafe<QueryGetModelResponse> {
    const obj: any = {};
    message.model !== undefined && (obj.model = message.model ? Model.toJSON(message.model) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetModelResponse>, I>>(object: I): QueryGetModelResponse {
    const message = createBaseQueryGetModelResponse();
    if (object.model !== undefined && object.model !== null) {
      message.model = Model.fromPartial(object.model);
    }
    return message;
  }
};
function createBaseQueryGetModelBlocksRequest(): QueryGetModelBlocksRequest {
  return {
    modelName: "",
    pagination: undefined
  };
}
export const QueryGetModelBlocksRequest = {
  typeUrl: "/dht.v1.QueryGetModelBlocksRequest",
  encode(message: QueryGetModelBlocksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelName !== "") {
      writer.uint32(10).string(message.modelName);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetModelBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetModelBlocksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modelName = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetModelBlocksRequest {
    const obj = createBaseQueryGetModelBlocksRequest();
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGetModelBlocksRequest): JsonSafe<QueryGetModelBlocksRequest> {
    const obj: any = {};
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetModelBlocksRequest>, I>>(object: I): QueryGetModelBlocksRequest {
    const message = createBaseQueryGetModelBlocksRequest();
    message.modelName = object.modelName ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  }
};
function createBaseQueryGetModelBlocksResponse(): QueryGetModelBlocksResponse {
  return {
    blocks: [],
    pagination: undefined
  };
}
export const QueryGetModelBlocksResponse = {
  typeUrl: "/dht.v1.QueryGetModelBlocksResponse",
  encode(message: QueryGetModelBlocksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.blocks) {
      ModelBlock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetModelBlocksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetModelBlocksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocks.push(ModelBlock.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetModelBlocksResponse {
    const obj = createBaseQueryGetModelBlocksResponse();
    if (Array.isArray(object?.blocks)) obj.blocks = object.blocks.map((e: any) => ModelBlock.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGetModelBlocksResponse): JsonSafe<QueryGetModelBlocksResponse> {
    const obj: any = {};
    if (message.blocks) {
      obj.blocks = message.blocks.map(e => e ? ModelBlock.toJSON(e) : undefined);
    } else {
      obj.blocks = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetModelBlocksResponse>, I>>(object: I): QueryGetModelBlocksResponse {
    const message = createBaseQueryGetModelBlocksResponse();
    message.blocks = object.blocks?.map(e => ModelBlock.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  }
};
function createBaseQueryGetNodeRequest(): QueryGetNodeRequest {
  return {
    nodeId: ""
  };
}
export const QueryGetNodeRequest = {
  typeUrl: "/dht.v1.QueryGetNodeRequest",
  encode(message: QueryGetNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetNodeRequest {
    const obj = createBaseQueryGetNodeRequest();
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: QueryGetNodeRequest): JsonSafe<QueryGetNodeRequest> {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNodeRequest>, I>>(object: I): QueryGetNodeRequest {
    const message = createBaseQueryGetNodeRequest();
    message.nodeId = object.nodeId ?? "";
    return message;
  }
};
function createBaseQueryGetNodeResponse(): QueryGetNodeResponse {
  return {
    node: undefined
  };
}
export const QueryGetNodeResponse = {
  typeUrl: "/dht.v1.QueryGetNodeResponse",
  encode(message: QueryGetNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.node !== undefined) {
      Node.encode(message.node, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = Node.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetNodeResponse {
    const obj = createBaseQueryGetNodeResponse();
    if (isSet(object.node)) obj.node = Node.fromJSON(object.node);
    return obj;
  },
  toJSON(message: QueryGetNodeResponse): JsonSafe<QueryGetNodeResponse> {
    const obj: any = {};
    message.node !== undefined && (obj.node = message.node ? Node.toJSON(message.node) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNodeResponse>, I>>(object: I): QueryGetNodeResponse {
    const message = createBaseQueryGetNodeResponse();
    if (object.node !== undefined && object.node !== null) {
      message.node = Node.fromPartial(object.node);
    }
    return message;
  }
};
function createBaseQueryGetMinerRequest(): QueryGetMinerRequest {
  return {
    nodeId: ""
  };
}
export const QueryGetMinerRequest = {
  typeUrl: "/dht.v1.QueryGetMinerRequest",
  encode(message: QueryGetMinerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMinerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetMinerRequest {
    const obj = createBaseQueryGetMinerRequest();
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: QueryGetMinerRequest): JsonSafe<QueryGetMinerRequest> {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetMinerRequest>, I>>(object: I): QueryGetMinerRequest {
    const message = createBaseQueryGetMinerRequest();
    message.nodeId = object.nodeId ?? "";
    return message;
  }
};
function createBaseQueryGetMinerResponse(): QueryGetMinerResponse {
  return {
    miner: undefined,
    node: undefined
  };
}
export const QueryGetMinerResponse = {
  typeUrl: "/dht.v1.QueryGetMinerResponse",
  encode(message: QueryGetMinerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.miner !== undefined) {
      Miner.encode(message.miner, writer.uint32(10).fork()).ldelim();
    }
    if (message.node !== undefined) {
      Node.encode(message.node, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMinerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.miner = Miner.decode(reader, reader.uint32());
          break;
        case 2:
          message.node = Node.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetMinerResponse {
    const obj = createBaseQueryGetMinerResponse();
    if (isSet(object.miner)) obj.miner = Miner.fromJSON(object.miner);
    if (isSet(object.node)) obj.node = Node.fromJSON(object.node);
    return obj;
  },
  toJSON(message: QueryGetMinerResponse): JsonSafe<QueryGetMinerResponse> {
    const obj: any = {};
    message.miner !== undefined && (obj.miner = message.miner ? Miner.toJSON(message.miner) : undefined);
    message.node !== undefined && (obj.node = message.node ? Node.toJSON(message.node) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetMinerResponse>, I>>(object: I): QueryGetMinerResponse {
    const message = createBaseQueryGetMinerResponse();
    if (object.miner !== undefined && object.miner !== null) {
      message.miner = Miner.fromPartial(object.miner);
    }
    if (object.node !== undefined && object.node !== null) {
      message.node = Node.fromPartial(object.node);
    }
    return message;
  }
};
function createBaseQueryGetOrchestratorRequest(): QueryGetOrchestratorRequest {
  return {
    nodeId: ""
  };
}
export const QueryGetOrchestratorRequest = {
  typeUrl: "/dht.v1.QueryGetOrchestratorRequest",
  encode(message: QueryGetOrchestratorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrchestratorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrchestratorRequest {
    const obj = createBaseQueryGetOrchestratorRequest();
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: QueryGetOrchestratorRequest): JsonSafe<QueryGetOrchestratorRequest> {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorRequest>, I>>(object: I): QueryGetOrchestratorRequest {
    const message = createBaseQueryGetOrchestratorRequest();
    message.nodeId = object.nodeId ?? "";
    return message;
  }
};
function createBaseQueryGetOrchestratorResponse(): QueryGetOrchestratorResponse {
  return {
    orchestrator: undefined,
    node: undefined
  };
}
export const QueryGetOrchestratorResponse = {
  typeUrl: "/dht.v1.QueryGetOrchestratorResponse",
  encode(message: QueryGetOrchestratorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orchestrator !== undefined) {
      Orchestrator.encode(message.orchestrator, writer.uint32(10).fork()).ldelim();
    }
    if (message.node !== undefined) {
      Node.encode(message.node, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrchestratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestrator = Orchestrator.decode(reader, reader.uint32());
          break;
        case 2:
          message.node = Node.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrchestratorResponse {
    const obj = createBaseQueryGetOrchestratorResponse();
    if (isSet(object.orchestrator)) obj.orchestrator = Orchestrator.fromJSON(object.orchestrator);
    if (isSet(object.node)) obj.node = Node.fromJSON(object.node);
    return obj;
  },
  toJSON(message: QueryGetOrchestratorResponse): JsonSafe<QueryGetOrchestratorResponse> {
    const obj: any = {};
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator ? Orchestrator.toJSON(message.orchestrator) : undefined);
    message.node !== undefined && (obj.node = message.node ? Node.toJSON(message.node) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorResponse>, I>>(object: I): QueryGetOrchestratorResponse {
    const message = createBaseQueryGetOrchestratorResponse();
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = Orchestrator.fromPartial(object.orchestrator);
    }
    if (object.node !== undefined && object.node !== null) {
      message.node = Node.fromPartial(object.node);
    }
    return message;
  }
};
function createBaseQueryGetOrchestratorsByParamsRequest(): QueryGetOrchestratorsByParamsRequest {
  return {
    inferenceType: 0,
    availability: 0,
    limit: 0,
    key: new Uint8Array()
  };
}
export const QueryGetOrchestratorsByParamsRequest = {
  typeUrl: "/dht.v1.QueryGetOrchestratorsByParamsRequest",
  encode(message: QueryGetOrchestratorsByParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inferenceType !== 0) {
      writer.uint32(8).int32(message.inferenceType);
    }
    if (message.availability !== 0) {
      writer.uint32(16).int32(message.availability);
    }
    if (message.limit !== 0) {
      writer.uint32(24).uint32(message.limit);
    }
    if (message.key.length !== 0) {
      writer.uint32(34).bytes(message.key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorsByParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrchestratorsByParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inferenceType = reader.int32() as any;
          break;
        case 2:
          message.availability = reader.int32() as any;
          break;
        case 3:
          message.limit = reader.uint32();
          break;
        case 4:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrchestratorsByParamsRequest {
    const obj = createBaseQueryGetOrchestratorsByParamsRequest();
    if (isSet(object.inferenceType)) obj.inferenceType = inferenceTypeFromJSON(object.inferenceType);
    if (isSet(object.availability)) obj.availability = availabilityFromJSON(object.availability);
    if (isSet(object.limit)) obj.limit = Number(object.limit);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(message: QueryGetOrchestratorsByParamsRequest): JsonSafe<QueryGetOrchestratorsByParamsRequest> {
    const obj: any = {};
    message.inferenceType !== undefined && (obj.inferenceType = inferenceTypeToJSON(message.inferenceType));
    message.availability !== undefined && (obj.availability = availabilityToJSON(message.availability));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorsByParamsRequest>, I>>(object: I): QueryGetOrchestratorsByParamsRequest {
    const message = createBaseQueryGetOrchestratorsByParamsRequest();
    message.inferenceType = object.inferenceType ?? 0;
    message.availability = object.availability ?? 0;
    message.limit = object.limit ?? 0;
    message.key = object.key ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryGetOrchestratorsByParamsResponse(): QueryGetOrchestratorsByParamsResponse {
  return {
    orchestrators: [],
    nextKey: new Uint8Array()
  };
}
export const QueryGetOrchestratorsByParamsResponse = {
  typeUrl: "/dht.v1.QueryGetOrchestratorsByParamsResponse",
  encode(message: QueryGetOrchestratorsByParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orchestrators) {
      Orchestrator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextKey.length !== 0) {
      writer.uint32(18).bytes(message.nextKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorsByParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrchestratorsByParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestrators.push(Orchestrator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrchestratorsByParamsResponse {
    const obj = createBaseQueryGetOrchestratorsByParamsResponse();
    if (Array.isArray(object?.orchestrators)) obj.orchestrators = object.orchestrators.map((e: any) => Orchestrator.fromJSON(e));
    if (isSet(object.nextKey)) obj.nextKey = bytesFromBase64(object.nextKey);
    return obj;
  },
  toJSON(message: QueryGetOrchestratorsByParamsResponse): JsonSafe<QueryGetOrchestratorsByParamsResponse> {
    const obj: any = {};
    if (message.orchestrators) {
      obj.orchestrators = message.orchestrators.map(e => e ? Orchestrator.toJSON(e) : undefined);
    } else {
      obj.orchestrators = [];
    }
    message.nextKey !== undefined && (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorsByParamsResponse>, I>>(object: I): QueryGetOrchestratorsByParamsResponse {
    const message = createBaseQueryGetOrchestratorsByParamsResponse();
    message.orchestrators = object.orchestrators?.map(e => Orchestrator.fromPartial(e)) || [];
    message.nextKey = object.nextKey ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryGetAllOrchestratorRequest(): QueryGetAllOrchestratorRequest {
  return {
    pagination: undefined
  };
}
export const QueryGetAllOrchestratorRequest = {
  typeUrl: "/dht.v1.QueryGetAllOrchestratorRequest",
  encode(message: QueryGetAllOrchestratorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllOrchestratorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllOrchestratorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAllOrchestratorRequest {
    const obj = createBaseQueryGetAllOrchestratorRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGetAllOrchestratorRequest): JsonSafe<QueryGetAllOrchestratorRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllOrchestratorRequest>, I>>(object: I): QueryGetAllOrchestratorRequest {
    const message = createBaseQueryGetAllOrchestratorRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  }
};
function createBaseQueryGetAllOrchestratorResponse(): QueryGetAllOrchestratorResponse {
  return {
    orchestrators: [],
    pagination: undefined
  };
}
export const QueryGetAllOrchestratorResponse = {
  typeUrl: "/dht.v1.QueryGetAllOrchestratorResponse",
  encode(message: QueryGetAllOrchestratorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orchestrators) {
      Orchestrator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllOrchestratorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllOrchestratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestrators.push(Orchestrator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAllOrchestratorResponse {
    const obj = createBaseQueryGetAllOrchestratorResponse();
    if (Array.isArray(object?.orchestrators)) obj.orchestrators = object.orchestrators.map((e: any) => Orchestrator.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGetAllOrchestratorResponse): JsonSafe<QueryGetAllOrchestratorResponse> {
    const obj: any = {};
    if (message.orchestrators) {
      obj.orchestrators = message.orchestrators.map(e => e ? Orchestrator.toJSON(e) : undefined);
    } else {
      obj.orchestrators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllOrchestratorResponse>, I>>(object: I): QueryGetAllOrchestratorResponse {
    const message = createBaseQueryGetAllOrchestratorResponse();
    message.orchestrators = object.orchestrators?.map(e => Orchestrator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  }
};
function createBaseQueryGetOrchestratorHeartbeatRequest(): QueryGetOrchestratorHeartbeatRequest {
  return {
    nodeId: ""
  };
}
export const QueryGetOrchestratorHeartbeatRequest = {
  typeUrl: "/dht.v1.QueryGetOrchestratorHeartbeatRequest",
  encode(message: QueryGetOrchestratorHeartbeatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorHeartbeatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrchestratorHeartbeatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrchestratorHeartbeatRequest {
    const obj = createBaseQueryGetOrchestratorHeartbeatRequest();
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: QueryGetOrchestratorHeartbeatRequest): JsonSafe<QueryGetOrchestratorHeartbeatRequest> {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorHeartbeatRequest>, I>>(object: I): QueryGetOrchestratorHeartbeatRequest {
    const message = createBaseQueryGetOrchestratorHeartbeatRequest();
    message.nodeId = object.nodeId ?? "";
    return message;
  }
};
function createBaseQueryGetOrchestratorHeartbeatResponse(): QueryGetOrchestratorHeartbeatResponse {
  return {
    timestamp: 0
  };
}
export const QueryGetOrchestratorHeartbeatResponse = {
  typeUrl: "/dht.v1.QueryGetOrchestratorHeartbeatResponse",
  encode(message: QueryGetOrchestratorHeartbeatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int32(message.timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorHeartbeatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrchestratorHeartbeatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrchestratorHeartbeatResponse {
    const obj = createBaseQueryGetOrchestratorHeartbeatResponse();
    if (isSet(object.timestamp)) obj.timestamp = Number(object.timestamp);
    return obj;
  },
  toJSON(message: QueryGetOrchestratorHeartbeatResponse): JsonSafe<QueryGetOrchestratorHeartbeatResponse> {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorHeartbeatResponse>, I>>(object: I): QueryGetOrchestratorHeartbeatResponse {
    const message = createBaseQueryGetOrchestratorHeartbeatResponse();
    message.timestamp = object.timestamp ?? 0;
    return message;
  }
};
function createBaseQueryGetMinerHeartbeatRequest(): QueryGetMinerHeartbeatRequest {
  return {
    nodeId: ""
  };
}
export const QueryGetMinerHeartbeatRequest = {
  typeUrl: "/dht.v1.QueryGetMinerHeartbeatRequest",
  encode(message: QueryGetMinerHeartbeatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerHeartbeatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMinerHeartbeatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetMinerHeartbeatRequest {
    const obj = createBaseQueryGetMinerHeartbeatRequest();
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: QueryGetMinerHeartbeatRequest): JsonSafe<QueryGetMinerHeartbeatRequest> {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetMinerHeartbeatRequest>, I>>(object: I): QueryGetMinerHeartbeatRequest {
    const message = createBaseQueryGetMinerHeartbeatRequest();
    message.nodeId = object.nodeId ?? "";
    return message;
  }
};
function createBaseQueryGetMinerHeartbeatResponse(): QueryGetMinerHeartbeatResponse {
  return {
    timestamp: 0
  };
}
export const QueryGetMinerHeartbeatResponse = {
  typeUrl: "/dht.v1.QueryGetMinerHeartbeatResponse",
  encode(message: QueryGetMinerHeartbeatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int32(message.timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerHeartbeatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMinerHeartbeatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetMinerHeartbeatResponse {
    const obj = createBaseQueryGetMinerHeartbeatResponse();
    if (isSet(object.timestamp)) obj.timestamp = Number(object.timestamp);
    return obj;
  },
  toJSON(message: QueryGetMinerHeartbeatResponse): JsonSafe<QueryGetMinerHeartbeatResponse> {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetMinerHeartbeatResponse>, I>>(object: I): QueryGetMinerHeartbeatResponse {
    const message = createBaseQueryGetMinerHeartbeatResponse();
    message.timestamp = object.timestamp ?? 0;
    return message;
  }
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GetModel = this.GetModel.bind(this);
    this.GetModelBlocks = this.GetModelBlocks.bind(this);
    this.GetNode = this.GetNode.bind(this);
    this.GetMiner = this.GetMiner.bind(this);
    this.GetOrchestrator = this.GetOrchestrator.bind(this);
    this.GetAllOrchestrator = this.GetAllOrchestrator.bind(this);
    this.GetOrchestratorsByParams = this.GetOrchestratorsByParams.bind(this);
    this.GetOrchestratorHeartbeat = this.GetOrchestratorHeartbeat.bind(this);
    this.GetMinerHeartbeat = this.GetMinerHeartbeat.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("dht.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  GetModel(request: QueryGetModelRequest): Promise<QueryGetModelResponse> {
    const data = QueryGetModelRequest.encode(request).finish();
    const promise = this.rpc.request("dht.v1.Query", "GetModel", data);
    return promise.then(data => QueryGetModelResponse.decode(new _m0.Reader(data)));
  }
  GetModelBlocks(request: QueryGetModelBlocksRequest): Promise<QueryGetModelBlocksResponse> {
    const data = QueryGetModelBlocksRequest.encode(request).finish();
    const promise = this.rpc.request("dht.v1.Query", "GetModelBlocks", data);
    return promise.then(data => QueryGetModelBlocksResponse.decode(new _m0.Reader(data)));
  }
  GetNode(request: QueryGetNodeRequest): Promise<QueryGetNodeResponse> {
    const data = QueryGetNodeRequest.encode(request).finish();
    const promise = this.rpc.request("dht.v1.Query", "GetNode", data);
    return promise.then(data => QueryGetNodeResponse.decode(new _m0.Reader(data)));
  }
  GetMiner(request: QueryGetMinerRequest): Promise<QueryGetMinerResponse> {
    const data = QueryGetMinerRequest.encode(request).finish();
    const promise = this.rpc.request("dht.v1.Query", "GetMiner", data);
    return promise.then(data => QueryGetMinerResponse.decode(new _m0.Reader(data)));
  }
  GetOrchestrator(request: QueryGetOrchestratorRequest): Promise<QueryGetOrchestratorResponse> {
    const data = QueryGetOrchestratorRequest.encode(request).finish();
    const promise = this.rpc.request("dht.v1.Query", "GetOrchestrator", data);
    return promise.then(data => QueryGetOrchestratorResponse.decode(new _m0.Reader(data)));
  }
  GetAllOrchestrator(request: QueryGetAllOrchestratorRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryGetAllOrchestratorResponse> {
    const data = QueryGetAllOrchestratorRequest.encode(request).finish();
    const promise = this.rpc.request("dht.v1.Query", "GetAllOrchestrator", data);
    return promise.then(data => QueryGetAllOrchestratorResponse.decode(new _m0.Reader(data)));
  }
  GetOrchestratorsByParams(request: QueryGetOrchestratorsByParamsRequest): Promise<QueryGetOrchestratorsByParamsResponse> {
    const data = QueryGetOrchestratorsByParamsRequest.encode(request).finish();
    const promise = this.rpc.request("dht.v1.Query", "GetOrchestratorsByParams", data);
    return promise.then(data => QueryGetOrchestratorsByParamsResponse.decode(new _m0.Reader(data)));
  }
  GetOrchestratorHeartbeat(request: QueryGetOrchestratorHeartbeatRequest): Promise<QueryGetOrchestratorHeartbeatResponse> {
    const data = QueryGetOrchestratorHeartbeatRequest.encode(request).finish();
    const promise = this.rpc.request("dht.v1.Query", "GetOrchestratorHeartbeat", data);
    return promise.then(data => QueryGetOrchestratorHeartbeatResponse.decode(new _m0.Reader(data)));
  }
  GetMinerHeartbeat(request: QueryGetMinerHeartbeatRequest): Promise<QueryGetMinerHeartbeatResponse> {
    const data = QueryGetMinerHeartbeatRequest.encode(request).finish();
    const promise = this.rpc.request("dht.v1.Query", "GetMinerHeartbeat", data);
    return promise.then(data => QueryGetMinerHeartbeatResponse.decode(new _m0.Reader(data)));
  }
}