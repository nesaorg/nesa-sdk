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
exports.Orchestrator = exports.inferenceTypeToJSON = exports.inferenceTypeFromJSON = exports.InferenceType = exports.availabilityToJSON = exports.availabilityFromJSON = exports.Availability = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../google/protobuf/timestamp");
const deposit_1 = require("./deposit");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const reputation_1 = require("./reputation");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "dht.v1";
/** Availability defines the availability of an Orchestrator. */
var Availability;
(function (Availability) {
    Availability[Availability["READY"] = 0] = "READY";
    Availability[Availability["LOADING"] = 1] = "LOADING";
    Availability[Availability["IDLE"] = 2] = "IDLE";
    Availability[Availability["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Availability || (exports.Availability = Availability = {}));
function availabilityFromJSON(object) {
    switch (object) {
        case 0:
        case "READY":
            return Availability.READY;
        case 1:
        case "LOADING":
            return Availability.LOADING;
        case 2:
        case "IDLE":
            return Availability.IDLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Availability.UNRECOGNIZED;
    }
}
exports.availabilityFromJSON = availabilityFromJSON;
function availabilityToJSON(object) {
    switch (object) {
        case Availability.READY:
            return "READY";
        case Availability.LOADING:
            return "LOADING";
        case Availability.IDLE:
            return "IDLE";
        case Availability.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.availabilityToJSON = availabilityToJSON;
/** InferenceType defines the inference type of an Orchestrator. */
var InferenceType;
(function (InferenceType) {
    InferenceType[InferenceType["DISTRIBUTED"] = 0] = "DISTRIBUTED";
    InferenceType[InferenceType["NON_DISTRIBUTED"] = 1] = "NON_DISTRIBUTED";
    InferenceType[InferenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InferenceType || (exports.InferenceType = InferenceType = {}));
function inferenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DISTRIBUTED":
            return InferenceType.DISTRIBUTED;
        case 1:
        case "NON_DISTRIBUTED":
            return InferenceType.NON_DISTRIBUTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return InferenceType.UNRECOGNIZED;
    }
}
exports.inferenceTypeFromJSON = inferenceTypeFromJSON;
function inferenceTypeToJSON(object) {
    switch (object) {
        case InferenceType.DISTRIBUTED:
            return "DISTRIBUTED";
        case InferenceType.NON_DISTRIBUTED:
            return "NON_DISTRIBUTED";
        case InferenceType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.inferenceTypeToJSON = inferenceTypeToJSON;
function createBaseOrchestrator() {
    return {
        nodeId: "",
        modelName: "",
        inferenceType: 0,
        status: 0,
        blockCount: [],
        validUntil: timestamp_1.Timestamp.fromPartial({}),
        bondStatus: 0,
        deposit: coin_1.Coin.fromPartial({}),
        reputations: []
    };
}
exports.Orchestrator = {
    typeUrl: "/dht.v1.Orchestrator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeId !== "") {
            writer.uint32(10).string(message.nodeId);
        }
        if (message.modelName !== "") {
            writer.uint32(18).string(message.modelName);
        }
        if (message.inferenceType !== 0) {
            writer.uint32(24).int32(message.inferenceType);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        writer.uint32(42).fork();
        for (const v of message.blockCount) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.validUntil !== undefined) {
            timestamp_1.Timestamp.encode(message.validUntil, writer.uint32(50).fork()).ldelim();
        }
        if (message.bondStatus !== 0) {
            writer.uint32(56).int32(message.bondStatus);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.reputations) {
            reputation_1.Reputation.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrchestrator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeId = reader.string();
                    break;
                case 2:
                    message.modelName = reader.string();
                    break;
                case 3:
                    message.inferenceType = reader.int32();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.blockCount.push(reader.uint64());
                        }
                    }
                    else {
                        message.blockCount.push(reader.uint64());
                    }
                    break;
                case 6:
                    message.validUntil = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.bondStatus = reader.int32();
                    break;
                case 8:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reputations.push(reputation_1.Reputation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseOrchestrator();
        if ((0, helpers_1.isSet)(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if ((0, helpers_1.isSet)(object.modelName))
            obj.modelName = String(object.modelName);
        if ((0, helpers_1.isSet)(object.inferenceType))
            obj.inferenceType = inferenceTypeFromJSON(object.inferenceType);
        if ((0, helpers_1.isSet)(object.status))
            obj.status = availabilityFromJSON(object.status);
        if (Array.isArray(object?.blockCount))
            obj.blockCount = object.blockCount.map((e) => helpers_1.Long.fromValue(e));
        if ((0, helpers_1.isSet)(object.validUntil))
            obj.validUntil = (0, helpers_1.fromJsonTimestamp)(object.validUntil);
        if ((0, helpers_1.isSet)(object.bondStatus))
            obj.bondStatus = (0, deposit_1.bondStatusFromJSON)(object.bondStatus);
        if ((0, helpers_1.isSet)(object.deposit))
            obj.deposit = coin_1.Coin.fromJSON(object.deposit);
        if (Array.isArray(object?.reputations))
            obj.reputations = object.reputations.map((e) => reputation_1.Reputation.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.inferenceType !== undefined && (obj.inferenceType = inferenceTypeToJSON(message.inferenceType));
        message.status !== undefined && (obj.status = availabilityToJSON(message.status));
        if (message.blockCount) {
            obj.blockCount = message.blockCount.map(e => (e || helpers_1.Long.UZERO).toString());
        }
        else {
            obj.blockCount = [];
        }
        message.validUntil !== undefined && (obj.validUntil = (0, helpers_1.fromTimestamp)(message.validUntil).toISOString());
        message.bondStatus !== undefined && (obj.bondStatus = (0, deposit_1.bondStatusToJSON)(message.bondStatus));
        message.deposit !== undefined && (obj.deposit = message.deposit ? coin_1.Coin.toJSON(message.deposit) : undefined);
        if (message.reputations) {
            obj.reputations = message.reputations.map(e => e ? reputation_1.Reputation.toJSON(e) : undefined);
        }
        else {
            obj.reputations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOrchestrator();
        message.nodeId = object.nodeId ?? "";
        message.modelName = object.modelName ?? "";
        message.inferenceType = object.inferenceType ?? 0;
        message.status = object.status ?? 0;
        message.blockCount = object.blockCount?.map(e => helpers_1.Long.fromValue(e)) || [];
        if (object.validUntil !== undefined && object.validUntil !== null) {
            message.validUntil = timestamp_1.Timestamp.fromPartial(object.validUntil);
        }
        message.bondStatus = object.bondStatus ?? 0;
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = coin_1.Coin.fromPartial(object.deposit);
        }
        message.reputations = object.reputations?.map(e => reputation_1.Reputation.fromPartial(e)) || [];
        return message;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JjaGVzdHJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvZGVjL2RodC92MS9vcmNoZXN0cmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsK0RBQTREO0FBQzVELHVDQUE2RTtBQUM3RSx5REFBc0Q7QUFDdEQsNkNBQTBDO0FBQzFDLDJDQUFrRztBQUNsRyx3REFBMEM7QUFFN0IsUUFBQSxlQUFlLEdBQUcsUUFBUSxDQUFDO0FBQ3hDLGdFQUFnRTtBQUNoRSxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDdEIsaURBQVMsQ0FBQTtJQUNULHFEQUFXLENBQUE7SUFDWCwrQ0FBUSxDQUFBO0lBQ1IsZ0VBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUxXLFlBQVksNEJBQVosWUFBWSxRQUt2QjtBQUNELFNBQWdCLG9CQUFvQixDQUFDLE1BQVc7SUFDOUMsUUFBUSxNQUFNLEVBQUUsQ0FBQztRQUNmLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxPQUFPO1lBQ1YsT0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxTQUFTO1lBQ1osT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxNQUFNO1lBQ1QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQzNCLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDUixLQUFLLGNBQWMsQ0FBQztRQUNwQjtZQUNFLE9BQU8sWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDO0FBQ0gsQ0FBQztBQWhCRCxvREFnQkM7QUFDRCxTQUFnQixrQkFBa0IsQ0FBQyxNQUFvQjtJQUNyRCxRQUFRLE1BQU0sRUFBRSxDQUFDO1FBQ2YsS0FBSyxZQUFZLENBQUMsS0FBSztZQUNyQixPQUFPLE9BQU8sQ0FBQztR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R0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDbEUsT0FBTyxDQUFDLFVBQVUsR0FBRyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUNELE9BQU8sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzVELE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQyJ9