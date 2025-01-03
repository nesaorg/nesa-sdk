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
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../google/protobuf/duration");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const model_1 = require("./model");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../helpers");
exports.protobufPackage = "dht.v1";
function createBaseParams() {
    return {
        orchestratorValidTime: duration_1.Duration.fromPartial({}),
        minerValidTime: duration_1.Duration.fromPartial({}),
        adminAccount: "",
        orchestratorMinDeposit: coin_1.Coin.fromPartial({}),
        minerMinDeposit: coin_1.Coin.fromPartial({}),
        orchestratorUnbondingPeriod: duration_1.Duration.fromPartial({}),
        minerUnbondingPeriod: duration_1.Duration.fromPartial({}),
        labelAdminAccount: "",
        reputationAdminAccount: "",
        priceTokenDenoms: [],
        modelDefaultTokenPrice: undefined
    };
}
exports.Params = {
    typeUrl: "/dht.v1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.orchestratorValidTime !== undefined) {
            duration_1.Duration.encode(message.orchestratorValidTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.minerValidTime !== undefined) {
            duration_1.Duration.encode(message.minerValidTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.adminAccount !== "") {
            writer.uint32(26).string(message.adminAccount);
        }
        if (message.orchestratorMinDeposit !== undefined) {
            coin_1.Coin.encode(message.orchestratorMinDeposit, writer.uint32(34).fork()).ldelim();
        }
        if (message.minerMinDeposit !== undefined) {
            coin_1.Coin.encode(message.minerMinDeposit, writer.uint32(42).fork()).ldelim();
        }
        if (message.orchestratorUnbondingPeriod !== undefined) {
            duration_1.Duration.encode(message.orchestratorUnbondingPeriod, writer.uint32(50).fork()).ldelim();
        }
        if (message.minerUnbondingPeriod !== undefined) {
            duration_1.Duration.encode(message.minerUnbondingPeriod, writer.uint32(58).fork()).ldelim();
        }
        if (message.labelAdminAccount !== "") {
            writer.uint32(66).string(message.labelAdminAccount);
        }
        if (message.reputationAdminAccount !== "") {
            writer.uint32(74).string(message.reputationAdminAccount);
        }
        for (const v of message.priceTokenDenoms) {
            writer.uint32(82).string(v);
        }
        if (message.modelDefaultTokenPrice !== undefined) {
            model_1.TokenPrice.encode(message.modelDefaultTokenPrice, writer.uint32(90).fork()).ldelim();
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
                    message.orchestratorValidTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.minerValidTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.adminAccount = reader.string();
                    break;
                case 4:
                    message.orchestratorMinDeposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.minerMinDeposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.orchestratorUnbondingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.minerUnbondingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.labelAdminAccount = reader.string();
                    break;
                case 9:
                    message.reputationAdminAccount = reader.string();
                    break;
                case 10:
                    message.priceTokenDenoms.push(reader.string());
                    break;
                case 11:
                    message.modelDefaultTokenPrice = model_1.TokenPrice.decode(reader, reader.uint32());
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
        if ((0, helpers_1.isSet)(object.orchestratorValidTime))
            obj.orchestratorValidTime = duration_1.Duration.fromJSON(object.orchestratorValidTime);
        if ((0, helpers_1.isSet)(object.minerValidTime))
            obj.minerValidTime = duration_1.Duration.fromJSON(object.minerValidTime);
        if ((0, helpers_1.isSet)(object.adminAccount))
            obj.adminAccount = String(object.adminAccount);
        if ((0, helpers_1.isSet)(object.orchestratorMinDeposit))
            obj.orchestratorMinDeposit = coin_1.Coin.fromJSON(object.orchestratorMinDeposit);
        if ((0, helpers_1.isSet)(object.minerMinDeposit))
            obj.minerMinDeposit = coin_1.Coin.fromJSON(object.minerMinDeposit);
        if ((0, helpers_1.isSet)(object.orchestratorUnbondingPeriod))
            obj.orchestratorUnbondingPeriod = duration_1.Duration.fromJSON(object.orchestratorUnbondingPeriod);
        if ((0, helpers_1.isSet)(object.minerUnbondingPeriod))
            obj.minerUnbondingPeriod = duration_1.Duration.fromJSON(object.minerUnbondingPeriod);
        if ((0, helpers_1.isSet)(object.labelAdminAccount))
            obj.labelAdminAccount = String(object.labelAdminAccount);
        if ((0, helpers_1.isSet)(object.reputationAdminAccount))
            obj.reputationAdminAccount = String(object.reputationAdminAccount);
        if (Array.isArray(object?.priceTokenDenoms))
            obj.priceTokenDenoms = object.priceTokenDenoms.map((e) => String(e));
        if ((0, helpers_1.isSet)(object.modelDefaultTokenPrice))
            obj.modelDefaultTokenPrice = model_1.TokenPrice.fromJSON(object.modelDefaultTokenPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.orchestratorValidTime !== undefined && (obj.orchestratorValidTime = message.orchestratorValidTime ? duration_1.Duration.toJSON(message.orchestratorValidTime) : undefined);
        message.minerValidTime !== undefined && (obj.minerValidTime = message.minerValidTime ? duration_1.Duration.toJSON(message.minerValidTime) : undefined);
        message.adminAccount !== undefined && (obj.adminAccount = message.adminAccount);
        message.orchestratorMinDeposit !== undefined && (obj.orchestratorMinDeposit = message.orchestratorMinDeposit ? coin_1.Coin.toJSON(message.orchestratorMinDeposit) : undefined);
        message.minerMinDeposit !== undefined && (obj.minerMinDeposit = message.minerMinDeposit ? coin_1.Coin.toJSON(message.minerMinDeposit) : undefined);
        message.orchestratorUnbondingPeriod !== undefined && (obj.orchestratorUnbondingPeriod = message.orchestratorUnbondingPeriod ? duration_1.Duration.toJSON(message.orchestratorUnbondingPeriod) : undefined);
        message.minerUnbondingPeriod !== undefined && (obj.minerUnbondingPeriod = message.minerUnbondingPeriod ? duration_1.Duration.toJSON(message.minerUnbondingPeriod) : undefined);
        message.labelAdminAccount !== undefined && (obj.labelAdminAccount = message.labelAdminAccount);
        message.reputationAdminAccount !== undefined && (obj.reputationAdminAccount = message.reputationAdminAccount);
        if (message.priceTokenDenoms) {
            obj.priceTokenDenoms = message.priceTokenDenoms.map(e => e);
        }
        else {
            obj.priceTokenDenoms = [];
        }
        message.modelDefaultTokenPrice !== undefined && (obj.modelDefaultTokenPrice = message.modelDefaultTokenPrice ? model_1.TokenPrice.toJSON(message.modelDefaultTokenPrice) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        if (object.orchestratorValidTime !== undefined && object.orchestratorValidTime !== null) {
            message.orchestratorValidTime = duration_1.Duration.fromPartial(object.orchestratorValidTime);
        }
        if (object.minerValidTime !== undefined && object.minerValidTime !== null) {
            message.minerValidTime = duration_1.Duration.fromPartial(object.minerValidTime);
        }
        message.adminAccount = object.adminAccount ?? "";
        if (object.orchestratorMinDeposit !== undefined && object.orchestratorMinDeposit !== null) {
            message.orchestratorMinDeposit = coin_1.Coin.fromPartial(object.orchestratorMinDeposit);
        }
        if (object.minerMinDeposit !== undefined && object.minerMinDeposit !== null) {
            message.minerMinDeposit = coin_1.Coin.fromPartial(object.minerMinDeposit);
        }
        if (object.orchestratorUnbondingPeriod !== undefined && object.orchestratorUnbondingPeriod !== null) {
            message.orchestratorUnbondingPeriod = duration_1.Duration.fromPartial(object.orchestratorUnbondingPeriod);
        }
        if (object.minerUnbondingPeriod !== undefined && object.minerUnbondingPeriod !== null) {
            message.minerUnbondingPeriod = duration_1.Duration.fromPartial(object.minerUnbondingPeriod);
        }
        message.labelAdminAccount = object.labelAdminAccount ?? "";
        message.reputationAdminAccount = object.reputationAdminAccount ?? "";
        message.priceTokenDenoms = object.priceTokenDenoms?.map(e => e) || [];
        if (object.modelDefaultTokenPrice !== undefined && object.modelDefaultTokenPrice !== null) {
            message.modelDefaultTokenPrice = model_1.TokenPrice.fromPartial(object.modelDefaultTokenPrice);
        }
        return message;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvZGVjL2RodC92MS9wYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNkRBQTBEO0FBQzFELHlEQUFzRDtBQUN0RCxtQ0FBcUM7QUFDckMsd0RBQTBDO0FBQzFDLDJDQUEwRDtBQUU3QyxRQUFBLGVBQWUsR0FBRyxRQUFRLENBQUM7QUFleEMsU0FBUyxnQkFBZ0I7SUFDdkIsT0FBTztRQUNMLHFCQUFxQixFQUFFLG1CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUMvQyxjQUFjLEVBQUUsbUJBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQ3hDLFlBQVksRUFBRSxFQUFFO1FBQ2hCLHNCQUFzQixFQUFFLFdBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQzVDLGVBQWUsRUFBRSxXQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUNyQywyQkFBMkIsRUFBRSxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDckQsb0JBQW9CLEVBQUUsbUJBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQzlDLGlCQUFpQixFQUFFLEVBQUU7UUFDckIsc0JBQXNCLEVBQUUsRUFBRTtRQUMxQixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLHNCQUFzQixFQUFFLFNBQVM7S0FDbEMsQ0FBQztBQUNKLENBQUM7QUFDWSxRQUFBLE1BQU0sR0FBRztJQUNwQixPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLE1BQU0sQ0FBQyxPQUFlLEVBQUUsU0FBcUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDOUQsSUFBSSxPQUFPLENBQUMscUJBQXFCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDaEQsbUJBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHFC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