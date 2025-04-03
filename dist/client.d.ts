import { OfflineSigner } from "@cosmjs/proto-signing";
import { SigningStargateClient, SigningStargateClientOptions, GasPrice, Event, QueryClient } from "@cosmjs/stargate";
import { CometClient } from "@cosmjs/tendermint-rpc";
import { Logger } from "./logger";
import { VRF } from "./codec/agent/v1/tx";
import { Payment, Params, SessionStatus, TokenPrice, AgentModelStatus } from "./codec/agent/v1/agent";
import { Coin } from "./codec/cosmos/base/v1beta1/coin";
import { setupAgentExtension, setupDHTExtension } from "./queries";
import { StdFee } from "@cosmjs/amino";
import { PageRequest } from "./codec/cosmos/base/query/v1beta1/pagination";
import { Availability, InferenceType } from "./codec/dht/v1/orchestrator";
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
    readonly signByModel: {
        [modelName: string]: SigningStargateClient;
    };
    readonly query: QueryClient & ReturnType<typeof setupAgentExtension> & ReturnType<typeof setupDHTExtension>;
    readonly queryByModel: {
        [modelName: string]: QueryClient & ReturnType<typeof setupAgentExtension> & ReturnType<typeof setupDHTExtension>;
    };
    readonly tm: CometClient;
    readonly tmByModel: {
        [modelName: string]: CometClient;
    };
    readonly senderAddress: string;
    readonly senderAddressByModel: {
        [modelName: string]: string;
    };
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
    signRegisterSession(sessionId: string, modelName: string, fee: StdFee, lockBalance: Coin, vrf: VRF, tokenPrice: TokenPrice): Promise<{
        sessionId: string;
        tokenPrice: TokenPrice;
        transactionHash: string;
    }>;
    registerSession(sessionId: string, modelName: string, lockBalance: Coin, vrf: VRF, tokenPrice: TokenPrice): Promise<RegisterSessionResult>;
    submitPayment(sessionId: string, signature: Uint8Array, payment?: Payment): Promise<MsgResult>;
    registerModel(creator: string, modelName: string, blockCids: string[], allowList: string[], tokenPrice?: TokenPrice): Promise<MsgResult>;
    updateModel(modelName: string, allowList: string[], tokenPrice: TokenPrice): Promise<MsgResult>;
    getParams(): Promise<import("./codec/agent/v1/query").QueryParamsResponse>;
    getInferenceAgent(account: string, modelName: string, limit: Long, key: Uint8Array): Promise<import("./codec/agent/v1/query").QueryInferenceAgentResponse>;
    getAgentByModel(modelName: string, status: AgentModelStatus): Promise<import("./codec/agent/v1/query").QueryAgentByModelResponse>;
    getSession(sessionId: string): Promise<import("./codec/agent/v1/query").QuerySessionResponse>;
    getSessionByAgent(account: string, status: SessionStatus | undefined, expireTime: Date, limit: Long, orderDesc: boolean, key: Uint8Array): Promise<import("./codec/agent/v1/query").QuerySessionByAgentResponse>;
    getSessionByChallenge(account: string, limit: Long, key: Uint8Array): Promise<import("./codec/agent/v1/query").QuerySessionByChallengeResponse>;
    getVRFSeed(account: string): Promise<import("./codec/agent/v1/query").QueryVRFSeedResponse>;
    getDhtParams(): Promise<import("./codec/dht/v1/query").QueryParamsResponse>;
    getModel(modelName: string): Promise<import("./codec/dht/v1/query").QueryGetModelResponse>;
    getModelBlocks(modelName: string, pagination?: PageRequest): Promise<import("./codec/dht/v1/query").QueryGetModelBlocksResponse>;
    getNode(nodeId: string): Promise<import("./codec/dht/v1/query").QueryGetNodeResponse>;
    getMiner(nodeId: string): Promise<import("./codec/dht/v1/query").QueryGetMinerResponse>;
    getOrchestrator(nodeId: string): Promise<import("./codec/dht/v1/query").QueryGetOrchestratorResponse>;
    getAllOrchestrator(pagination?: PageRequest): Promise<import("./codec/dht/v1/query").QueryGetAllOrchestratorResponse>;
    getOrchestratorsByParams(inferenceType: InferenceType, availability: Availability, limit: number, key: Uint8Array): Promise<import("./codec/dht/v1/query").QueryGetOrchestratorsByParamsResponse>;
    getOrchestratorHeartbeat(nodeId: string): Promise<import("./codec/dht/v1/query").QueryGetOrchestratorHeartbeatResponse>;
    getMinerHeartbeat(nodeId: string): Promise<import("./codec/dht/v1/query").QueryGetMinerHeartbeatResponse>;
}
