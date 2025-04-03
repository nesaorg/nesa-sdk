import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact } from "../../../helpers";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 */
export interface SendAuthorization {
    spendLimit: Coin[];
}
export declare const SendAuthorization: {
    typeUrl: string;
    encode(message: SendAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendAuthorization;
    fromJSON(object: any): SendAuthorization;
    toJSON(message: SendAuthorization): JsonSafe<SendAuthorization>;
    fromPartial<I extends Exact<DeepPartial<SendAuthorization>, I>>(object: I): SendAuthorization;
};
