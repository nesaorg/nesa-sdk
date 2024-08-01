import { ChainInfo } from "@keplr-wallet/types";
interface ConfigOptions {
    lockAmount?: string;
    chainInfo?: ChainInfo;
    walletName?: string;
    singlePaymentAmount?: string;
    lowBalance?: string;
    privateKey?: string;
}
interface questionTypes {
    messages: any;
    model: string;
    stream?: boolean;
    frequency_penalty?: any;
    presence_penalty?: any;
    temperature?: any;
    top_p?: any;
    session_id?: string;
}
declare class ChatClient {
    chainInfo: ChainInfo;
    lockAmount: string;
    singlePaymentAmount: string;
    lowBalance: string;
    lockAmountDenom: string;
    private walletName;
    private chatQueue;
    private chatSeq;
    private totalUsedPayment;
    private totalSignedPayment;
    private isChatinging;
    private isRegisterSessioning;
    private agentUrl;
    private assistantRoleName;
    private lastNesaClientPromise;
    private lastUserMinimumLockPromise;
    private lastGetAgentInfoPromise;
    private lastInitOfflineSignerPromise;
    private chatProgressReadable;
    private nesaClient;
    private offLinesigner;
    private signaturePayment;
    private isBrowser;
    private privateKey;
    private isEverRequestSession;
    private tokenPrice;
    constructor(options: ConfigOptions);
    initWallet(): any;
    getNesaClient(): any;
    getChainParams(nesaClient: any): any;
    version(): string;
    checkChainInfo(): string | false;
    getSignaturePayment(): string;
    checkSinglePaymentAmount(): string;
    requestChatQueue(readableStream: any, question: questionTypes): void;
    requestCloseHeartbeat(): void;
    requestAgentInfo(result: any, readableStream: any, modelName: string): any;
    checkSignBroadcastResult(readableStream?: any, modelName?: string): Promise<unknown>;
    requestChatStatus(): Promise<unknown>;
    requestSession(): Promise<unknown>;
    requestChat(question: questionTypes, modelName: string): Promise<unknown>;
}
export default ChatClient;
