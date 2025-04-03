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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VrfSeed = exports.Session = exports.ChallengeInfo = exports.ChallengeValidator = exports.Payment = exports.PaymentContribution = exports.TokenPrice = exports.AgentModel = exports.InferenceAgent = exports.Prestige = exports.InnerValues = exports.Params = exports.SessionStatus = exports.ValidatorStatus = exports.AgentModelStatus = exports.AgentStatus = exports.protobufPackage = void 0;
exports.agentStatusFromJSON = agentStatusFromJSON;
exports.agentStatusToJSON = agentStatusToJSON;
exports.agentModelStatusFromJSON = agentModelStatusFromJSON;
exports.agentModelStatusToJSON = agentModelStatusToJSON;
exports.validatorStatusFromJSON = validatorStatusFromJSON;
exports.validatorStatusToJSON = validatorStatusToJSON;
exports.sessionStatusFromJSON = sessionStatusFromJSON;
exports.sessionStatusToJSON = sessionStatusToJSON;
/* eslint-disable */
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../google/protobuf/duration");
const timestamp_1 = require("../../google/protobuf/timestamp");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "agent.v1";
/** AgentStatus enumerates the inference agent status. */
var AgentStatus;
(function (AgentStatus) {
    /** AGENT_STATUS_ACTIVE - AGENT_STATUS_ACTIVE represents the active status. */
    AgentStatus[AgentStatus["AGENT_STATUS_ACTIVE"] = 0] = "AGENT_STATUS_ACTIVE";
    /** AGENT_STATUS_INACTIVE - AGENT_STATUS_INACTIVE represents the inactive status. */
    AgentStatus[AgentStatus["AGENT_STATUS_INACTIVE"] = 1] = "AGENT_STATUS_INACTIVE";
    AgentStatus[AgentStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AgentStatus || (exports.AgentStatus = AgentStatus = {}));
function agentStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "AGENT_STATUS_ACTIVE":
            return AgentStatus.AGENT_STATUS_ACTIVE;
        case 1:
        case "AGENT_STATUS_INACTIVE":
            return AgentStatus.AGENT_STATUS_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AgentStatus.UNRECOGNIZED;
    }
}
function agentStatusToJSON(object) {
    switch (object) {
        case AgentStatus.AGENT_STATUS_ACTIVE:
            return "AGENT_STATUS_ACTIVE";
        case AgentStatus.AGENT_STATUS_INACTIVE:
            return "AGENT_STATUS_INACTIVE";
        case AgentStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** AgentModelStatus enumerates the each model status of inference agent. */
var AgentModelStatus;
(function (AgentModelStatus) {
    /** AGENT_MODEL_STATUS_ACTIVE - AGENT_MODEL_STATUS_ACTIVE represents the active model status. */
    AgentModelStatus[AgentModelStatus["AGENT_MODEL_STATUS_ACTIVE"] = 0] = "AGENT_MODEL_STATUS_ACTIVE";
    /** AGENT_MODEL_STATUS_INACTIVE - AGENT_MODEL_STATUS_INACTIVE represents the inactive model status. */
    AgentModelStatus[AgentModelStatus["AGENT_MODEL_STATUS_INACTIVE"] = 1] = "AGENT_MODEL_STATUS_INACTIVE";
    AgentModelStatus[AgentModelStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AgentModelStatus || (exports.AgentModelStatus = AgentModelStatus = {}));
function agentModelStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "AGENT_MODEL_STATUS_ACTIVE":
            return AgentModelStatus.AGENT_MODEL_STATUS_ACTIVE;
        case 1:
        case "AGENT_MODEL_STATUS_INACTIVE":
            return AgentModelStatus.AGENT_MODEL_STATUS_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AgentModelStatus.UNRECOGNIZED;
    }
}
function agentModelStatusToJSON(object) {
    switch (object) {
        case AgentModelStatus.AGENT_MODEL_STATUS_ACTIVE:
            return "AGENT_MODEL_STATUS_ACTIVE";
        case AgentModelStatus.AGENT_MODEL_STATUS_INACTIVE:
            return "AGENT_MODEL_STATUS_INACTIVE";
        case AgentModelStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ValidatorStatus enumerates the statuses of validators. */
var ValidatorStatus;
(function (ValidatorStatus) {
    /** ValidatorStatusAbsent - ValidatorStatusAbsent indicates the validator is absent to submit info on chain. */
    ValidatorStatus[ValidatorStatus["ValidatorStatusAbsent"] = 0] = "ValidatorStatusAbsent";
    /** ValidatorStatusSubmit - ValidatorStatusSubmit indicates the validator has submitted a response. */
    ValidatorStatus[ValidatorStatus["ValidatorStatusSubmit"] = 1] = "ValidatorStatusSubmit";
    /** ValidatorStatusConsistent - ValidatorStatusConsistent indicates the validator's response is consistent to majority. */
    ValidatorStatus[ValidatorStatus["ValidatorStatusConsistent"] = 2] = "ValidatorStatusConsistent";
    /** ValidatorStatusInconsistent - ValidatorStatusInconsistent indicates the validator's response is inconsistent to majority. */
    ValidatorStatus[ValidatorStatus["ValidatorStatusInconsistent"] = 3] = "ValidatorStatusInconsistent";
    ValidatorStatus[ValidatorStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ValidatorStatus || (exports.ValidatorStatus = ValidatorStatus = {}));
function validatorStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "ValidatorStatusAbsent":
            return ValidatorStatus.ValidatorStatusAbsent;
        case 1:
        case "ValidatorStatusSubmit":
            return ValidatorStatus.ValidatorStatusSubmit;
        case 2:
        case "ValidatorStatusConsistent":
            return ValidatorStatus.ValidatorStatusConsistent;
        case 3:
        case "ValidatorStatusInconsistent":
            return ValidatorStatus.ValidatorStatusInconsistent;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ValidatorStatus.UNRECOGNIZED;
    }
}
function validatorStatusToJSON(object) {
    switch (object) {
        case ValidatorStatus.ValidatorStatusAbsent:
            return "ValidatorStatusAbsent";
        case ValidatorStatus.ValidatorStatusSubmit:
            return "ValidatorStatusSubmit";
        case ValidatorStatus.ValidatorStatusConsistent:
            return "ValidatorStatusConsistent";
        case ValidatorStatus.ValidatorStatusInconsistent:
            return "ValidatorStatusInconsistent";
        case ValidatorStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** SessionStatus enumerates the statuses of a session. */
var SessionStatus;
(function (SessionStatus) {
    /** SESSION_STATUS_DEFAULT - SESSION_STATUS_DEFAULT is a placeholder and will not appear in session. */
    SessionStatus[SessionStatus["SESSION_STATUS_DEFAULT"] = 0] = "SESSION_STATUS_DEFAULT";
    /** SESSION_STATUS_PENDING - SESSION_STATUS_PENDING indicates the session is pending. It's waiting for the payment to be submitted. */
    SessionStatus[SessionStatus["SESSION_STATUS_PENDING"] = 1] = "SESSION_STATUS_PENDING";
    /** SESSION_STATUS_SUBMITTED - SESSION_STATUS_SUBMITTED indicates the payment has been submitted. */
    SessionStatus[SessionStatus["SESSION_STATUS_SUBMITTED"] = 2] = "SESSION_STATUS_SUBMITTED";
    /** SESSION_STATUS_CHALLENGE_SUBMIT_CID - SESSION_STATUS_CHALLENGE_SUBMIT_CID indicates the session is waiting challenged agent to submit CID. */
    SessionStatus[SessionStatus["SESSION_STATUS_CHALLENGE_SUBMIT_CID"] = 3] = "SESSION_STATUS_CHALLENGE_SUBMIT_CID";
    /** SESSION_STATUS_CHALLENGE_SUBMIT_REPLY - SESSION_STATUS_CHALLENGE_SUBMIT_REPLY indicates the session is waiting validator to submit reply hash. */
    SessionStatus[SessionStatus["SESSION_STATUS_CHALLENGE_SUBMIT_REPLY"] = 4] = "SESSION_STATUS_CHALLENGE_SUBMIT_REPLY";
    /** SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE - SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE indicates the session is waiting challenged agent to submit cut merkle tree. */
    SessionStatus[SessionStatus["SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE"] = 5] = "SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE";
    /** SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN - SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN indicates the session is waiting validator to submit answer origin hash. */
    SessionStatus[SessionStatus["SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN"] = 6] = "SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN";
    /** SESSION_STATUS_CHALLENGE_ARBITRATION - SESSION_STATUS_CHALLENGE_ARBITRATION indicates the session is waiting admin to do arbitration. */
    SessionStatus[SessionStatus["SESSION_STATUS_CHALLENGE_ARBITRATION"] = 7] = "SESSION_STATUS_CHALLENGE_ARBITRATION";
    SessionStatus[SessionStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SessionStatus || (exports.SessionStatus = SessionStatus = {}));
function sessionStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "SESSION_STATUS_DEFAULT":
            return SessionStatus.SESSION_STATUS_DEFAULT;
        case 1:
        case "SESSION_STATUS_PENDING":
            return SessionStatus.SESSION_STATUS_PENDING;
        case 2:
        case "SESSION_STATUS_SUBMITTED":
            return SessionStatus.SESSION_STATUS_SUBMITTED;
        case 3:
        case "SESSION_STATUS_CHALLENGE_SUBMIT_CID":
            return SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_CID;
        case 4:
        case "SESSION_STATUS_CHALLENGE_SUBMIT_REPLY":
            return SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_REPLY;
        case 5:
        case "SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE":
            return SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE;
        case 6:
        case "SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN":
            return SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN;
        case 7:
        case "SESSION_STATUS_CHALLENGE_ARBITRATION":
            return SessionStatus.SESSION_STATUS_CHALLENGE_ARBITRATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SessionStatus.UNRECOGNIZED;
    }
}
function sessionStatusToJSON(object) {
    switch (object) {
        case SessionStatus.SESSION_STATUS_DEFAULT:
            return "SESSION_STATUS_DEFAULT";
        case SessionStatus.SESSION_STATUS_PENDING:
            return "SESSION_STATUS_PENDING";
        case SessionStatus.SESSION_STATUS_SUBMITTED:
            return "SESSION_STATUS_SUBMITTED";
        case SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_CID:
            return "SESSION_STATUS_CHALLENGE_SUBMIT_CID";
        case SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_REPLY:
            return "SESSION_STATUS_CHALLENGE_SUBMIT_REPLY";
        case SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE:
            return "SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE";
        case SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN:
            return "SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN";
        case SessionStatus.SESSION_STATUS_CHALLENGE_ARBITRATION:
            return "SESSION_STATUS_CHALLENGE_ARBITRATION";
        case SessionStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseParams() {
    return {
        agentMinimumLock: coin_1.Coin.fromPartial({}),
        userMinimumLock: coin_1.Coin.fromPartial({}),
        sessionTime: duration_1.Duration.fromPartial({}),
        challengeTime: duration_1.Duration.fromPartial({}),
        globalSeed: new Uint8Array(),
        lowestAgentVersion: helpers_1.Long.UZERO,
        highestAgentVersion: helpers_1.Long.UZERO,
        challengeRate: helpers_1.Long.UZERO,
        validatorCount: helpers_1.Long.UZERO,
        challengeRound: helpers_1.Long.UZERO,
        challengeCidTime: duration_1.Duration.fromPartial({}),
        challengeReplyTime: duration_1.Duration.fromPartial({}),
        challengeMerkleTime: duration_1.Duration.fromPartial({}),
        challengeOriginTime: duration_1.Duration.fromPartial({}),
        agentValidTime: duration_1.Duration.fromPartial({})
    };
}
exports.Params = {
    typeUrl: "/agent.v1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.agentMinimumLock !== undefined) {
            coin_1.Coin.encode(message.agentMinimumLock, writer.uint32(10).fork()).ldelim();
        }
        if (message.userMinimumLock !== undefined) {
            coin_1.Coin.encode(message.userMinimumLock, writer.uint32(18).fork()).ldelim();
        }
        if (message.sessionTime !== undefined) {
            duration_1.Duration.encode(message.sessionTime, writer.uint32(26).fork()).ldelim();
        }
        if (message.challengeTime !== undefined) {
            duration_1.Duration.encode(message.challengeTime, writer.uint32(34).fork()).ldelim();
        }
        if (message.globalSeed.length !== 0) {
            writer.uint32(42).bytes(message.globalSeed);
        }
        if (!message.lowestAgentVersion.isZero()) {
            writer.uint32(48).uint64(message.lowestAgentVersion);
        }
        if (!message.highestAgentVersion.isZero()) {
            writer.uint32(56).uint64(message.highestAgentVersion);
        }
        if (!message.challengeRate.isZero()) {
            writer.uint32(64).uint64(message.challengeRate);
        }
        if (!message.validatorCount.isZero()) {
            writer.uint32(72).uint64(message.validatorCount);
        }
        if (!message.challengeRound.isZero()) {
            writer.uint32(80).uint64(message.challengeRound);
        }
        if (message.challengeCidTime !== undefined) {
            duration_1.Duration.encode(message.challengeCidTime, writer.uint32(90).fork()).ldelim();
        }
        if (message.challengeReplyTime !== undefined) {
            duration_1.Duration.encode(message.challengeReplyTime, writer.uint32(98).fork()).ldelim();
        }
        if (message.challengeMerkleTime !== undefined) {
            duration_1.Duration.encode(message.challengeMerkleTime, writer.uint32(106).fork()).ldelim();
        }
        if (message.challengeOriginTime !== undefined) {
            duration_1.Duration.encode(message.challengeOriginTime, writer.uint32(114).fork()).ldelim();
        }
        if (message.agentValidTime !== undefined) {
            duration_1.Duration.encode(message.agentValidTime, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentMinimumLock = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userMinimumLock = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sessionTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.challengeTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.globalSeed = reader.bytes();
                    break;
                case 6:
                    message.lowestAgentVersion = reader.uint64();
                    break;
                case 7:
                    message.highestAgentVersion = reader.uint64();
                    break;
                case 8:
                    message.challengeRate = reader.uint64();
                    break;
                case 9:
                    message.validatorCount = reader.uint64();
                    break;
                case 10:
                    message.challengeRound = reader.uint64();
                    break;
                case 11:
                    message.challengeCidTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.challengeReplyTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.challengeMerkleTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.challengeOriginTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.agentValidTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseParams();
        if ((0, helpers_1.isSet)(object.agentMinimumLock))
            obj.agentMinimumLock = coin_1.Coin.fromJSON(object.agentMinimumLock);
        if ((0, helpers_1.isSet)(object.userMinimumLock))
            obj.userMinimumLock = coin_1.Coin.fromJSON(object.userMinimumLock);
        if ((0, helpers_1.isSet)(object.sessionTime))
            obj.sessionTime = duration_1.Duration.fromJSON(object.sessionTime);
        if ((0, helpers_1.isSet)(object.challengeTime))
            obj.challengeTime = duration_1.Duration.fromJSON(object.challengeTime);
        if ((0, helpers_1.isSet)(object.globalSeed))
            obj.globalSeed = (0, helpers_1.bytesFromBase64)(object.globalSeed);
        if ((0, helpers_1.isSet)(object.lowestAgentVersion))
            obj.lowestAgentVersion = helpers_1.Long.fromValue(object.lowestAgentVersion);
        if ((0, helpers_1.isSet)(object.highestAgentVersion))
            obj.highestAgentVersion = helpers_1.Long.fromValue(object.highestAgentVersion);
        if ((0, helpers_1.isSet)(object.challengeRate))
            obj.challengeRate = helpers_1.Long.fromValue(object.challengeRate);
        if ((0, helpers_1.isSet)(object.validatorCount))
            obj.validatorCount = helpers_1.Long.fromValue(object.validatorCount);
        if ((0, helpers_1.isSet)(object.challengeRound))
            obj.challengeRound = helpers_1.Long.fromValue(object.challengeRound);
        if ((0, helpers_1.isSet)(object.challengeCidTime))
            obj.challengeCidTime = duration_1.Duration.fromJSON(object.challengeCidTime);
        if ((0, helpers_1.isSet)(object.challengeReplyTime))
            obj.challengeReplyTime = duration_1.Duration.fromJSON(object.challengeReplyTime);
        if ((0, helpers_1.isSet)(object.challengeMerkleTime))
            obj.challengeMerkleTime = duration_1.Duration.fromJSON(object.challengeMerkleTime);
        if ((0, helpers_1.isSet)(object.challengeOriginTime))
            obj.challengeOriginTime = duration_1.Duration.fromJSON(object.challengeOriginTime);
        if ((0, helpers_1.isSet)(object.agentValidTime))
            obj.agentValidTime = duration_1.Duration.fromJSON(object.agentValidTime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.agentMinimumLock !== undefined && (obj.agentMinimumLock = message.agentMinimumLock ? coin_1.Coin.toJSON(message.agentMinimumLock) : undefined);
        message.userMinimumLock !== undefined && (obj.userMinimumLock = message.userMinimumLock ? coin_1.Coin.toJSON(message.userMinimumLock) : undefined);
        message.sessionTime !== undefined && (obj.sessionTime = message.sessionTime ? duration_1.Duration.toJSON(message.sessionTime) : undefined);
        message.challengeTime !== undefined && (obj.challengeTime = message.challengeTime ? duration_1.Duration.toJSON(message.challengeTime) : undefined);
        message.globalSeed !== undefined && (obj.globalSeed = (0, helpers_1.base64FromBytes)(message.globalSeed !== undefined ? message.globalSeed : new Uint8Array()));
        message.lowestAgentVersion !== undefined && (obj.lowestAgentVersion = (message.lowestAgentVersion || helpers_1.Long.UZERO).toString());
        message.highestAgentVersion !== undefined && (obj.highestAgentVersion = (message.highestAgentVersion || helpers_1.Long.UZERO).toString());
        message.challengeRate !== undefined && (obj.challengeRate = (message.challengeRate || helpers_1.Long.UZERO).toString());
        message.validatorCount !== undefined && (obj.validatorCount = (message.validatorCount || helpers_1.Long.UZERO).toString());
        message.challengeRound !== undefined && (obj.challengeRound = (message.challengeRound || helpers_1.Long.UZERO).toString());
        message.challengeCidTime !== undefined && (obj.challengeCidTime = message.challengeCidTime ? duration_1.Duration.toJSON(message.challengeCidTime) : undefined);
        message.challengeReplyTime !== undefined && (obj.challengeReplyTime = message.challengeReplyTime ? duration_1.Duration.toJSON(message.challengeReplyTime) : undefined);
        message.challengeMerkleTime !== undefined && (obj.challengeMerkleTime = message.challengeMerkleTime ? duration_1.Duration.toJSON(message.challengeMerkleTime) : undefined);
        message.challengeOriginTime !== undefined && (obj.challengeOriginTime = message.challengeOriginTime ? duration_1.Duration.toJSON(message.challengeOriginTime) : undefined);
        message.agentValidTime !== undefined && (obj.agentValidTime = message.agentValidTime ? duration_1.Duration.toJSON(message.agentValidTime) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        if (object.agentMinimumLock !== undefined && object.agentMinimumLock !== null) {
            message.agentMinimumLock = coin_1.Coin.fromPartial(object.agentMinimumLock);
        }
        if (object.userMinimumLock !== undefined && object.userMinimumLock !== null) {
            message.userMinimumLock = coin_1.Coin.fromPartial(object.userMinimumLock);
        }
        if (object.sessionTime !== undefined && object.sessionTime !== null) {
            message.sessionTime = duration_1.Duration.fromPartial(object.sessionTime);
        }
        if (object.challengeTime !== undefined && object.challengeTime !== null) {
            message.challengeTime = duration_1.Duration.fromPartial(object.challengeTime);
        }
        message.globalSeed = object.globalSeed ?? new Uint8Array();
        if (object.lowestAgentVersion !== undefined && object.lowestAgentVersion !== null) {
            message.lowestAgentVersion = helpers_1.Long.fromValue(object.lowestAgentVersion);
        }
        if (object.highestAgentVersion !== undefined && object.highestAgentVersion !== null) {
            message.highestAgentVersion = helpers_1.Long.fromValue(object.highestAgentVersion);
        }
        if (object.challengeRate !== undefined && object.challengeRate !== null) {
            message.challengeRate = helpers_1.Long.fromValue(object.challengeRate);
        }
        if (object.validatorCount !== undefined && object.validatorCount !== null) {
            message.validatorCount = helpers_1.Long.fromValue(object.validatorCount);
        }
        if (object.challengeRound !== undefined && object.challengeRound !== null) {
            message.challengeRound = helpers_1.Long.fromValue(object.challengeRound);
        }
        if (object.challengeCidTime !== undefined && object.challengeCidTime !== null) {
            message.challengeCidTime = duration_1.Duration.fromPartial(object.challengeCidTime);
        }
        if (object.challengeReplyTime !== undefined && object.challengeReplyTime !== null) {
            message.challengeReplyTime = duration_1.Duration.fromPartial(object.challengeReplyTime);
        }
        if (object.challengeMerkleTime !== undefined && object.challengeMerkleTime !== null) {
            message.challengeMerkleTime = duration_1.Duration.fromPartial(object.challengeMerkleTime);
        }
        if (object.challengeOriginTime !== undefined && object.challengeOriginTime !== null) {
            message.challengeOriginTime = duration_1.Duration.fromPartial(object.challengeOriginTime);
        }
        if (object.agentValidTime !== undefined && object.agentValidTime !== null) {
            message.agentValidTime = duration_1.Duration.fromPartial(object.agentValidTime);
        }
        return message;
    }
};
function createBaseInnerValues() {
    return {
        seed: new Uint8Array()
    };
}
exports.InnerValues = {
    typeUrl: "/agent.v1.InnerValues",
    encode(message, writer = _m0.Writer.create()) {
        if (message.seed.length !== 0) {
            writer.uint32(10).bytes(message.seed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerValues();
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
        const obj = createBaseInnerValues();
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
        const message = createBaseInnerValues();
        message.seed = object.seed ?? new Uint8Array();
        return message;
    }
};
function createBasePrestige() {
    return {
        count: helpers_1.Long.UZERO,
        total: helpers_1.Long.UZERO
    };
}
exports.Prestige = {
    typeUrl: "/agent.v1.Prestige",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.count.isZero()) {
            writer.uint32(8).uint64(message.count);
        }
        if (!message.total.isZero()) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrestige();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.count = reader.uint64();
                    break;
                case 2:
                    message.total = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePrestige();
        if ((0, helpers_1.isSet)(object.count))
            obj.count = helpers_1.Long.fromValue(object.count);
        if ((0, helpers_1.isSet)(object.total))
            obj.total = helpers_1.Long.fromValue(object.total);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.count !== undefined && (obj.count = (message.count || helpers_1.Long.UZERO).toString());
        message.total !== undefined && (obj.total = (message.total || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePrestige();
        if (object.count !== undefined && object.count !== null) {
            message.count = helpers_1.Long.fromValue(object.count);
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = helpers_1.Long.fromValue(object.total);
        }
        return message;
    }
};
function createBaseInferenceAgent() {
    return {
        account: "",
        url: "",
        version: helpers_1.Long.UZERO,
        prestige: exports.Prestige.fromPartial({}),
        status: 0,
        validUntil: timestamp_1.Timestamp.fromPartial({})
    };
}
exports.InferenceAgent = {
    typeUrl: "/agent.v1.InferenceAgent",
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
        if (message.prestige !== undefined) {
            exports.Prestige.encode(message.prestige, writer.uint32(34).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.validUntil !== undefined) {
            timestamp_1.Timestamp.encode(message.validUntil, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInferenceAgent();
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
                    message.prestige = exports.Prestige.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.validUntil = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseInferenceAgent();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.url))
            obj.url = String(object.url);
        if ((0, helpers_1.isSet)(object.version))
            obj.version = helpers_1.Long.fromValue(object.version);
        if ((0, helpers_1.isSet)(object.prestige))
            obj.prestige = exports.Prestige.fromJSON(object.prestige);
        if ((0, helpers_1.isSet)(object.status))
            obj.status = agentStatusFromJSON(object.status);
        if ((0, helpers_1.isSet)(object.validUntil))
            obj.validUntil = (0, helpers_1.fromJsonTimestamp)(object.validUntil);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.url !== undefined && (obj.url = message.url);
        message.version !== undefined && (obj.version = (message.version || helpers_1.Long.UZERO).toString());
        message.prestige !== undefined && (obj.prestige = message.prestige ? exports.Prestige.toJSON(message.prestige) : undefined);
        message.status !== undefined && (obj.status = agentStatusToJSON(message.status));
        message.validUntil !== undefined && (obj.validUntil = (0, helpers_1.fromTimestamp)(message.validUntil).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInferenceAgent();
        message.account = object.account ?? "";
        message.url = object.url ?? "";
        if (object.version !== undefined && object.version !== null) {
            message.version = helpers_1.Long.fromValue(object.version);
        }
        if (object.prestige !== undefined && object.prestige !== null) {
            message.prestige = exports.Prestige.fromPartial(object.prestige);
        }
        message.status = object.status ?? 0;
        if (object.validUntil !== undefined && object.validUntil !== null) {
            message.validUntil = timestamp_1.Timestamp.fromPartial(object.validUntil);
        }
        return message;
    }
};
function createBaseAgentModel() {
    return {
        account: "",
        modelName: "",
        lock: helpers_1.Long.UZERO,
        status: 0
    };
}
exports.AgentModel = {
    typeUrl: "/agent.v1.AgentModel",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.modelName !== "") {
            writer.uint32(18).string(message.modelName);
        }
        if (!message.lock.isZero()) {
            writer.uint32(24).uint64(message.lock);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAgentModel();
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
                    message.lock = reader.uint64();
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
        const obj = createBaseAgentModel();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.modelName))
            obj.modelName = String(object.modelName);
        if ((0, helpers_1.isSet)(object.lock))
            obj.lock = helpers_1.Long.fromValue(object.lock);
        if ((0, helpers_1.isSet)(object.status))
            obj.status = agentModelStatusFromJSON(object.status);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.lock !== undefined && (obj.lock = (message.lock || helpers_1.Long.UZERO).toString());
        message.status !== undefined && (obj.status = agentModelStatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAgentModel();
        message.account = object.account ?? "";
        message.modelName = object.modelName ?? "";
        if (object.lock !== undefined && object.lock !== null) {
            message.lock = helpers_1.Long.fromValue(object.lock);
        }
        message.status = object.status ?? 0;
        return message;
    }
};
function createBaseTokenPrice() {
    return {
        inputPrice: coin_1.Coin.fromPartial({}),
        outputPrice: coin_1.Coin.fromPartial({})
    };
}
exports.TokenPrice = {
    typeUrl: "/agent.v1.TokenPrice",
    encode(message, writer = _m0.Writer.create()) {
        if (message.inputPrice !== undefined) {
            coin_1.Coin.encode(message.inputPrice, writer.uint32(10).fork()).ldelim();
        }
        if (message.outputPrice !== undefined) {
            coin_1.Coin.encode(message.outputPrice, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputPrice = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.outputPrice = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTokenPrice();
        if ((0, helpers_1.isSet)(object.inputPrice))
            obj.inputPrice = coin_1.Coin.fromJSON(object.inputPrice);
        if ((0, helpers_1.isSet)(object.outputPrice))
            obj.outputPrice = coin_1.Coin.fromJSON(object.outputPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.inputPrice !== undefined && (obj.inputPrice = message.inputPrice ? coin_1.Coin.toJSON(message.inputPrice) : undefined);
        message.outputPrice !== undefined && (obj.outputPrice = message.outputPrice ? coin_1.Coin.toJSON(message.outputPrice) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenPrice();
        if (object.inputPrice !== undefined && object.inputPrice !== null) {
            message.inputPrice = coin_1.Coin.fromPartial(object.inputPrice);
        }
        if (object.outputPrice !== undefined && object.outputPrice !== null) {
            message.outputPrice = coin_1.Coin.fromPartial(object.outputPrice);
        }
        return message;
    }
};
function createBasePaymentContribution() {
    return {
        account: "",
        rate: helpers_1.Long.UZERO,
        amount: undefined
    };
}
exports.PaymentContribution = {
    typeUrl: "/agent.v1.PaymentContribution",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (!message.rate.isZero()) {
            writer.uint32(16).uint64(message.rate);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaymentContribution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.rate = reader.uint64();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePaymentContribution();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.rate))
            obj.rate = helpers_1.Long.fromValue(object.rate);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = coin_1.Coin.fromJSON(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.rate !== undefined && (obj.rate = (message.rate || helpers_1.Long.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePaymentContribution();
        message.account = object.account ?? "";
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = helpers_1.Long.fromValue(object.rate);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        return message;
    }
};
function createBasePayment() {
    return {
        inputTokens: [],
        outputTokens: [],
        merkleRoot: new Uint8Array(),
        contributions: []
    };
}
exports.Payment = {
    typeUrl: "/agent.v1.Payment",
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.inputTokens) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.outputTokens) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.merkleRoot.length !== 0) {
            writer.uint32(26).bytes(message.merkleRoot);
        }
        for (const v of message.contributions) {
            exports.PaymentContribution.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePayment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.inputTokens.push(reader.uint64());
                        }
                    }
                    else {
                        message.inputTokens.push(reader.uint64());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.outputTokens.push(reader.uint64());
                        }
                    }
                    else {
                        message.outputTokens.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.merkleRoot = reader.bytes();
                    break;
                case 4:
                    message.contributions.push(exports.PaymentContribution.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePayment();
        if (Array.isArray(object?.inputTokens))
            obj.inputTokens = object.inputTokens.map((e) => helpers_1.Long.fromValue(e));
        if (Array.isArray(object?.outputTokens))
            obj.outputTokens = object.outputTokens.map((e) => helpers_1.Long.fromValue(e));
        if ((0, helpers_1.isSet)(object.merkleRoot))
            obj.merkleRoot = (0, helpers_1.bytesFromBase64)(object.merkleRoot);
        if (Array.isArray(object?.contributions))
            obj.contributions = object.contributions.map((e) => exports.PaymentContribution.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.inputTokens) {
            obj.inputTokens = message.inputTokens.map(e => (e || helpers_1.Long.UZERO).toString());
        }
        else {
            obj.inputTokens = [];
        }
        if (message.outputTokens) {
            obj.outputTokens = message.outputTokens.map(e => (e || helpers_1.Long.UZERO).toString());
        }
        else {
            obj.outputTokens = [];
        }
        message.merkleRoot !== undefined && (obj.merkleRoot = (0, helpers_1.base64FromBytes)(message.merkleRoot !== undefined ? message.merkleRoot : new Uint8Array()));
        if (message.contributions) {
            obj.contributions = message.contributions.map(e => e ? exports.PaymentContribution.toJSON(e) : undefined);
        }
        else {
            obj.contributions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePayment();
        message.inputTokens = object.inputTokens?.map(e => helpers_1.Long.fromValue(e)) || [];
        message.outputTokens = object.outputTokens?.map(e => helpers_1.Long.fromValue(e)) || [];
        message.merkleRoot = object.merkleRoot ?? new Uint8Array();
        message.contributions = object.contributions?.map(e => exports.PaymentContribution.fromPartial(e)) || [];
        return message;
    }
};
function createBaseChallengeValidator() {
    return {
        account: "",
        hash: new Uint8Array(),
        originHash: new Uint8Array(),
        status: 0
    };
}
exports.ChallengeValidator = {
    typeUrl: "/agent.v1.ChallengeValidator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        if (message.originHash.length !== 0) {
            writer.uint32(26).bytes(message.originHash);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChallengeValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.hash = reader.bytes();
                    break;
                case 3:
                    message.originHash = reader.bytes();
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
        const obj = createBaseChallengeValidator();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.hash))
            obj.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        if ((0, helpers_1.isSet)(object.originHash))
            obj.originHash = (0, helpers_1.bytesFromBase64)(object.originHash);
        if ((0, helpers_1.isSet)(object.status))
            obj.status = validatorStatusFromJSON(object.status);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.originHash !== undefined && (obj.originHash = (0, helpers_1.base64FromBytes)(message.originHash !== undefined ? message.originHash : new Uint8Array()));
        message.status !== undefined && (obj.status = validatorStatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChallengeValidator();
        message.account = object.account ?? "";
        message.hash = object.hash ?? new Uint8Array();
        message.originHash = object.originHash ?? new Uint8Array();
        message.status = object.status ?? 0;
        return message;
    }
};
function createBaseChallengeInfo() {
    return {
        questionId: helpers_1.Long.UZERO,
        cid: "",
        answerHash: new Uint8Array(),
        cutMerkle: [],
        validators: [],
        hashCount: helpers_1.Long.UZERO
    };
}
exports.ChallengeInfo = {
    typeUrl: "/agent.v1.ChallengeInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.questionId.isZero()) {
            writer.uint32(8).uint64(message.questionId);
        }
        if (message.cid !== "") {
            writer.uint32(18).string(message.cid);
        }
        if (message.answerHash.length !== 0) {
            writer.uint32(26).bytes(message.answerHash);
        }
        for (const v of message.cutMerkle) {
            writer.uint32(34).bytes(v);
        }
        for (const v of message.validators) {
            exports.ChallengeValidator.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (!message.hashCount.isZero()) {
            writer.uint32(48).uint64(message.hashCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChallengeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.questionId = reader.uint64();
                    break;
                case 2:
                    message.cid = reader.string();
                    break;
                case 3:
                    message.answerHash = reader.bytes();
                    break;
                case 4:
                    message.cutMerkle.push(reader.bytes());
                    break;
                case 5:
                    message.validators.push(exports.ChallengeValidator.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.hashCount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseChallengeInfo();
        if ((0, helpers_1.isSet)(object.questionId))
            obj.questionId = helpers_1.Long.fromValue(object.questionId);
        if ((0, helpers_1.isSet)(object.cid))
            obj.cid = String(object.cid);
        if ((0, helpers_1.isSet)(object.answerHash))
            obj.answerHash = (0, helpers_1.bytesFromBase64)(object.answerHash);
        if (Array.isArray(object?.cutMerkle))
            obj.cutMerkle = object.cutMerkle.map((e) => (0, helpers_1.bytesFromBase64)(e));
        if (Array.isArray(object?.validators))
            obj.validators = object.validators.map((e) => exports.ChallengeValidator.fromJSON(e));
        if ((0, helpers_1.isSet)(object.hashCount))
            obj.hashCount = helpers_1.Long.fromValue(object.hashCount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.questionId !== undefined && (obj.questionId = (message.questionId || helpers_1.Long.UZERO).toString());
        message.cid !== undefined && (obj.cid = message.cid);
        message.answerHash !== undefined && (obj.answerHash = (0, helpers_1.base64FromBytes)(message.answerHash !== undefined ? message.answerHash : new Uint8Array()));
        if (message.cutMerkle) {
            obj.cutMerkle = message.cutMerkle.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.cutMerkle = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ChallengeValidator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.hashCount !== undefined && (obj.hashCount = (message.hashCount || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChallengeInfo();
        if (object.questionId !== undefined && object.questionId !== null) {
            message.questionId = helpers_1.Long.fromValue(object.questionId);
        }
        message.cid = object.cid ?? "";
        message.answerHash = object.answerHash ?? new Uint8Array();
        message.cutMerkle = object.cutMerkle?.map(e => e) || [];
        message.validators = object.validators?.map(e => exports.ChallengeValidator.fromPartial(e)) || [];
        if (object.hashCount !== undefined && object.hashCount !== null) {
            message.hashCount = helpers_1.Long.fromValue(object.hashCount);
        }
        return message;
    }
};
function createBaseSession() {
    return {
        sessionId: "",
        account: "",
        modelName: "",
        agentAccount: "",
        userLock: coin_1.Coin.fromPartial({}),
        minerLock: coin_1.Coin.fromPartial({}),
        tokenPrice: exports.TokenPrice.fromPartial({}),
        expirationAt: timestamp_1.Timestamp.fromPartial({}),
        payment: undefined,
        status: 0,
        challengeInfo: []
    };
}
exports.Session = {
    typeUrl: "/agent.v1.Session",
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
        if (message.agentAccount !== "") {
            writer.uint32(34).string(message.agentAccount);
        }
        if (message.userLock !== undefined) {
            coin_1.Coin.encode(message.userLock, writer.uint32(42).fork()).ldelim();
        }
        if (message.minerLock !== undefined) {
            coin_1.Coin.encode(message.minerLock, writer.uint32(50).fork()).ldelim();
        }
        if (message.tokenPrice !== undefined) {
            exports.TokenPrice.encode(message.tokenPrice, writer.uint32(58).fork()).ldelim();
        }
        if (message.expirationAt !== undefined) {
            timestamp_1.Timestamp.encode(message.expirationAt, writer.uint32(66).fork()).ldelim();
        }
        if (message.payment !== undefined) {
            exports.Payment.encode(message.payment, writer.uint32(74).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        for (const v of message.challengeInfo) {
            exports.ChallengeInfo.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSession();
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
                    message.agentAccount = reader.string();
                    break;
                case 5:
                    message.userLock = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.minerLock = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tokenPrice = exports.TokenPrice.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.expirationAt = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.payment = exports.Payment.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.status = reader.int32();
                    break;
                case 11:
                    message.challengeInfo.push(exports.ChallengeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSession();
        if ((0, helpers_1.isSet)(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.modelName))
            obj.modelName = String(object.modelName);
        if ((0, helpers_1.isSet)(object.agentAccount))
            obj.agentAccount = String(object.agentAccount);
        if ((0, helpers_1.isSet)(object.userLock))
            obj.userLock = coin_1.Coin.fromJSON(object.userLock);
        if ((0, helpers_1.isSet)(object.minerLock))
            obj.minerLock = coin_1.Coin.fromJSON(object.minerLock);
        if ((0, helpers_1.isSet)(object.tokenPrice))
            obj.tokenPrice = exports.TokenPrice.fromJSON(object.tokenPrice);
        if ((0, helpers_1.isSet)(object.expirationAt))
            obj.expirationAt = (0, helpers_1.fromJsonTimestamp)(object.expirationAt);
        if ((0, helpers_1.isSet)(object.payment))
            obj.payment = exports.Payment.fromJSON(object.payment);
        if ((0, helpers_1.isSet)(object.status))
            obj.status = sessionStatusFromJSON(object.status);
        if (Array.isArray(object?.challengeInfo))
            obj.challengeInfo = object.challengeInfo.map((e) => exports.ChallengeInfo.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.account !== undefined && (obj.account = message.account);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.agentAccount !== undefined && (obj.agentAccount = message.agentAccount);
        message.userLock !== undefined && (obj.userLock = message.userLock ? coin_1.Coin.toJSON(message.userLock) : undefined);
        message.minerLock !== undefined && (obj.minerLock = message.minerLock ? coin_1.Coin.toJSON(message.minerLock) : undefined);
        message.tokenPrice !== undefined && (obj.tokenPrice = message.tokenPrice ? exports.TokenPrice.toJSON(message.tokenPrice) : undefined);
        message.expirationAt !== undefined && (obj.expirationAt = (0, helpers_1.fromTimestamp)(message.expirationAt).toISOString());
        message.payment !== undefined && (obj.payment = message.payment ? exports.Payment.toJSON(message.payment) : undefined);
        message.status !== undefined && (obj.status = sessionStatusToJSON(message.status));
        if (message.challengeInfo) {
            obj.challengeInfo = message.challengeInfo.map(e => e ? exports.ChallengeInfo.toJSON(e) : undefined);
        }
        else {
            obj.challengeInfo = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSession();
        message.sessionId = object.sessionId ?? "";
        message.account = object.account ?? "";
        message.modelName = object.modelName ?? "";
        message.agentAccount = object.agentAccount ?? "";
        if (object.userLock !== undefined && object.userLock !== null) {
            message.userLock = coin_1.Coin.fromPartial(object.userLock);
        }
        if (object.minerLock !== undefined && object.minerLock !== null) {
            message.minerLock = coin_1.Coin.fromPartial(object.minerLock);
        }
        if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
            message.tokenPrice = exports.TokenPrice.fromPartial(object.tokenPrice);
        }
        if (object.expirationAt !== undefined && object.expirationAt !== null) {
            message.expirationAt = timestamp_1.Timestamp.fromPartial(object.expirationAt);
        }
        if (object.payment !== undefined && object.payment !== null) {
            message.payment = exports.Payment.fromPartial(object.payment);
        }
        message.status = object.status ?? 0;
        message.challengeInfo = object.challengeInfo?.map(e => exports.ChallengeInfo.fromPartial(e)) || [];
        return message;
    }
};
function createBaseVrfSeed() {
    return {
        account: "",
        seed: new Uint8Array()
    };
}
exports.VrfSeed = {
    typeUrl: "/agent.v1.VrfSeed",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.seed.length !== 0) {
            writer.uint32(18).bytes(message.seed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVrfSeed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
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
        const obj = createBaseVrfSeed();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.seed))
            obj.seed = (0, helpers_1.bytesFromBase64)(object.seed);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.seed !== undefined && (obj.seed = (0, helpers_1.base64FromBytes)(message.seed !== undefined ? message.seed : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVrfSeed();
        message.account = object.account ?? "";
        message.seed = object.seed ?? new Uint8Array();
        return message;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29kZWMvYWdlbnQvdjEvYWdlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLGtEQWFDO0FBQ0QsOENBVUM7QUFTRCw0REFhQztBQUNELHdEQVVDO0FBYUQsMERBbUJDO0FBQ0Qsc0RBY0M7QUFxQkQsc0RBK0JDO0FBQ0Qsa0RBc0JDO0FBbk1ELG9CQUFvQjtBQUNwQix5REFBc0Q7QUFDdEQsNkRBQTBEO0FBQzFELCtEQUE0RDtBQUM1RCwyQ0FBb0k7QUFDcEksd0RBQTBDO0FBRTdCLFFBQUEsZUFBZSxHQUFHLFVBQVUsQ0FBQztBQUMxQyx5REFBeUQ7QUFDekQsSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ3JCLDhFQUE4RTtJQUM5RSwyRUFBdUIsQ0FBQTtJQUN2QixvRkFBb0Y7SUFDcEYsK0VBQXlCLENBQUE7SUFDekIsOERBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQU5XLFdBQVcsMkJBQVgsV0FBVyxRQU10QjtBQUNELFNBQWdCLG1CQUFtQixDQUFDLE1BQVc7SUFDN0MsUUFBUSxNQUFNLEVBQUUsQ0FBQztRQUNmLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxxQkFBcUI7WUFDeEIsT0FBTyxXQUFXLENBQUMsbUJBQW1CLENBQUM7UUFDekMsS0FBSyxDQUFDLENBQUM7UUFDUCxLQUFLLHVCQUF1QjtZQUMxQixPQUFPLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztRQUMzQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1IsS0FBSyxjQUFjLENBQUM7UUFDcEI7WUFDRSxPQUFPLFdBQVcsQ0FBQyxZQUFZLENBQUM7SUFDcEMsQ0FBQztBQUNILENBQUM7QUFDRCxTQUFnQixpQkFBaUIsQ0FBQyxNQUFtQjtJQUNuRCxRQUFRLE1BQU0sRUFBRSxDQUFDO1FBQ2YsS0FBSyxXQUFXLENBQUMsbUJB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