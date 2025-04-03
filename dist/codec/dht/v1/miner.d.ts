import { Timestamp } from "../../google/protobuf/timestamp";
import { BondStatus } from "./deposit";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Reputation } from "./reputation";
import { Long, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "dht.v1";
/** Miner defines a miner of a model. */
export interface Miner {
    nodeId: string;
    startBlock: Long;
    endBlock: Long;
    torchDtype: string;
    quantType: string;
    cacheTokensLeft: Long;
    inferenceRps: number;
    modelName: string;
    validUntil: Timestamp;
    bondStatus: BondStatus;
    deposit: Coin;
    reputations: Reputation[];
}
export declare const Miner: {
    typeUrl: string;
    encode(message: Miner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Miner;
    fromJSON(object: any): Miner;
    toJSON(message: Miner): JsonSafe<Miner>;
    fromPartial<I extends Exact<DeepPartial<Miner>, I>>(object: I): Miner;
};
