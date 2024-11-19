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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29kZWMvZGh0L3YxL21pbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLCtEQUE0RDtBQUM1RCx1Q0FBNkU7QUFDN0UseURBQXNEO0FBQ3RELDZDQUEwQztBQUMxQywyQ0FBa0c7QUFDbEcsd0RBQTBDO0FBRTdCLFFBQUEsZUFBZSxHQUFHLFFBQVEsQ0FBQztBQWdCeEMsU0FBUyxlQUFlO0lBQ3RCLE9BQU87UUFDTCxNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxjQUFJLENBQUMsS0FBSztRQUN0QixRQUFRLEVBQUUsY0FBSSxDQUFDLEtBQUs7UUFDcEIsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsRUFBRTtRQUNiLGVBQWUsRUFBRSxjQUFJLENBQUMsS0FBSztRQUMzQixZQUFZLEVBQUUsQ0FBQztRQUNmLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLHFCQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUNyQyxVQUFVLEVBQUUsQ0FBQztRQUNiLE9BQU8sRUFBRSxXQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUM3QixXQUFXLEVBQUUsRUFBRTtLQUNoQixDQUFDO0FBQ0osQ0FBQztBQUNZLFFBQUEsS0FBSyxHQUFHO0lBQ25CLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLE1BQU0sQ0FBQyxPQUFjLEVBQUUsU0FBcUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDN0QsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztZQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9B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