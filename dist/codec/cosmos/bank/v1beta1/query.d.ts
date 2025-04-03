import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params, Metadata } from "./bank";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the coin. */
    balance?: Coin;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
    /** balances is the balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
    /** amount is the supply of the coin. */
    amount: Coin;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
    params: Params;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: Metadata[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata;
}
export declare const QueryBalanceRequest: {
    typeUrl: string;
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): JsonSafe<QueryBalanceRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(object: I): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): JsonSafe<QueryBalanceResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse;
};
export declare const QueryAllBalancesRequest: {
    typeUrl: string;
    encode(message: QueryAllBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesRequest;
    fromJSON(object: any): QueryAllBalancesRequest;
    toJSON(message: QueryAllBalancesRequest): JsonSafe<QueryAllBalancesRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAllBalancesRequest>, I>>(object: I): QueryAllBalancesRequest;
};
export declare const QueryAllBalancesResponse: {
    typeUrl: string;
    encode(message: QueryAllBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesResponse;
    fromJSON(object: any): QueryAllBalancesResponse;
    toJSON(message: QueryAllBalancesResponse): JsonSafe<QueryAllBalancesResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAllBalancesResponse>, I>>(object: I): QueryAllBalancesResponse;
};
export declare const QueryTotalSupplyRequest: {
    typeUrl: string;
    encode(message: QueryTotalSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyRequest;
    fromJSON(object: any): QueryTotalSupplyRequest;
    toJSON(message: QueryTotalSupplyRequest): JsonSafe<QueryTotalSupplyRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(object: I): QueryTotalSupplyRequest;
};
export declare const QueryTotalSupplyResponse: {
    typeUrl: string;
    encode(message: QueryTotalSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromJSON(object: any): QueryTotalSupplyResponse;
    toJSON(message: QueryTotalSupplyResponse): JsonSafe<QueryTotalSupplyResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(object: I): QueryTotalSupplyResponse;
};
export declare const QuerySupplyOfRequest: {
    typeUrl: string;
    encode(message: QuerySupplyOfRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyOfRequest;
    fromJSON(object: any): QuerySupplyOfRequest;
    toJSON(message: QuerySupplyOfRequest): JsonSafe<QuerySupplyOfRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySupplyOfRequest>, I>>(object: I): QuerySupplyOfRequest;
};
export declare const QuerySupplyOfResponse: {
    typeUrl: string;
    encode(message: QuerySupplyOfResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyOfResponse;
    fromJSON(object: any): QuerySupplyOfResponse;
    toJSON(message: QuerySupplyOfResponse): JsonSafe<QuerySupplyOfResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySupplyOfResponse>, I>>(object: I): QuerySupplyOfResponse;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse;
};
export declare const QueryDenomsMetadataRequest: {
    typeUrl: string;
    encode(message: QueryDenomsMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsMetadataRequest;
    fromJSON(object: any): QueryDenomsMetadataRequest;
    toJSON(message: QueryDenomsMetadataRequest): JsonSafe<QueryDenomsMetadataRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryDenomsMetadataRequest>, I>>(object: I): QueryDenomsMetadataRequest;
};
export declare const QueryDenomsMetadataResponse: {
    typeUrl: string;
    encode(message: QueryDenomsMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsMetadataResponse;
    fromJSON(object: any): QueryDenomsMetadataResponse;
    toJSON(message: QueryDenomsMetadataResponse): JsonSafe<QueryDenomsMetadataResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryDenomsMetadataResponse>, I>>(object: I): QueryDenomsMetadataResponse;
};
export declare const QueryDenomMetadataRequest: {
    typeUrl: string;
    encode(message: QueryDenomMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataRequest;
    fromJSON(object: any): QueryDenomMetadataRequest;
    toJSON(message: QueryDenomMetadataRequest): JsonSafe<QueryDenomMetadataRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataRequest>, I>>(object: I): QueryDenomMetadataRequest;
};
export declare const QueryDenomMetadataResponse: {
    typeUrl: string;
    encode(message: QueryDenomMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataResponse;
    fromJSON(object: any): QueryDenomMetadataResponse;
    toJSON(message: QueryDenomMetadataResponse): JsonSafe<QueryDenomMetadataResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataResponse>, I>>(object: I): QueryDenomMetadataResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the balance of a single coin for a single account. */
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** AllBalances queries the balance of all coins for a single account. */
    AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    /** TotalSupply queries the total supply of all coins. */
    TotalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    /** SupplyOf queries the supply of a single coin. */
    SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    /** Params queries the parameters of x/bank module. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    DenomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    /** DenomsMetadata queries the client metadata for all registered coin denominations. */
    DenomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    TotalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    DenomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    DenomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
}
