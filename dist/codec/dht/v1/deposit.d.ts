import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "dht.v1";
/** BondStatus defines the deposit status of a miner or Orchestrator. */
export declare enum BondStatus {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BOND_STATUS_UNSPECIFIED = 0,
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BOND_STATUS_UNBONDED = 1,
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BOND_STATUS_UNBONDING = 2,
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BOND_STATUS_BONDED = 3,
    UNRECOGNIZED = -1
}
export declare function bondStatusFromJSON(object: any): BondStatus;
export declare function bondStatusToJSON(object: BondStatus): string;
/** UnbondingEntry defines an unbonding entry of a miner or Orchestrator. */
export interface UnbondingEntry {
    nodeId: string;
    amount: Coin;
    completionTime: Timestamp;
    receiver: string;
}
export declare const UnbondingEntry: {
    typeUrl: string;
    encode(message: UnbondingEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingEntry;
    fromJSON(object: any): UnbondingEntry;
    toJSON(message: UnbondingEntry): JsonSafe<UnbondingEntry>;
    fromPartial<I extends Exact<DeepPartial<UnbondingEntry>, I>>(object: I): UnbondingEntry;
};
