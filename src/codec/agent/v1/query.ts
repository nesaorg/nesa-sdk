/* eslint-disable */
import { AgentModelStatus, SessionStatus, Params, InferenceAgent, AgentModel, Session, agentModelStatusFromJSON, agentModelStatusToJSON, sessionStatusFromJSON, sessionStatusToJSON } from "./agent";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "agent.v1";
export interface QueryParamsRequest {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/agent.v1.QueryParamsRequest",
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
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/agent.v1.QueryParamsResponse",
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
function createBaseQueryInferenceAgentRequest(): QueryInferenceAgentRequest {
  return {
    account: "",
    modelName: "",
    limit: Long.UZERO,
    key: new Uint8Array()
  };
}
export const QueryInferenceAgentRequest = {
  typeUrl: "/agent.v1.QueryInferenceAgentRequest",
  encode(message: QueryInferenceAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.modelName !== "") {
      writer.uint32(18).string(message.modelName);
    }
    if (!message.limit.isZero()) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.key.length !== 0) {
      writer.uint32(34).bytes(message.key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInferenceAgentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInferenceAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.modelName = reader.string();
          break;
        case 3:
          message.limit = reader.uint64() as Long;
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
  fromJSON(object: any): QueryInferenceAgentRequest {
    const obj = createBaseQueryInferenceAgentRequest();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.limit)) obj.limit = Long.fromValue(object.limit);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(message: QueryInferenceAgentRequest): JsonSafe<QueryInferenceAgentRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentRequest>, I>>(object: I): QueryInferenceAgentRequest {
    const message = createBaseQueryInferenceAgentRequest();
    message.account = object.account ?? "";
    message.modelName = object.modelName ?? "";
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Long.fromValue(object.limit);
    }
    message.key = object.key ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryInferenceAgentResponse(): QueryInferenceAgentResponse {
  return {
    inferenceAgent: undefined,
    agentModels: [],
    nextKey: new Uint8Array()
  };
}
export const QueryInferenceAgentResponse = {
  typeUrl: "/agent.v1.QueryInferenceAgentResponse",
  encode(message: QueryInferenceAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inferenceAgent !== undefined) {
      InferenceAgent.encode(message.inferenceAgent, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.agentModels) {
      AgentModel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextKey.length !== 0) {
      writer.uint32(26).bytes(message.nextKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInferenceAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInferenceAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inferenceAgent = InferenceAgent.decode(reader, reader.uint32());
          break;
        case 2:
          message.agentModels.push(AgentModel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nextKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInferenceAgentResponse {
    const obj = createBaseQueryInferenceAgentResponse();
    if (isSet(object.inferenceAgent)) obj.inferenceAgent = InferenceAgent.fromJSON(object.inferenceAgent);
    if (Array.isArray(object?.agentModels)) obj.agentModels = object.agentModels.map((e: any) => AgentModel.fromJSON(e));
    if (isSet(object.nextKey)) obj.nextKey = bytesFromBase64(object.nextKey);
    return obj;
  },
  toJSON(message: QueryInferenceAgentResponse): JsonSafe<QueryInferenceAgentResponse> {
    const obj: any = {};
    message.inferenceAgent !== undefined && (obj.inferenceAgent = message.inferenceAgent ? InferenceAgent.toJSON(message.inferenceAgent) : undefined);
    if (message.agentModels) {
      obj.agentModels = message.agentModels.map(e => e ? AgentModel.toJSON(e) : undefined);
    } else {
      obj.agentModels = [];
    }
    message.nextKey !== undefined && (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentResponse>, I>>(object: I): QueryInferenceAgentResponse {
    const message = createBaseQueryInferenceAgentResponse();
    if (object.inferenceAgent !== undefined && object.inferenceAgent !== null) {
      message.inferenceAgent = InferenceAgent.fromPartial(object.inferenceAgent);
    }
    message.agentModels = object.agentModels?.map(e => AgentModel.fromPartial(e)) || [];
    message.nextKey = object.nextKey ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryAgentByModelRequest(): QueryAgentByModelRequest {
  return {
    modelName: "",
    status: 0
  };
}
export const QueryAgentByModelRequest = {
  typeUrl: "/agent.v1.QueryAgentByModelRequest",
  encode(message: QueryAgentByModelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelName !== "") {
      writer.uint32(10).string(message.modelName);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentByModelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAgentByModelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modelName = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAgentByModelRequest {
    const obj = createBaseQueryAgentByModelRequest();
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.status)) obj.status = agentModelStatusFromJSON(object.status);
    return obj;
  },
  toJSON(message: QueryAgentByModelRequest): JsonSafe<QueryAgentByModelRequest> {
    const obj: any = {};
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.status !== undefined && (obj.status = agentModelStatusToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAgentByModelRequest>, I>>(object: I): QueryAgentByModelRequest {
    const message = createBaseQueryAgentByModelRequest();
    message.modelName = object.modelName ?? "";
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseModelAgents(): ModelAgents {
  return {
    modelName: "",
    inferenceAgents: []
  };
}
export const ModelAgents = {
  typeUrl: "/agent.v1.ModelAgents",
  encode(message: ModelAgents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modelName !== "") {
      writer.uint32(10).string(message.modelName);
    }
    for (const v of message.inferenceAgents) {
      InferenceAgent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModelAgents {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModelAgents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modelName = reader.string();
          break;
        case 2:
          message.inferenceAgents.push(InferenceAgent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModelAgents {
    const obj = createBaseModelAgents();
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (Array.isArray(object?.inferenceAgents)) obj.inferenceAgents = object.inferenceAgents.map((e: any) => InferenceAgent.fromJSON(e));
    return obj;
  },
  toJSON(message: ModelAgents): JsonSafe<ModelAgents> {
    const obj: any = {};
    message.modelName !== undefined && (obj.modelName = message.modelName);
    if (message.inferenceAgents) {
      obj.inferenceAgents = message.inferenceAgents.map(e => e ? InferenceAgent.toJSON(e) : undefined);
    } else {
      obj.inferenceAgents = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ModelAgents>, I>>(object: I): ModelAgents {
    const message = createBaseModelAgents();
    message.modelName = object.modelName ?? "";
    message.inferenceAgents = object.inferenceAgents?.map(e => InferenceAgent.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAgentByModelResponse(): QueryAgentByModelResponse {
  return {
    modelAgents: []
  };
}
export const QueryAgentByModelResponse = {
  typeUrl: "/agent.v1.QueryAgentByModelResponse",
  encode(message: QueryAgentByModelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.modelAgents) {
      ModelAgents.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentByModelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAgentByModelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modelAgents.push(ModelAgents.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAgentByModelResponse {
    const obj = createBaseQueryAgentByModelResponse();
    if (Array.isArray(object?.modelAgents)) obj.modelAgents = object.modelAgents.map((e: any) => ModelAgents.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryAgentByModelResponse): JsonSafe<QueryAgentByModelResponse> {
    const obj: any = {};
    if (message.modelAgents) {
      obj.modelAgents = message.modelAgents.map(e => e ? ModelAgents.toJSON(e) : undefined);
    } else {
      obj.modelAgents = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAgentByModelResponse>, I>>(object: I): QueryAgentByModelResponse {
    const message = createBaseQueryAgentByModelResponse();
    message.modelAgents = object.modelAgents?.map(e => ModelAgents.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySessionRequest(): QuerySessionRequest {
  return {
    id: ""
  };
}
export const QuerySessionRequest = {
  typeUrl: "/agent.v1.QuerySessionRequest",
  encode(message: QuerySessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySessionRequest {
    const obj = createBaseQuerySessionRequest();
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: QuerySessionRequest): JsonSafe<QuerySessionRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySessionRequest>, I>>(object: I): QuerySessionRequest {
    const message = createBaseQuerySessionRequest();
    message.id = object.id ?? "";
    return message;
  }
};
function createBaseQuerySessionResponse(): QuerySessionResponse {
  return {
    session: undefined
  };
}
export const QuerySessionResponse = {
  typeUrl: "/agent.v1.QuerySessionResponse",
  encode(message: QuerySessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.session = Session.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySessionResponse {
    const obj = createBaseQuerySessionResponse();
    if (isSet(object.session)) obj.session = Session.fromJSON(object.session);
    return obj;
  },
  toJSON(message: QuerySessionResponse): JsonSafe<QuerySessionResponse> {
    const obj: any = {};
    message.session !== undefined && (obj.session = message.session ? Session.toJSON(message.session) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySessionResponse>, I>>(object: I): QuerySessionResponse {
    const message = createBaseQuerySessionResponse();
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromPartial(object.session);
    }
    return message;
  }
};
function createBaseQuerySessionByAgentRequest(): QuerySessionByAgentRequest {
  return {
    account: "",
    status: undefined,
    expireTime: Timestamp.fromPartial({}),
    limit: Long.UZERO,
    orderDesc: false,
    key: new Uint8Array()
  };
}
export const QuerySessionByAgentRequest = {
  typeUrl: "/agent.v1.QuerySessionByAgentRequest",
  encode(message: QuerySessionByAgentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.expireTime !== undefined) {
      Timestamp.encode(message.expireTime, writer.uint32(26).fork()).ldelim();
    }
    if (!message.limit.isZero()) {
      writer.uint32(32).uint64(message.limit);
    }
    if (message.orderDesc === true) {
      writer.uint32(40).bool(message.orderDesc);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionByAgentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionByAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.expireTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.limit = reader.uint64() as Long;
          break;
        case 5:
          message.orderDesc = reader.bool();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySessionByAgentRequest {
    const obj = createBaseQuerySessionByAgentRequest();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.status)) obj.status = sessionStatusFromJSON(object.status);
    if (isSet(object.expireTime)) obj.expireTime = fromJsonTimestamp(object.expireTime);
    if (isSet(object.limit)) obj.limit = Long.fromValue(object.limit);
    if (isSet(object.orderDesc)) obj.orderDesc = Boolean(object.orderDesc);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(message: QuerySessionByAgentRequest): JsonSafe<QuerySessionByAgentRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.status !== undefined && (obj.status = sessionStatusToJSON(message.status));
    message.expireTime !== undefined && (obj.expireTime = fromTimestamp(message.expireTime).toISOString());
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    message.orderDesc !== undefined && (obj.orderDesc = message.orderDesc);
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySessionByAgentRequest>, I>>(object: I): QuerySessionByAgentRequest {
    const message = createBaseQuerySessionByAgentRequest();
    message.account = object.account ?? "";
    message.status = object.status ?? undefined;
    if (object.expireTime !== undefined && object.expireTime !== null) {
      message.expireTime = Timestamp.fromPartial(object.expireTime);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Long.fromValue(object.limit);
    }
    message.orderDesc = object.orderDesc ?? false;
    message.key = object.key ?? new Uint8Array();
    return message;
  }
};
function createBaseQuerySessionByAgentResponse(): QuerySessionByAgentResponse {
  return {
    sessions: [],
    nextKey: new Uint8Array()
  };
}
export const QuerySessionByAgentResponse = {
  typeUrl: "/agent.v1.QuerySessionByAgentResponse",
  encode(message: QuerySessionByAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextKey.length !== 0) {
      writer.uint32(18).bytes(message.nextKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionByAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionByAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessions.push(Session.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySessionByAgentResponse {
    const obj = createBaseQuerySessionByAgentResponse();
    if (Array.isArray(object?.sessions)) obj.sessions = object.sessions.map((e: any) => Session.fromJSON(e));
    if (isSet(object.nextKey)) obj.nextKey = bytesFromBase64(object.nextKey);
    return obj;
  },
  toJSON(message: QuerySessionByAgentResponse): JsonSafe<QuerySessionByAgentResponse> {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map(e => e ? Session.toJSON(e) : undefined);
    } else {
      obj.sessions = [];
    }
    message.nextKey !== undefined && (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySessionByAgentResponse>, I>>(object: I): QuerySessionByAgentResponse {
    const message = createBaseQuerySessionByAgentResponse();
    message.sessions = object.sessions?.map(e => Session.fromPartial(e)) || [];
    message.nextKey = object.nextKey ?? new Uint8Array();
    return message;
  }
};
function createBaseQuerySessionByChallengeRequest(): QuerySessionByChallengeRequest {
  return {
    account: "",
    limit: Long.UZERO,
    key: new Uint8Array()
  };
}
export const QuerySessionByChallengeRequest = {
  typeUrl: "/agent.v1.QuerySessionByChallengeRequest",
  encode(message: QuerySessionByChallengeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (!message.limit.isZero()) {
      writer.uint32(16).uint64(message.limit);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionByChallengeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionByChallengeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.limit = reader.uint64() as Long;
          break;
        case 3:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySessionByChallengeRequest {
    const obj = createBaseQuerySessionByChallengeRequest();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.limit)) obj.limit = Long.fromValue(object.limit);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(message: QuerySessionByChallengeRequest): JsonSafe<QuerySessionByChallengeRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySessionByChallengeRequest>, I>>(object: I): QuerySessionByChallengeRequest {
    const message = createBaseQuerySessionByChallengeRequest();
    message.account = object.account ?? "";
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Long.fromValue(object.limit);
    }
    message.key = object.key ?? new Uint8Array();
    return message;
  }
};
function createBaseSessionIdStatus(): SessionIdStatus {
  return {
    sessionId: "",
    status: 0
  };
}
export const SessionIdStatus = {
  typeUrl: "/agent.v1.SessionIdStatus",
  encode(message: SessionIdStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SessionIdStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionIdStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SessionIdStatus {
    const obj = createBaseSessionIdStatus();
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.status)) obj.status = sessionStatusFromJSON(object.status);
    return obj;
  },
  toJSON(message: SessionIdStatus): JsonSafe<SessionIdStatus> {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.status !== undefined && (obj.status = sessionStatusToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SessionIdStatus>, I>>(object: I): SessionIdStatus {
    const message = createBaseSessionIdStatus();
    message.sessionId = object.sessionId ?? "";
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseQuerySessionByChallengeResponse(): QuerySessionByChallengeResponse {
  return {
    sesssionIdStatus: [],
    nextKey: new Uint8Array()
  };
}
export const QuerySessionByChallengeResponse = {
  typeUrl: "/agent.v1.QuerySessionByChallengeResponse",
  encode(message: QuerySessionByChallengeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sesssionIdStatus) {
      SessionIdStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextKey.length !== 0) {
      writer.uint32(18).bytes(message.nextKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionByChallengeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionByChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sesssionIdStatus.push(SessionIdStatus.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySessionByChallengeResponse {
    const obj = createBaseQuerySessionByChallengeResponse();
    if (Array.isArray(object?.sesssionIdStatus)) obj.sesssionIdStatus = object.sesssionIdStatus.map((e: any) => SessionIdStatus.fromJSON(e));
    if (isSet(object.nextKey)) obj.nextKey = bytesFromBase64(object.nextKey);
    return obj;
  },
  toJSON(message: QuerySessionByChallengeResponse): JsonSafe<QuerySessionByChallengeResponse> {
    const obj: any = {};
    if (message.sesssionIdStatus) {
      obj.sesssionIdStatus = message.sesssionIdStatus.map(e => e ? SessionIdStatus.toJSON(e) : undefined);
    } else {
      obj.sesssionIdStatus = [];
    }
    message.nextKey !== undefined && (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySessionByChallengeResponse>, I>>(object: I): QuerySessionByChallengeResponse {
    const message = createBaseQuerySessionByChallengeResponse();
    message.sesssionIdStatus = object.sesssionIdStatus?.map(e => SessionIdStatus.fromPartial(e)) || [];
    message.nextKey = object.nextKey ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryVRFSeedRequest(): QueryVRFSeedRequest {
  return {
    account: ""
  };
}
export const QueryVRFSeedRequest = {
  typeUrl: "/agent.v1.QueryVRFSeedRequest",
  encode(message: QueryVRFSeedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVRFSeedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVRFSeedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVRFSeedRequest {
    const obj = createBaseQueryVRFSeedRequest();
    if (isSet(object.account)) obj.account = String(object.account);
    return obj;
  },
  toJSON(message: QueryVRFSeedRequest): JsonSafe<QueryVRFSeedRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVRFSeedRequest>, I>>(object: I): QueryVRFSeedRequest {
    const message = createBaseQueryVRFSeedRequest();
    message.account = object.account ?? "";
    return message;
  }
};
function createBaseQueryVRFSeedResponse(): QueryVRFSeedResponse {
  return {
    seed: new Uint8Array()
  };
}
export const QueryVRFSeedResponse = {
  typeUrl: "/agent.v1.QueryVRFSeedResponse",
  encode(message: QueryVRFSeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seed.length !== 0) {
      writer.uint32(10).bytes(message.seed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVRFSeedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVRFSeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVRFSeedResponse {
    const obj = createBaseQueryVRFSeedResponse();
    if (isSet(object.seed)) obj.seed = bytesFromBase64(object.seed);
    return obj;
  },
  toJSON(message: QueryVRFSeedResponse): JsonSafe<QueryVRFSeedResponse> {
    const obj: any = {};
    message.seed !== undefined && (obj.seed = base64FromBytes(message.seed !== undefined ? message.seed : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVRFSeedResponse>, I>>(object: I): QueryVRFSeedResponse {
    const message = createBaseQueryVRFSeedResponse();
    message.seed = object.seed ?? new Uint8Array();
    return message;
  }
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.InferenceAgentRequest = this.InferenceAgentRequest.bind(this);
    this.AgentByModelRequest = this.AgentByModelRequest.bind(this);
    this.SessionRequest = this.SessionRequest.bind(this);
    this.SessionByAgentRequest = this.SessionByAgentRequest.bind(this);
    this.SessionByChallengeRequest = this.SessionByChallengeRequest.bind(this);
    this.VRFSeedRequest = this.VRFSeedRequest.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  InferenceAgentRequest(request: QueryInferenceAgentRequest): Promise<QueryInferenceAgentResponse> {
    const data = QueryInferenceAgentRequest.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Query", "InferenceAgentRequest", data);
    return promise.then(data => QueryInferenceAgentResponse.decode(new _m0.Reader(data)));
  }
  AgentByModelRequest(request: QueryAgentByModelRequest): Promise<QueryAgentByModelResponse> {
    const data = QueryAgentByModelRequest.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Query", "AgentByModelRequest", data);
    return promise.then(data => QueryAgentByModelResponse.decode(new _m0.Reader(data)));
  }
  SessionRequest(request: QuerySessionRequest): Promise<QuerySessionResponse> {
    const data = QuerySessionRequest.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Query", "SessionRequest", data);
    return promise.then(data => QuerySessionResponse.decode(new _m0.Reader(data)));
  }
  SessionByAgentRequest(request: QuerySessionByAgentRequest): Promise<QuerySessionByAgentResponse> {
    const data = QuerySessionByAgentRequest.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Query", "SessionByAgentRequest", data);
    return promise.then(data => QuerySessionByAgentResponse.decode(new _m0.Reader(data)));
  }
  SessionByChallengeRequest(request: QuerySessionByChallengeRequest): Promise<QuerySessionByChallengeResponse> {
    const data = QuerySessionByChallengeRequest.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Query", "SessionByChallengeRequest", data);
    return promise.then(data => QuerySessionByChallengeResponse.decode(new _m0.Reader(data)));
  }
  VRFSeedRequest(request: QueryVRFSeedRequest): Promise<QueryVRFSeedResponse> {
    const data = QueryVRFSeedRequest.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Query", "VRFSeedRequest", data);
    return promise.then(data => QueryVRFSeedResponse.decode(new _m0.Reader(data)));
  }
}