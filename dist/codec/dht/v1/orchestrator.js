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
exports.Orchestrator = exports.InferenceType = exports.Availability = exports.protobufPackage = void 0;
exports.availabilityFromJSON = availabilityFromJSON;
exports.availabilityToJSON = availabilityToJSON;
exports.inferenceTypeFromJSON = inferenceTypeFromJSON;
exports.inferenceTypeToJSON = inferenceTypeToJSON;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JjaGVzdHJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvZGVjL2RodC92MS9vcmNoZXN0cmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLG9EQWdCQztBQUNELGdEQVlDO0FBT0Qsc0RBYUM7QUFDRCxrREFVQztBQTVFRCxvQkFBb0I7QUFDcEIsK0RBQTREO0FBQzVELHVDQUE2RTtBQUM3RSx5REFBc0Q7QUFDdEQsNkNBQTBDO0FBQzFDLDJDQUFrRztBQUNsRyx3REFBMEM7QUFFN0IsUUFBQSxlQUFlLEdBQUcsUUFBUSxDQUFDO0FBQ3hDLGdFQUFnRTtBQUNoRSxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDdEIsaURBQVMsQ0FBQTtJQUNULHFEQUFXLENBQUE7SUFDWCwrQ0FBUSxDQUFBO0lBQ1IsZ0VBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUxXLFlBQVksNEJBQVosWUFBWSxRQUt2QjtBQUNELFNBQWdCLG9CQUFvQixDQUFDLE1BQVc7SUFDOUMsUUFBUSxNQUFNLEVBQUUsQ0FBQztRQUNmLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxPQUFPO1lBQ1YsT0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxTQUFTO1lBQ1osT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxNQUFNO1lBQ1QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQzNCLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDUixLQUFLLGNBQWMsQ0FBQztRQUNwQjtZQUNFLE9BQU8sWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDO0FBQ0gsQ0FBQztBQUNELFNBQWdCLGtCQUFrQixDQUFDLE1BQW9CO0lBQ3JELFFBQVEsTUFBTSxFQUFFLENBQUM7UUFD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