import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../../json-safe";
export declare const protobufPackage = "nesaorg.nesachain.dht.module.v1";
/** Module is the config object for the module. */
export interface Module {
    /**
     * authority defines the custom module authority. If not set, defaults to the
     * governance module.
     */
    authority: string;
}
export declare const Module: {
    typeUrl: string;
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): JsonSafe<Module>;
    fromPartial<I extends {
        authority?: string | undefined;
    } & {
        authority?: string | undefined;
    } & Record<Exclude<keyof I, "authority">, never>>(object: I): Module;
};
