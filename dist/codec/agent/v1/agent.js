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
exports.VrfSeed = exports.Session = exports.ChallengeInfo = exports.ChallengeValidator = exports.Payment = exports.PaymentContribution = exports.TokenPrice = exports.AgentModel = exports.InferenceAgent = exports.Prestige = exports.InnerValues = exports.Params = exports.sessionStatusToJSON = exports.sessionStatusFromJSON = exports.SessionStatus = exports.validatorStatusToJSON = exports.validatorStatusFromJSON = exports.ValidatorStatus = exports.agentModelStatusToJSON = exports.agentModelStatusFromJSON = exports.AgentModelStatus = exports.agentStatusToJSON = exports.agentStatusFromJSON = exports.AgentStatus = exports.protobufPackage = void 0;
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
exports.agentStatusFromJSON = agentStatusFromJSON;
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
exports.agentStatusToJSON = agentStatusToJSON;
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
exports.agentModelStatusFromJSON = agentModelStatusFromJSON;
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
exports.agentModelStatusToJSON = agentModelStatusToJSON;
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
exports.validatorStatusFromJSON = validatorStatusFromJSON;
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
exports.validatorStatusToJSON = validatorStatusToJSON;
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
exports.sessionStatusFromJSON = sessionStatusFromJSON;
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
exports.sessionStatusToJSON = sessionStatusToJSON;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29kZWMvYWdlbnQvdjEvYWdlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIseURBQXNEO0FBQ3RELDZEQUEwRDtBQUMxRCwrREFBNEQ7QUFDNUQsMkNBQW9JO0FBQ3BJLHdEQUEwQztBQUU3QixRQUFBLGVBQWUsR0FBRyxVQUFVLENBQUM7QUFDMUMseURBQXlEO0FBQ3pELElBQVksV0FNWDtBQU5ELFdBQVksV0FBVztJQUNyQiw4RUFBOEU7SUFDOUUsMkVBQXVCLENBQUE7SUFDdkIsb0ZBQW9GO0lBQ3BGLCtFQUF5QixDQUFBO0lBQ3pCLDhEQUFpQixDQUFBO0FBQ25CLENBQUMsRUFOVyxXQUFXLDJCQUFYLFdBQVcsUUFNdEI7QUFDRCxTQUFnQixtQkFBbUIsQ0FBQyxNQUFXO0lBQzdDLFFBQVEsTUFBTSxFQUFFLENBQUM7UUFDZixLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUsscUJBQXFCO1lBQ3hCLE9BQU8sV0FBVyxDQUFDLG1CQUFtQixDQUFDO1FBQ3pDLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyx1QkFBdUI7WUFDMUIsT0FBTyxXQUFXLENBQUMscUJBQXFCLENBQUM7UUFDM0MsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNSLEtBQUssY0FBYyxDQUFDO1FBQ3BCO1lBQ0UsT0FBTyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBQ3BDLENBQUM7QUFDSCxDQUFDO0FBYkQsa0RBYUM7QUFDRCxTQUFnQixpQkFBaUIsQ0FBQyxNQUFtQjtJQUNuRCxRQUFRLE1BQU0sRUFBRSxDQUFDO1FBQ2YsS0FBSyxXQUFXLENBQUMsbUJBQW1CO1lBQ2xDLE9BQU8scUJBQXFCLENBQUM7UUFDL0IsS0FBSyxXQUFXLENBQUMscUJBQXFCO1lBQ3BDLE9BQU8sdUJBQXVCLENBQUM7UUFDakMsS0FBSyxXQUFX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