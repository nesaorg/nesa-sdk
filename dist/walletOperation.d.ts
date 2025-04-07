import { NesaClient } from "./client";
import { ChainInfo } from "@leapwallet/cosmos-snap-provider";
import type { CosmjsOfflineSigner } from "@leapwallet/cosmos-snap-provider";
import { QueryGetModelResponse } from "./codec/dht/v1/query";
declare class WalletOperation {
    static getNesaClient(chainInfo: ChainInfo, offlineSigner: CosmjsOfflineSigner | undefined): Promise<NesaClient>;
    static registerSession(recordId: string, client: NesaClient, modelName: string, lockAmount: string, denom: string, chainInfo: ChainInfo, offlineSigner: CosmjsOfflineSigner): Promise<{
        sessionId: string;
        tokenPrice: import("./codec/agent/v1/agent").TokenPrice;
        transactionHash: string;
    }>;
    static requestAgentInfo(client: NesaClient | undefined, agentName: string, modelName: string): Promise<import("./codec/agent/v1/query").QueryInferenceAgentResponse>;
    static requestParams(client: NesaClient | undefined): Promise<import("./codec/agent/v1/query").QueryParamsResponse>;
    static requestVrfSeed(client: NesaClient, offlineSigner: CosmjsOfflineSigner): Promise<import("./codec/agent/v1/query").QueryVRFSeedResponse>;
    static requestModel(client: NesaClient, modelName: string): Promise<QueryGetModelResponse>;
}
export default WalletOperation;
