import { Long, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "dht.v1";
export interface Reputation {
    name: string;
    score: Long;
}
export declare const Reputation: {
    typeUrl: string;
    encode(message: Reputation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reputation;
    fromJSON(object: any): Reputation;
    toJSON(message: Reputation): JsonSafe<Reputation>;
    fromPartial<I extends Exact<DeepPartial<Reputation>, I>>(object: I): Reputation;
};
