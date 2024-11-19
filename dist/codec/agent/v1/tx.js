"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgSubmitChallengeOriginHashResponse = exports.MsgSubmitChallengeOriginHash = exports.MsgSubmitChallengeMerkleTreeResponse = exports.MsgSubmitChallengeMerkleTree = exports.MsgSubmitChallengeReplyResponse = exports.MsgSubmitChallengeReply = exports.MsgSubmitChallengeCIDResponse = exports.MsgSubmitChallengeCID = exports.MsgDeleteExpiredSessionResponse = exports.MsgDeleteExpiredSession = exports.MsgSubmitPaymentResponse = exports.MsgSubmitPayment = exports.MsgCancelSessionResponse = exports.MsgCancelSession = exports.MsgRegisterSessionResponse = exports.MsgRegisterSession = exports.VRF = exports.MsgUpdateAgentModelResponse = exports.MsgUpdateAgentModel = exports.MsgRegisterAgentModelResponse = exports.MsgRegisterAgentModel = exports.MsgUpdateInferenceAgentResponse = exports.MsgUpdateInferenceAgent = exports.MsgRegisterInferenceAgentResponse = exports.MsgRegisterInferenceAgent = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
/* eslint-disable */
const agent_1 = require("./agent");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "agent.v1";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: agent_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/agent.v1.MsgUpdateParams",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            agent_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.params = agent_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUpdateParams();
        if ((0, helpers_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if ((0, helpers_1.isSet)(object.params))
            obj.params = agent_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? agent_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        if (object.params !== undefined && object.params !== null) {
            message.params = agent_1.Params.fromPartial(object.params);
        }
        return message;
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/agent.v1.MsgUpdateParamsResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgUpdateParamsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    }
};
function createBaseMsgRegisterInferenceAgent() {
    return {
        account: "",
        url: "",
        version: helpers_1.Long.UZERO
    };
}
exports.MsgRegisterInferenceAgent = {
    typeUrl: "/agent.v1.MsgRegisterInferenceAgent",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRegisterInferenceAgent();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.url))
            obj.url = String(object.url);
        if ((0, helpers_1.isSet)(object.version))
            obj.version = helpers_1.Long.fromValue(object.version);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.url !== undefined && (obj.url = message.url);
        message.version !== undefined && (obj.version = (message.version || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInferenceAgent();
        message.account = object.account ?? "";
        message.url = object.url ?? "";
        if (object.version !== undefined && object.version !== null) {
            message.version = helpers_1.Long.fromValue(object.version);
        }
        return message;
    }
};
function createBaseMsgRegisterInferenceAgentResponse() {
    return {};
}
exports.MsgRegisterInferenceAgentResponse = {
    typeUrl: "/agent.v1.MsgRegisterInferenceAgentResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgRegisterInferenceAgentResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterInferenceAgentResponse();
        return message;
    }
};
function createBaseMsgUpdateInferenceAgent() {
    return {
        account: "",
        url: undefined,
        version: undefined,
        status: undefined
    };
}
exports.MsgUpdateInferenceAgent = {
    typeUrl: "/agent.v1.MsgUpdateInferenceAgent",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.version = reader.uint64();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUpdateInferenceAgent();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.url))
            obj.url = String(object.url);
        if ((0, helpers_1.isSet)(object.version))
            obj.version = helpers_1.Long.fromValue(object.version);
        if ((0, helpers_1.isSet)(object.status))
            obj.status = (0, agent_1.agentStatusFromJSON)(object.status);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.url !== undefined && (obj.url = message.url);
        if (message.version !== undefined) {
            obj.version = message.version.toString();
        }
        message.status !== undefined && (obj.status = (0, agent_1.agentStatusToJSON)(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateInferenceAgent();
        message.account = object.account ?? "";
        message.url = object.url ?? undefined;
        if (object.version !== undefined && object.version !== null) {
            message.version = helpers_1.Long.fromValue(object.version);
        }
        message.status = object.status ?? undefined;
        return message;
    }
};
function createBaseMsgUpdateInferenceAgentResponse() {
    return {};
}
exports.MsgUpdateInferenceAgentResponse = {
    typeUrl: "/agent.v1.MsgUpdateInferenceAgentResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgUpdateInferenceAgentResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateInferenceAgentResponse();
        return message;
    }
};
function createBaseMsgRegisterAgentModel() {
    return {
        account: "",
        modelName: [],
        lock: []
    };
}
exports.MsgRegisterAgentModel = {
    typeUrl: "/agent.v1.MsgRegisterAgentModel",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        for (const v of message.modelName) {
            writer.uint32(18).string(v);
        }
        writer.uint32(26).fork();
        for (const v of message.lock) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
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
                            message.lock.push(reader.uint64());
                        }
                    }
                    else {
                        message.lock.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRegisterAgentModel();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if (Array.isArray(object?.modelName))
            obj.modelName = object.modelName.map((e) => String(e));
        if (Array.isArray(object?.lock))
            obj.lock = object.lock.map((e) => helpers_1.Long.fromValue(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        if (message.modelName) {
            obj.modelName = message.modelName.map(e => e);
        }
        else {
            obj.modelName = [];
        }
        if (message.lock) {
            obj.lock = message.lock.map(e => (e || helpers_1.Long.UZERO).toString());
        }
        else {
            obj.lock = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterAgentModel();
        message.account = object.account ?? "";
        message.modelName = object.modelName?.map(e => e) || [];
        message.lock = object.lock?.map(e => helpers_1.Long.fromValue(e)) || [];
        return message;
    }
};
function createBaseMsgRegisterAgentModelResponse() {
    return {};
}
exports.MsgRegisterAgentModelResponse = {
    typeUrl: "/agent.v1.MsgRegisterAgentModelResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgRegisterAgentModelResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterAgentModelResponse();
        return message;
    }
};
function createBaseMsgUpdateAgentModel() {
    return {
        account: "",
        modelName: [],
        lock: [],
        status: 0
    };
}
exports.MsgUpdateAgentModel = {
    typeUrl: "/agent.v1.MsgUpdateAgentModel",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        for (const v of message.modelName) {
            writer.uint32(18).string(v);
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
    decode(input, length) {
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
                            message.lock.push(reader.uint64());
                        }
                    }
                    else {
                        message.lock.push(reader.uint64());
                    }
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUpdateAgentModel();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if (Array.isArray(object?.modelName))
            obj.modelName = object.modelName.map((e) => String(e));
        if (Array.isArray(object?.lock))
            obj.lock = object.lock.map((e) => helpers_1.Long.fromValue(e));
        if ((0, helpers_1.isSet)(object.status))
            obj.status = (0, agent_1.agentModelStatusFromJSON)(object.status);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        if (message.modelName) {
            obj.modelName = message.modelName.map(e => e);
        }
        else {
            obj.modelName = [];
        }
        if (message.lock) {
            obj.lock = message.lock.map(e => (e || helpers_1.Long.UZERO).toString());
        }
        else {
            obj.lock = [];
        }
        message.status !== undefined && (obj.status = (0, agent_1.agentModelStatusToJSON)(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateAgentModel();
        message.account = object.account ?? "";
        message.modelName = object.modelName?.map(e => e) || [];
        message.lock = object.lock?.map(e => helpers_1.Long.fromValue(e)) || [];
        message.status = object.status ?? 0;
        return message;
    }
};
function createBaseMsgUpdateAgentModelResponse() {
    return {};
}
exports.MsgUpdateAgentModelResponse = {
    typeUrl: "/agent.v1.MsgUpdateAgentModelResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgUpdateAgentModelResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateAgentModelResponse();
        return message;
    }
};
function createBaseVRF() {
    return {
        seed: new Uint8Array(),
        proof: new Uint8Array(),
        hashRandom: new Uint8Array()
    };
}
exports.VRF = {
    typeUrl: "/agent.v1.VRF",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseVRF();
        if ((0, helpers_1.isSet)(object.seed))
            obj.seed = (0, helpers_1.bytesFromBase64)(object.seed);
        if ((0, helpers_1.isSet)(object.proof))
            obj.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        if ((0, helpers_1.isSet)(object.hashRandom))
            obj.hashRandom = (0, helpers_1.bytesFromBase64)(object.hashRandom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.seed !== undefined && (obj.seed = (0, helpers_1.base64FromBytes)(message.seed !== undefined ? message.seed : new Uint8Array()));
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.hashRandom !== undefined && (obj.hashRandom = (0, helpers_1.base64FromBytes)(message.hashRandom !== undefined ? message.hashRandom : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVRF();
        message.seed = object.seed ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.hashRandom = object.hashRandom ?? new Uint8Array();
        return message;
    }
};
function createBaseMsgRegisterSession() {
    return {
        sessionId: "",
        account: "",
        modelName: "",
        lockBalance: coin_1.Coin.fromPartial({}),
        vrf: exports.VRF.fromPartial({}),
        tokenPrice: agent_1.TokenPrice.fromPartial({})
    };
}
exports.MsgRegisterSession = {
    typeUrl: "/agent.v1.MsgRegisterSession",
    encode(message, writer = _m0.Writer.create()) {
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
            coin_1.Coin.encode(message.lockBalance, writer.uint32(34).fork()).ldelim();
        }
        if (message.vrf !== undefined) {
            exports.VRF.encode(message.vrf, writer.uint32(42).fork()).ldelim();
        }
        if (message.tokenPrice !== undefined) {
            agent_1.TokenPrice.encode(message.tokenPrice, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.lockBalance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.vrf = exports.VRF.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tokenPrice = agent_1.TokenPrice.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRegisterSession();
        if ((0, helpers_1.isSet)(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.modelName))
            obj.modelName = String(object.modelName);
        if ((0, helpers_1.isSet)(object.lockBalance))
            obj.lockBalance = coin_1.Coin.fromJSON(object.lockBalance);
        if ((0, helpers_1.isSet)(object.vrf))
            obj.vrf = exports.VRF.fromJSON(object.vrf);
        if ((0, helpers_1.isSet)(object.tokenPrice))
            obj.tokenPrice = agent_1.TokenPrice.fromJSON(object.tokenPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.account !== undefined && (obj.account = message.account);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.lockBalance !== undefined && (obj.lockBalance = message.lockBalance ? coin_1.Coin.toJSON(message.lockBalance) : undefined);
        message.vrf !== undefined && (obj.vrf = message.vrf ? exports.VRF.toJSON(message.vrf) : undefined);
        message.tokenPrice !== undefined && (obj.tokenPrice = message.tokenPrice ? agent_1.TokenPrice.toJSON(message.tokenPrice) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterSession();
        message.sessionId = object.sessionId ?? "";
        message.account = object.account ?? "";
        message.modelName = object.modelName ?? "";
        if (object.lockBalance !== undefined && object.lockBalance !== null) {
            message.lockBalance = coin_1.Coin.fromPartial(object.lockBalance);
        }
        if (object.vrf !== undefined && object.vrf !== null) {
            message.vrf = exports.VRF.fromPartial(object.vrf);
        }
        if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
            message.tokenPrice = agent_1.TokenPrice.fromPartial(object.tokenPrice);
        }
        return message;
    }
};
function createBaseMsgRegisterSessionResponse() {
    return {
        account: "",
        modelName: ""
    };
}
exports.MsgRegisterSessionResponse = {
    typeUrl: "/agent.v1.MsgRegisterSessionResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.modelName !== "") {
            writer.uint32(18).string(message.modelName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgRegisterSessionResponse();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.modelName))
            obj.modelName = String(object.modelName);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterSessionResponse();
        message.account = object.account ?? "";
        message.modelName = object.modelName ?? "";
        return message;
    }
};
function createBaseMsgCancelSession() {
    return {
        sessionId: "",
        account: ""
    };
}
exports.MsgCancelSession = {
    typeUrl: "/agent.v1.MsgCancelSession",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgCancelSession();
        if ((0, helpers_1.isSet)(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelSession();
        message.sessionId = object.sessionId ?? "";
        message.account = object.account ?? "";
        return message;
    }
};
function createBaseMsgCancelSessionResponse() {
    return {};
}
exports.MsgCancelSessionResponse = {
    typeUrl: "/agent.v1.MsgCancelSessionResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgCancelSessionResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCancelSessionResponse();
        return message;
    }
};
function createBaseMsgSubmitPayment() {
    return {
        account: "",
        sessionId: "",
        payment: undefined,
        signature: new Uint8Array()
    };
}
exports.MsgSubmitPayment = {
    typeUrl: "/agent.v1.MsgSubmitPayment",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.sessionId !== "") {
            writer.uint32(18).string(message.sessionId);
        }
        if (message.payment !== undefined) {
            agent_1.Payment.encode(message.payment, writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.payment = agent_1.Payment.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const obj = createBaseMsgSubmitPayment();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if ((0, helpers_1.isSet)(object.payment))
            obj.payment = agent_1.Payment.fromJSON(object.payment);
        if ((0, helpers_1.isSet)(object.signature))
            obj.signature = (0, helpers_1.bytesFromBase64)(object.signature);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.payment !== undefined && (obj.payment = message.payment ? agent_1.Payment.toJSON(message.payment) : undefined);
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitPayment();
        message.account = object.account ?? "";
        message.sessionId = object.sessionId ?? "";
        if (object.payment !== undefined && object.payment !== null) {
            message.payment = agent_1.Payment.fromPartial(object.payment);
        }
        message.signature = object.signature ?? new Uint8Array();
        return message;
    }
};
function createBaseMsgSubmitPaymentResponse() {
    return {};
}
exports.MsgSubmitPaymentResponse = {
    typeUrl: "/agent.v1.MsgSubmitPaymentResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgSubmitPaymentResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitPaymentResponse();
        return message;
    }
};
function createBaseMsgDeleteExpiredSession() {
    return {
        account: "",
        sessionId: ""
    };
}
exports.MsgDeleteExpiredSession = {
    typeUrl: "/agent.v1.MsgDeleteExpiredSession",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.sessionId !== "") {
            writer.uint32(18).string(message.sessionId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgDeleteExpiredSession();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.sessionId))
            obj.sessionId = String(object.sessionId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteExpiredSession();
        message.account = object.account ?? "";
        message.sessionId = object.sessionId ?? "";
        return message;
    }
};
function createBaseMsgDeleteExpiredSessionResponse() {
    return {};
}
exports.MsgDeleteExpiredSessionResponse = {
    typeUrl: "/agent.v1.MsgDeleteExpiredSessionResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgDeleteExpiredSessionResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteExpiredSessionResponse();
        return message;
    }
};
function createBaseMsgSubmitChallengeCID() {
    return {
        account: "",
        sessionId: "",
        cid: ""
    };
}
exports.MsgSubmitChallengeCID = {
    typeUrl: "/agent.v1.MsgSubmitChallengeCID",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgSubmitChallengeCID();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if ((0, helpers_1.isSet)(object.cid))
            obj.cid = String(object.cid);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitChallengeCID();
        message.account = object.account ?? "";
        message.sessionId = object.sessionId ?? "";
        message.cid = object.cid ?? "";
        return message;
    }
};
function createBaseMsgSubmitChallengeCIDResponse() {
    return {};
}
exports.MsgSubmitChallengeCIDResponse = {
    typeUrl: "/agent.v1.MsgSubmitChallengeCIDResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgSubmitChallengeCIDResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitChallengeCIDResponse();
        return message;
    }
};
function createBaseMsgSubmitChallengeReply() {
    return {
        account: "",
        sessionId: "",
        hash: new Uint8Array()
    };
}
exports.MsgSubmitChallengeReply = {
    typeUrl: "/agent.v1.MsgSubmitChallengeReply",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgSubmitChallengeReply();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if ((0, helpers_1.isSet)(object.hash))
            obj.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitChallengeReply();
        message.account = object.account ?? "";
        message.sessionId = object.sessionId ?? "";
        message.hash = object.hash ?? new Uint8Array();
        return message;
    }
};
function createBaseMsgSubmitChallengeReplyResponse() {
    return {};
}
exports.MsgSubmitChallengeReplyResponse = {
    typeUrl: "/agent.v1.MsgSubmitChallengeReplyResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgSubmitChallengeReplyResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitChallengeReplyResponse();
        return message;
    }
};
function createBaseMsgSubmitChallengeMerkleTree() {
    return {
        account: "",
        sessionId: "",
        answerHash: new Uint8Array(),
        merkleTree: []
    };
}
exports.MsgSubmitChallengeMerkleTree = {
    typeUrl: "/agent.v1.MsgSubmitChallengeMerkleTree",
    encode(message, writer = _m0.Writer.create()) {
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
            writer.uint32(34).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgSubmitChallengeMerkleTree();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if ((0, helpers_1.isSet)(object.answerHash))
            obj.answerHash = (0, helpers_1.bytesFromBase64)(object.answerHash);
        if (Array.isArray(object?.merkleTree))
            obj.merkleTree = object.merkleTree.map((e) => (0, helpers_1.bytesFromBase64)(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.answerHash !== undefined && (obj.answerHash = (0, helpers_1.base64FromBytes)(message.answerHash !== undefined ? message.answerHash : new Uint8Array()));
        if (message.merkleTree) {
            obj.merkleTree = message.merkleTree.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.merkleTree = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitChallengeMerkleTree();
        message.account = object.account ?? "";
        message.sessionId = object.sessionId ?? "";
        message.answerHash = object.answerHash ?? new Uint8Array();
        message.merkleTree = object.merkleTree?.map(e => e) || [];
        return message;
    }
};
function createBaseMsgSubmitChallengeMerkleTreeResponse() {
    return {};
}
exports.MsgSubmitChallengeMerkleTreeResponse = {
    typeUrl: "/agent.v1.MsgSubmitChallengeMerkleTreeResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgSubmitChallengeMerkleTreeResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitChallengeMerkleTreeResponse();
        return message;
    }
};
function createBaseMsgSubmitChallengeOriginHash() {
    return {
        account: "",
        sessionId: "",
        hash: new Uint8Array()
    };
}
exports.MsgSubmitChallengeOriginHash = {
    typeUrl: "/agent.v1.MsgSubmitChallengeOriginHash",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgSubmitChallengeOriginHash();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if ((0, helpers_1.isSet)(object.hash))
            obj.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitChallengeOriginHash();
        message.account = object.account ?? "";
        message.sessionId = object.sessionId ?? "";
        message.hash = object.hash ?? new Uint8Array();
        return message;
    }
};
function createBaseMsgSubmitChallengeOriginHashResponse() {
    return {};
}
exports.MsgSubmitChallengeOriginHashResponse = {
    typeUrl: "/agent.v1.MsgSubmitChallengeOriginHashResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgSubmitChallengeOriginHashResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitChallengeOriginHashResponse();
        return message;
    }
};
class MsgClientImpl {
    constructor(rpc) {
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
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "UpdateParams", data);
        return promise.then(data => exports.MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }
    RegisterInferenceAgent(request) {
        const data = exports.MsgRegisterInferenceAgent.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "RegisterInferenceAgent", data);
        return promise.then(data => exports.MsgRegisterInferenceAgentResponse.decode(new _m0.Reader(data)));
    }
    UpdateInferenceAgent(request) {
        const data = exports.MsgUpdateInferenceAgent.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "UpdateInferenceAgent", data);
        return promise.then(data => exports.MsgUpdateInferenceAgentResponse.decode(new _m0.Reader(data)));
    }
    RegisterAgentModel(request) {
        const data = exports.MsgRegisterAgentModel.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "RegisterAgentModel", data);
        return promise.then(data => exports.MsgRegisterAgentModelResponse.decode(new _m0.Reader(data)));
    }
    UpdateAgentModel(request) {
        const data = exports.MsgUpdateAgentModel.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "UpdateAgentModel", data);
        return promise.then(data => exports.MsgUpdateAgentModelResponse.decode(new _m0.Reader(data)));
    }
    RegisterSession(request) {
        const data = exports.MsgRegisterSession.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "RegisterSession", data);
        return promise.then(data => exports.MsgRegisterSessionResponse.decode(new _m0.Reader(data)));
    }
    CancelSession(request) {
        const data = exports.MsgCancelSession.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "CancelSession", data);
        return promise.then(data => exports.MsgCancelSessionResponse.decode(new _m0.Reader(data)));
    }
    SubmitPayment(request) {
        const data = exports.MsgSubmitPayment.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "SubmitPayment", data);
        return promise.then(data => exports.MsgSubmitPaymentResponse.decode(new _m0.Reader(data)));
    }
    DeleteExpiredSession(request) {
        const data = exports.MsgDeleteExpiredSession.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "DeleteExpiredSession", data);
        return promise.then(data => exports.MsgDeleteExpiredSessionResponse.decode(new _m0.Reader(data)));
    }
    SubmitChallengeCID(request) {
        const data = exports.MsgSubmitChallengeCID.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "SubmitChallengeCID", data);
        return promise.then(data => exports.MsgSubmitChallengeCIDResponse.decode(new _m0.Reader(data)));
    }
    SubmitChallengeReply(request) {
        const data = exports.MsgSubmitChallengeReply.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "SubmitChallengeReply", data);
        return promise.then(data => exports.MsgSubmitChallengeReplyResponse.decode(new _m0.Reader(data)));
    }
    SubmitChallengeMerkleTree(request) {
        const data = exports.MsgSubmitChallengeMerkleTree.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "SubmitChallengeMerkleTree", data);
        return promise.then(data => exports.MsgSubmitChallengeMerkleTreeResponse.decode(new _m0.Reader(data)));
    }
    SubmitChallengeOriginHash(request) {
        const data = exports.MsgSubmitChallengeOriginHash.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Msg", "SubmitChallengeOriginHash", data);
        return promise.then(data => exports.MsgSubmitChallengeOriginHashResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29kZWMvYWdlbnQvdjEvdHgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsbUNBQStLO0FBQy9LLHlEQUFzRDtBQUN0RCwyQ0FBdUc7QUFDdkcsd0RBQTBDO0FBRTdCLFFBQUEsZUFBZSxHQUFHLFVBQVUsQ0FBQztBQTJGMUMsU0FBUyx5QkFBeUI7SUFDaEMsT0FBTztRQUNMLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLGNBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO0tBQy9CLENBQUM7QUFDSixDQUFDO0FBQ1ksUUFBQSxlQUFlLEdBQUc7SUFDN0IsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQyxNQUFNLENBQUMsT0FBd0IsRUFBRSxTQUFxQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUN2RSxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDakMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUE4QixFQUFFLE1BQWU7UUFDcEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxD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