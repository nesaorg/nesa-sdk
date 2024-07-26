/* eslint-disable */
import {
  Params,
  AgentStatus,
  AgentModelStatus,
  Payment,
  agentStatusFromJSON,
  agentStatusToJSON,
  agentModelStatusFromJSON,
  agentModelStatusToJSON,
} from "./agent";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "agent.v1";

export interface MsgUpdateParams {
  authority: string;
  params?: Params;
}

export interface MsgUpdateParamsResponse {}

export interface MsgRegisterInferenceAgent {
  account: string;
  url: string;
  version: Long;
}

export interface MsgRegisterInferenceAgentResponse {}

export interface MsgUpdateInferenceAgent {
  account: string;
  url: string;
  version: Long;
  status: AgentStatus;
}

export interface MsgUpdateInferenceAgentResponse {}

export interface MsgRegisterAgentModel {
  account: string;
  modelName: string[];
  lock: Long[];
}

export interface MsgRegisterAgentModelResponse {}

export interface MsgUpdateAgentModel {
  account: string;
  modelName: string[];
  lock: Long[];
  status: AgentModelStatus;
}

export interface MsgUpdateAgentModelResponse {}

export interface VRF {
  seed: Uint8Array;
  proof: Uint8Array;
  hashRandom: Uint8Array;
}

export interface MsgRegisterSession {
  sessionId: string;
  account: string;
  modelName: string;
  lockBalance?: Coin;
  vrf?: VRF;
}

export interface MsgRegisterSessionResponse {
  account: string;
  modelName: string;
}

export interface MsgSubmitPayment {
  account: string;
  sessionId: string;
  payment?: Payment;
  signature: Uint8Array;
}

export interface MsgSubmitPaymentResponse {}

export interface MsgDeleteExpiredSession {
  account: string;
  sessionId: string;
}

export interface MsgDeleteExpiredSessionResponse {}

export interface MsgSubmitChallengeCID {
  account: string;
  sessionId: string;
  cid: string;
}

export interface MsgSubmitChallengeCIDResponse {}

export interface MsgSubmitChallengeReply {
  account: string;
  sessionId: string;
  hash: Uint8Array;
}

export interface MsgSubmitChallengeReplyResponse {}

export interface MsgSubmitChallengeMerkleTree {
  account: string;
  sessionId: string;
  answerHash: Uint8Array;
  merkleTree: Uint8Array[];
}

export interface MsgSubmitChallengeMerkleTreeResponse {}

export interface MsgSubmitChallengeOriginHash {
  account: string;
  sessionId: string;
  hash: Uint8Array;
}

export interface MsgSubmitChallengeOriginHashResponse {}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    _: I
  ): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgRegisterInferenceAgent(): MsgRegisterInferenceAgent {
  return { account: "", url: "", version: Long.UZERO };
}

export const MsgRegisterInferenceAgent = {
  encode(
    message: MsgRegisterInferenceAgent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (!message.version.isZero()) {
      writer.uint32(24).uint64(message.version);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterInferenceAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInferenceAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.version = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterInferenceAgent {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      url: isSet(object.url) ? String(object.url) : "",
      version: isSet(object.version)
        ? Long.fromValue(object.version)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgRegisterInferenceAgent): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.url !== undefined && (obj.url = message.url);
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterInferenceAgent>, I>>(
    object: I
  ): MsgRegisterInferenceAgent {
    const message = createBaseMsgRegisterInferenceAgent();
    message.account = object.account ?? "";
    message.url = object.url ?? "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgRegisterInferenceAgentResponse(): MsgRegisterInferenceAgentResponse {
  return {};
}

export const MsgRegisterInferenceAgentResponse = {
  encode(
    _: MsgRegisterInferenceAgentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterInferenceAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInferenceAgentResponse();
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

  fromJSON(_: any): MsgRegisterInferenceAgentResponse {
    return {};
  },

  toJSON(_: MsgRegisterInferenceAgentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgRegisterInferenceAgentResponse>, I>
  >(_: I): MsgRegisterInferenceAgentResponse {
    const message = createBaseMsgRegisterInferenceAgentResponse();
    return message;
  },
};

function createBaseMsgUpdateInferenceAgent(): MsgUpdateInferenceAgent {
  return { account: "", url: "", version: Long.UZERO, status: 0 };
}

export const MsgUpdateInferenceAgent = {
  encode(
    message: MsgUpdateInferenceAgent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (!message.version.isZero()) {
      writer.uint32(24).uint64(message.version);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateInferenceAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInferenceAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.version = reader.uint64() as Long;
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInferenceAgent {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      url: isSet(object.url) ? String(object.url) : "",
      version: isSet(object.version)
        ? Long.fromValue(object.version)
        : Long.UZERO,
      status: isSet(object.status) ? agentStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgUpdateInferenceAgent): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.url !== undefined && (obj.url = message.url);
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.status !== undefined &&
      (obj.status = agentStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateInferenceAgent>, I>>(
    object: I
  ): MsgUpdateInferenceAgent {
    const message = createBaseMsgUpdateInferenceAgent();
    message.account = object.account ?? "";
    message.url = object.url ?? "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgUpdateInferenceAgentResponse(): MsgUpdateInferenceAgentResponse {
  return {};
}

export const MsgUpdateInferenceAgentResponse = {
  encode(
    _: MsgUpdateInferenceAgentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateInferenceAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInferenceAgentResponse();
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

  fromJSON(_: any): MsgUpdateInferenceAgentResponse {
    return {};
  },

  toJSON(_: MsgUpdateInferenceAgentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateInferenceAgentResponse>, I>>(
    _: I
  ): MsgUpdateInferenceAgentResponse {
    const message = createBaseMsgUpdateInferenceAgentResponse();
    return message;
  },
};

function createBaseMsgRegisterAgentModel(): MsgRegisterAgentModel {
  return { account: "", modelName: [], lock: [] };
}

export const MsgRegisterAgentModel = {
  encode(
    message: MsgRegisterAgentModel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.modelName) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.lock) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterAgentModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAgentModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.modelName.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lock.push(reader.uint64() as Long);
            }
          } else {
            message.lock.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterAgentModel {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      modelName: Array.isArray(object?.modelName)
        ? object.modelName.map((e: any) => String(e))
        : [],
      lock: Array.isArray(object?.lock)
        ? object.lock.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: MsgRegisterAgentModel): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.modelName) {
      obj.modelName = message.modelName.map((e) => e);
    } else {
      obj.modelName = [];
    }
    if (message.lock) {
      obj.lock = message.lock.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.lock = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAgentModel>, I>>(
    object: I
  ): MsgRegisterAgentModel {
    const message = createBaseMsgRegisterAgentModel();
    message.account = object.account ?? "";
    message.modelName = object.modelName?.map((e) => e) || [];
    message.lock = object.lock?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseMsgRegisterAgentModelResponse(): MsgRegisterAgentModelResponse {
  return {};
}

export const MsgRegisterAgentModelResponse = {
  encode(
    _: MsgRegisterAgentModelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterAgentModelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAgentModelResponse();
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

  fromJSON(_: any): MsgRegisterAgentModelResponse {
    return {};
  },

  toJSON(_: MsgRegisterAgentModelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAgentModelResponse>, I>>(
    _: I
  ): MsgRegisterAgentModelResponse {
    const message = createBaseMsgRegisterAgentModelResponse();
    return message;
  },
};

function createBaseMsgUpdateAgentModel(): MsgUpdateAgentModel {
  return { account: "", modelName: [], lock: [], status: 0 };
}

export const MsgUpdateAgentModel = {
  encode(
    message: MsgUpdateAgentModel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.modelName) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.lock) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgentModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAgentModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.modelName.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lock.push(reader.uint64() as Long);
            }
          } else {
            message.lock.push(reader.uint64() as Long);
          }
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAgentModel {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      modelName: Array.isArray(object?.modelName)
        ? object.modelName.map((e: any) => String(e))
        : [],
      lock: Array.isArray(object?.lock)
        ? object.lock.map((e: any) => Long.fromValue(e))
        : [],
      status: isSet(object.status)
        ? agentModelStatusFromJSON(object.status)
        : 0,
    };
  },

  toJSON(message: MsgUpdateAgentModel): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.modelName) {
      obj.modelName = message.modelName.map((e) => e);
    } else {
      obj.modelName = [];
    }
    if (message.lock) {
      obj.lock = message.lock.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.lock = [];
    }
    message.status !== undefined &&
      (obj.status = agentModelStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAgentModel>, I>>(
    object: I
  ): MsgUpdateAgentModel {
    const message = createBaseMsgUpdateAgentModel();
    message.account = object.account ?? "";
    message.modelName = object.modelName?.map((e) => e) || [];
    message.lock = object.lock?.map((e) => Long.fromValue(e)) || [];
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgUpdateAgentModelResponse(): MsgUpdateAgentModelResponse {
  return {};
}

export const MsgUpdateAgentModelResponse = {
  encode(
    _: MsgUpdateAgentModelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAgentModelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAgentModelResponse();
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

  fromJSON(_: any): MsgUpdateAgentModelResponse {
    return {};
  },

  toJSON(_: MsgUpdateAgentModelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAgentModelResponse>, I>>(
    _: I
  ): MsgUpdateAgentModelResponse {
    const message = createBaseMsgUpdateAgentModelResponse();
    return message;
  },
};

function createBaseVRF(): VRF {
  return {
    seed: new Uint8Array(),
    proof: new Uint8Array(),
    hashRandom: new Uint8Array(),
  };
}

export const VRF = {
  encode(message: VRF, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seed.length !== 0) {
      writer.uint32(10).bytes(message.seed);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.hashRandom.length !== 0) {
      writer.uint32(26).bytes(message.hashRandom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VRF {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVRF();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.hashRandom = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VRF {
    return {
      seed: isSet(object.seed)
        ? bytesFromBase64(object.seed)
        : new Uint8Array(),
      proof: isSet(object.proof)
        ? bytesFromBase64(object.proof)
        : new Uint8Array(),
      hashRandom: isSet(object.hashRandom)
        ? bytesFromBase64(object.hashRandom)
        : new Uint8Array(),
    };
  },

  toJSON(message: VRF): unknown {
    const obj: any = {};
    message.seed !== undefined &&
      (obj.seed = base64FromBytes(
        message.seed !== undefined ? message.seed : new Uint8Array()
      ));
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.hashRandom !== undefined &&
      (obj.hashRandom = base64FromBytes(
        message.hashRandom !== undefined ? message.hashRandom : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VRF>, I>>(object: I): VRF {
    const message = createBaseVRF();
    message.seed = object.seed ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.hashRandom = object.hashRandom ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgRegisterSession(): MsgRegisterSession {
  return {
    sessionId: "",
    account: "",
    modelName: "",
    lockBalance: undefined,
    vrf: undefined,
  };
}

export const MsgRegisterSession = {
  encode(
    message: MsgRegisterSession,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.modelName !== "") {
      writer.uint32(26).string(message.modelName);
    }
    if (message.lockBalance !== undefined) {
      Coin.encode(message.lockBalance, writer.uint32(34).fork()).ldelim();
    }
    if (message.vrf !== undefined) {
      VRF.encode(message.vrf, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.modelName = reader.string();
          break;
        case 4:
          message.lockBalance = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.vrf = VRF.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterSession {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      account: isSet(object.account) ? String(object.account) : "",
      modelName: isSet(object.modelName) ? String(object.modelName) : "",
      lockBalance: isSet(object.lockBalance)
        ? Coin.fromJSON(object.lockBalance)
        : undefined,
      vrf: isSet(object.vrf) ? VRF.fromJSON(object.vrf) : undefined,
    };
  },

  toJSON(message: MsgRegisterSession): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.lockBalance !== undefined &&
      (obj.lockBalance = message.lockBalance
        ? Coin.toJSON(message.lockBalance)
        : undefined);
    message.vrf !== undefined &&
      (obj.vrf = message.vrf ? VRF.toJSON(message.vrf) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterSession>, I>>(
    object: I
  ): MsgRegisterSession {
    const message = createBaseMsgRegisterSession();
    message.sessionId = object.sessionId ?? "";
    message.account = object.account ?? "";
    message.modelName = object.modelName ?? "";
    message.lockBalance =
      object.lockBalance !== undefined && object.lockBalance !== null
        ? Coin.fromPartial(object.lockBalance)
        : undefined;
    message.vrf =
      object.vrf !== undefined && object.vrf !== null
        ? VRF.fromPartial(object.vrf)
        : undefined;
    return message;
  },
};

function createBaseMsgRegisterSessionResponse(): MsgRegisterSessionResponse {
  return { account: "", modelName: "" };
}

export const MsgRegisterSessionResponse = {
  encode(
    message: MsgRegisterSessionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.modelName !== "") {
      writer.uint32(18).string(message.modelName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.modelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterSessionResponse {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      modelName: isSet(object.modelName) ? String(object.modelName) : "",
    };
  },

  toJSON(message: MsgRegisterSessionResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterSessionResponse>, I>>(
    object: I
  ): MsgRegisterSessionResponse {
    const message = createBaseMsgRegisterSessionResponse();
    message.account = object.account ?? "";
    message.modelName = object.modelName ?? "";
    return message;
  },
};

function createBaseMsgSubmitPayment(): MsgSubmitPayment {
  return {
    account: "",
    sessionId: "",
    payment: undefined,
    signature: new Uint8Array(),
  };
}

export const MsgSubmitPayment = {
  encode(
    message: MsgSubmitPayment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.payment !== undefined) {
      Payment.encode(message.payment, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitPayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 3:
          message.payment = Payment.decode(reader, reader.uint32());
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitPayment {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      payment: isSet(object.payment)
        ? Payment.fromJSON(object.payment)
        : undefined,
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgSubmitPayment): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.payment !== undefined &&
      (obj.payment = message.payment
        ? Payment.toJSON(message.payment)
        : undefined);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitPayment>, I>>(
    object: I
  ): MsgSubmitPayment {
    const message = createBaseMsgSubmitPayment();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    message.payment =
      object.payment !== undefined && object.payment !== null
        ? Payment.fromPartial(object.payment)
        : undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgSubmitPaymentResponse(): MsgSubmitPaymentResponse {
  return {};
}

export const MsgSubmitPaymentResponse = {
  encode(
    _: MsgSubmitPaymentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitPaymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitPaymentResponse();
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

  fromJSON(_: any): MsgSubmitPaymentResponse {
    return {};
  },

  toJSON(_: MsgSubmitPaymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitPaymentResponse>, I>>(
    _: I
  ): MsgSubmitPaymentResponse {
    const message = createBaseMsgSubmitPaymentResponse();
    return message;
  },
};

function createBaseMsgDeleteExpiredSession(): MsgDeleteExpiredSession {
  return { account: "", sessionId: "" };
}

export const MsgDeleteExpiredSession = {
  encode(
    message: MsgDeleteExpiredSession,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteExpiredSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteExpiredSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteExpiredSession {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
    };
  },

  toJSON(message: MsgDeleteExpiredSession): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteExpiredSession>, I>>(
    object: I
  ): MsgDeleteExpiredSession {
    const message = createBaseMsgDeleteExpiredSession();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    return message;
  },
};

function createBaseMsgDeleteExpiredSessionResponse(): MsgDeleteExpiredSessionResponse {
  return {};
}

export const MsgDeleteExpiredSessionResponse = {
  encode(
    _: MsgDeleteExpiredSessionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteExpiredSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteExpiredSessionResponse();
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

  fromJSON(_: any): MsgDeleteExpiredSessionResponse {
    return {};
  },

  toJSON(_: MsgDeleteExpiredSessionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteExpiredSessionResponse>, I>>(
    _: I
  ): MsgDeleteExpiredSessionResponse {
    const message = createBaseMsgDeleteExpiredSessionResponse();
    return message;
  },
};

function createBaseMsgSubmitChallengeCID(): MsgSubmitChallengeCID {
  return { account: "", sessionId: "", cid: "" };
}

export const MsgSubmitChallengeCID = {
  encode(
    message: MsgSubmitChallengeCID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.cid !== "") {
      writer.uint32(26).string(message.cid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitChallengeCID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitChallengeCID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 3:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitChallengeCID {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      cid: isSet(object.cid) ? String(object.cid) : "",
    };
  },

  toJSON(message: MsgSubmitChallengeCID): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeCID>, I>>(
    object: I
  ): MsgSubmitChallengeCID {
    const message = createBaseMsgSubmitChallengeCID();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseMsgSubmitChallengeCIDResponse(): MsgSubmitChallengeCIDResponse {
  return {};
}

export const MsgSubmitChallengeCIDResponse = {
  encode(
    _: MsgSubmitChallengeCIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitChallengeCIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitChallengeCIDResponse();
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

  fromJSON(_: any): MsgSubmitChallengeCIDResponse {
    return {};
  },

  toJSON(_: MsgSubmitChallengeCIDResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeCIDResponse>, I>>(
    _: I
  ): MsgSubmitChallengeCIDResponse {
    const message = createBaseMsgSubmitChallengeCIDResponse();
    return message;
  },
};

function createBaseMsgSubmitChallengeReply(): MsgSubmitChallengeReply {
  return { account: "", sessionId: "", hash: new Uint8Array() };
}

export const MsgSubmitChallengeReply = {
  encode(
    message: MsgSubmitChallengeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitChallengeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitChallengeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitChallengeReply {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgSubmitChallengeReply): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeReply>, I>>(
    object: I
  ): MsgSubmitChallengeReply {
    const message = createBaseMsgSubmitChallengeReply();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgSubmitChallengeReplyResponse(): MsgSubmitChallengeReplyResponse {
  return {};
}

export const MsgSubmitChallengeReplyResponse = {
  encode(
    _: MsgSubmitChallengeReplyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitChallengeReplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitChallengeReplyResponse();
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

  fromJSON(_: any): MsgSubmitChallengeReplyResponse {
    return {};
  },

  toJSON(_: MsgSubmitChallengeReplyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeReplyResponse>, I>>(
    _: I
  ): MsgSubmitChallengeReplyResponse {
    const message = createBaseMsgSubmitChallengeReplyResponse();
    return message;
  },
};

function createBaseMsgSubmitChallengeMerkleTree(): MsgSubmitChallengeMerkleTree {
  return {
    account: "",
    sessionId: "",
    answerHash: new Uint8Array(),
    merkleTree: [],
  };
}

export const MsgSubmitChallengeMerkleTree = {
  encode(
    message: MsgSubmitChallengeMerkleTree,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.answerHash.length !== 0) {
      writer.uint32(26).bytes(message.answerHash);
    }
    for (const v of message.merkleTree) {
      writer.uint32(34).bytes(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitChallengeMerkleTree {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitChallengeMerkleTree();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 3:
          message.answerHash = reader.bytes();
          break;
        case 4:
          message.merkleTree.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitChallengeMerkleTree {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      answerHash: isSet(object.answerHash)
        ? bytesFromBase64(object.answerHash)
        : new Uint8Array(),
      merkleTree: Array.isArray(object?.merkleTree)
        ? object.merkleTree.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: MsgSubmitChallengeMerkleTree): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.answerHash !== undefined &&
      (obj.answerHash = base64FromBytes(
        message.answerHash !== undefined ? message.answerHash : new Uint8Array()
      ));
    if (message.merkleTree) {
      obj.merkleTree = message.merkleTree.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.merkleTree = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeMerkleTree>, I>>(
    object: I
  ): MsgSubmitChallengeMerkleTree {
    const message = createBaseMsgSubmitChallengeMerkleTree();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    message.answerHash = object.answerHash ?? new Uint8Array();
    message.merkleTree = object.merkleTree?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgSubmitChallengeMerkleTreeResponse(): MsgSubmitChallengeMerkleTreeResponse {
  return {};
}

export const MsgSubmitChallengeMerkleTreeResponse = {
  encode(
    _: MsgSubmitChallengeMerkleTreeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitChallengeMerkleTreeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitChallengeMerkleTreeResponse();
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

  fromJSON(_: any): MsgSubmitChallengeMerkleTreeResponse {
    return {};
  },

  toJSON(_: MsgSubmitChallengeMerkleTreeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgSubmitChallengeMerkleTreeResponse>, I>
  >(_: I): MsgSubmitChallengeMerkleTreeResponse {
    const message = createBaseMsgSubmitChallengeMerkleTreeResponse();
    return message;
  },
};

function createBaseMsgSubmitChallengeOriginHash(): MsgSubmitChallengeOriginHash {
  return { account: "", sessionId: "", hash: new Uint8Array() };
}

export const MsgSubmitChallengeOriginHash = {
  encode(
    message: MsgSubmitChallengeOriginHash,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitChallengeOriginHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitChallengeOriginHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitChallengeOriginHash {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgSubmitChallengeOriginHash): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeOriginHash>, I>>(
    object: I
  ): MsgSubmitChallengeOriginHash {
    const message = createBaseMsgSubmitChallengeOriginHash();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgSubmitChallengeOriginHashResponse(): MsgSubmitChallengeOriginHashResponse {
  return {};
}

export const MsgSubmitChallengeOriginHashResponse = {
  encode(
    _: MsgSubmitChallengeOriginHashResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitChallengeOriginHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitChallengeOriginHashResponse();
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

  fromJSON(_: any): MsgSubmitChallengeOriginHashResponse {
    return {};
  },

  toJSON(_: MsgSubmitChallengeOriginHashResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgSubmitChallengeOriginHashResponse>, I>
  >(_: I): MsgSubmitChallengeOriginHashResponse {
    const message = createBaseMsgSubmitChallengeOriginHashResponse();
    return message;
  },
};

export interface Msg {
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  RegisterInferenceAgent(
    request: MsgRegisterInferenceAgent
  ): Promise<MsgRegisterInferenceAgentResponse>;
  UpdateInferenceAgent(
    request: MsgUpdateInferenceAgent
  ): Promise<MsgUpdateInferenceAgentResponse>;
  RegisterAgentModel(
    request: MsgRegisterAgentModel
  ): Promise<MsgRegisterAgentModelResponse>;
  UpdateAgentModel(
    request: MsgUpdateAgentModel
  ): Promise<MsgUpdateAgentModelResponse>;
  RegisterSession(
    request: MsgRegisterSession
  ): Promise<MsgRegisterSessionResponse>;
  SubmitPayment(request: MsgSubmitPayment): Promise<MsgSubmitPaymentResponse>;
  DeleteExpiredSession(
    request: MsgDeleteExpiredSession
  ): Promise<MsgDeleteExpiredSessionResponse>;
  SubmitChallengeCID(
    request: MsgSubmitChallengeCID
  ): Promise<MsgSubmitChallengeCIDResponse>;
  SubmitChallengeReply(
    request: MsgSubmitChallengeReply
  ): Promise<MsgSubmitChallengeReplyResponse>;
  SubmitChallengeMerkleTree(
    request: MsgSubmitChallengeMerkleTree
  ): Promise<MsgSubmitChallengeMerkleTreeResponse>;
  SubmitChallengeOriginHash(
    request: MsgSubmitChallengeOriginHash
  ): Promise<MsgSubmitChallengeOriginHashResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.RegisterInferenceAgent = this.RegisterInferenceAgent.bind(this);
    this.UpdateInferenceAgent = this.UpdateInferenceAgent.bind(this);
    this.RegisterAgentModel = this.RegisterAgentModel.bind(this);
    this.UpdateAgentModel = this.UpdateAgentModel.bind(this);
    this.RegisterSession = this.RegisterSession.bind(this);
    this.SubmitPayment = this.SubmitPayment.bind(this);
    this.DeleteExpiredSession = this.DeleteExpiredSession.bind(this);
    this.SubmitChallengeCID = this.SubmitChallengeCID.bind(this);
    this.SubmitChallengeReply = this.SubmitChallengeReply.bind(this);
    this.SubmitChallengeMerkleTree = this.SubmitChallengeMerkleTree.bind(this);
    this.SubmitChallengeOriginHash = this.SubmitChallengeOriginHash.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "UpdateParams", data);
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterInferenceAgent(
    request: MsgRegisterInferenceAgent
  ): Promise<MsgRegisterInferenceAgentResponse> {
    const data = MsgRegisterInferenceAgent.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Msg",
      "RegisterInferenceAgent",
      data
    );
    return promise.then((data) =>
      MsgRegisterInferenceAgentResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateInferenceAgent(
    request: MsgUpdateInferenceAgent
  ): Promise<MsgUpdateInferenceAgentResponse> {
    const data = MsgUpdateInferenceAgent.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Msg",
      "UpdateInferenceAgent",
      data
    );
    return promise.then((data) =>
      MsgUpdateInferenceAgentResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterAgentModel(
    request: MsgRegisterAgentModel
  ): Promise<MsgRegisterAgentModelResponse> {
    const data = MsgRegisterAgentModel.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Msg",
      "RegisterAgentModel",
      data
    );
    return promise.then((data) =>
      MsgRegisterAgentModelResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateAgentModel(
    request: MsgUpdateAgentModel
  ): Promise<MsgUpdateAgentModelResponse> {
    const data = MsgUpdateAgentModel.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "UpdateAgentModel", data);
    return promise.then((data) =>
      MsgUpdateAgentModelResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterSession(
    request: MsgRegisterSession
  ): Promise<MsgRegisterSessionResponse> {
    const data = MsgRegisterSession.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "RegisterSession", data);
    return promise.then((data) =>
      MsgRegisterSessionResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitPayment(request: MsgSubmitPayment): Promise<MsgSubmitPaymentResponse> {
    const data = MsgSubmitPayment.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "SubmitPayment", data);
    return promise.then((data) =>
      MsgSubmitPaymentResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteExpiredSession(
    request: MsgDeleteExpiredSession
  ): Promise<MsgDeleteExpiredSessionResponse> {
    const data = MsgDeleteExpiredSession.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Msg",
      "DeleteExpiredSession",
      data
    );
    return promise.then((data) =>
      MsgDeleteExpiredSessionResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitChallengeCID(
    request: MsgSubmitChallengeCID
  ): Promise<MsgSubmitChallengeCIDResponse> {
    const data = MsgSubmitChallengeCID.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Msg",
      "SubmitChallengeCID",
      data
    );
    return promise.then((data) =>
      MsgSubmitChallengeCIDResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitChallengeReply(
    request: MsgSubmitChallengeReply
  ): Promise<MsgSubmitChallengeReplyResponse> {
    const data = MsgSubmitChallengeReply.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Msg",
      "SubmitChallengeReply",
      data
    );
    return promise.then((data) =>
      MsgSubmitChallengeReplyResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitChallengeMerkleTree(
    request: MsgSubmitChallengeMerkleTree
  ): Promise<MsgSubmitChallengeMerkleTreeResponse> {
    const data = MsgSubmitChallengeMerkleTree.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Msg",
      "SubmitChallengeMerkleTree",
      data
    );
    return promise.then((data) =>
      MsgSubmitChallengeMerkleTreeResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitChallengeOriginHash(
    request: MsgSubmitChallengeOriginHash
  ): Promise<MsgSubmitChallengeOriginHashResponse> {
    const data = MsgSubmitChallengeOriginHash.encode(request).finish();
    const promise = this.rpc.request(
      "agent.v1.Msg",
      "SubmitChallengeOriginHash",
      data
    );
    return promise.then((data) =>
      MsgSubmitChallengeOriginHashResponse.decode(new _m0.Reader(data))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
