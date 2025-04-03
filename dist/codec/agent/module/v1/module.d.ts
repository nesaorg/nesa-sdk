import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export declare const protobufPackage = "nesaorg.nesachain.agent.module.v1";
export interface Module {
    authority: string;
}
export declare const Module: {
    typeUrl: string;
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): JsonSafe<Module>;
    fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module;
};
