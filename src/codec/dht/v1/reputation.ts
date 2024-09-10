/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "dht.v1";
export interface Reputation {
  name: string;
  score: Long;
}
function createBaseReputation(): Reputation {
  return {
    name: "",
    score: Long.ZERO
  };
}
export const Reputation = {
  typeUrl: "/dht.v1.Reputation",
  encode(message: Reputation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.score.isZero()) {
      writer.uint32(16).int64(message.score);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Reputation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.score = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Reputation {
    const obj = createBaseReputation();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.score)) obj.score = Long.fromValue(object.score);
    return obj;
  },
  toJSON(message: Reputation): JsonSafe<Reputation> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.score !== undefined && (obj.score = (message.score || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Reputation>, I>>(object: I): Reputation {
    const message = createBaseReputation();
    message.name = object.name ?? "";
    if (object.score !== undefined && object.score !== null) {
      message.score = Long.fromValue(object.score);
    }
    return message;
  }
};