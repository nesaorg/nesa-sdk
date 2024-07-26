/* eslint-disable */
import {
  Params,
  InferenceAgent,
  AgentModelStatus,
  Session,
  SessionStatus,
  AgentModel,
  agentModelStatusFromJSON,
  agentModelStatusToJSON,
  sessionStatusFromJSON,
  sessionStatusToJSON,
} from "./agent";
import { Timestamp } from "../../google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";

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
  status: SessionStatus;
  expireTime?: Date;
  limit: Long;
  orderDesc: boolean;
  key: Uint8Array;
}

export interface QuerySessionByAgentResponse {
  sessions: Session[];
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
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryInferenceAgentRequest(): QueryInferenceAgentRequest {
  return {
    account: "",
    modelName: "",
    limit: Long.UZERO,
    key: new Uint8Array(),
  };
}

export const QueryInferenceAgentRequest = {
  encode(
    message: QueryInferenceAgentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInferenceAgentRequest {
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
    return {
      account: isSet(object.account) ? String(object.account) : "",
      modelName: isSet(object.modelName) ? String(object.modelName) : "",
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
    };
  },

  toJSON(message: QueryInferenceAgentRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.limit !== undefined &&
      (obj.limit = (message.limit || Long.UZERO).toString());
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentRequest>, I>>(
    object: I
  ): QueryInferenceAgentRequest {
    const message = createBaseQueryInferenceAgentRequest();
    message.account = object.account ?? "";
    message.modelName = object.modelName ?? "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromValue(object.limit)
        : Long.UZERO;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryInferenceAgentResponse(): QueryInferenceAgentResponse {
  return {
    inferenceAgent: undefined,
    agentModels: [],
    nextKey: new Uint8Array(),
  };
}

export const QueryInferenceAgentResponse = {
  encode(
    message: QueryInferenceAgentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inferenceAgent !== undefined) {
      InferenceAgent.encode(
        message.inferenceAgent,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.agentModels) {
      AgentModel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextKey.length !== 0) {
      writer.uint32(26).bytes(message.nextKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInferenceAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInferenceAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inferenceAgent = InferenceAgent.decode(
            reader,
            reader.uint32()
          );
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
    return {
      inferenceAgent: isSet(object.inferenceAgent)
        ? InferenceAgent.fromJSON(object.inferenceAgent)
        : undefined,
      agentModels: Array.isArray(object?.agentModels)
        ? object.agentModels.map((e: any) => AgentModel.fromJSON(e))
        : [],
      nextKey: isSet(object.nextKey)
        ? bytesFromBase64(object.nextKey)
        : new Uint8Array(),
    };
  },

  toJSON(message: QueryInferenceAgentResponse): unknown {
    const obj: any = {};
    message.inferenceAgent !== undefined &&
      (obj.inferenceAgent = message.inferenceAgent
        ? InferenceAgent.toJSON(message.inferenceAgent)
        : undefined);
    if (message.agentModels) {
      obj.agentModels = message.agentModels.map((e) =>
        e ? AgentModel.toJSON(e) : undefined
      );
    } else {
      obj.agentModels = [];
    }
    message.nextKey !== undefined &&
      (obj.nextKey = base64FromBytes(
        message.nextKey !== undefined ? message.nextKey : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentResponse>, I>>(
    object: I
  ): QueryInferenceAgentResponse {
    const message = createBaseQueryInferenceAgentResponse();
    message.inferenceAgent =
      object.inferenceAgent !== undefined && object.inferenceAgent !== null
        ? InferenceAgent.fromPartial(object.inferenceAgent)
        : undefined;
    message.agentModels =
      object.agentModels?.map((e) => AgentModel.fromPartial(e)) || [];
    message.nextKey = object.nextKey ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryAgentByModelRequest(): QueryAgentByModelRequest {
  return { modelName: "", status: 0 };
}

export const QueryAgentByModelRequest = {
  encode(
    message: QueryAgentByModelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.modelName !== "") {
      writer.uint32(10).string(message.modelName);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAgentByModelRequest {
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
    return {
      modelName: isSet(object.modelName) ? String(object.modelName) : "",
      status: isSet(object.status)
        ? agentModelStatusFromJSON(object.status)
        : 0,
    };
  },

  toJSON(message: QueryAgentByModelRequest): unknown {
    const obj: any = {};
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.status !== undefined &&
      (obj.status = agentModelStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAgentByModelRequest>, I>>(
    object: I
  ): QueryAgentByModelRequest {
    const message = createBaseQueryAgentByModelRequest();
    message.modelName = object.modelName ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseModelAgents(): ModelAgents {
  return { modelName: "", inferenceAgents: [] };
}

export const ModelAgents = {
  encode(
    message: ModelAgents,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
          message.inferenceAgents.push(
            InferenceAgent.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModelAgents {
    return {
      modelName: isSet(object.modelName) ? String(object.modelName) : "",
      inferenceAgents: Array.isArray(object?.inferenceAgents)
        ? object.inferenceAgents.map((e: any) => InferenceAgent.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ModelAgents): unknown {
    const obj: any = {};
    message.modelName !== undefined && (obj.modelName = message.modelName);
    if (message.inferenceAgents) {
      obj.inferenceAgents = message.inferenceAgents.map((e) =>
        e ? InferenceAgent.toJSON(e) : undefined
      );
    } else {
      obj.inferenceAgents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModelAgents>, I>>(
    object: I
  ): ModelAgents {
    const message = createBaseModelAgents();
    message.modelName = object.modelName ?? "";
    message.inferenceAgents =
      object.inferenceAgents?.map((e) => InferenceAgent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAgentByModelResponse(): QueryAgentByModelResponse {
  return { modelAgents: [] };
}

export const QueryAgentByModelResponse = {
  encode(
    message: QueryAgentByModelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.modelAgents) {
      ModelAgents.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAgentByModelResponse {
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
    return {
      modelAgents: Array.isArray(object?.modelAgents)
        ? object.modelAgents.map((e: any) => ModelAgents.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAgentByModelResponse): unknown {
    const obj: any = {};
    if (message.modelAgents) {
      obj.modelAgents = message.modelAgents.map((e) =>
        e ? ModelAgents.toJSON(e) : undefined
      );
    } else {
      obj.modelAgents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAgentByModelResponse>, I>>(
    object: I
  ): QueryAgentByModelResponse {
    const message = createBaseQueryAgentByModelResponse();
    message.modelAgents =
      object.modelAgents?.map((e) => ModelAgents.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySessionRequest(): QuerySessionRequest {
  return { id: "" };
}

export const QuerySessionRequest = {
  encode(
    message: QuerySessionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QuerySessionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySessionRequest>, I>>(
    object: I
  ): QuerySessionRequest {
    const message = createBaseQuerySessionRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQuerySessionResponse(): QuerySessionResponse {
  return { session: undefined };
}

export const QuerySessionResponse = {
  encode(
    message: QuerySessionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySessionResponse {
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
    return {
      session: isSet(object.session)
        ? Session.fromJSON(object.session)
        : undefined,
    };
  },

  toJSON(message: QuerySessionResponse): unknown {
    const obj: any = {};
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySessionResponse>, I>>(
    object: I
  ): QuerySessionResponse {
    const message = createBaseQuerySessionResponse();
    message.session =
      object.session !== undefined && object.session !== null
        ? Session.fromPartial(object.session)
        : undefined;
    return message;
  },
};

function createBaseQuerySessionByAgentRequest(): QuerySessionByAgentRequest {
  return {
    account: "",
    status: 0,
    expireTime: undefined,
    limit: Long.UZERO,
    orderDesc: false,
    key: new Uint8Array(),
  };
}

export const QuerySessionByAgentRequest = {
  encode(
    message: QuerySessionByAgentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.expireTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expireTime),
        writer.uint32(26).fork()
      ).ldelim();
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySessionByAgentRequest {
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
          message.expireTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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
    return {
      account: isSet(object.account) ? String(object.account) : "",
      status: isSet(object.status) ? sessionStatusFromJSON(object.status) : 0,
      expireTime: isSet(object.expireTime)
        ? fromJsonTimestamp(object.expireTime)
        : undefined,
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      orderDesc: isSet(object.orderDesc) ? Boolean(object.orderDesc) : false,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
    };
  },

  toJSON(message: QuerySessionByAgentRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.status !== undefined &&
      (obj.status = sessionStatusToJSON(message.status));
    message.expireTime !== undefined &&
      (obj.expireTime = message.expireTime.toISOString());
    message.limit !== undefined &&
      (obj.limit = (message.limit || Long.UZERO).toString());
    message.orderDesc !== undefined && (obj.orderDesc = message.orderDesc);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySessionByAgentRequest>, I>>(
    object: I
  ): QuerySessionByAgentRequest {
    const message = createBaseQuerySessionByAgentRequest();
    message.account = object.account ?? "";
    message.status = object.status ?? 0;
    message.expireTime = object.expireTime ?? undefined;
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromValue(object.limit)
        : Long.UZERO;
    message.orderDesc = object.orderDesc ?? false;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

function createBaseQuerySessionByAgentResponse(): QuerySessionByAgentResponse {
  return { sessions: [], nextKey: new Uint8Array() };
}

export const QuerySessionByAgentResponse = {
  encode(
    message: QuerySessionByAgentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextKey.length !== 0) {
      writer.uint32(18).bytes(message.nextKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySessionByAgentResponse {
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
    return {
      sessions: Array.isArray(object?.sessions)
        ? object.sessions.map((e: any) => Session.fromJSON(e))
        : [],
      nextKey: isSet(object.nextKey)
        ? bytesFromBase64(object.nextKey)
        : new Uint8Array(),
    };
  },

  toJSON(message: QuerySessionByAgentResponse): unknown {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map((e) =>
        e ? Session.toJSON(e) : undefined
      );
    } else {
      obj.sessions = [];
    }
    message.nextKey !== undefined &&
      (obj.nextKey = base64FromBytes(
        message.nextKey !== undefined ? message.nextKey : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySessionByAgentResponse>, I>>(
    object: I
  ): QuerySessionByAgentResponse {
    const message = createBaseQuerySessionByAgentResponse();
    message.sessions =
      object.sessions?.map((e) => Session.fromPartial(e)) || [];
    message.nextKey = object.nextKey ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryVRFSeedRequest(): QueryVRFSeedRequest {
  return { account: "" };
}

export const QueryVRFSeedRequest = {
  encode(
    message: QueryVRFSeedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      account: isSet(object.account) ? String(object.account) : "",
    };
  },

  toJSON(message: QueryVRFSeedRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVRFSeedRequest>, I>>(
    object: I
  ): QueryVRFSeedRequest {
    const message = createBaseQueryVRFSeedRequest();
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseQueryVRFSeedResponse(): QueryVRFSeedResponse {
  return { seed: new Uint8Array() };
}

export const QueryVRFSeedResponse = {
  encode(
    message: QueryVRFSeedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.seed.length !== 0) {
      writer.uint32(10).bytes(message.seed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVRFSeedResponse {
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
    return {
      seed: isSet(object.seed)
        ? bytesFromBase64(object.seed)
        : new Uint8Array(),
    };
  },

  toJSON(message: QueryVRFSeedResponse): unknown {
    const obj: any = {};
    message.seed !== undefined &&
      (obj.seed = base64FromBytes(
        message.seed !== undefined ? message.seed : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVRFSeedResponse>, I>>(
    object: I
  ): QueryVRFSeedResponse {
    const message = createBaseQueryVRFSeedResponse();
    message.seed = object.seed ?? new Uint8Array();
    return message;
  },
};

export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  InferenceAgentRequest(
    request: QueryInferenceAgentRequest
  ): Promise<QueryInferenceAgentResponse>;
  AgentByModelRequest(
    request: QueryAgentByModelRequest
  ): Promise<QueryAgentByModelResponse>;
  SessionRequest(request: QuerySessionRequest): Promise<QuerySessionResponse>;
  SessionByAgentRequest(
    request: QuerySessionByAgentRequest
  ): Promise<QuerySessionByAgentResponse>;
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
    this.VRFSeedRequest = this.VRFSeedRequest.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  InferenceAgentRequest(
    request: QueryInferenceAgentRequest
  ): Promise<QueryInferenceAgentResponse> {
    const data = QueryInferenceAgentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Query",
      "InferenceAgentRequest",
      data
    );
    return promise.then((data) =>
      QueryInferenceAgentResponse.decode(new _m0.Reader(data))
    );
  }

  AgentByModelRequest(
    request: QueryAgentByModelRequest
  ): Promise<QueryAgentByModelResponse> {
    const data = QueryAgentByModelRequest.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Query",
      "AgentByModelRequest",
      data
    );
    return promise.then((data) =>
      QueryAgentByModelResponse.decode(new _m0.Reader(data))
    );
  }

  SessionRequest(request: QuerySessionRequest): Promise<QuerySessionResponse> {
    const data = QuerySessionRequest.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Query", "SessionRequest", data);
    return promise.then((data) =>
      QuerySessionResponse.decode(new _m0.Reader(data))
    );
  }

  SessionByAgentRequest(
    request: QuerySessionByAgentRequest
  ): Promise<QuerySessionByAgentResponse> {
    const data = QuerySessionByAgentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Query",
      "SessionByAgentRequest",
      data
    );
    return promise.then((data) =>
      QuerySessionByAgentResponse.decode(new _m0.Reader(data))
    );
  }

  VRFSeedRequest(request: QueryVRFSeedRequest): Promise<QueryVRFSeedResponse> {
    const data = QueryVRFSeedRequest.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Query", "VRFSeedRequest", data);
    return promise.then((data) =>
      QueryVRFSeedResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
