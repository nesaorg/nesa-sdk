import { ChainInfo } from "@leapwallet/cosmos-snap-provider";
import { BigNumber as impBigNumber } from "bignumber.js";
import { NesaClient } from "./client";
import { TokenPrice, InferenceAgent } from "./codec/agent/v1/agent";
interface TokenNumber {
    inputTokens: number;
    outputTokens: number;
}
interface ConfigOptions {
    modelName: string;
    lockAmount?: string;
    chainInfo?: ChainInfo;
    walletName?: string;
    priceUnit?: string;
    lowBalance?: string;
    privateKey?: string;
    mnemonic?: string;
    chatId?: string;
    isByPass?: boolean;
    agentUrl?: string;
    authToken?: string;
}
interface QuestionParams {
    messages: any;
    model: string;
    stream?: boolean;
    model_params?: Map<string, any>;
    additional_params?: Map<string, any>;
    low_rank_adaptation?: {
        lora_name: string;
        lora_path: string;
        lora_scale: number;
        base_model_name?: string;
    };
    frequency_penalty?: any;
    presence_penalty?: any;
    temperature?: any;
    top_p?: any;
}
declare class ChatClient {
    modelName: string;
    chainInfo: ChainInfo;
    lockAmount: string;
    priceUnit: string;
    lowBalance: string;
    lockAmountDenom: string;
    chatId: string;
    private walletName;
    private chatQueue;
    private chatSeq;
    private totalUsedPayment;
    private totalSignedPayment;
    private isChatting;
    private isRegisteringSession;
    private agentUrl;
    private agentChatUrl;
    private assistantRoleName;
    private lastNesaClientPromise;
    private lastUserMinimumLockPromise;
    private lastGetAgentInfoPromise;
    private lastInitOfflineSignerPromise;
    private chatProgressReadable;
    private nesaClient;
    private offlineSigner;
    private signaturePayment;
    private isBrowser;
    private privateKey;
    private mnemonic;
    private isEverRequestSession;
    private tokenPrice;
    private minerSessionId;
    private agentSessionId;
    private isByPass;
    private authToken;
    constructor(options: ConfigOptions);
    initWallet(): any;
    getNesaClient(): Promise<NesaClient>;
    getChainParams(nesaClient: NesaClient): any;
    version(): string;
    getSignaturePayment(): string;
    checkSinglePaymentAmount(totalSignedPayment: string): string;
    computePaymentAmount(tokenNumber: TokenNumber, tokenPrice: TokenPrice): string;
    computeRawPaymentAmount(tokenNumber: TokenNumber, tokenPrice: TokenPrice): impBigNumber;
    rawToProcessedPaymentAmount(amount: impBigNumber): string;
    requestChatQueue(readableStream: any, question: QuestionParams): void;
    requestCloseHeartbeat(): void;
    requestAgentInfo(result: any, readableStream: any): any;
    checkSignBroadcastResult(readableStream?: any): Promise<unknown>;
    requestChatStatus(): any;
    requestSession(): Promise<any>;
    requestChat(question: QuestionParams): Promise<any>;
    connectAgent(selectAgent: InferenceAgent, readableStream?: any): Promise<unknown>;
}
export default ChatClient;
