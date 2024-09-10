/* eslint-disable */
import { Timestamp } from "../../google/protobuf/timestamp";
import { BondStatus, bondStatusFromJSON, bondStatusToJSON } from "./deposit";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Reputation } from "./reputation";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "dht.v1";
/** Miner defines a miner of a model. */
export interface Miner {
  nodeId: string;
  startBlock: Long;
  endBlock: Long;
  torchDtype: string;
  quantType: string;
  cacheTokensLeft: Long;
  inferenceRps: number;
  modelName: string;
  validUntil: Timestamp;
  bondStatus: BondStatus;
  deposit: Coin;
  reputations: Reputation[];
}
function createBaseMiner(): Miner {
  return {
    nodeId: "",
    startBlock: Long.UZERO,
    endBlock: Long.UZERO,
    torchDtype: "",
    quantType: "",
    cacheTokensLeft: Long.UZERO,
    inferenceRps: 0,
    modelName: "",
    validUntil: Timestamp.fromPartial({}),
    bondStatus: 0,
    deposit: Coin.fromPartial({}),
    reputations: []
  };
}
export const Miner = {
  typeUrl: "/dht.v1.Miner",
  encode(message: Miner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(message.validUntil, writer.uint32(74).fork()).ldelim();
    }
    if (message.bondStatus !== 0) {
      writer.uint32(80).int32(message.bondStatus);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.reputations) {
      Reputation.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Miner {
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
          message.startBlock = reader.uint64() as Long;
          break;
        case 3:
          message.endBlock = reader.uint64() as Long;
          break;
        case 4:
          message.torchDtype = reader.string();
          break;
        case 5:
          message.quantType = reader.string();
          break;
        case 6:
          message.cacheTokensLeft = reader.uint64() as Long;
          break;
        case 7:
          message.inferenceRps = reader.double();
          break;
        case 8:
          message.modelName = reader.string();
          break;
        case 9:
          message.validUntil = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.bondStatus = reader.int32() as any;
          break;
        case 11:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 12:
          message.reputations.push(Reputation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Miner {
    const obj = createBaseMiner();
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.startBlock)) obj.startBlock = Long.fromValue(object.startBlock);
    if (isSet(object.endBlock)) obj.endBlock = Long.fromValue(object.endBlock);
    if (isSet(object.torchDtype)) obj.torchDtype = String(object.torchDtype);
    if (isSet(object.quantType)) obj.quantType = String(object.quantType);
    if (isSet(object.cacheTokensLeft)) obj.cacheTokensLeft = Long.fromValue(object.cacheTokensLeft);
    if (isSet(object.inferenceRps)) obj.inferenceRps = Number(object.inferenceRps);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.validUntil)) obj.validUntil = fromJsonTimestamp(object.validUntil);
    if (isSet(object.bondStatus)) obj.bondStatus = bondStatusFromJSON(object.bondStatus);
    if (isSet(object.deposit)) obj.deposit = Coin.fromJSON(object.deposit);
    if (Array.isArray(object?.reputations)) obj.reputations = object.reputations.map((e: any) => Reputation.fromJSON(e));
    return obj;
  },
  toJSON(message: Miner): JsonSafe<Miner> {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.startBlock !== undefined && (obj.startBlock = (message.startBlock || Long.UZERO).toString());
    message.endBlock !== undefined && (obj.endBlock = (message.endBlock || Long.UZERO).toString());
    message.torchDtype !== undefined && (obj.torchDtype = message.torchDtype);
    message.quantType !== undefined && (obj.quantType = message.quantType);
    message.cacheTokensLeft !== undefined && (obj.cacheTokensLeft = (message.cacheTokensLeft || Long.UZERO).toString());
    message.inferenceRps !== undefined && (obj.inferenceRps = message.inferenceRps);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.validUntil !== undefined && (obj.validUntil = fromTimestamp(message.validUntil).toISOString());
    message.bondStatus !== undefined && (obj.bondStatus = bondStatusToJSON(message.bondStatus));
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    if (message.reputations) {
      obj.reputations = message.reputations.map(e => e ? Reputation.toJSON(e) : undefined);
    } else {
      obj.reputations = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Miner>, I>>(object: I): Miner {
    const message = createBaseMiner();
    message.nodeId = object.nodeId ?? "";
    if (object.startBlock !== undefined && object.startBlock !== null) {
      message.startBlock = Long.fromValue(object.startBlock);
    }
    if (object.endBlock !== undefined && object.endBlock !== null) {
      message.endBlock = Long.fromValue(object.endBlock);
    }
    message.torchDtype = object.torchDtype ?? "";
    message.quantType = object.quantType ?? "";
    if (object.cacheTokensLeft !== undefined && object.cacheTokensLeft !== null) {
      message.cacheTokensLeft = Long.fromValue(object.cacheTokensLeft);
    }
    message.inferenceRps = object.inferenceRps ?? 0;
    message.modelName = object.modelName ?? "";
    if (object.validUntil !== undefined && object.validUntil !== null) {
      message.validUntil = Timestamp.fromPartial(object.validUntil);
    }
    message.bondStatus = object.bondStatus ?? 0;
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    message.reputations = object.reputations?.map(e => Reputation.fromPartial(e)) || [];
    return message;
  }
};