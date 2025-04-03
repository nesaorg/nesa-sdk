import { Coin } from "../../base/v1beta1/coin";
import { Input, Output } from "./bank";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
    inputs: Input[];
    outputs: Output[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {
}
export declare const MsgSend: {
    typeUrl: string;
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): JsonSafe<MsgSend>;
    fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend;
};
export declare const MsgSendResponse: {
    typeUrl: string;
    encode(_: MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse;
    fromJSON(_: any): MsgSendResponse;
    toJSON(_: MsgSendResponse): JsonSafe<MsgSendResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(_: I): MsgSendResponse;
};
export declare const MsgMultiSend: {
    typeUrl: string;
    encode(message: MsgMultiSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSend;
    fromJSON(object: any): MsgMultiSend;
    toJSON(message: MsgMultiSend): JsonSafe<MsgMultiSend>;
    fromPartial<I extends Exact<DeepPartial<MsgMultiSend>, I>>(object: I): MsgMultiSend;
};
export declare const MsgMultiSendResponse: {
    typeUrl: string;
    encode(_: MsgMultiSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendResponse;
    fromJSON(_: any): MsgMultiSendResponse;
    toJSON(_: MsgMultiSendResponse): JsonSafe<MsgMultiSendResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgMultiSendResponse>, I>>(_: I): MsgMultiSendResponse;
};
/** Msg defines the bank Msg service. */
export interface Msg {
    /** Send defines a method for sending coins from one account to another account. */
    Send(request: MsgSend): Promise<MsgSendResponse>;
    /** MultiSend defines a method for sending coins from some accounts to other accounts. */
    MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Send(request: MsgSend): Promise<MsgSendResponse>;
    MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
}
