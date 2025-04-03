import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { TokenPrice } from "./model";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "dht.v1";
/** Params defines the parameters for the module. */
export interface Params {
    orchestratorValidTime: Duration;
    minerValidTime: Duration;
    adminAccount: string;
    orchestratorMinDeposit: Coin;
    minerMinDeposit: Coin;
    orchestratorUnbondingPeriod: Duration;
    minerUnbondingPeriod: Duration;
    labelAdminAccount: string;
    reputationAdminAccount: string;
    priceTokenDenoms: string[];
    modelDefaultTokenPrice?: TokenPrice;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
