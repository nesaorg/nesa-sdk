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
exports.QueryClientImpl = exports.QueryVRFSeedResponse = exports.QueryVRFSeedRequest = exports.QuerySessionByChallengeResponse = exports.SessionIdStatus = exports.QuerySessionByChallengeRequest = exports.QuerySessionByAgentResponse = exports.QuerySessionByAgentRequest = exports.QuerySessionResponse = exports.QuerySessionRequest = exports.QueryAgentByModelResponse = exports.ModelAgents = exports.QueryAgentByModelRequest = exports.QueryInferenceAgentResponse = exports.QueryInferenceAgentRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const agent_1 = require("./agent");
const timestamp_1 = require("../../google/protobuf/timestamp");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "agent.v1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/agent.v1.QueryParamsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseQueryParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/agent.v1.QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            agent_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryParamsResponse();
        if ((0, helpers_1.isSet)(object.params))
            obj.params = agent_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? agent_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = agent_1.Params.fromPartial(object.params);
        }
        return message;
    }
};
function createBaseQueryInferenceAgentRequest() {
    return {
        account: "",
        modelName: "",
        limit: helpers_1.Long.UZERO,
        key: new Uint8Array()
    };
}
exports.QueryInferenceAgentRequest = {
    typeUrl: "/agent.v1.QueryInferenceAgentRequest",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.limit = reader.uint64();
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
    fromJSON(object) {
        const obj = createBaseQueryInferenceAgentRequest();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.modelName))
            obj.modelName = String(object.modelName);
        if ((0, helpers_1.isSet)(object.limit))
            obj.limit = helpers_1.Long.fromValue(object.limit);
        if ((0, helpers_1.isSet)(object.key))
            obj.key = (0, helpers_1.bytesFromBase64)(object.key);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.limit !== undefined && (obj.limit = (message.limit || helpers_1.Long.UZERO).toString());
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInferenceAgentRequest();
        message.account = object.account ?? "";
        message.modelName = object.modelName ?? "";
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = helpers_1.Long.fromValue(object.limit);
        }
        message.key = object.key ?? new Uint8Array();
        return message;
    }
};
function createBaseQueryInferenceAgentResponse() {
    return {
        inferenceAgent: undefined,
        agentModels: [],
        nextKey: new Uint8Array()
    };
}
exports.QueryInferenceAgentResponse = {
    typeUrl: "/agent.v1.QueryInferenceAgentResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.inferenceAgent !== undefined) {
            agent_1.InferenceAgent.encode(message.inferenceAgent, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.agentModels) {
            agent_1.AgentModel.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextKey.length !== 0) {
            writer.uint32(26).bytes(message.nextKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInferenceAgentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inferenceAgent = agent_1.InferenceAgent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.agentModels.push(agent_1.AgentModel.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const obj = createBaseQueryInferenceAgentResponse();
        if ((0, helpers_1.isSet)(object.inferenceAgent))
            obj.inferenceAgent = agent_1.InferenceAgent.fromJSON(object.inferenceAgent);
        if (Array.isArray(object?.agentModels))
            obj.agentModels = object.agentModels.map((e) => agent_1.AgentModel.fromJSON(e));
        if ((0, helpers_1.isSet)(object.nextKey))
            obj.nextKey = (0, helpers_1.bytesFromBase64)(object.nextKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.inferenceAgent !== undefined && (obj.inferenceAgent = message.inferenceAgent ? agent_1.InferenceAgent.toJSON(message.inferenceAgent) : undefined);
        if (message.agentModels) {
            obj.agentModels = message.agentModels.map(e => e ? agent_1.AgentModel.toJSON(e) : undefined);
        }
        else {
            obj.agentModels = [];
        }
        message.nextKey !== undefined && (obj.nextKey = (0, helpers_1.base64FromBytes)(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInferenceAgentResponse();
        if (object.inferenceAgent !== undefined && object.inferenceAgent !== null) {
            message.inferenceAgent = agent_1.InferenceAgent.fromPartial(object.inferenceAgent);
        }
        message.agentModels = object.agentModels?.map(e => agent_1.AgentModel.fromPartial(e)) || [];
        message.nextKey = object.nextKey ?? new Uint8Array();
        return message;
    }
};
function createBaseQueryAgentByModelRequest() {
    return {
        modelName: "",
        status: 0
    };
}
exports.QueryAgentByModelRequest = {
    typeUrl: "/agent.v1.QueryAgentByModelRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.modelName !== "") {
            writer.uint32(10).string(message.modelName);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
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
        const obj = createBaseQueryAgentByModelRequest();
        if ((0, helpers_1.isSet)(object.modelName))
            obj.modelName = String(object.modelName);
        if ((0, helpers_1.isSet)(object.status))
            obj.status = (0, agent_1.agentModelStatusFromJSON)(object.status);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.status !== undefined && (obj.status = (0, agent_1.agentModelStatusToJSON)(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAgentByModelRequest();
        message.modelName = object.modelName ?? "";
        message.status = object.status ?? 0;
        return message;
    }
};
function createBaseModelAgents() {
    return {
        modelName: "",
        inferenceAgents: []
    };
}
exports.ModelAgents = {
    typeUrl: "/agent.v1.ModelAgents",
    encode(message, writer = _m0.Writer.create()) {
        if (message.modelName !== "") {
            writer.uint32(10).string(message.modelName);
        }
        for (const v of message.inferenceAgents) {
            agent_1.InferenceAgent.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.inferenceAgents.push(agent_1.InferenceAgent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModelAgents();
        if ((0, helpers_1.isSet)(object.modelName))
            obj.modelName = String(object.modelName);
        if (Array.isArray(object?.inferenceAgents))
            obj.inferenceAgents = object.inferenceAgents.map((e) => agent_1.InferenceAgent.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.modelName !== undefined && (obj.modelName = message.modelName);
        if (message.inferenceAgents) {
            obj.inferenceAgents = message.inferenceAgents.map(e => e ? agent_1.InferenceAgent.toJSON(e) : undefined);
        }
        else {
            obj.inferenceAgents = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModelAgents();
        message.modelName = object.modelName ?? "";
        message.inferenceAgents = object.inferenceAgents?.map(e => agent_1.InferenceAgent.fromPartial(e)) || [];
        return message;
    }
};
function createBaseQueryAgentByModelResponse() {
    return {
        modelAgents: []
    };
}
exports.QueryAgentByModelResponse = {
    typeUrl: "/agent.v1.QueryAgentByModelResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.modelAgents) {
            exports.ModelAgents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAgentByModelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modelAgents.push(exports.ModelAgents.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAgentByModelResponse();
        if (Array.isArray(object?.modelAgents))
            obj.modelAgents = object.modelAgents.map((e) => exports.ModelAgents.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.modelAgents) {
            obj.modelAgents = message.modelAgents.map(e => e ? exports.ModelAgents.toJSON(e) : undefined);
        }
        else {
            obj.modelAgents = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAgentByModelResponse();
        message.modelAgents = object.modelAgents?.map(e => exports.ModelAgents.fromPartial(e)) || [];
        return message;
    }
};
function createBaseQuerySessionRequest() {
    return {
        id: ""
    };
}
exports.QuerySessionRequest = {
    typeUrl: "/agent.v1.QuerySessionRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQuerySessionRequest();
        if ((0, helpers_1.isSet)(object.id))
            obj.id = String(object.id);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySessionRequest();
        message.id = object.id ?? "";
        return message;
    }
};
function createBaseQuerySessionResponse() {
    return {
        session: undefined
    };
}
exports.QuerySessionResponse = {
    typeUrl: "/agent.v1.QuerySessionResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.session !== undefined) {
            agent_1.Session.encode(message.session, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySessionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.session = agent_1.Session.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySessionResponse();
        if ((0, helpers_1.isSet)(object.session))
            obj.session = agent_1.Session.fromJSON(object.session);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.session !== undefined && (obj.session = message.session ? agent_1.Session.toJSON(message.session) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySessionResponse();
        if (object.session !== undefined && object.session !== null) {
            message.session = agent_1.Session.fromPartial(object.session);
        }
        return message;
    }
};
function createBaseQuerySessionByAgentRequest() {
    return {
        account: "",
        status: undefined,
        expireTime: timestamp_1.Timestamp.fromPartial({}),
        limit: helpers_1.Long.UZERO,
        orderDesc: false,
        key: new Uint8Array()
    };
}
exports.QuerySessionByAgentRequest = {
    typeUrl: "/agent.v1.QuerySessionByAgentRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.status !== undefined) {
            writer.uint32(16).int32(message.status);
        }
        if (message.expireTime !== undefined) {
            timestamp_1.Timestamp.encode(message.expireTime, writer.uint32(26).fork()).ldelim();
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
    decode(input, length) {
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
                    message.status = reader.int32();
                    break;
                case 3:
                    message.expireTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.limit = reader.uint64();
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
    fromJSON(object) {
        const obj = createBaseQuerySessionByAgentRequest();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.status))
            obj.status = (0, agent_1.sessionStatusFromJSON)(object.status);
        if ((0, helpers_1.isSet)(object.expireTime))
            obj.expireTime = (0, helpers_1.fromJsonTimestamp)(object.expireTime);
        if ((0, helpers_1.isSet)(object.limit))
            obj.limit = helpers_1.Long.fromValue(object.limit);
        if ((0, helpers_1.isSet)(object.orderDesc))
            obj.orderDesc = Boolean(object.orderDesc);
        if ((0, helpers_1.isSet)(object.key))
            obj.key = (0, helpers_1.bytesFromBase64)(object.key);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.status !== undefined && (obj.status = (0, agent_1.sessionStatusToJSON)(message.status));
        message.expireTime !== undefined && (obj.expireTime = (0, helpers_1.fromTimestamp)(message.expireTime).toISOString());
        message.limit !== undefined && (obj.limit = (message.limit || helpers_1.Long.UZERO).toString());
        message.orderDesc !== undefined && (obj.orderDesc = message.orderDesc);
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySessionByAgentRequest();
        message.account = object.account ?? "";
        message.status = object.status ?? undefined;
        if (object.expireTime !== undefined && object.expireTime !== null) {
            message.expireTime = timestamp_1.Timestamp.fromPartial(object.expireTime);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = helpers_1.Long.fromValue(object.limit);
        }
        message.orderDesc = object.orderDesc ?? false;
        message.key = object.key ?? new Uint8Array();
        return message;
    }
};
function createBaseQuerySessionByAgentResponse() {
    return {
        sessions: [],
        nextKey: new Uint8Array()
    };
}
exports.QuerySessionByAgentResponse = {
    typeUrl: "/agent.v1.QuerySessionByAgentResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.sessions) {
            agent_1.Session.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextKey.length !== 0) {
            writer.uint32(18).bytes(message.nextKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySessionByAgentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessions.push(agent_1.Session.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const obj = createBaseQuerySessionByAgentResponse();
        if (Array.isArray(object?.sessions))
            obj.sessions = object.sessions.map((e) => agent_1.Session.fromJSON(e));
        if ((0, helpers_1.isSet)(object.nextKey))
            obj.nextKey = (0, helpers_1.bytesFromBase64)(object.nextKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.sessions) {
            obj.sessions = message.sessions.map(e => e ? agent_1.Session.toJSON(e) : undefined);
        }
        else {
            obj.sessions = [];
        }
        message.nextKey !== undefined && (obj.nextKey = (0, helpers_1.base64FromBytes)(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySessionByAgentResponse();
        message.sessions = object.sessions?.map(e => agent_1.Session.fromPartial(e)) || [];
        message.nextKey = object.nextKey ?? new Uint8Array();
        return message;
    }
};
function createBaseQuerySessionByChallengeRequest() {
    return {
        account: "",
        limit: helpers_1.Long.UZERO,
        key: new Uint8Array()
    };
}
exports.QuerySessionByChallengeRequest = {
    typeUrl: "/agent.v1.QuerySessionByChallengeRequest",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.limit = reader.uint64();
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
    fromJSON(object) {
        const obj = createBaseQuerySessionByChallengeRequest();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.limit))
            obj.limit = helpers_1.Long.fromValue(object.limit);
        if ((0, helpers_1.isSet)(object.key))
            obj.key = (0, helpers_1.bytesFromBase64)(object.key);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.limit !== undefined && (obj.limit = (message.limit || helpers_1.Long.UZERO).toString());
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySessionByChallengeRequest();
        message.account = object.account ?? "";
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = helpers_1.Long.fromValue(object.limit);
        }
        message.key = object.key ?? new Uint8Array();
        return message;
    }
};
function createBaseSessionIdStatus() {
    return {
        sessionId: "",
        status: 0
    };
}
exports.SessionIdStatus = {
    typeUrl: "/agent.v1.SessionIdStatus",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
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
        const obj = createBaseSessionIdStatus();
        if ((0, helpers_1.isSet)(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if ((0, helpers_1.isSet)(object.status))
            obj.status = (0, agent_1.sessionStatusFromJSON)(object.status);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.status !== undefined && (obj.status = (0, agent_1.sessionStatusToJSON)(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSessionIdStatus();
        message.sessionId = object.sessionId ?? "";
        message.status = object.status ?? 0;
        return message;
    }
};
function createBaseQuerySessionByChallengeResponse() {
    return {
        sesssionIdStatus: [],
        nextKey: new Uint8Array()
    };
}
exports.QuerySessionByChallengeResponse = {
    typeUrl: "/agent.v1.QuerySessionByChallengeResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.sesssionIdStatus) {
            exports.SessionIdStatus.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextKey.length !== 0) {
            writer.uint32(18).bytes(message.nextKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySessionByChallengeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sesssionIdStatus.push(exports.SessionIdStatus.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const obj = createBaseQuerySessionByChallengeResponse();
        if (Array.isArray(object?.sesssionIdStatus))
            obj.sesssionIdStatus = object.sesssionIdStatus.map((e) => exports.SessionIdStatus.fromJSON(e));
        if ((0, helpers_1.isSet)(object.nextKey))
            obj.nextKey = (0, helpers_1.bytesFromBase64)(object.nextKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.sesssionIdStatus) {
            obj.sesssionIdStatus = message.sesssionIdStatus.map(e => e ? exports.SessionIdStatus.toJSON(e) : undefined);
        }
        else {
            obj.sesssionIdStatus = [];
        }
        message.nextKey !== undefined && (obj.nextKey = (0, helpers_1.base64FromBytes)(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySessionByChallengeResponse();
        message.sesssionIdStatus = object.sesssionIdStatus?.map(e => exports.SessionIdStatus.fromPartial(e)) || [];
        message.nextKey = object.nextKey ?? new Uint8Array();
        return message;
    }
};
function createBaseQueryVRFSeedRequest() {
    return {
        account: ""
    };
}
exports.QueryVRFSeedRequest = {
    typeUrl: "/agent.v1.QueryVRFSeedRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryVRFSeedRequest();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVRFSeedRequest();
        message.account = object.account ?? "";
        return message;
    }
};
function createBaseQueryVRFSeedResponse() {
    return {
        seed: new Uint8Array()
    };
}
exports.QueryVRFSeedResponse = {
    typeUrl: "/agent.v1.QueryVRFSeedResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.seed.length !== 0) {
            writer.uint32(10).bytes(message.seed);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryVRFSeedResponse();
        if ((0, helpers_1.isSet)(object.seed))
            obj.seed = (0, helpers_1.bytesFromBase64)(object.seed);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.seed !== undefined && (obj.seed = (0, helpers_1.base64FromBytes)(message.seed !== undefined ? message.seed : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVRFSeedResponse();
        message.seed = object.seed ?? new Uint8Array();
        return message;
    }
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.InferenceAgentRequest = this.InferenceAgentRequest.bind(this);
        this.AgentByModelRequest = this.AgentByModelRequest.bind(this);
        this.SessionRequest = this.SessionRequest.bind(this);
        this.SessionByAgentRequest = this.SessionByAgentRequest.bind(this);
        this.SessionByChallengeRequest = this.SessionByChallengeRequest.bind(this);
        this.VRFSeedRequest = this.VRFSeedRequest.bind(this);
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Query", "Params", data);
        return promise.then(data => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    InferenceAgentRequest(request) {
        const data = exports.QueryInferenceAgentRequest.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Query", "InferenceAgentRequest", data);
        return promise.then(data => exports.QueryInferenceAgentResponse.decode(new _m0.Reader(data)));
    }
    AgentByModelRequest(request) {
        const data = exports.QueryAgentByModelRequest.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Query", "AgentByModelRequest", data);
        return promise.then(data => exports.QueryAgentByModelResponse.decode(new _m0.Reader(data)));
    }
    SessionRequest(request) {
        const data = exports.QuerySessionRequest.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Query", "SessionRequest", data);
        return promise.then(data => exports.QuerySessionResponse.decode(new _m0.Reader(data)));
    }
    SessionByAgentRequest(request) {
        const data = exports.QuerySessionByAgentRequest.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Query", "SessionByAgentRequest", data);
        return promise.then(data => exports.QuerySessionByAgentResponse.decode(new _m0.Reader(data)));
    }
    SessionByChallengeRequest(request) {
        const data = exports.QuerySessionByChallengeRequest.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Query", "SessionByChallengeRequest", data);
        return promise.then(data => exports.QuerySessionByChallengeResponse.decode(new _m0.Reader(data)));
    }
    VRFSeedRequest(request) {
        const data = exports.QueryVRFSeedRequest.encode(request).finish();
        const promise = this.rpc.request("agent.v1.Query", "VRFSeedRequest", data);
        return promise.then(data => exports.QueryVRFSeedResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29kZWMvYWdlbnQvdjEvcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsbUNBQXFNO0FBQ3JNLCtEQUE0RDtBQUM1RCwyQ0FBeUk7QUFDekksd0RBQTBDO0FBRTdCLFFBQUEsZUFBZSxHQUFHLFVBQVUsQ0FBQztBQWlFMUMsU0FBUyw0QkFBNEI7SUFDbkMsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBQ1ksUUFBQSxrQkFBa0IsR0FBRztJQUNoQyxPQUFPLEVBQUUsOEJBQThCO0lBQ3ZDLE1BQU0sQ0FBQyxDQUFxQixFQUFFLFNBQXFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQ3BFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyw0QkFBNEIsRUFBRSxDQUFDO1FBQy9DLE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUN4QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ2xCO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FB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