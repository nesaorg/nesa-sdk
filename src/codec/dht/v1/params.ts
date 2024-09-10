/* eslint-disable */
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { TokenPrice } from "./model";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "dht.v1";
/** Params defines the parameters for the module. */
export interface Params {
  orchestratorValidTime: Duration;
  minerValidTime: Duration;
  adminAccount: string;
  orchestratorMinDeposit: Coin;
  minerMinDeposit: Coin;
  orchestratorUnbondingPeriod: Duration;
  minerUnbondingPeriod: Duration;
  labelAdminAccount: string;
  reputationAdminAccount: string;
  priceTokenDenoms: string[];
  modelDefaultTokenPrice?: TokenPrice;
}
function createBaseParams(): Params {
  return {
    orchestratorValidTime: Duration.fromPartial({}),
    minerValidTime: Duration.fromPartial({}),
    adminAccount: "",
    orchestratorMinDeposit: Coin.fromPartial({}),
    minerMinDeposit: Coin.fromPartial({}),
    orchestratorUnbondingPeriod: Duration.fromPartial({}),
    minerUnbondingPeriod: Duration.fromPartial({}),
    labelAdminAccount: "",
    reputationAdminAccount: "",
    priceTokenDenoms: [],
    modelDefaultTokenPrice: undefined
  };
}
export const Params = {
  typeUrl: "/dht.v1.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orchestratorValidTime !== undefined) {
      Duration.encode(message.orchestratorValidTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.minerValidTime !== undefined) {
      Duration.encode(message.minerValidTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.adminAccount !== "") {
      writer.uint32(26).string(message.adminAccount);
    }
    if (message.orchestratorMinDeposit !== undefined) {
      Coin.encode(message.orchestratorMinDeposit, writer.uint32(34).fork()).ldelim();
    }
    if (message.minerMinDeposit !== undefined) {
      Coin.encode(message.minerMinDeposit, writer.uint32(42).fork()).ldelim();
    }
    if (message.orchestratorUnbondingPeriod !== undefined) {
      Duration.encode(message.orchestratorUnbondingPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.minerUnbondingPeriod !== undefined) {
      Duration.encode(message.minerUnbondingPeriod, writer.uint32(58).fork()).ldelim();
    }
    if (message.labelAdminAccount !== "") {
      writer.uint32(66).string(message.labelAdminAccount);
    }
    if (message.reputationAdminAccount !== "") {
      writer.uint32(74).string(message.reputationAdminAccount);
    }
    for (const v of message.priceTokenDenoms) {
      writer.uint32(82).string(v!);
    }
    if (message.modelDefaultTokenPrice !== undefined) {
      TokenPrice.encode(message.modelDefaultTokenPrice, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestratorValidTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.minerValidTime = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.adminAccount = reader.string();
          break;
        case 4:
          message.orchestratorMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.minerMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.orchestratorUnbondingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.minerUnbondingPeriod = Duration.decode(reader, reader.uint32());
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
          message.modelDefaultTokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.orchestratorValidTime)) obj.orchestratorValidTime = Duration.fromJSON(object.orchestratorValidTime);
    if (isSet(object.minerValidTime)) obj.minerValidTime = Duration.fromJSON(object.minerValidTime);
    if (isSet(object.adminAccount)) obj.adminAccount = String(object.adminAccount);
    if (isSet(object.orchestratorMinDeposit)) obj.orchestratorMinDeposit = Coin.fromJSON(object.orchestratorMinDeposit);
    if (isSet(object.minerMinDeposit)) obj.minerMinDeposit = Coin.fromJSON(object.minerMinDeposit);
    if (isSet(object.orchestratorUnbondingPeriod)) obj.orchestratorUnbondingPeriod = Duration.fromJSON(object.orchestratorUnbondingPeriod);
    if (isSet(object.minerUnbondingPeriod)) obj.minerUnbondingPeriod = Duration.fromJSON(object.minerUnbondingPeriod);
    if (isSet(object.labelAdminAccount)) obj.labelAdminAccount = String(object.labelAdminAccount);
    if (isSet(object.reputationAdminAccount)) obj.reputationAdminAccount = String(object.reputationAdminAccount);
    if (Array.isArray(object?.priceTokenDenoms)) obj.priceTokenDenoms = object.priceTokenDenoms.map((e: any) => String(e));
    if (isSet(object.modelDefaultTokenPrice)) obj.modelDefaultTokenPrice = TokenPrice.fromJSON(object.modelDefaultTokenPrice);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.orchestratorValidTime !== undefined && (obj.orchestratorValidTime = message.orchestratorValidTime ? Duration.toJSON(message.orchestratorValidTime) : undefined);
    message.minerValidTime !== undefined && (obj.minerValidTime = message.minerValidTime ? Duration.toJSON(message.minerValidTime) : undefined);
    message.adminAccount !== undefined && (obj.adminAccount = message.adminAccount);
    message.orchestratorMinDeposit !== undefined && (obj.orchestratorMinDeposit = message.orchestratorMinDeposit ? Coin.toJSON(message.orchestratorMinDeposit) : undefined);
    message.minerMinDeposit !== undefined && (obj.minerMinDeposit = message.minerMinDeposit ? Coin.toJSON(message.minerMinDeposit) : undefined);
    message.orchestratorUnbondingPeriod !== undefined && (obj.orchestratorUnbondingPeriod = message.orchestratorUnbondingPeriod ? Duration.toJSON(message.orchestratorUnbondingPeriod) : undefined);
    message.minerUnbondingPeriod !== undefined && (obj.minerUnbondingPeriod = message.minerUnbondingPeriod ? Duration.toJSON(message.minerUnbondingPeriod) : undefined);
    message.labelAdminAccount !== undefined && (obj.labelAdminAccount = message.labelAdminAccount);
    message.reputationAdminAccount !== undefined && (obj.reputationAdminAccount = message.reputationAdminAccount);
    if (message.priceTokenDenoms) {
      obj.priceTokenDenoms = message.priceTokenDenoms.map(e => e);
    } else {
      obj.priceTokenDenoms = [];
    }
    message.modelDefaultTokenPrice !== undefined && (obj.modelDefaultTokenPrice = message.modelDefaultTokenPrice ? TokenPrice.toJSON(message.modelDefaultTokenPrice) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.orchestratorValidTime !== undefined && object.orchestratorValidTime !== null) {
      message.orchestratorValidTime = Duration.fromPartial(object.orchestratorValidTime);
    }
    if (object.minerValidTime !== undefined && object.minerValidTime !== null) {
      message.minerValidTime = Duration.fromPartial(object.minerValidTime);
    }
    message.adminAccount = object.adminAccount ?? "";
    if (object.orchestratorMinDeposit !== undefined && object.orchestratorMinDeposit !== null) {
      message.orchestratorMinDeposit = Coin.fromPartial(object.orchestratorMinDeposit);
    }
    if (object.minerMinDeposit !== undefined && object.minerMinDeposit !== null) {
      message.minerMinDeposit = Coin.fromPartial(object.minerMinDeposit);
    }
    if (object.orchestratorUnbondingPeriod !== undefined && object.orchestratorUnbondingPeriod !== null) {
      message.orchestratorUnbondingPeriod = Duration.fromPartial(object.orchestratorUnbondingPeriod);
    }
    if (object.minerUnbondingPeriod !== undefined && object.minerUnbondingPeriod !== null) {
      message.minerUnbondingPeriod = Duration.fromPartial(object.minerUnbondingPeriod);
    }
    message.labelAdminAccount = object.labelAdminAccount ?? "";
    message.reputationAdminAccount = object.reputationAdminAccount ?? "";
    message.priceTokenDenoms = object.priceTokenDenoms?.map(e => e) || [];
    if (object.modelDefaultTokenPrice !== undefined && object.modelDefaultTokenPrice !== null) {
      message.modelDefaultTokenPrice = TokenPrice.fromPartial(object.modelDefaultTokenPrice);
    }
    return message;
  }
};