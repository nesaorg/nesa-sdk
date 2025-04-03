import { Params, InnerValues, InferenceAgent, AgentModel, Session, VrfSeed } from "./agent";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "agent.v1";
export interface GenesisState {
    params: Params;
    innerValues: InnerValues;
    agents: InferenceAgent[];
    agentModels: AgentModel[];
    sessions: Session[];
    vrfSeeds: VrfSeed[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
