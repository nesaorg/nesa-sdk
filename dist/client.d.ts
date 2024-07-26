/// <reference types="long" />
import { OfflineSigner } from "@cosmjs/proto-signing";
import { SigningStargateClient, SigningStargateClientOptions, GasPrice, Event, QueryClient } from "@cosmjs/stargate";
import { CometClient } from "@cosmjs/tendermint-rpc";
import { Logger } from './logger';
import { VRF } from './codec/agent/v1/tx';
import { Payment, Params, SessionStatus } from "./codec/agent/v1/agent";
import { Coin } from "./codec/cosmos/base/v1beta1/coin";
import { AgentExtension } from './queries';
import { QueryParamsResponse, QueryInferenceAgentResponse, QuerySessionResponse, QueryVRFSeedResponse, QuerySessionByAgentResponse } from "./codec/agent/v1/query";
import { StdFee } from "@cosmjs/amino";
export type NesaClientOptions = SigningStargateClientOptions & {
    logger?: Logger;
    gasPrice: GasPrice;
    estimatedBlockTime: number;
    estimatedIndexerTime: number;
};
export interface MsgResult {
    readonly events: readonly Event[];
    /** Transaction hash (might be used as transaction ID). Guaranteed to be non-empty upper-case hex */
    readonly transactionHash: string;
    /** block height where this transaction was committed - only set if we send 'block' mode */
    readonly height: number;
}
export type RegisterSessionResult = MsgResult & {
    readonly account: string;
};
export declare class NesaClient {
    readonly gasPrice: GasPrice;
    readonly sign: SigningStargateClient;
    readonly query: QueryClient & AgentExtension;
    readonly tm: CometClient;
    readonly senderAddress: string;
    readonly logger: Logger;
    readonly chainId: string;
    readonly estimatedBlockTime: number;
    readonly estimatedIndexerTime: number;
    private broadcastPromise;
    private signResult;
    static connectWithSigner(endpoint: string, signer: OfflineSigner, senderAddress: string, chainId: string | undefined, options: NesaClientOptions): Promise<NesaClient>;
    private constructor();
    updateParams(authority: string, params: Params): Promise<MsgResult>;
    registerInferenceAgent(url: string, version: Long): Promise<MsgResult>;
    broadcastRegisterSession(): any;
    signRegisterSession(sessionId: string, modelName: string, fee: StdFee, lockBalance?: Coin, vrf?: VRF): Promise<any>;
    registerSession(sessionId: string, modelName: string, lockBalance?: Coin, vrf?: VRF): Promise<RegisterSessionResult>;
    submitPayment(sessionId: string, signature: Uint8Array, payment?: Payment): Promise<MsgResult>;
    getParams(): Promise<QueryParamsResponse>;
    getInferenceAgent(account: string, modelName: string, limit: Long, key: Uint8Array): Promise<QueryInferenceAgentResponse>;
    getSession(sessionId: string): Promise<QuerySessionResponse>;
    getSessionByAgent(account: string, status: SessionStatus, limit: Long, orderDesc: boolean, key: Uint8Array, expireTime?: Date): Promise<QuerySessionByAgentResponse>;
    getVRFSeed(account: string): Promise<QueryVRFSeedResponse>;
}
