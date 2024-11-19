/// <reference types="long" />
import { Params } from "./params";
import { Model } from "./model";
import { Node } from "./node";
import { Miner } from "./miner";
import { Orchestrator } from "./orchestrator";
import { ModelBlock } from "./model_block";
import { UnbondingEntry } from "./deposit";
import * as _m0 from "protobufjs/minimal";
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
    fromPartial<I extends {
        orchestratorId?: string | undefined;
        minerId?: string | undefined;
    } & {
        orchestratorId?: string | undefined;
        minerId?: string | undefined;
    } & Record<Exclude<keyof I, keyof OrchestratorMiner>, never>>(object: I): OrchestratorMiner;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends {
        params?: {
            orchestratorValidTime?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            minerValidTime?: {
                seconds?: string | number | import("long").Long | undefined;
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
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            minerUnbondingPeriod?: {
                seconds?: string | number | import("long").Long | undefined;
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
        model?: {
            creator?: string | undefined;
            modelName?: string | undefined;
            blockCids?: string[] | undefined;
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
        }[] | undefined;
        node?: {
            nodeId?: string | undefined;
            publicName?: string | undefined;
            version?: string | undefined;
            networkAddress?: string | undefined;
            walletAddress?: string | undefined;
            vram?: string | number | import("long").Long | undefined;
            networkRps?: number | undefined;
            nextPings?: Uint8Array[] | undefined;
            usingRelay?: boolean | undefined;
            labels?: string[] | undefined;
        }[] | undefined;
        miner?: {
            nodeId?: string | undefined;
            startBlock?: string | number | import("long").Long | undefined;
            endBlock?: string | number | import("long").Long | undefined;
            torchDtype?: string | undefined;
            quantType?: string | undefined;
            cacheTokensLeft?: string | number | import("long").Long | undefined;
            inferenceRps?: number | undefined;
            modelName?: string | undefined;
            validUntil?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            bondStatus?: import("./deposit").BondStatus | undefined;
            deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reputations?: {
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[] | undefined;
        }[] | undefined;
        orchestrator?: {
            nodeId?: string | undefined;
            modelName?: string | undefined;
            inferenceType?: import("./orchestrator").InferenceType | undefined;
            status?: import("./orchestrator").Availability | undefined;
            blockCount?: (string | number | import("long").Long)[] | undefined;
            validUntil?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            bondStatus?: import("./deposit").BondStatus | undefined;
            deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reputations?: {
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[] | undefined;
        }[] | undefined;
        orchestratorMiner?: {
            orchestratorId?: string | undefined;
            minerId?: string | undefined;
        }[] | undefined;
        modelBlock?: {
            modelName?: string | undefined;
            nodeId?: string | undefined;
            blockId?: number | undefined;
            cid?: string | undefined;
        }[] | undefined;
        minerUnbonding?: {
            nodeId?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            completionTime?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            receiver?: string | undefined;
        }[] | undefined;
        orchestratorUnbonding?: {
            nodeId?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            completionTime?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            receiver?: string | undefined;
        }[] | undefined;
        modelCreators?: string[] | undefined;
        modelAllowList?: string[] | undefined;
    } & {
        params?: ({
            orchestratorValidTime?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            minerValidTime?: {
                seconds?: string | number | import("long").Long | undefined;
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
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            minerUnbondingPeriod?: {
                seconds?: string | number | import("long").Long | undefined;
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
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["params"]["orchestratorValidTime"]["seconds"], keyof import("long").Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["orchestratorValidTime"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            minerValidTime?: ({
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["params"]["minerValidTime"]["seconds"], keyof import("long").Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["minerValidTime"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            adminAccount?: string | undefined;
            orchestratorMinDeposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["params"]["orchestratorMinDeposit"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            minerMinDeposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["params"]["minerMinDeposit"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            orchestratorUnbondingPeriod?: ({
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["params"]["orchestratorUnbondingPeriod"]["seconds"], keyof import("long").Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["orchestratorUnbondingPeriod"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            minerUnbondingPeriod?: ({
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["params"]["minerUnbondingPeriod"]["seconds"], keyof import("long").Long>, never>) | undefined;
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
                } & Record<Exclude<keyof I["params"]["modelDefaultTokenPrice"]["inputPrice"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
                outputPrice?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["params"]["modelDefaultTokenPrice"]["outputPrice"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["modelDefaultTokenPrice"], keyof import("./model").TokenPrice>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        model?: ({
            creator?: string | undefined;
            modelName?: string | undefined;
            blockCids?: string[] | undefined;
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
        }[] & ({
            creator?: string | undefined;
            modelName?: string | undefined;
            blockCids?: string[] | undefined;
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
            blockCids?: (string[] & string[] & Record<Exclude<keyof I["model"][number]["blockCids"], keyof string[]>, never>) | undefined;
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
                } & Record<Exclude<keyof I["model"][number]["tokenPrice"]["inputPrice"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
                outputPrice?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["model"][number]["tokenPrice"]["outputPrice"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            } & Record<Exclude<keyof I["model"][number]["tokenPrice"], keyof import("./model").TokenPrice>, never>) | undefined;
        } & Record<Exclude<keyof I["model"][number], keyof Model>, never>)[] & Record<Exclude<keyof I["model"], keyof {
            creator?: string | undefined;
            modelName?: string | undefined;
            blockCids?: string[] | undefined;
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
        }[]>, never>) | undefined;
        node?: ({
            nodeId?: string | undefined;
            publicName?: string | undefined;
            version?: string | undefined;
            networkAddress?: string | undefined;
            walletAddress?: string | undefined;
            vram?: string | number | import("long").Long | undefined;
            networkRps?: number | undefined;
            nextPings?: Uint8Array[] | undefined;
            usingRelay?: boolean | undefined;
            labels?: string[] | undefined;
        }[] & ({
            nodeId?: string | undefined;
            publicName?: string | undefined;
            version?: string | undefined;
            networkAddress?: string | undefined;
            walletAddress?: string | undefined;
            vram?: string | number | import("long").Long | undefined;
            networkRps?: number | undefined;
            nextPings?: Uint8Array[] | undefined;
            usingRelay?: boolean | undefined;
            labels?: string[] | undefined;
        } & {
            nodeId?: string | undefined;
            publicName?: string | undefined;
            version?: string | undefined;
            networkAddress?: string | undefined;
            walletAddress?: string | undefined;
            vram?: string | number | (import("long").Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long").Long) => import("long").Long;
                and: (other: string | number | import("long").Long) => import("long").Long;
                compare: (other: string | number | import("long").Long) => number;
                comp: (other: string | number | import("long").Long) => number;
                divide: (divisor: string | number | import("long").Long) => import("long").Long;
                div: (divisor: string | number | import("long").Long) => import("long").Long;
                equals: (other: string | number | import("long").Long) => boolean;
                eq: (other: string | number | import("long").Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long").Long) => boolean;
                gt: (other: string | number | import("long").Long) => boolean;
                greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                gte: (other: string | number | import("long").Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | import("long").Long) => boolean;
                lt: (other: string | number | import("long").Long) => boolean;
                lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                lte: (other: string | number | import("long").Long) => boolean;
                modulo: (other: string | number | import("long").Long) => import("long").Long;
                mod: (other: string | number | import("long").Long) => import("long").Long;
                multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                negate: () => import("long").Long;
                neg: () => import("long").Long;
                not: () => import("long").Long;
                notEquals: (other: string | number | import("long").Long) => boolean;
                neq: (other: string | number | import("long").Long) => boolean;
                or: (other: string | number | import("long").Long) => import("long").Long;
                shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                shl: (numBits: number | import("long").Long) => import("long").Long;
                shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                shr: (numBits: number | import("long").Long) => import("long").Long;
                shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                shru: (numBits: number | import("long").Long) => import("long").Long;
                subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long").Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => import("long").Long;
                xor: (other: string | number | import("long").Long) => import("long").Long;
            } & Record<Exclude<keyof I["node"][number]["vram"], keyof import("long").Long>, never>) | undefined;
            networkRps?: number | undefined;
            nextPings?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["node"][number]["nextPings"], keyof Uint8Array[]>, never>) | undefined;
            usingRelay?: boolean | undefined;
            labels?: (string[] & string[] & Record<Exclude<keyof I["node"][number]["labels"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["node"][number], keyof Node>, never>)[] & Record<Exclude<keyof I["node"], keyof {
            nodeId?: string | undefined;
            publicName?: string | undefined;
            version?: string | undefined;
            networkAddress?: string | undefined;
            walletAddress?: string | undefined;
            vram?: string | number | import("long").Long | undefined;
            networkRps?: number | undefined;
            nextPings?: Uint8Array[] | undefined;
            usingRelay?: boolean | undefined;
            labels?: string[] | undefined;
        }[]>, never>) | undefined;
        miner?: ({
            nodeId?: string | undefined;
            startBlock?: string | number | import("long").Long | undefined;
            endBlock?: string | number | import("long").Long | undefined;
            torchDtype?: string | undefined;
            quantType?: string | undefined;
            cacheTokensLeft?: string | number | import("long").Long | undefined;
            inferenceRps?: number | undefined;
            modelName?: string | undefined;
            validUntil?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            bondStatus?: import("./deposit").BondStatus | undefined;
            deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reputations?: {
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[] | undefined;
        }[] & ({
            nodeId?: string | undefined;
            startBlock?: string | number | import("long").Long | undefined;
            endBlock?: string | number | import("long").Long | undefined;
            torchDtype?: string | undefined;
            quantType?: string | undefined;
            cacheTokensLeft?: string | number | import("long").Long | undefined;
            inferenceRps?: number | undefined;
            modelName?: string | undefined;
            validUntil?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            bondStatus?: import("./deposit").BondStatus | undefined;
            deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reputations?: {
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[] | undefined;
        } & {
            nodeId?: string | undefined;
            startBlock?: string | number | (import("long").Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long").Long) => import("long").Long;
                and: (other: string | number | import("long").Long) => import("long").Long;
                compare: (other: string | number | import("long").Long) => number;
                comp: (other: string | number | import("long").Long) => number;
                divide: (divisor: string | number | import("long").Long) => import("long").Long;
                div: (divisor: string | number | import("long").Long) => import("long").Long;
                equals: (other: string | number | import("long").Long) => boolean;
                eq: (other: string | number | import("long").Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long").Long) => boolean;
                gt: (other: string | number | import("long").Long) => boolean;
                greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                gte: (other: string | number | import("long").Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | import("long").Long) => boolean;
                lt: (other: string | number | import("long").Long) => boolean;
                lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                lte: (other: string | number | import("long").Long) => boolean;
                modulo: (other: string | number | import("long").Long) => import("long").Long;
                mod: (other: string | number | import("long").Long) => import("long").Long;
                multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                negate: () => import("long").Long;
                neg: () => import("long").Long;
                not: () => import("long").Long;
                notEquals: (other: string | number | import("long").Long) => boolean;
                neq: (other: string | number | import("long").Long) => boolean;
                or: (other: string | number | import("long").Long) => import("long").Long;
                shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                shl: (numBits: number | import("long").Long) => import("long").Long;
                shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                shr: (numBits: number | import("long").Long) => import("long").Long;
                shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                shru: (numBits: number | import("long").Long) => import("long").Long;
                subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long").Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => import("long").Long;
                xor: (other: string | number | import("long").Long) => import("long").Long;
            } & Record<Exclude<keyof I["miner"][number]["startBlock"], keyof import("long").Long>, never>) | undefined;
            endBlock?: string | number | (import("long").Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long").Long) => import("long").Long;
                and: (other: string | number | import("long").Long) => import("long").Long;
                compare: (other: string | number | import("long").Long) => number;
                comp: (other: string | number | import("long").Long) => number;
                divide: (divisor: string | number | import("long").Long) => import("long").Long;
                div: (divisor: string | number | import("long").Long) => import("long").Long;
                equals: (other: string | number | import("long").Long) => boolean;
                eq: (other: string | number | import("long").Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long").Long) => boolean;
                gt: (other: string | number | import("long").Long) => boolean;
                greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                gte: (other: string | number | import("long").Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | import("long").Long) => boolean;
                lt: (other: string | number | import("long").Long) => boolean;
                lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                lte: (other: string | number | import("long").Long) => boolean;
                modulo: (other: string | number | import("long").Long) => import("long").Long;
                mod: (other: string | number | import("long").Long) => import("long").Long;
                multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                negate: () => import("long").Long;
                neg: () => import("long").Long;
                not: () => import("long").Long;
                notEquals: (other: string | number | import("long").Long) => boolean;
                neq: (other: string | number | import("long").Long) => boolean;
                or: (other: string | number | import("long").Long) => import("long").Long;
                shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                shl: (numBits: number | import("long").Long) => import("long").Long;
                shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                shr: (numBits: number | import("long").Long) => import("long").Long;
                shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                shru: (numBits: number | import("long").Long) => import("long").Long;
                subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long").Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => import("long").Long;
                xor: (other: string | number | import("long").Long) => import("long").Long;
            } & Record<Exclude<keyof I["miner"][number]["endBlock"], keyof import("long").Long>, never>) | undefined;
            torchDtype?: string | undefined;
            quantType?: string | undefined;
            cacheTokensLeft?: string | number | (import("long").Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long").Long) => import("long").Long;
                and: (other: string | number | import("long").Long) => import("long").Long;
                compare: (other: string | number | import("long").Long) => number;
                comp: (other: string | number | import("long").Long) => number;
                divide: (divisor: string | number | import("long").Long) => import("long").Long;
                div: (divisor: string | number | import("long").Long) => import("long").Long;
                equals: (other: string | number | import("long").Long) => boolean;
                eq: (other: string | number | import("long").Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long").Long) => boolean;
                gt: (other: string | number | import("long").Long) => boolean;
                greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                gte: (other: string | number | import("long").Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | import("long").Long) => boolean;
                lt: (other: string | number | import("long").Long) => boolean;
                lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                lte: (other: string | number | import("long").Long) => boolean;
                modulo: (other: string | number | import("long").Long) => import("long").Long;
                mod: (other: string | number | import("long").Long) => import("long").Long;
                multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                negate: () => import("long").Long;
                neg: () => import("long").Long;
                not: () => import("long").Long;
                notEquals: (other: string | number | import("long").Long) => boolean;
                neq: (other: string | number | import("long").Long) => boolean;
                or: (other: string | number | import("long").Long) => import("long").Long;
                shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                shl: (numBits: number | import("long").Long) => import("long").Long;
                shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                shr: (numBits: number | import("long").Long) => import("long").Long;
                shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                shru: (numBits: number | import("long").Long) => import("long").Long;
                subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long").Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => import("long").Long;
                xor: (other: string | number | import("long").Long) => import("long").Long;
            } & Record<Exclude<keyof I["miner"][number]["cacheTokensLeft"], keyof import("long").Long>, never>) | undefined;
            inferenceRps?: number | undefined;
            modelName?: string | undefined;
            validUntil?: ({
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["miner"][number]["validUntil"]["seconds"], keyof import("long").Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["miner"][number]["validUntil"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            bondStatus?: import("./deposit").BondStatus | undefined;
            deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["miner"][number]["deposit"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            reputations?: ({
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[] & ({
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            } & {
                name?: string | undefined;
                score?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["miner"][number]["reputations"][number]["score"], keyof import("long").Long>, never>) | undefined;
            } & Record<Exclude<keyof I["miner"][number]["reputations"][number], keyof import("./reputation").Reputation>, never>)[] & Record<Exclude<keyof I["miner"][number]["reputations"], keyof {
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["miner"][number], keyof Miner>, never>)[] & Record<Exclude<keyof I["miner"], keyof {
            nodeId?: string | undefined;
            startBlock?: string | number | import("long").Long | undefined;
            endBlock?: string | number | import("long").Long | undefined;
            torchDtype?: string | undefined;
            quantType?: string | undefined;
            cacheTokensLeft?: string | number | import("long").Long | undefined;
            inferenceRps?: number | undefined;
            modelName?: string | undefined;
            validUntil?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            bondStatus?: import("./deposit").BondStatus | undefined;
            deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reputations?: {
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        orchestrator?: ({
            nodeId?: string | undefined;
            modelName?: string | undefined;
            inferenceType?: import("./orchestrator").InferenceType | undefined;
            status?: import("./orchestrator").Availability | undefined;
            blockCount?: (string | number | import("long").Long)[] | undefined;
            validUntil?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            bondStatus?: import("./deposit").BondStatus | undefined;
            deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reputations?: {
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[] | undefined;
        }[] & ({
            nodeId?: string | undefined;
            modelName?: string | undefined;
            inferenceType?: import("./orchestrator").InferenceType | undefined;
            status?: import("./orchestrator").Availability | undefined;
            blockCount?: (string | number | import("long").Long)[] | undefined;
            validUntil?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            bondStatus?: import("./deposit").BondStatus | undefined;
            deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reputations?: {
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[] | undefined;
        } & {
            nodeId?: string | undefined;
            modelName?: string | undefined;
            inferenceType?: import("./orchestrator").InferenceType | undefined;
            status?: import("./orchestrator").Availability | undefined;
            blockCount?: ((string | number | import("long").Long)[] & (string | number | (import("long").Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long").Long) => import("long").Long;
                and: (other: string | number | import("long").Long) => import("long").Long;
                compare: (other: string | number | import("long").Long) => number;
                comp: (other: string | number | import("long").Long) => number;
                divide: (divisor: string | number | import("long").Long) => import("long").Long;
                div: (divisor: string | number | import("long").Long) => import("long").Long;
                equals: (other: string | number | import("long").Long) => boolean;
                eq: (other: string | number | import("long").Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long").Long) => boolean;
                gt: (other: string | number | import("long").Long) => boolean;
                greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                gte: (other: string | number | import("long").Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | import("long").Long) => boolean;
                lt: (other: string | number | import("long").Long) => boolean;
                lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                lte: (other: string | number | import("long").Long) => boolean;
                modulo: (other: string | number | import("long").Long) => import("long").Long;
                mod: (other: string | number | import("long").Long) => import("long").Long;
                multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                negate: () => import("long").Long;
                neg: () => import("long").Long;
                not: () => import("long").Long;
                notEquals: (other: string | number | import("long").Long) => boolean;
                neq: (other: string | number | import("long").Long) => boolean;
                or: (other: string | number | import("long").Long) => import("long").Long;
                shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                shl: (numBits: number | import("long").Long) => import("long").Long;
                shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                shr: (numBits: number | import("long").Long) => import("long").Long;
                shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                shru: (numBits: number | import("long").Long) => import("long").Long;
                subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long").Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => import("long").Long;
                xor: (other: string | number | import("long").Long) => import("long").Long;
            } & Record<Exclude<keyof I["orchestrator"][number]["blockCount"][number], keyof import("long").Long>, never>))[] & Record<Exclude<keyof I["orchestrator"][number]["blockCount"], keyof (string | number | import("long").Long)[]>, never>) | undefined;
            validUntil?: ({
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["orchestrator"][number]["validUntil"]["seconds"], keyof import("long").Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["orchestrator"][number]["validUntil"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            bondStatus?: import("./deposit").BondStatus | undefined;
            deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["orchestrator"][number]["deposit"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            reputations?: ({
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[] & ({
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            } & {
                name?: string | undefined;
                score?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["orchestrator"][number]["reputations"][number]["score"], keyof import("long").Long>, never>) | undefined;
            } & Record<Exclude<keyof I["orchestrator"][number]["reputations"][number], keyof import("./reputation").Reputation>, never>)[] & Record<Exclude<keyof I["orchestrator"][number]["reputations"], keyof {
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["orchestrator"][number], keyof Orchestrator>, never>)[] & Record<Exclude<keyof I["orchestrator"], keyof {
            nodeId?: string | undefined;
            modelName?: string | undefined;
            inferenceType?: import("./orchestrator").InferenceType | undefined;
            status?: import("./orchestrator").Availability | undefined;
            blockCount?: (string | number | import("long").Long)[] | undefined;
            validUntil?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            bondStatus?: import("./deposit").BondStatus | undefined;
            deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reputations?: {
                name?: string | undefined;
                score?: string | number | import("long").Long | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        orchestratorMiner?: ({
            orchestratorId?: string | undefined;
            minerId?: string | undefined;
        }[] & ({
            orchestratorId?: string | undefined;
            minerId?: string | undefined;
        } & {
            orchestratorId?: string | undefined;
            minerId?: string | undefined;
        } & Record<Exclude<keyof I["orchestratorMiner"][number], keyof OrchestratorMiner>, never>)[] & Record<Exclude<keyof I["orchestratorMiner"], keyof {
            orchestratorId?: string | undefined;
            minerId?: string | undefined;
        }[]>, never>) | undefined;
        modelBlock?: ({
            modelName?: string | undefined;
            nodeId?: string | undefined;
            blockId?: number | undefined;
            cid?: string | undefined;
        }[] & ({
            modelName?: string | undefined;
            nodeId?: string | undefined;
            blockId?: number | undefined;
            cid?: string | undefined;
        } & {
            modelName?: string | undefined;
            nodeId?: string | undefined;
            blockId?: number | undefined;
            cid?: string | undefined;
        } & Record<Exclude<keyof I["modelBlock"][number], keyof ModelBlock>, never>)[] & Record<Exclude<keyof I["modelBlock"], keyof {
            modelName?: string | undefined;
            nodeId?: string | undefined;
            blockId?: number | undefined;
            cid?: string | undefined;
        }[]>, never>) | undefined;
        minerUnbonding?: ({
            nodeId?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            completionTime?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            receiver?: string | undefined;
        }[] & ({
            nodeId?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            completionTime?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            receiver?: string | undefined;
        } & {
            nodeId?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["minerUnbonding"][number]["amount"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            completionTime?: ({
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["minerUnbonding"][number]["completionTime"]["seconds"], keyof import("long").Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["minerUnbonding"][number]["completionTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            receiver?: string | undefined;
        } & Record<Exclude<keyof I["minerUnbonding"][number], keyof UnbondingEntry>, never>)[] & Record<Exclude<keyof I["minerUnbonding"], keyof {
            nodeId?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            completionTime?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            receiver?: string | undefined;
        }[]>, never>) | undefined;
        orchestratorUnbonding?: ({
            nodeId?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            completionTime?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            receiver?: string | undefined;
        }[] & ({
            nodeId?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            completionTime?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            receiver?: string | undefined;
        } & {
            nodeId?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["orchestratorUnbonding"][number]["amount"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            completionTime?: ({
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["orchestratorUnbonding"][number]["completionTime"]["seconds"], keyof import("long").Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["orchestratorUnbonding"][number]["completionTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            receiver?: string | undefined;
        } & Record<Exclude<keyof I["orchestratorUnbonding"][number], keyof UnbondingEntry>, never>)[] & Record<Exclude<keyof I["orchestratorUnbonding"], keyof {
            nodeId?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            completionTime?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            receiver?: string | undefined;
        }[]>, never>) | undefined;
        modelCreators?: (string[] & string[] & Record<Exclude<keyof I["modelCreators"], keyof string[]>, never>) | undefined;
        modelAllowList?: (string[] & string[] & Record<Exclude<keyof I["modelAllowList"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
