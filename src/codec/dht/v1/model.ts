/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "dht.v1";
export interface TokenPrice {
  inputPrice: Coin;
  outputPrice: Coin;
}
export interface Model {
  creator: string;
  modelName: string;
  blockCids: string[];
  tokenPrice: TokenPrice;
}
function createBaseTokenPrice(): TokenPrice {
  return {
    inputPrice: Coin.fromPartial({}),
    outputPrice: Coin.fromPartial({})
  };
}
export const TokenPrice = {
  typeUrl: "/dht.v1.TokenPrice",
  encode(message: TokenPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputPrice !== undefined) {
      Coin.encode(message.inputPrice, writer.uint32(10).fork()).ldelim();
    }
    if (message.outputPrice !== undefined) {
      Coin.encode(message.outputPrice, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputPrice = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.outputPrice = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenPrice {
    const obj = createBaseTokenPrice();
    if (isSet(object.inputPrice)) obj.inputPrice = Coin.fromJSON(object.inputPrice);
    if (isSet(object.outputPrice)) obj.outputPrice = Coin.fromJSON(object.outputPrice);
    return obj;
  },
  toJSON(message: TokenPrice): JsonSafe<TokenPrice> {
    const obj: any = {};
    message.inputPrice !== undefined && (obj.inputPrice = message.inputPrice ? Coin.toJSON(message.inputPrice) : undefined);
    message.outputPrice !== undefined && (obj.outputPrice = message.outputPrice ? Coin.toJSON(message.outputPrice) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TokenPrice>, I>>(object: I): TokenPrice {
    const message = createBaseTokenPrice();
    if (object.inputPrice !== undefined && object.inputPrice !== null) {
      message.inputPrice = Coin.fromPartial(object.inputPrice);
    }
    if (object.outputPrice !== undefined && object.outputPrice !== null) {
      message.outputPrice = Coin.fromPartial(object.outputPrice);
    }
    return message;
  }
};
function createBaseModel(): Model {
  return {
    creator: "",
    modelName: "",
    blockCids: [],
    tokenPrice: TokenPrice.fromPartial({})
  };
}
export const Model = {
  typeUrl: "/dht.v1.Model",
  encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.modelName !== "") {
      writer.uint32(18).string(message.modelName);
    }
    for (const v of message.blockCids) {
      writer.uint32(26).string(v!);
    }
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Model {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.modelName = reader.string();
          break;
        case 3:
          message.blockCids.push(reader.string());
          break;
        case 4:
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Model {
    const obj = createBaseModel();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (Array.isArray(object?.blockCids)) obj.blockCids = object.blockCids.map((e: any) => String(e));
    if (isSet(object.tokenPrice)) obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
    return obj;
  },
  toJSON(message: Model): JsonSafe<Model> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    if (message.blockCids) {
      obj.blockCids = message.blockCids.map(e => e);
    } else {
      obj.blockCids = [];
    }
    message.tokenPrice !== undefined && (obj.tokenPrice = message.tokenPrice ? TokenPrice.toJSON(message.tokenPrice) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Model>, I>>(object: I): Model {
    const message = createBaseModel();
    message.creator = object.creator ?? "";
    message.modelName = object.modelName ?? "";
    message.blockCids = object.blockCids?.map(e => e) || [];
    if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
      message.tokenPrice = TokenPrice.fromPartial(object.tokenPrice);
    }
    return message;
  }
};