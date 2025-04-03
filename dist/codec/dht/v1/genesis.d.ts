import { Params } from "./params";
import { Model } from "./model";
import { Node } from "./node";
import { Miner } from "./miner";
import { Orchestrator } from "./orchestrator";
import { ModelBlock } from "./model_block";
import { UnbondingEntry } from "./deposit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "dht.v1";
/** OrchestratorMiner defines an association between an orchestrator and a miner. */
export interface OrchestratorMiner {
    orchestratorId: string;
    minerId: string;
}
/** GenesisState defines the dht module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    model: Model[];
    node: Node[];
    miner: Miner[];
    orchestrator: Orchestrator[];
    orchestratorMiner: OrchestratorMiner[];
    modelBlock: ModelBlock[];
    minerUnbonding: UnbondingEntry[];
    orchestratorUnbonding: UnbondingEntry[];
    modelCreators: string[];
    modelAllowList: string[];
}
export declare const OrchestratorMiner: {
    typeUrl: string;
    encode(message: OrchestratorMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrchestratorMiner;
    fromJSON(object: any): OrchestratorMiner;
    toJSON(message: OrchestratorMiner): JsonSafe<OrchestratorMiner>;
    fromPartial<I extends Exact<DeepPartial<OrchestratorMiner>, I>>(object: I): OrchestratorMiner;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
