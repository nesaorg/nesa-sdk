import { NesaClient } from "./client";
import { ChainInfo } from "@keplr-wallet/types";
import type { CosmjsOfflineSigner } from "@leapwallet/cosmos-snap-provider";
declare class WalletOperation {
    static getNesaClient(chainInfo: ChainInfo, offlineSigner: CosmjsOfflineSigner | undefined): Promise<NesaClient>;
    static registerSession(recordId: string, client: NesaClient, modelName: string, lockAmount: string, denom: string, chainInfo: ChainInfo, offlineSigner: CosmjsOfflineSigner): Promise<any>;
    static requestAgentInfo(client: NesaClient | undefined, agentName: string, modelName: string): Promise<import("./codec/agent/v1/query").QueryInferenceAgentResponse>;
    static requestParams(client: NesaClient | undefined): Promise<import("./codec/agent/v1/query").QueryParamsResponse>;
    static requestVrfSeed(client: NesaClient, offlineSigner: CosmjsOfflineSigner): Promise<import("./codec/agent/v1/query").QueryVRFSeedResponse>;
}
export default WalletOperation;
