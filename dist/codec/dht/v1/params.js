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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvZGVjL2RodC92MS9wYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDZEQUEwRDtBQUMxRCx5REFBc0Q7QUFDdEQsbUNBQXFDO0FBQ3JDLHdEQUEwQztBQUMxQywyQ0FBMEQ7QUFFN0MsUUFBQSxlQUFlLEdBQUcsUUFBUSxDQUFDO0FBZXhDLFNBQVMsZ0JBQWdCO0lBQ3ZCLE9BQU87UUFDTCxxQkFBcUIsRUFBRSxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDL0MsY0FBYyxFQUFFLG1CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUN4QyxZQUFZLEVBQUUsRUFBRTtRQUNoQixzQkFBc0IsRUFBRSxXQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUM1QyxlQUFlLEVBQUUsV0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDckMsMkJBQTJCLEVBQUUsbUJBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQ3JELG9CQUFvQixFQUFFLG1CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUM5QyxpQkFBaUIsRUFBRSxFQUFFO1FBQ3JCLHNCQUFzQixFQUFFLEVBQUU7UUFDMUIsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixzQkFBc0IsRUFBRSxTQUFTO0tBQ2xDLENBQUM7QUFDSixDQUFDO0FBQ1ksUUFBQSxNQUFNLEdBQUc7SUFDcEIsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QixNQUFNLENBQUMsT0FBZSxFQUFFLFNBQXFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQzlELElBQUksT0FBTyxDQUFDLHFCQUFxQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2hELG1CQUFRLENBQUMsTUFBTSxDQUFDLE9B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