import { ChainInfo } from "@keplr-wallet/types";
declare class WalletOperation {
    static getNesaClient(chainInfo: ChainInfo, offlineSigner: any): Promise<any>;
    static registerSession(client: any, modelName: string, lockAmount: string, denom: string, chainInfo: ChainInfo, offlineSigner: any): Promise<any>;
    static requestAgentInfo(client: any, agentName: string, modelName: string): Promise<any>;
    static requestParams(client: any): Promise<any>;
    static requestVrfSeed(client: any, offlineSigner: any): Promise<any>;
}
export default WalletOperation;
