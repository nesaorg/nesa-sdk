/// <reference types="long" />
import { Params } from "./params";
import { TokenPrice } from "./model";
import { Availability, InferenceType } from "./orchestrator";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Reputation } from "./reputation";
import { Long, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "dht.v1";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgRegisterModel {
    creator: string;
    modelName: string;
    blockCids: string[];
    allowList: string[];
    tokenPrice?: TokenPrice;
}
export interface MsgRegisterModelResponse {
}
export interface MsgRegisterNode {
    creator: string;
    nodeId: string;
    publicName: string;
    version: string;
    networkAddress: string;
    walletAddress: string;
    vram: Long;
    networkRps: number;
    usingRelay: boolean;
    nextPings: Uint8Array[];
}
export interface MsgRegisterNodeResponse {
}
export interface MsgDeleteNode {
    creator: string;
    nodeId: string;
}
export interface MsgDeleteNodeResponse {
}
export interface MsgRegisterMiner {
    creator: string;
    nodeId: string;
    startBlock: Long;
    endBlock: Long;
    blockIds: number[];
    torchDtype: string;
    quantType: string;
    cacheTokensLeft: Long;
    inferenceRps: number;
    modelName: string;
}
export interface MsgRegisterMinerResponse {
}
export interface MsgDeleteMiner {
    creator: string;
    nodeId: string;
}
export interface MsgDeleteMinerResponse {
}
export interface MsgRegisterOrchestrator {
    creator: string;
    nodeId: string;
    status: Availability;
    blockCount: Long[];
    minerIds: string[];
    inferenceType: InferenceType;
    modelName: string;
}
export interface MsgRegisterOrchestratorResponse {
}
export interface MsgDeleteOrchestrator {
    creator: string;
    nodeId: string;
}
export interface MsgDeleteOrchestratorResponse {
}
export interface MsgOrchestratorHeartbeat {
    creator: string;
    nodeId: string;
}
export interface MsgOrchestratorHeartbeatResponse {
}
export interface MsgMinerHeartbeat {
    creator: string;
    nodeId: string;
}
export interface MsgMinerHeartbeatResponse {
}
/** AddMinerDeposit defines a request for depositing tokens to the miner. */
export interface MsgAddMinerDeposit {
    depositor: string;
    nodeId: string;
    amount: Coin;
}
/** MsgAddMinerDepositResponse defines the response for rpc AddMinerDeposit */
export interface MsgAddMinerDepositResponse {
}
/** WithdrawMiner defines a request for withdrawing tokens from the miner. */
export interface MsgWithdrawMiner {
    depositor: string;
    nodeId: string;
    amount: Coin;
    receiver: string;
}
/** MsgWithdrawMinerResponse defines the response for rpc WithdrawMiner */
export interface MsgWithdrawMinerResponse {
}
/** AddOrchestratorDeposit defines a request for depositing tokens to the orchestrator. */
export interface MsgAddOrchestratorDeposit {
    depositor: string;
    nodeId: string;
    amount: Coin;
}
/** MsgAddOrchestratorDepositResponse defines the response for rpc AddOrchestratorDeposit */
export interface MsgAddOrchestratorDepositResponse {
}
/** WithdrawOrchestrator defines a request for withdrawing tokens from the orchestrator. */
export interface MsgWithdrawOrchestrator {
    depositor: string;
    nodeId: string;
    amount: Coin;
    receiver: string;
}
/** MsgWithdrawOrchestratorResponse defines the response for rpc WithdrawOrchestrator */
export interface MsgWithdrawOrchestratorResponse {
}
/** MsgUpdateMinerLabel defines a method for updating the miner label. */
export interface MsgUpdateNodeLabel {
    creator: string;
    nodeId: string;
    /** NOTE: All labels need to be provided */
    labels: string[];
}
/** MsgUpdateMinerLabelResponse defines the MsgUpdateMinerLabel response type. */
export interface MsgUpdateNodeLabelResponse {
}
/** MsgUpdateModel defines a request for updating allow_list from model. */
export interface MsgUpdateModel {
    account: string;
    modelName: string;
    /** NOTE: All allow list need to be provided */
    allowList: string[];
    /** NOTE: All token prices need to be provided */
    tokenPrice: TokenPrice;
}
/** MsgUpdateModelResponse defines the MsgUpdateModel response type */
export interface MsgUpdateModelResponse {
}
/** MsgUpdateModelCreatorAllowList defines a request for updating model_creators. */
export interface MsgUpdateModelCreatorAllowList {
    account: string;
    modelCreators: string[];
}
/** MsgModelCreatorAllowListResponse defines the MsgUpdateModelCreatorAllowList response type */
export interface MsgModelCreatorAllowListResponse {
}
/** MsgUpdateMinerReputation defines a request for updating miner reputation. */
export interface MsgUpdateMinerReputation {
    creator: string;
    nodeId: string;
    /** NOTE: All reputations need to be provided */
    reputations: Reputation[];
}
/** MsgUpdateMinerReputationResponse defines the MsgUpdateMinerReputation response type. */
export interface MsgUpdateMinerReputationResponse {
}
/** MsgUpdateOrchestratorReputation defines a request for updating orchestrator reputation. */
export interface MsgUpdateOrchestratorReputation {
    creator: string;
    nodeId: string;
    /** NOTE: All reputations need to be provided */
    reputations: Reputation[];
}
/** MsgUpdateOrchestratorReputationResponse defines the MsgUpdateOrchestratorReputation response type. */
export interface MsgUpdateOrchestratorReputationResponse {
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams>;
    fromPartial<I extends {
        authority?: string | undefined;
        params?: {
            orchestratorValidTime?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            minerValidTime?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            adminAccount?: string | undefined;
            orchestratorMinDeposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            minerMinDeposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            orchestratorUnbondingPeriod?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            minerUnbondingPeriod?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            labelAdminAccount?: string | undefined;
            reputationAdminAccount?: string | undefined;
            priceTokenDenoms?: string[] | undefined;
            modelDefaultTokenPrice?: {
                inputPrice?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                outputPrice?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        params?: ({
            orchestratorValidTime?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            minerValidTime?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            adminAccount?: string | undefined;
            orchestratorMinDeposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            minerMinDeposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            orchestratorUnbondingPeriod?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            minerUnbondingPeriod?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            labelAdminAccount?: string | undefined;
            reputationAdminAccount?: string | undefined;
            priceTokenDenoms?: string[] | undefined;
            modelDefaultTokenPrice?: {
                inputPrice?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                outputPrice?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            orchestratorValidTime?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["params"]["orchestratorValidTime"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["orchestratorValidTime"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            minerValidTime?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["params"]["minerValidTime"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["minerValidTime"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            adminAccount?: string | undefined;
            orchestratorMinDeposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["params"]["orchestratorMinDeposit"], keyof Coin>, never>) | undefined;
            minerMinDeposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["params"]["minerMinDeposit"], keyof Coin>, never>) | undefined;
            orchestratorUnbondingPeriod?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["params"]["orchestratorUnbondingPeriod"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["orchestratorUnbondingPeriod"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            minerUnbondingPeriod?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["params"]["minerUnbondingPeriod"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["minerUnbondingPeriod"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            labelAdminAccount?: string | undefined;
            reputationAdminAccount?: string | undefined;
            priceTokenDenoms?: (string[] & string[] & Record<Exclude<keyof I["params"]["priceTokenDenoms"], keyof string[]>, never>) | undefined;
            modelDefaultTokenPrice?: ({
                inputPrice?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                outputPrice?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } & {
                inputPrice?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["params"]["modelDefaultTokenPrice"]["inputPrice"], keyof Coin>, never>) | undefined;
                outputPrice?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["params"]["modelDefaultTokenPrice"]["outputPrice"], keyof Coin>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["modelDefaultTokenPrice"], keyof TokenPrice>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateParams>, never>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateParamsResponse;
};
export declare const MsgRegisterModel: {
    typeUrl: string;
    encode(message: MsgRegisterModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterModel;
    fromJSON(object: any): MsgRegisterModel;
    toJSON(message: MsgRegisterModel): JsonSafe<MsgRegisterModel>;
    fromPartial<I extends {
        creator?: string | undefined;
        modelName?: string | undefined;
        blockCids?: string[] | undefined;
        allowList?: string[] | undefined;
        tokenPrice?: {
            inputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            outputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        creator?: string | undefined;
        modelName?: string | undefined;
        blockCids?: (string[] & string[] & Record<Exclude<keyof I["blockCids"], keyof string[]>, never>) | undefined;
        allowList?: (string[] & string[] & Record<Exclude<keyof I["allowList"], keyof string[]>, never>) | undefined;
        tokenPrice?: ({
            inputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            outputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            inputPrice?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["tokenPrice"]["inputPrice"], keyof Coin>, never>) | undefined;
            outputPrice?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["tokenPrice"]["outputPrice"], keyof Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["tokenPrice"], keyof TokenPrice>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgRegisterModel>, never>>(object: I): MsgRegisterModel;
};
export declare const MsgRegisterModelResponse: {
    typeUrl: string;
    encode(_: MsgRegisterModelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterModelResponse;
    fromJSON(_: any): MsgRegisterModelResponse;
    toJSON(_: MsgRegisterModelResponse): JsonSafe<MsgRegisterModelResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRegisterModelResponse;
};
export declare const MsgRegisterNode: {
    typeUrl: string;
    encode(message: MsgRegisterNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNode;
    fromJSON(object: any): MsgRegisterNode;
    toJSON(message: MsgRegisterNode): JsonSafe<MsgRegisterNode>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
        publicName?: string | undefined;
        version?: string | undefined;
        networkAddress?: string | undefined;
        walletAddress?: string | undefined;
        vram?: string | number | Long.Long | undefined;
        networkRps?: number | undefined;
        usingRelay?: boolean | undefined;
        nextPings?: Uint8Array[] | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
        publicName?: string | undefined;
        version?: string | undefined;
        networkAddress?: string | undefined;
        walletAddress?: string | undefined;
        vram?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["vram"], keyof Long.Long>, never>) | undefined;
        networkRps?: number | undefined;
        usingRelay?: boolean | undefined;
        nextPings?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["nextPings"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgRegisterNode>, never>>(object: I): MsgRegisterNode;
};
export declare const MsgRegisterNodeResponse: {
    typeUrl: string;
    encode(_: MsgRegisterNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNodeResponse;
    fromJSON(_: any): MsgRegisterNodeResponse;
    toJSON(_: MsgRegisterNodeResponse): JsonSafe<MsgRegisterNodeResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRegisterNodeResponse;
};
export declare const MsgDeleteNode: {
    typeUrl: string;
    encode(message: MsgDeleteNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNode;
    fromJSON(object: any): MsgDeleteNode;
    toJSON(message: MsgDeleteNode): JsonSafe<MsgDeleteNode>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgDeleteNode>, never>>(object: I): MsgDeleteNode;
};
export declare const MsgDeleteNodeResponse: {
    typeUrl: string;
    encode(_: MsgDeleteNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNodeResponse;
    fromJSON(_: any): MsgDeleteNodeResponse;
    toJSON(_: MsgDeleteNodeResponse): JsonSafe<MsgDeleteNodeResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDeleteNodeResponse;
};
export declare const MsgRegisterMiner: {
    typeUrl: string;
    encode(message: MsgRegisterMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterMiner;
    fromJSON(object: any): MsgRegisterMiner;
    toJSON(message: MsgRegisterMiner): JsonSafe<MsgRegisterMiner>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
        startBlock?: string | number | Long.Long | undefined;
        endBlock?: string | number | Long.Long | undefined;
        blockIds?: number[] | undefined;
        torchDtype?: string | undefined;
        quantType?: string | undefined;
        cacheTokensLeft?: string | number | Long.Long | undefined;
        inferenceRps?: number | undefined;
        modelName?: string | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
        startBlock?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["startBlock"], keyof Long.Long>, never>) | undefined;
        endBlock?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["endBlock"], keyof Long.Long>, never>) | undefined;
        blockIds?: (number[] & number[] & Record<Exclude<keyof I["blockIds"], keyof number[]>, never>) | undefined;
        torchDtype?: string | undefined;
        quantType?: string | undefined;
        cacheTokensLeft?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["cacheTokensLeft"], keyof Long.Long>, never>) | undefined;
        inferenceRps?: number | undefined;
        modelName?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgRegisterMiner>, never>>(object: I): MsgRegisterMiner;
};
export declare const MsgRegisterMinerResponse: {
    typeUrl: string;
    encode(_: MsgRegisterMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterMinerResponse;
    fromJSON(_: any): MsgRegisterMinerResponse;
    toJSON(_: MsgRegisterMinerResponse): JsonSafe<MsgRegisterMinerResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRegisterMinerResponse;
};
export declare const MsgDeleteMiner: {
    typeUrl: string;
    encode(message: MsgDeleteMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMiner;
    fromJSON(object: any): MsgDeleteMiner;
    toJSON(message: MsgDeleteMiner): JsonSafe<MsgDeleteMiner>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgDeleteMiner>, never>>(object: I): MsgDeleteMiner;
};
export declare const MsgDeleteMinerResponse: {
    typeUrl: string;
    encode(_: MsgDeleteMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMinerResponse;
    fromJSON(_: any): MsgDeleteMinerResponse;
    toJSON(_: MsgDeleteMinerResponse): JsonSafe<MsgDeleteMinerResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDeleteMinerResponse;
};
export declare const MsgRegisterOrchestrator: {
    typeUrl: string;
    encode(message: MsgRegisterOrchestrator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterOrchestrator;
    fromJSON(object: any): MsgRegisterOrchestrator;
    toJSON(message: MsgRegisterOrchestrator): JsonSafe<MsgRegisterOrchestrator>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
        status?: Availability | undefined;
        blockCount?: (string | number | Long.Long)[] | undefined;
        minerIds?: string[] | undefined;
        inferenceType?: InferenceType | undefined;
        modelName?: string | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
        status?: Availability | undefined;
        blockCount?: ((string | number | Long.Long)[] & (string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["blockCount"][number], keyof Long.Long>, never>))[] & Record<Exclude<keyof I["blockCount"], keyof (string | number | Long.Long)[]>, never>) | undefined;
        minerIds?: (string[] & string[] & Record<Exclude<keyof I["minerIds"], keyof string[]>, never>) | undefined;
        inferenceType?: InferenceType | undefined;
        modelName?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgRegisterOrchestrator>, never>>(object: I): MsgRegisterOrchestrator;
};
export declare const MsgRegisterOrchestratorResponse: {
    typeUrl: string;
    encode(_: MsgRegisterOrchestratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterOrchestratorResponse;
    fromJSON(_: any): MsgRegisterOrchestratorResponse;
    toJSON(_: MsgRegisterOrchestratorResponse): JsonSafe<MsgRegisterOrchestratorResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRegisterOrchestratorResponse;
};
export declare const MsgDeleteOrchestrator: {
    typeUrl: string;
    encode(message: MsgDeleteOrchestrator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOrchestrator;
    fromJSON(object: any): MsgDeleteOrchestrator;
    toJSON(message: MsgDeleteOrchestrator): JsonSafe<MsgDeleteOrchestrator>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgDeleteOrchestrator>, never>>(object: I): MsgDeleteOrchestrator;
};
export declare const MsgDeleteOrchestratorResponse: {
    typeUrl: string;
    encode(_: MsgDeleteOrchestratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOrchestratorResponse;
    fromJSON(_: any): MsgDeleteOrchestratorResponse;
    toJSON(_: MsgDeleteOrchestratorResponse): JsonSafe<MsgDeleteOrchestratorResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDeleteOrchestratorResponse;
};
export declare const MsgOrchestratorHeartbeat: {
    typeUrl: string;
    encode(message: MsgOrchestratorHeartbeat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrchestratorHeartbeat;
    fromJSON(object: any): MsgOrchestratorHeartbeat;
    toJSON(message: MsgOrchestratorHeartbeat): JsonSafe<MsgOrchestratorHeartbeat>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgOrchestratorHeartbeat>, never>>(object: I): MsgOrchestratorHeartbeat;
};
export declare const MsgOrchestratorHeartbeatResponse: {
    typeUrl: string;
    encode(_: MsgOrchestratorHeartbeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOrchestratorHeartbeatResponse;
    fromJSON(_: any): MsgOrchestratorHeartbeatResponse;
    toJSON(_: MsgOrchestratorHeartbeatResponse): JsonSafe<MsgOrchestratorHeartbeatResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgOrchestratorHeartbeatResponse;
};
export declare const MsgMinerHeartbeat: {
    typeUrl: string;
    encode(message: MsgMinerHeartbeat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMinerHeartbeat;
    fromJSON(object: any): MsgMinerHeartbeat;
    toJSON(message: MsgMinerHeartbeat): JsonSafe<MsgMinerHeartbeat>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgMinerHeartbeat>, never>>(object: I): MsgMinerHeartbeat;
};
export declare const MsgMinerHeartbeatResponse: {
    typeUrl: string;
    encode(_: MsgMinerHeartbeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMinerHeartbeatResponse;
    fromJSON(_: any): MsgMinerHeartbeatResponse;
    toJSON(_: MsgMinerHeartbeatResponse): JsonSafe<MsgMinerHeartbeatResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgMinerHeartbeatResponse;
};
export declare const MsgAddMinerDeposit: {
    typeUrl: string;
    encode(message: MsgAddMinerDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMinerDeposit;
    fromJSON(object: any): MsgAddMinerDeposit;
    toJSON(message: MsgAddMinerDeposit): JsonSafe<MsgAddMinerDeposit>;
    fromPartial<I extends {
        depositor?: string | undefined;
        nodeId?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        depositor?: string | undefined;
        nodeId?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgAddMinerDeposit>, never>>(object: I): MsgAddMinerDeposit;
};
export declare const MsgAddMinerDepositResponse: {
    typeUrl: string;
    encode(_: MsgAddMinerDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMinerDepositResponse;
    fromJSON(_: any): MsgAddMinerDepositResponse;
    toJSON(_: MsgAddMinerDepositResponse): JsonSafe<MsgAddMinerDepositResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgAddMinerDepositResponse;
};
export declare const MsgWithdrawMiner: {
    typeUrl: string;
    encode(message: MsgWithdrawMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawMiner;
    fromJSON(object: any): MsgWithdrawMiner;
    toJSON(message: MsgWithdrawMiner): JsonSafe<MsgWithdrawMiner>;
    fromPartial<I extends {
        depositor?: string | undefined;
        nodeId?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        receiver?: string | undefined;
    } & {
        depositor?: string | undefined;
        nodeId?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
        receiver?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgWithdrawMiner>, never>>(object: I): MsgWithdrawMiner;
};
export declare const MsgWithdrawMinerResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawMinerResponse;
    fromJSON(_: any): MsgWithdrawMinerResponse;
    toJSON(_: MsgWithdrawMinerResponse): JsonSafe<MsgWithdrawMinerResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgWithdrawMinerResponse;
};
export declare const MsgAddOrchestratorDeposit: {
    typeUrl: string;
    encode(message: MsgAddOrchestratorDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddOrchestratorDeposit;
    fromJSON(object: any): MsgAddOrchestratorDeposit;
    toJSON(message: MsgAddOrchestratorDeposit): JsonSafe<MsgAddOrchestratorDeposit>;
    fromPartial<I extends {
        depositor?: string | undefined;
        nodeId?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        depositor?: string | undefined;
        nodeId?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgAddOrchestratorDeposit>, never>>(object: I): MsgAddOrchestratorDeposit;
};
export declare const MsgAddOrchestratorDepositResponse: {
    typeUrl: string;
    encode(_: MsgAddOrchestratorDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddOrchestratorDepositResponse;
    fromJSON(_: any): MsgAddOrchestratorDepositResponse;
    toJSON(_: MsgAddOrchestratorDepositResponse): JsonSafe<MsgAddOrchestratorDepositResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgAddOrchestratorDepositResponse;
};
export declare const MsgWithdrawOrchestrator: {
    typeUrl: string;
    encode(message: MsgWithdrawOrchestrator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawOrchestrator;
    fromJSON(object: any): MsgWithdrawOrchestrator;
    toJSON(message: MsgWithdrawOrchestrator): JsonSafe<MsgWithdrawOrchestrator>;
    fromPartial<I extends {
        depositor?: string | undefined;
        nodeId?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        receiver?: string | undefined;
    } & {
        depositor?: string | undefined;
        nodeId?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
        receiver?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgWithdrawOrchestrator>, never>>(object: I): MsgWithdrawOrchestrator;
};
export declare const MsgWithdrawOrchestratorResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawOrchestratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawOrchestratorResponse;
    fromJSON(_: any): MsgWithdrawOrchestratorResponse;
    toJSON(_: MsgWithdrawOrchestratorResponse): JsonSafe<MsgWithdrawOrchestratorResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgWithdrawOrchestratorResponse;
};
export declare const MsgUpdateNodeLabel: {
    typeUrl: string;
    encode(message: MsgUpdateNodeLabel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNodeLabel;
    fromJSON(object: any): MsgUpdateNodeLabel;
    toJSON(message: MsgUpdateNodeLabel): JsonSafe<MsgUpdateNodeLabel>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
        labels?: string[] | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
        labels?: (string[] & string[] & Record<Exclude<keyof I["labels"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateNodeLabel>, never>>(object: I): MsgUpdateNodeLabel;
};
export declare const MsgUpdateNodeLabelResponse: {
    typeUrl: string;
    encode(_: MsgUpdateNodeLabelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNodeLabelResponse;
    fromJSON(_: any): MsgUpdateNodeLabelResponse;
    toJSON(_: MsgUpdateNodeLabelResponse): JsonSafe<MsgUpdateNodeLabelResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateNodeLabelResponse;
};
export declare const MsgUpdateModel: {
    typeUrl: string;
    encode(message: MsgUpdateModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModel;
    fromJSON(object: any): MsgUpdateModel;
    toJSON(message: MsgUpdateModel): JsonSafe<MsgUpdateModel>;
    fromPartial<I extends {
        account?: string | undefined;
        modelName?: string | undefined;
        allowList?: string[] | undefined;
        tokenPrice?: {
            inputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            outputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        account?: string | undefined;
        modelName?: string | undefined;
        allowList?: (string[] & string[] & Record<Exclude<keyof I["allowList"], keyof string[]>, never>) | undefined;
        tokenPrice?: ({
            inputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            outputPrice?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            inputPrice?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["tokenPrice"]["inputPrice"], keyof Coin>, never>) | undefined;
            outputPrice?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["tokenPrice"]["outputPrice"], keyof Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["tokenPrice"], keyof TokenPrice>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateModel>, never>>(object: I): MsgUpdateModel;
};
export declare const MsgUpdateModelResponse: {
    typeUrl: string;
    encode(_: MsgUpdateModelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModelResponse;
    fromJSON(_: any): MsgUpdateModelResponse;
    toJSON(_: MsgUpdateModelResponse): JsonSafe<MsgUpdateModelResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateModelResponse;
};
export declare const MsgUpdateModelCreatorAllowList: {
    typeUrl: string;
    encode(message: MsgUpdateModelCreatorAllowList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModelCreatorAllowList;
    fromJSON(object: any): MsgUpdateModelCreatorAllowList;
    toJSON(message: MsgUpdateModelCreatorAllowList): JsonSafe<MsgUpdateModelCreatorAllowList>;
    fromPartial<I extends {
        account?: string | undefined;
        modelCreators?: string[] | undefined;
    } & {
        account?: string | undefined;
        modelCreators?: (string[] & string[] & Record<Exclude<keyof I["modelCreators"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateModelCreatorAllowList>, never>>(object: I): MsgUpdateModelCreatorAllowList;
};
export declare const MsgModelCreatorAllowListResponse: {
    typeUrl: string;
    encode(_: MsgModelCreatorAllowListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModelCreatorAllowListResponse;
    fromJSON(_: any): MsgModelCreatorAllowListResponse;
    toJSON(_: MsgModelCreatorAllowListResponse): JsonSafe<MsgModelCreatorAllowListResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgModelCreatorAllowListResponse;
};
export declare const MsgUpdateMinerReputation: {
    typeUrl: string;
    encode(message: MsgUpdateMinerReputation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMinerReputation;
    fromJSON(object: any): MsgUpdateMinerReputation;
    toJSON(message: MsgUpdateMinerReputation): JsonSafe<MsgUpdateMinerReputation>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
        reputations?: {
            name?: string | undefined;
            score?: string | number | Long.Long | undefined;
        }[] | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
        reputations?: ({
            name?: string | undefined;
            score?: string | number | Long.Long | undefined;
        }[] & ({
            name?: string | undefined;
            score?: string | number | Long.Long | undefined;
        } & {
            name?: string | undefined;
            score?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["reputations"][number]["score"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["reputations"][number], keyof Reputation>, never>)[] & Record<Exclude<keyof I["reputations"], keyof {
            name?: string | undefined;
            score?: string | number | Long.Long | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateMinerReputation>, never>>(object: I): MsgUpdateMinerReputation;
};
export declare const MsgUpdateMinerReputationResponse: {
    typeUrl: string;
    encode(_: MsgUpdateMinerReputationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMinerReputationResponse;
    fromJSON(_: any): MsgUpdateMinerReputationResponse;
    toJSON(_: MsgUpdateMinerReputationResponse): JsonSafe<MsgUpdateMinerReputationResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateMinerReputationResponse;
};
export declare const MsgUpdateOrchestratorReputation: {
    typeUrl: string;
    encode(message: MsgUpdateOrchestratorReputation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOrchestratorReputation;
    fromJSON(object: any): MsgUpdateOrchestratorReputation;
    toJSON(message: MsgUpdateOrchestratorReputation): JsonSafe<MsgUpdateOrchestratorReputation>;
    fromPartial<I extends {
        creator?: string | undefined;
        nodeId?: string | undefined;
        reputations?: {
            name?: string | undefined;
            score?: string | number | Long.Long | undefined;
        }[] | undefined;
    } & {
        creator?: string | undefined;
        nodeId?: string | undefined;
        reputations?: ({
            name?: string | undefined;
            score?: string | number | Long.Long | undefined;
        }[] & ({
            name?: string | undefined;
            score?: string | number | Long.Long | undefined;
        } & {
            name?: string | undefined;
            score?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["reputations"][number]["score"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["reputations"][number], keyof Reputation>, never>)[] & Record<Exclude<keyof I["reputations"], keyof {
            name?: string | undefined;
            score?: string | number | Long.Long | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateOrchestratorReputation>, never>>(object: I): MsgUpdateOrchestratorReputation;
};
export declare const MsgUpdateOrchestratorReputationResponse: {
    typeUrl: string;
    encode(_: MsgUpdateOrchestratorReputationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOrchestratorReputationResponse;
    fromJSON(_: any): MsgUpdateOrchestratorReputationResponse;
    toJSON(_: MsgUpdateOrchestratorReputationResponse): JsonSafe<MsgUpdateOrchestratorReputationResponse>;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateOrchestratorReputationResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    UpdateModelCreatorAllowList(request: MsgUpdateModelCreatorAllowList): Promise<MsgModelCreatorAllowListResponse>;
    RegisterModel(request: MsgRegisterModel): Promise<MsgRegisterModelResponse>;
    UpdateModel(request: MsgUpdateModel): Promise<MsgUpdateModelResponse>;
    /** rpc DeleteModel(MsgDeleteModel) returns (MsgDeleteModelResponse); */
    RegisterNode(request: MsgRegisterNode): Promise<MsgRegisterNodeResponse>;
    DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse>;
    RegisterMiner(request: MsgRegisterMiner): Promise<MsgRegisterMinerResponse>;
    DeleteMiner(request: MsgDeleteMiner): Promise<MsgDeleteMinerResponse>;
    RegisterOrchestrator(request: MsgRegisterOrchestrator): Promise<MsgRegisterOrchestratorResponse>;
    DeleteOrchestrator(request: MsgDeleteOrchestrator): Promise<MsgDeleteOrchestratorResponse>;
    OrchestratorHeartbeat(request: MsgOrchestratorHeartbeat): Promise<MsgOrchestratorHeartbeatResponse>;
    MinerHeartbeat(request: MsgMinerHeartbeat): Promise<MsgMinerHeartbeatResponse>;
    /** AddMinerDeposit defines a method for depositing tokens to the miner. */
    AddMinerDeposit(request: MsgAddMinerDeposit): Promise<MsgAddMinerDepositResponse>;
    /** WithdrawMiner defines a method for withdrawing tokens from the miner. */
    WithdrawMiner(request: MsgWithdrawMiner): Promise<MsgWithdrawMinerResponse>;
    /** AddOrchestratorDeposit defines a method for depositing tokens to the orchestrator. */
    AddOrchestratorDeposit(request: MsgAddOrchestratorDeposit): Promise<MsgAddOrchestratorDepositResponse>;
    /** WithdrawOrchestrator defines a method for withdrawing tokens from the orchestrator. */
    WithdrawOrchestrator(request: MsgWithdrawOrchestrator): Promise<MsgWithdrawOrchestratorResponse>;
    /**
     * TODO optimize and streamline interfaces
     * UpdateNodeLabel defines a method for updating the node label.
     */
    UpdateNodeLabel(request: MsgUpdateNodeLabel): Promise<MsgUpdateNodeLabelResponse>;
    /** UpdateMinerReputation defines a method for updating the miner reputation. */
    UpdateMinerReputation(request: MsgUpdateMinerReputation): Promise<MsgUpdateMinerReputationResponse>;
    /** UpdateOrchestratorReputation defines a method for updating the orchestrator reputation. */
    UpdateOrchestratorReputation(request: MsgUpdateOrchestratorReputation): Promise<MsgUpdateOrchestratorReputationResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    UpdateModelCreatorAllowList(request: MsgUpdateModelCreatorAllowList): Promise<MsgModelCreatorAllowListResponse>;
    RegisterModel(request: MsgRegisterModel): Promise<MsgRegisterModelResponse>;
    UpdateModel(request: MsgUpdateModel): Promise<MsgUpdateModelResponse>;
    RegisterNode(request: MsgRegisterNode): Promise<MsgRegisterNodeResponse>;
    DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse>;
    RegisterMiner(request: MsgRegisterMiner): Promise<MsgRegisterMinerResponse>;
    DeleteMiner(request: MsgDeleteMiner): Promise<MsgDeleteMinerResponse>;
    RegisterOrchestrator(request: MsgRegisterOrchestrator): Promise<MsgRegisterOrchestratorResponse>;
    DeleteOrchestrator(request: MsgDeleteOrchestrator): Promise<MsgDeleteOrchestratorResponse>;
    OrchestratorHeartbeat(request: MsgOrchestratorHeartbeat): Promise<MsgOrchestratorHeartbeatResponse>;
    MinerHeartbeat(request: MsgMinerHeartbeat): Promise<MsgMinerHeartbeatResponse>;
    AddMinerDeposit(request: MsgAddMinerDeposit): Promise<MsgAddMinerDepositResponse>;
    WithdrawMiner(request: MsgWithdrawMiner): Promise<MsgWithdrawMinerResponse>;
    AddOrchestratorDeposit(request: MsgAddOrchestratorDeposit): Promise<MsgAddOrchestratorDepositResponse>;
    WithdrawOrchestrator(request: MsgWithdrawOrchestrator): Promise<MsgWithdrawOrchestratorResponse>;
    UpdateNodeLabel(request: MsgUpdateNodeLabel): Promise<MsgUpdateNodeLabelResponse>;
    UpdateMinerReputation(request: MsgUpdateMinerReputation): Promise<MsgUpdateMinerReputationResponse>;
    UpdateOrchestratorReputation(request: MsgUpdateOrchestratorReputation): Promise<MsgUpdateOrchestratorReputationResponse>;
}
