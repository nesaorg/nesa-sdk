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
exports.Miner = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../google/protobuf/timestamp");
const deposit_1 = require("./deposit");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const reputation_1 = require("./reputation");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "dht.v1";
function createBaseMiner() {
    return {
        nodeId: "",
        startBlock: helpers_1.Long.UZERO,
        endBlock: helpers_1.Long.UZERO,
        torchDtype: "",
        quantType: "",
        cacheTokensLeft: helpers_1.Long.UZERO,
        inferenceRps: 0,
        modelName: "",
        validUntil: timestamp_1.Timestamp.fromPartial({}),
        bondStatus: 0,
        deposit: coin_1.Coin.fromPartial({}),
        reputations: []
    };
}
exports.Miner = {
    typeUrl: "/dht.v1.Miner",
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeId !== "") {
            writer.uint32(10).string(message.nodeId);
        }
        if (!message.startBlock.isZero()) {
            writer.uint32(16).uint64(message.startBlock);
        }
        if (!message.endBlock.isZero()) {
            writer.uint32(24).uint64(message.endBlock);
        }
        if (message.torchDtype !== "") {
            writer.uint32(34).string(message.torchDtype);
        }
        if (message.quantType !== "") {
            writer.uint32(42).string(message.quantType);
        }
        if (!message.cacheTokensLeft.isZero()) {
            writer.uint32(48).uint64(message.cacheTokensLeft);
        }
        if (message.inferenceRps !== 0) {
            writer.uint32(57).double(message.inferenceRps);
        }
        if (message.modelName !== "") {
            writer.uint32(66).string(message.modelName);
        }
        if (message.validUntil !== undefined) {
            timestamp_1.Timestamp.encode(message.validUntil, writer.uint32(74).fork()).ldelim();
        }
        if (message.bondStatus !== 0) {
            writer.uint32(80).int32(message.bondStatus);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.reputations) {
            reputation_1.Reputation.encode(v, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMiner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeId = reader.string();
                    break;
                case 2:
                    message.startBlock = reader.uint64();
                    break;
                case 3:
                    message.endBlock = reader.uint64();
                    break;
                case 4:
                    message.torchDtype = reader.string();
                    break;
                case 5:
                    message.quantType = reader.string();
                    break;
                case 6:
                    message.cacheTokensLeft = reader.uint64();
                    break;
                case 7:
                    message.inferenceRps = reader.double();
                    break;
                case 8:
                    message.modelName = reader.string();
                    break;
                case 9:
                    message.validUntil = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.bondStatus = reader.int32();
                    break;
                case 11:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 12:
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
        const obj = createBaseMiner();
        if ((0, helpers_1.isSet)(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if ((0, helpers_1.isSet)(object.startBlock))
            obj.startBlock = helpers_1.Long.fromValue(object.startBlock);
        if ((0, helpers_1.isSet)(object.endBlock))
            obj.endBlock = helpers_1.Long.fromValue(object.endBlock);
        if ((0, helpers_1.isSet)(object.torchDtype))
            obj.torchDtype = String(object.torchDtype);
        if ((0, helpers_1.isSet)(object.quantType))
            obj.quantType = String(object.quantType);
        if ((0, helpers_1.isSet)(object.cacheTokensLeft))
            obj.cacheTokensLeft = helpers_1.Long.fromValue(object.cacheTokensLeft);
        if ((0, helpers_1.isSet)(object.inferenceRps))
            obj.inferenceRps = Number(object.inferenceRps);
        if ((0, helpers_1.isSet)(object.modelName))
            obj.modelName = String(object.modelName);
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
        message.startBlock !== undefined && (obj.startBlock = (message.startBlock || helpers_1.Long.UZERO).toString());
        message.endBlock !== undefined && (obj.endBlock = (message.endBlock || helpers_1.Long.UZERO).toString());
        message.torchDtype !== undefined && (obj.torchDtype = message.torchDtype);
        message.quantType !== undefined && (obj.quantType = message.quantType);
        message.cacheTokensLeft !== undefined && (obj.cacheTokensLeft = (message.cacheTokensLeft || helpers_1.Long.UZERO).toString());
        message.inferenceRps !== undefined && (obj.inferenceRps = message.inferenceRps);
        message.modelName !== undefined && (obj.modelName = message.modelName);
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
        const message = createBaseMiner();
        message.nodeId = object.nodeId ?? "";
        if (object.startBlock !== undefined && object.startBlock !== null) {
            message.startBlock = helpers_1.Long.fromValue(object.startBlock);
        }
        if (object.endBlock !== undefined && object.endBlock !== null) {
            message.endBlock = helpers_1.Long.fromValue(object.endBlock);
        }
        message.torchDtype = object.torchDtype ?? "";
        message.quantType = object.quantType ?? "";
        if (object.cacheTokensLeft !== undefined && object.cacheTokensLeft !== null) {
            message.cacheTokensLeft = helpers_1.Long.fromValue(object.cacheTokensLeft);
        }
        message.inferenceRps = object.inferenceRps ?? 0;
        message.modelName = object.modelName ?? "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29kZWMvZGh0L3YxL21pbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiwrREFBNEQ7QUFDNUQsdUNBQTZFO0FBQzdFLHlEQUFzRDtBQUN0RCw2Q0FBMEM7QUFDMUMsMkNBQWtHO0FBQ2xHLHdEQUEwQztBQUU3QixRQUFBLGVBQWUsR0FBRyxRQUFRLENBQUM7QUFnQnhDLFNBQVMsZUFBZTtJQUN0QixPQUFPO1FBQ0wsTUFBTSxFQUFFLEVBQUU7UUFDVixVQUFVLEVBQUUsY0FBSSxDQUFDLEtBQUs7UUFDdEIsUUFBUSxFQUFFLGNBQUksQ0FBQyxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLEVBQUU7UUFDYixlQUFlLEVBQUUsY0FBSSxDQUFDLEtBQUs7UUFDM0IsWUFBWSxFQUFFLENBQUM7UUFDZixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDckMsVUFBVSxFQUFFLENBQUM7UUFDYixPQUFPLEVBQUUsV0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDN0IsV0FBVyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztBQUNKLENBQUM7QUFDWSxRQUFBLEtBQUssR0FBRztJQUNuQixPQUFPLEVBQUUsZUFBZTtJQUN4QixNQUFNLENBQUMsT0FBYyxFQUFFLFNBQXFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQzdELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztZQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1B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