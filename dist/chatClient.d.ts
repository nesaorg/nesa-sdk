import { ChainInfo } from "@keplr-wallet/types";
import { NesaClient } from "./client";
interface ConfigOptions {
    modelName: string;
    lockAmount?: string;
    chainInfo?: ChainInfo;
    walletName?: string;
    singlePaymentAmount?: string;
    lowBalance?: string;
    privateKey?: string;
    mnemonic?: string;
    chatId?: string;
}
interface QuestionParams {
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
    modelName: string;
    chainInfo: ChainInfo;
    lockAmount: string;
    singlePaymentAmount: string;
    lowBalance: string;
    lockAmountDenom: string;
    chatId: string;
    private walletName;
    private chatQueue;
    private chatSeq;
    private totalUsedPayment;
    private totalSignedPayment;
    private isChatting;
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
    private mnemonic;
    private isEverRequestSession;
    private tokenPrice;
    constructor(options: ConfigOptions);
    initWallet(): any;
    getNesaClient(): Promise<NesaClient>;
    getChainParams(nesaClient: NesaClient): any;
    version(): string;
    getSignaturePayment(): string;
    checkSinglePaymentAmount(): string;
    requestChatQueue(readableStream: any, question: QuestionParams): void;
    requestCloseHeartbeat(): void;
    requestAgentInfo(result: any, readableStream: any): any;
    checkSignBroadcastResult(readableStream?: any): Promise<unknown>;
    requestChatStatus(): any;
    requestSession(): Promise<any>;
    requestChat(question: QuestionParams): Promise<any>;
}
export default ChatClient;
