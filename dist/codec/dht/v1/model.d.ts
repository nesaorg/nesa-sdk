import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
    fromPartial<I extends {
        inputPrice?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        outputPrice?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        inputPrice?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["inputPrice"], keyof Coin>, never>) | undefined;
        outputPrice?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["outputPrice"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TokenPrice>, never>>(object: I): TokenPrice;
};
export declare const Model: {
    typeUrl: string;
    encode(message: Model, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Model;
    fromJSON(object: any): Model;
    toJSON(message: Model): JsonSafe<Model>;
    fromPartial<I extends {
        creator?: string | undefined;
        modelName?: string | undefined;
        blockCids?: string[] | undefined;
        tokenPrice?: {
            inputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            outputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        creator?: string | undefined;
        modelName?: string | undefined;
        blockCids?: (string[] & string[] & Record<Exclude<keyof I["blockCids"], keyof string[]>, never>) | undefined;
        tokenPrice?: ({
            inputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            outputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            inputPrice?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["tokenPrice"]["inputPrice"], keyof Coin>, never>) | undefined;
            outputPrice?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["tokenPrice"]["outputPrice"], keyof Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["tokenPrice"], keyof TokenPrice>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Model>, never>>(object: I): Model;
};
