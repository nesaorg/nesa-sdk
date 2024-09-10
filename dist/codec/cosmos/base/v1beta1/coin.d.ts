import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../../json-safe";
export declare const protobufPackage = "cosmos.base.v1beta1";
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface Coin {
    denom: string;
    amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoin {
    denom: string;
    amount: string;
}
export declare const Coin: {
    typeUrl: string;
    encode(message: Coin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coin;
    fromJSON(object: any): Coin;
    toJSON(message: Coin): JsonSafe<Coin>;
    fromPartial<I extends {
        denom?: string | undefined;
        amount?: string | undefined;
    } & {
        denom?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof Coin>, never>>(object: I): Coin;
};
export declare const DecCoin: {
    typeUrl: string;
    encode(message: DecCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecCoin;
    fromJSON(object: any): DecCoin;
    toJSON(message: DecCoin): JsonSafe<DecCoin>;
    fromPartial<I extends {
        denom?: string | undefined;
        amount?: string | undefined;
    } & {
        denom?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof DecCoin>, never>>(object: I): DecCoin;
};
