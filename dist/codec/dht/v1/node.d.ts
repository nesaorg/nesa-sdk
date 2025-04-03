import { Long, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "dht.v1";
export interface Node {
    nodeId: string;
    publicName: string;
    version: string;
    networkAddress: string;
    walletAddress: string;
    vram: Long;
    networkRps: number;
    nextPings: Uint8Array[];
    usingRelay: boolean;
    labels: string[];
}
export declare const Node: {
    typeUrl: string;
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): JsonSafe<Node>;
    fromPartial<I extends Exact<DeepPartial<Node>, I>>(object: I): Node;
};
