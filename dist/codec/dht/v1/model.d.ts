import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "dht.v1";
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
export declare const TokenPrice: {
    typeUrl: string;
    encode(message: TokenPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenPrice;
    fromJSON(object: any): TokenPrice;
    toJSON(message: TokenPrice): JsonSafe<TokenPrice>;
    fromPartial<I extends Exact<DeepPartial<TokenPrice>, I>>(object: I): TokenPrice;
};
export declare const Model: {
    typeUrl: string;
    encode(message: Model, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Model;
    fromJSON(object: any): Model;
    toJSON(message: Model): JsonSafe<Model>;
    fromPartial<I extends Exact<DeepPartial<Model>, I>>(object: I): Model;
};
