/* eslint-disable */
import { Params, AgentStatus, AgentModelStatus, TokenPrice, Payment, agentStatusFromJSON, agentStatusToJSON, agentModelStatusFromJSON, agentModelStatusToJSON } from "./agent";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "agent.v1";
export interface MsgUpdateParams {
  authority: string;
  params: Params;
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
  url?: string;
  version?: Long;
  status?: AgentStatus;
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
export interface MsgCancelSessionResponse {}
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
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/agent.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/agent.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
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
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgRegisterInferenceAgent(): MsgRegisterInferenceAgent {
  return {
    account: "",
    url: "",
    version: Long.UZERO
  };
}
export const MsgRegisterInferenceAgent = {
  typeUrl: "/agent.v1.MsgRegisterInferenceAgent",
  encode(message: MsgRegisterInferenceAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInferenceAgent {
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
    const obj = createBaseMsgRegisterInferenceAgent();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.url)) obj.url = String(object.url);
    if (isSet(object.version)) obj.version = Long.fromValue(object.version);
    return obj;
  },
  toJSON(message: MsgRegisterInferenceAgent): JsonSafe<MsgRegisterInferenceAgent> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.url !== undefined && (obj.url = message.url);
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterInferenceAgent>, I>>(object: I): MsgRegisterInferenceAgent {
    const message = createBaseMsgRegisterInferenceAgent();
    message.account = object.account ?? "";
    message.url = object.url ?? "";
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromValue(object.version);
    }
    return message;
  }
};
function createBaseMsgRegisterInferenceAgentResponse(): MsgRegisterInferenceAgentResponse {
  return {};
}
export const MsgRegisterInferenceAgentResponse = {
  typeUrl: "/agent.v1.MsgRegisterInferenceAgentResponse",
  encode(_: MsgRegisterInferenceAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInferenceAgentResponse {
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
    const obj = createBaseMsgRegisterInferenceAgentResponse();
    return obj;
  },
  toJSON(_: MsgRegisterInferenceAgentResponse): JsonSafe<MsgRegisterInferenceAgentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterInferenceAgentResponse>, I>>(_: I): MsgRegisterInferenceAgentResponse {
    const message = createBaseMsgRegisterInferenceAgentResponse();
    return message;
  }
};
function createBaseMsgUpdateInferenceAgent(): MsgUpdateInferenceAgent {
  return {
    account: "",
    url: undefined,
    version: undefined,
    status: undefined
  };
}
export const MsgUpdateInferenceAgent = {
  typeUrl: "/agent.v1.MsgUpdateInferenceAgent",
  encode(message: MsgUpdateInferenceAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.url !== undefined) {
      writer.uint32(18).string(message.url);
    }
    if (message.version !== undefined) {
      writer.uint32(24).uint64(message.version);
    }
    if (message.status !== undefined) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInferenceAgent {
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
    const obj = createBaseMsgUpdateInferenceAgent();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.url)) obj.url = String(object.url);
    if (isSet(object.version)) obj.version = Long.fromValue(object.version);
    if (isSet(object.status)) obj.status = agentStatusFromJSON(object.status);
    return obj;
  },
  toJSON(message: MsgUpdateInferenceAgent): JsonSafe<MsgUpdateInferenceAgent> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.url !== undefined && (obj.url = message.url);
    if (message.version !== undefined) {
      obj.version = message.version.toString();
    }
    message.status !== undefined && (obj.status = agentStatusToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateInferenceAgent>, I>>(object: I): MsgUpdateInferenceAgent {
    const message = createBaseMsgUpdateInferenceAgent();
    message.account = object.account ?? "";
    message.url = object.url ?? undefined;
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromValue(object.version);
    }
    message.status = object.status ?? undefined;
    return message;
  }
};
function createBaseMsgUpdateInferenceAgentResponse(): MsgUpdateInferenceAgentResponse {
  return {};
}
export const MsgUpdateInferenceAgentResponse = {
  typeUrl: "/agent.v1.MsgUpdateInferenceAgentResponse",
  encode(_: MsgUpdateInferenceAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInferenceAgentResponse {
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
    const obj = createBaseMsgUpdateInferenceAgentResponse();
    return obj;
  },
  toJSON(_: MsgUpdateInferenceAgentResponse): JsonSafe<MsgUpdateInferenceAgentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateInferenceAgentResponse>, I>>(_: I): MsgUpdateInferenceAgentResponse {
    const message = createBaseMsgUpdateInferenceAgentResponse();
    return message;
  }
};
function createBaseMsgRegisterAgentModel(): MsgRegisterAgentModel {
  return {
    account: "",
    modelName: [],
    lock: []
  };
}
export const MsgRegisterAgentModel = {
  typeUrl: "/agent.v1.MsgRegisterAgentModel",
  encode(message: MsgRegisterAgentModel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAgentModel {
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
    const obj = createBaseMsgRegisterAgentModel();
    if (isSet(object.account)) obj.account = String(object.account);
    if (Array.isArray(object?.modelName)) obj.modelName = object.modelName.map((e: any) => String(e));
    if (Array.isArray(object?.lock)) obj.lock = object.lock.map((e: any) => Long.fromValue(e));
    return obj;
  },
  toJSON(message: MsgRegisterAgentModel): JsonSafe<MsgRegisterAgentModel> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.modelName) {
      obj.modelName = message.modelName.map(e => e);
    } else {
      obj.modelName = [];
    }
    if (message.lock) {
      obj.lock = message.lock.map(e => (e || Long.UZERO).toString());
    } else {
      obj.lock = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterAgentModel>, I>>(object: I): MsgRegisterAgentModel {
    const message = createBaseMsgRegisterAgentModel();
    message.account = object.account ?? "";
    message.modelName = object.modelName?.map(e => e) || [];
    message.lock = object.lock?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseMsgRegisterAgentModelResponse(): MsgRegisterAgentModelResponse {
  return {};
}
export const MsgRegisterAgentModelResponse = {
  typeUrl: "/agent.v1.MsgRegisterAgentModelResponse",
  encode(_: MsgRegisterAgentModelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAgentModelResponse {
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
    const obj = createBaseMsgRegisterAgentModelResponse();
    return obj;
  },
  toJSON(_: MsgRegisterAgentModelResponse): JsonSafe<MsgRegisterAgentModelResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterAgentModelResponse>, I>>(_: I): MsgRegisterAgentModelResponse {
    const message = createBaseMsgRegisterAgentModelResponse();
    return message;
  }
};
function createBaseMsgUpdateAgentModel(): MsgUpdateAgentModel {
  return {
    account: "",
    modelName: [],
    lock: [],
    status: 0
  };
}
export const MsgUpdateAgentModel = {
  typeUrl: "/agent.v1.MsgUpdateAgentModel",
  encode(message: MsgUpdateAgentModel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const obj = createBaseMsgUpdateAgentModel();
    if (isSet(object.account)) obj.account = String(object.account);
    if (Array.isArray(object?.modelName)) obj.modelName = object.modelName.map((e: any) => String(e));
    if (Array.isArray(object?.lock)) obj.lock = object.lock.map((e: any) => Long.fromValue(e));
    if (isSet(object.status)) obj.status = agentModelStatusFromJSON(object.status);
    return obj;
  },
  toJSON(message: MsgUpdateAgentModel): JsonSafe<MsgUpdateAgentModel> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.modelName) {
      obj.modelName = message.modelName.map(e => e);
    } else {
      obj.modelName = [];
    }
    if (message.lock) {
      obj.lock = message.lock.map(e => (e || Long.UZERO).toString());
    } else {
      obj.lock = [];
    }
    message.status !== undefined && (obj.status = agentModelStatusToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateAgentModel>, I>>(object: I): MsgUpdateAgentModel {
    const message = createBaseMsgUpdateAgentModel();
    message.account = object.account ?? "";
    message.modelName = object.modelName?.map(e => e) || [];
    message.lock = object.lock?.map(e => Long.fromValue(e)) || [];
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseMsgUpdateAgentModelResponse(): MsgUpdateAgentModelResponse {
  return {};
}
export const MsgUpdateAgentModelResponse = {
  typeUrl: "/agent.v1.MsgUpdateAgentModelResponse",
  encode(_: MsgUpdateAgentModelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgentModelResponse {
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
    const obj = createBaseMsgUpdateAgentModelResponse();
    return obj;
  },
  toJSON(_: MsgUpdateAgentModelResponse): JsonSafe<MsgUpdateAgentModelResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateAgentModelResponse>, I>>(_: I): MsgUpdateAgentModelResponse {
    const message = createBaseMsgUpdateAgentModelResponse();
    return message;
  }
};
function createBaseVRF(): VRF {
  return {
    seed: new Uint8Array(),
    proof: new Uint8Array(),
    hashRandom: new Uint8Array()
  };
}
export const VRF = {
  typeUrl: "/agent.v1.VRF",
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
    const obj = createBaseVRF();
    if (isSet(object.seed)) obj.seed = bytesFromBase64(object.seed);
    if (isSet(object.proof)) obj.proof = bytesFromBase64(object.proof);
    if (isSet(object.hashRandom)) obj.hashRandom = bytesFromBase64(object.hashRandom);
    return obj;
  },
  toJSON(message: VRF): JsonSafe<VRF> {
    const obj: any = {};
    message.seed !== undefined && (obj.seed = base64FromBytes(message.seed !== undefined ? message.seed : new Uint8Array()));
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.hashRandom !== undefined && (obj.hashRandom = base64FromBytes(message.hashRandom !== undefined ? message.hashRandom : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VRF>, I>>(object: I): VRF {
    const message = createBaseVRF();
    message.seed = object.seed ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.hashRandom = object.hashRandom ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgRegisterSession(): MsgRegisterSession {
  return {
    sessionId: "",
    account: "",
    modelName: "",
    lockBalance: Coin.fromPartial({}),
    vrf: VRF.fromPartial({}),
    tokenPrice: TokenPrice.fromPartial({})
  };
}
export const MsgRegisterSession = {
  typeUrl: "/agent.v1.MsgRegisterSession",
  encode(message: MsgRegisterSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(50).fork()).ldelim();
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
        case 6:
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterSession {
    const obj = createBaseMsgRegisterSession();
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.lockBalance)) obj.lockBalance = Coin.fromJSON(object.lockBalance);
    if (isSet(object.vrf)) obj.vrf = VRF.fromJSON(object.vrf);
    if (isSet(object.tokenPrice)) obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
    return obj;
  },
  toJSON(message: MsgRegisterSession): JsonSafe<MsgRegisterSession> {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.lockBalance !== undefined && (obj.lockBalance = message.lockBalance ? Coin.toJSON(message.lockBalance) : undefined);
    message.vrf !== undefined && (obj.vrf = message.vrf ? VRF.toJSON(message.vrf) : undefined);
    message.tokenPrice !== undefined && (obj.tokenPrice = message.tokenPrice ? TokenPrice.toJSON(message.tokenPrice) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterSession>, I>>(object: I): MsgRegisterSession {
    const message = createBaseMsgRegisterSession();
    message.sessionId = object.sessionId ?? "";
    message.account = object.account ?? "";
    message.modelName = object.modelName ?? "";
    if (object.lockBalance !== undefined && object.lockBalance !== null) {
      message.lockBalance = Coin.fromPartial(object.lockBalance);
    }
    if (object.vrf !== undefined && object.vrf !== null) {
      message.vrf = VRF.fromPartial(object.vrf);
    }
    if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
      message.tokenPrice = TokenPrice.fromPartial(object.tokenPrice);
    }
    return message;
  }
};
function createBaseMsgRegisterSessionResponse(): MsgRegisterSessionResponse {
  return {
    account: "",
    modelName: ""
  };
}
export const MsgRegisterSessionResponse = {
  typeUrl: "/agent.v1.MsgRegisterSessionResponse",
  encode(message: MsgRegisterSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.modelName !== "") {
      writer.uint32(18).string(message.modelName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterSessionResponse {
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
    const obj = createBaseMsgRegisterSessionResponse();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    return obj;
  },
  toJSON(message: MsgRegisterSessionResponse): JsonSafe<MsgRegisterSessionResponse> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterSessionResponse>, I>>(object: I): MsgRegisterSessionResponse {
    const message = createBaseMsgRegisterSessionResponse();
    message.account = object.account ?? "";
    message.modelName = object.modelName ?? "";
    return message;
  }
};
function createBaseMsgCancelSession(): MsgCancelSession {
  return {
    sessionId: "",
    account: ""
  };
}
export const MsgCancelSession = {
  typeUrl: "/agent.v1.MsgCancelSession",
  encode(message: MsgCancelSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelSession {
    const obj = createBaseMsgCancelSession();
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.account)) obj.account = String(object.account);
    return obj;
  },
  toJSON(message: MsgCancelSession): JsonSafe<MsgCancelSession> {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSession>, I>>(object: I): MsgCancelSession {
    const message = createBaseMsgCancelSession();
    message.sessionId = object.sessionId ?? "";
    message.account = object.account ?? "";
    return message;
  }
};
function createBaseMsgCancelSessionResponse(): MsgCancelSessionResponse {
  return {};
}
export const MsgCancelSessionResponse = {
  typeUrl: "/agent.v1.MsgCancelSessionResponse",
  encode(_: MsgCancelSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSessionResponse();
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
  fromJSON(_: any): MsgCancelSessionResponse {
    const obj = createBaseMsgCancelSessionResponse();
    return obj;
  },
  toJSON(_: MsgCancelSessionResponse): JsonSafe<MsgCancelSessionResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSessionResponse>, I>>(_: I): MsgCancelSessionResponse {
    const message = createBaseMsgCancelSessionResponse();
    return message;
  }
};
function createBaseMsgSubmitPayment(): MsgSubmitPayment {
  return {
    account: "",
    sessionId: "",
    payment: undefined,
    signature: new Uint8Array()
  };
}
export const MsgSubmitPayment = {
  typeUrl: "/agent.v1.MsgSubmitPayment",
  encode(message: MsgSubmitPayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const obj = createBaseMsgSubmitPayment();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.payment)) obj.payment = Payment.fromJSON(object.payment);
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    return obj;
  },
  toJSON(message: MsgSubmitPayment): JsonSafe<MsgSubmitPayment> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.payment !== undefined && (obj.payment = message.payment ? Payment.toJSON(message.payment) : undefined);
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitPayment>, I>>(object: I): MsgSubmitPayment {
    const message = createBaseMsgSubmitPayment();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    if (object.payment !== undefined && object.payment !== null) {
      message.payment = Payment.fromPartial(object.payment);
    }
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgSubmitPaymentResponse(): MsgSubmitPaymentResponse {
  return {};
}
export const MsgSubmitPaymentResponse = {
  typeUrl: "/agent.v1.MsgSubmitPaymentResponse",
  encode(_: MsgSubmitPaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitPaymentResponse {
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
    const obj = createBaseMsgSubmitPaymentResponse();
    return obj;
  },
  toJSON(_: MsgSubmitPaymentResponse): JsonSafe<MsgSubmitPaymentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitPaymentResponse>, I>>(_: I): MsgSubmitPaymentResponse {
    const message = createBaseMsgSubmitPaymentResponse();
    return message;
  }
};
function createBaseMsgDeleteExpiredSession(): MsgDeleteExpiredSession {
  return {
    account: "",
    sessionId: ""
  };
}
export const MsgDeleteExpiredSession = {
  typeUrl: "/agent.v1.MsgDeleteExpiredSession",
  encode(message: MsgDeleteExpiredSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteExpiredSession {
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
    const obj = createBaseMsgDeleteExpiredSession();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    return obj;
  },
  toJSON(message: MsgDeleteExpiredSession): JsonSafe<MsgDeleteExpiredSession> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteExpiredSession>, I>>(object: I): MsgDeleteExpiredSession {
    const message = createBaseMsgDeleteExpiredSession();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    return message;
  }
};
function createBaseMsgDeleteExpiredSessionResponse(): MsgDeleteExpiredSessionResponse {
  return {};
}
export const MsgDeleteExpiredSessionResponse = {
  typeUrl: "/agent.v1.MsgDeleteExpiredSessionResponse",
  encode(_: MsgDeleteExpiredSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteExpiredSessionResponse {
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
    const obj = createBaseMsgDeleteExpiredSessionResponse();
    return obj;
  },
  toJSON(_: MsgDeleteExpiredSessionResponse): JsonSafe<MsgDeleteExpiredSessionResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteExpiredSessionResponse>, I>>(_: I): MsgDeleteExpiredSessionResponse {
    const message = createBaseMsgDeleteExpiredSessionResponse();
    return message;
  }
};
function createBaseMsgSubmitChallengeCID(): MsgSubmitChallengeCID {
  return {
    account: "",
    sessionId: "",
    cid: ""
  };
}
export const MsgSubmitChallengeCID = {
  typeUrl: "/agent.v1.MsgSubmitChallengeCID",
  encode(message: MsgSubmitChallengeCID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeCID {
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
    const obj = createBaseMsgSubmitChallengeCID();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.cid)) obj.cid = String(object.cid);
    return obj;
  },
  toJSON(message: MsgSubmitChallengeCID): JsonSafe<MsgSubmitChallengeCID> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeCID>, I>>(object: I): MsgSubmitChallengeCID {
    const message = createBaseMsgSubmitChallengeCID();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    message.cid = object.cid ?? "";
    return message;
  }
};
function createBaseMsgSubmitChallengeCIDResponse(): MsgSubmitChallengeCIDResponse {
  return {};
}
export const MsgSubmitChallengeCIDResponse = {
  typeUrl: "/agent.v1.MsgSubmitChallengeCIDResponse",
  encode(_: MsgSubmitChallengeCIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeCIDResponse {
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
    const obj = createBaseMsgSubmitChallengeCIDResponse();
    return obj;
  },
  toJSON(_: MsgSubmitChallengeCIDResponse): JsonSafe<MsgSubmitChallengeCIDResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeCIDResponse>, I>>(_: I): MsgSubmitChallengeCIDResponse {
    const message = createBaseMsgSubmitChallengeCIDResponse();
    return message;
  }
};
function createBaseMsgSubmitChallengeReply(): MsgSubmitChallengeReply {
  return {
    account: "",
    sessionId: "",
    hash: new Uint8Array()
  };
}
export const MsgSubmitChallengeReply = {
  typeUrl: "/agent.v1.MsgSubmitChallengeReply",
  encode(message: MsgSubmitChallengeReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeReply {
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
    const obj = createBaseMsgSubmitChallengeReply();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    return obj;
  },
  toJSON(message: MsgSubmitChallengeReply): JsonSafe<MsgSubmitChallengeReply> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeReply>, I>>(object: I): MsgSubmitChallengeReply {
    const message = createBaseMsgSubmitChallengeReply();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgSubmitChallengeReplyResponse(): MsgSubmitChallengeReplyResponse {
  return {};
}
export const MsgSubmitChallengeReplyResponse = {
  typeUrl: "/agent.v1.MsgSubmitChallengeReplyResponse",
  encode(_: MsgSubmitChallengeReplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeReplyResponse {
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
    const obj = createBaseMsgSubmitChallengeReplyResponse();
    return obj;
  },
  toJSON(_: MsgSubmitChallengeReplyResponse): JsonSafe<MsgSubmitChallengeReplyResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeReplyResponse>, I>>(_: I): MsgSubmitChallengeReplyResponse {
    const message = createBaseMsgSubmitChallengeReplyResponse();
    return message;
  }
};
function createBaseMsgSubmitChallengeMerkleTree(): MsgSubmitChallengeMerkleTree {
  return {
    account: "",
    sessionId: "",
    answerHash: new Uint8Array(),
    merkleTree: []
  };
}
export const MsgSubmitChallengeMerkleTree = {
  typeUrl: "/agent.v1.MsgSubmitChallengeMerkleTree",
  encode(message: MsgSubmitChallengeMerkleTree, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeMerkleTree {
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
    const obj = createBaseMsgSubmitChallengeMerkleTree();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.answerHash)) obj.answerHash = bytesFromBase64(object.answerHash);
    if (Array.isArray(object?.merkleTree)) obj.merkleTree = object.merkleTree.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: MsgSubmitChallengeMerkleTree): JsonSafe<MsgSubmitChallengeMerkleTree> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.answerHash !== undefined && (obj.answerHash = base64FromBytes(message.answerHash !== undefined ? message.answerHash : new Uint8Array()));
    if (message.merkleTree) {
      obj.merkleTree = message.merkleTree.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.merkleTree = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeMerkleTree>, I>>(object: I): MsgSubmitChallengeMerkleTree {
    const message = createBaseMsgSubmitChallengeMerkleTree();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    message.answerHash = object.answerHash ?? new Uint8Array();
    message.merkleTree = object.merkleTree?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgSubmitChallengeMerkleTreeResponse(): MsgSubmitChallengeMerkleTreeResponse {
  return {};
}
export const MsgSubmitChallengeMerkleTreeResponse = {
  typeUrl: "/agent.v1.MsgSubmitChallengeMerkleTreeResponse",
  encode(_: MsgSubmitChallengeMerkleTreeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeMerkleTreeResponse {
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
    const obj = createBaseMsgSubmitChallengeMerkleTreeResponse();
    return obj;
  },
  toJSON(_: MsgSubmitChallengeMerkleTreeResponse): JsonSafe<MsgSubmitChallengeMerkleTreeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeMerkleTreeResponse>, I>>(_: I): MsgSubmitChallengeMerkleTreeResponse {
    const message = createBaseMsgSubmitChallengeMerkleTreeResponse();
    return message;
  }
};
function createBaseMsgSubmitChallengeOriginHash(): MsgSubmitChallengeOriginHash {
  return {
    account: "",
    sessionId: "",
    hash: new Uint8Array()
  };
}
export const MsgSubmitChallengeOriginHash = {
  typeUrl: "/agent.v1.MsgSubmitChallengeOriginHash",
  encode(message: MsgSubmitChallengeOriginHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeOriginHash {
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
    const obj = createBaseMsgSubmitChallengeOriginHash();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    return obj;
  },
  toJSON(message: MsgSubmitChallengeOriginHash): JsonSafe<MsgSubmitChallengeOriginHash> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeOriginHash>, I>>(object: I): MsgSubmitChallengeOriginHash {
    const message = createBaseMsgSubmitChallengeOriginHash();
    message.account = object.account ?? "";
    message.sessionId = object.sessionId ?? "";
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgSubmitChallengeOriginHashResponse(): MsgSubmitChallengeOriginHashResponse {
  return {};
}
export const MsgSubmitChallengeOriginHashResponse = {
  typeUrl: "/agent.v1.MsgSubmitChallengeOriginHashResponse",
  encode(_: MsgSubmitChallengeOriginHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitChallengeOriginHashResponse {
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
    const obj = createBaseMsgSubmitChallengeOriginHashResponse();
    return obj;
  },
  toJSON(_: MsgSubmitChallengeOriginHashResponse): JsonSafe<MsgSubmitChallengeOriginHashResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitChallengeOriginHashResponse>, I>>(_: I): MsgSubmitChallengeOriginHashResponse {
    const message = createBaseMsgSubmitChallengeOriginHashResponse();
    return message;
  }
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
    this.CancelSession = this.CancelSession.bind(this);
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
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  RegisterInferenceAgent(request: MsgRegisterInferenceAgent): Promise<MsgRegisterInferenceAgentResponse> {
    const data = MsgRegisterInferenceAgent.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "RegisterInferenceAgent", data);
    return promise.then(data => MsgRegisterInferenceAgentResponse.decode(new _m0.Reader(data)));
  }
  UpdateInferenceAgent(request: MsgUpdateInferenceAgent): Promise<MsgUpdateInferenceAgentResponse> {
    const data = MsgUpdateInferenceAgent.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "UpdateInferenceAgent", data);
    return promise.then(data => MsgUpdateInferenceAgentResponse.decode(new _m0.Reader(data)));
  }
  RegisterAgentModel(request: MsgRegisterAgentModel): Promise<MsgRegisterAgentModelResponse> {
    const data = MsgRegisterAgentModel.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "RegisterAgentModel", data);
    return promise.then(data => MsgRegisterAgentModelResponse.decode(new _m0.Reader(data)));
  }
  UpdateAgentModel(request: MsgUpdateAgentModel): Promise<MsgUpdateAgentModelResponse> {
    const data = MsgUpdateAgentModel.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "UpdateAgentModel", data);
    return promise.then(data => MsgUpdateAgentModelResponse.decode(new _m0.Reader(data)));
  }
  RegisterSession(request: MsgRegisterSession): Promise<MsgRegisterSessionResponse> {
    const data = MsgRegisterSession.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "RegisterSession", data);
    return promise.then(data => MsgRegisterSessionResponse.decode(new _m0.Reader(data)));
  }
  CancelSession(request: MsgCancelSession): Promise<MsgCancelSessionResponse> {
    const data = MsgCancelSession.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "CancelSession", data);
    return promise.then(data => MsgCancelSessionResponse.decode(new _m0.Reader(data)));
  }
  SubmitPayment(request: MsgSubmitPayment): Promise<MsgSubmitPaymentResponse> {
    const data = MsgSubmitPayment.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "SubmitPayment", data);
    return promise.then(data => MsgSubmitPaymentResponse.decode(new _m0.Reader(data)));
  }
  DeleteExpiredSession(request: MsgDeleteExpiredSession): Promise<MsgDeleteExpiredSessionResponse> {
    const data = MsgDeleteExpiredSession.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "DeleteExpiredSession", data);
    return promise.then(data => MsgDeleteExpiredSessionResponse.decode(new _m0.Reader(data)));
  }
  SubmitChallengeCID(request: MsgSubmitChallengeCID): Promise<MsgSubmitChallengeCIDResponse> {
    const data = MsgSubmitChallengeCID.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "SubmitChallengeCID", data);
    return promise.then(data => MsgSubmitChallengeCIDResponse.decode(new _m0.Reader(data)));
  }
  SubmitChallengeReply(request: MsgSubmitChallengeReply): Promise<MsgSubmitChallengeReplyResponse> {
    const data = MsgSubmitChallengeReply.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "SubmitChallengeReply", data);
    return promise.then(data => MsgSubmitChallengeReplyResponse.decode(new _m0.Reader(data)));
  }
  SubmitChallengeMerkleTree(request: MsgSubmitChallengeMerkleTree): Promise<MsgSubmitChallengeMerkleTreeResponse> {
    const data = MsgSubmitChallengeMerkleTree.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "SubmitChallengeMerkleTree", data);
    return promise.then(data => MsgSubmitChallengeMerkleTreeResponse.decode(new _m0.Reader(data)));
  }
  SubmitChallengeOriginHash(request: MsgSubmitChallengeOriginHash): Promise<MsgSubmitChallengeOriginHashResponse> {
    const data = MsgSubmitChallengeOriginHash.encode(request).finish();
    const promise = this.rpc.request("agent.v1.Msg", "SubmitChallengeOriginHash", data);
    return promise.then(data => MsgSubmitChallengeOriginHashResponse.decode(new _m0.Reader(data)));
  }
}