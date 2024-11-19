import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "dht.v1";
export interface ModelBlock {
    modelName: string;
    nodeId: string;
    blockId: number;
    cid: string;
}
export declare const ModelBlock: {
    typeUrl: string;
    encode(message: ModelBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModelBlock;
    fromJSON(object: any): ModelBlock;
    toJSON(message: ModelBlock): JsonSafe<ModelBlock>;
    fromPartial<I extends {
        modelName?: string | undefined;
        nodeId?: string | undefined;
        blockId?: number | undefined;
        cid?: string | undefined;
    } & {
        modelName?: string | undefined;
        nodeId?: string | undefined;
        blockId?: number | undefined;
        cid?: string | undefined;
    } & Record<Exclude<keyof I, keyof ModelBlock>, never>>(object: I): ModelBlock;
};
