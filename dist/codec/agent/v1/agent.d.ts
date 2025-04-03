import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export declare const protobufPackage = "agent.v1";
/** AgentStatus enumerates the inference agent status. */
export declare enum AgentStatus {
    /** AGENT_STATUS_ACTIVE - AGENT_STATUS_ACTIVE represents the active status. */
    AGENT_STATUS_ACTIVE = 0,
    /** AGENT_STATUS_INACTIVE - AGENT_STATUS_INACTIVE represents the inactive status. */
    AGENT_STATUS_INACTIVE = 1,
    UNRECOGNIZED = -1
}
export declare function agentStatusFromJSON(object: any): AgentStatus;
export declare function agentStatusToJSON(object: AgentStatus): string;
/** AgentModelStatus enumerates the each model status of inference agent. */
export declare enum AgentModelStatus {
    /** AGENT_MODEL_STATUS_ACTIVE - AGENT_MODEL_STATUS_ACTIVE represents the active model status. */
    AGENT_MODEL_STATUS_ACTIVE = 0,
    /** AGENT_MODEL_STATUS_INACTIVE - AGENT_MODEL_STATUS_INACTIVE represents the inactive model status. */
    AGENT_MODEL_STATUS_INACTIVE = 1,
    UNRECOGNIZED = -1
}
export declare function agentModelStatusFromJSON(object: any): AgentModelStatus;
export declare function agentModelStatusToJSON(object: AgentModelStatus): string;
/** ValidatorStatus enumerates the statuses of validators. */
export declare enum ValidatorStatus {
    /** ValidatorStatusAbsent - ValidatorStatusAbsent indicates the validator is absent to submit info on chain. */
    ValidatorStatusAbsent = 0,
    /** ValidatorStatusSubmit - ValidatorStatusSubmit indicates the validator has submitted a response. */
    ValidatorStatusSubmit = 1,
    /** ValidatorStatusConsistent - ValidatorStatusConsistent indicates the validator's response is consistent to majority. */
    ValidatorStatusConsistent = 2,
    /** ValidatorStatusInconsistent - ValidatorStatusInconsistent indicates the validator's response is inconsistent to majority. */
    ValidatorStatusInconsistent = 3,
    UNRECOGNIZED = -1
}
export declare function validatorStatusFromJSON(object: any): ValidatorStatus;
export declare function validatorStatusToJSON(object: ValidatorStatus): string;
/** SessionStatus enumerates the statuses of a session. */
export declare enum SessionStatus {
    /** SESSION_STATUS_DEFAULT - SESSION_STATUS_DEFAULT is a placeholder and will not appear in session. */
    SESSION_STATUS_DEFAULT = 0,
    /** SESSION_STATUS_PENDING - SESSION_STATUS_PENDING indicates the session is pending. It's waiting for the payment to be submitted. */
    SESSION_STATUS_PENDING = 1,
    /** SESSION_STATUS_SUBMITTED - SESSION_STATUS_SUBMITTED indicates the payment has been submitted. */
    SESSION_STATUS_SUBMITTED = 2,
    /** SESSION_STATUS_CHALLENGE_SUBMIT_CID - SESSION_STATUS_CHALLENGE_SUBMIT_CID indicates the session is waiting challenged agent to submit CID. */
    SESSION_STATUS_CHALLENGE_SUBMIT_CID = 3,
    /** SESSION_STATUS_CHALLENGE_SUBMIT_REPLY - SESSION_STATUS_CHALLENGE_SUBMIT_REPLY indicates the session is waiting validator to submit reply hash. */
    SESSION_STATUS_CHALLENGE_SUBMIT_REPLY = 4,
    /** SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE - SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE indicates the session is waiting challenged agent to submit cut merkle tree. */
    SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE = 5,
    /** SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN - SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN indicates the session is waiting validator to submit answer origin hash. */
    SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN = 6,
    /** SESSION_STATUS_CHALLENGE_ARBITRATION - SESSION_STATUS_CHALLENGE_ARBITRATION indicates the session is waiting admin to do arbitration. */
    SESSION_STATUS_CHALLENGE_ARBITRATION = 7,
    UNRECOGNIZED = -1
}
export declare function sessionStatusFromJSON(object: any): SessionStatus;
export declare function sessionStatusToJSON(object: SessionStatus): string;
/** Params defines the agent module's global params. */
export interface Params {
    /** The minimum coins that needs to be locked when an inference agent registers */
    agentMinimumLock: Coin;
    /** The minimum coins that needs to be locked when user registers a session */
    userMinimumLock: Coin;
    /**
     * When the session is created, the time period that inference agent can submit payment.
     * After this period, the session will be automatically canceled.
     */
    sessionTime: Duration;
    /**
     * When the payment is submitted, the time period can be challenged.
     * After this time window, the agent receives the reward specified by the session payment.
     */
    challengeTime: Duration;
    /** Global vrf seed. Each user calculates their own vrf seed based on the global vrf seed when vrf is initialized. */
    globalSeed: Uint8Array;
    /**
     * The minimum version number for agent registration/update,
     * registration/update is not allowed if the version number is lower than this one
     */
    lowestAgentVersion: Long;
    /**
     * The highest version number of agent registration/update,
     * registration/update is not allowed if the version number is higher than this
     */
    highestAgentVersion: Long;
    /**
     * The challenge rate. It increases by 0.1% for each unit increment,
     * where 0 indicates no challenge and 1000 indicates a 100% challenge rate.
     */
    challengeRate: Long;
    /**
     * The number of validators during the challenge.
     * When the number of agents with corresponding models is lower than this number, the challenge will not be triggered.
     */
    validatorCount: Long;
    /** During the challenge, the number of times the agent’s uploaded answer has been hashed. */
    challengeRound: Long;
    /**
     * The time window for the challenged agent to upload cid.
     * If the problem cid is not uploaded beyond this time window,
     * it will be judged as a breach of contract by the challenged agent.
     */
    challengeCidTime: Duration;
    /**
     * The time window for the validator to upload reply hash.
     * If the reply hash is not uploaded beyond this time window,
     * validator will be marked as absent.
     */
    challengeReplyTime: Duration;
    /**
     * The time window for the challenged agent to upload cut merkle tree.
     * If the merkle root is not uploaded beyond this time window,
     * it will be judged as a breach of contract by the challenged agent.
     */
    challengeMerkleTime: Duration;
    /**
     * The time window for the validator to upload question origin hash.
     * If the question origin hash is not uploaded beyond this time window,
     * validator will be marked as absent.
     */
    challengeOriginTime: Duration;
    /**
     * The time an agent is valid on the chain after registration/update.
     * After this time is exceeded, the agent will be automatically marked as invalid.
     */
    agentValidTime: Duration;
}
/** InnerValues defines the values that changed by agent module. */
export interface InnerValues {
    /** The seed used by the module for VRF. It changes with each block and each usage. */
    seed: Uint8Array;
}
/** Prestige represents the prestige of inference agent. */
export interface Prestige {
    /** The number of sessions successfully completed by the inference agent. */
    count: Long;
    /** The total number of unes obtained by the inference agent after completing the session. */
    total: Long;
}
/** The inference agent represents the registered entity on the chain that provides the inference service. */
export interface InferenceAgent {
    /** The on-chain address of the inference agent */
    account: string;
    /** URL address that provides the inference service. */
    url: string;
    /** The version of the inference agent. */
    version: Long;
    /** The prestige of the inference agent. */
    prestige: Prestige;
    /** The status of the inference agent. */
    status: AgentStatus;
    /** The timestamp that agent becomes inactive. */
    validUntil: Timestamp;
}
/** AgentModel defines the model that belongs to the inference agent. */
export interface AgentModel {
    /**
     * The on-chain address of the inference node's AgentModel.
     * This field indicates which inference agent the model belongs to.
     */
    account: string;
    /** The name of the model. */
    modelName: string;
    /** The lock amount of this agent model. */
    lock: Long;
    /** The status of this agent model. */
    status: AgentModelStatus;
}
/** TokenPrice defines the price of the token used for payment. */
export interface TokenPrice {
    inputPrice: Coin;
    outputPrice: Coin;
}
/** PaymentContribution defines the participation ratio and amount obtained by each chain account during inference. */
export interface PaymentContribution {
    /** The chain account that participates in the inference. */
    account: string;
    /** The participation ratio of the chain account. */
    rate: Long;
    /** The amount gained by the chain account. */
    amount?: Coin;
}
/** Payment represents the payment information of a session. */
export interface Payment {
    /** The number of tokens used for input. */
    inputTokens: Long[];
    /** The number of tokens used for output. */
    outputTokens: Long[];
    /** The merkle root of answer hash array. */
    merkleRoot: Uint8Array;
    /** The contributions of each participating account. */
    contributions: PaymentContribution[];
}
/** Challenge validator information */
export interface ChallengeValidator {
    /** validator account */
    account: string;
    /** The hash value of the validator's answer to the question. This value is mixed with the account address */
    hash: Uint8Array;
    /** The original hash of the validator's answer to question */
    originHash: Uint8Array;
    /** validator’s submit status */
    status: ValidatorStatus;
}
/** ChallengeInfo contains information about session challenge. */
export interface ChallengeInfo {
    /** The ID of the question being challenged. */
    questionId: Long;
    /** The location where the challenged question is stored */
    cid: string;
    /** The hash of the answer. It is submitted by the challenged agent. */
    answerHash: Uint8Array;
    /** The cut merkle tree of the challenged question. */
    cutMerkle: Uint8Array[];
    /** The validators of the challenge. */
    validators: ChallengeValidator[];
    /** The number of times the answer hash has been hashed. */
    hashCount: Long;
}
/** Session represents an inference session. */
export interface Session {
    /** The ID of the session. It's compressed secp256k1 pubkey. */
    sessionId: string;
    /** The account of the user who created and pay for the session. */
    account: string;
    /** The name of the model used in the session */
    modelName: string;
    /** The account of the agent providing the model's inference service. */
    agentAccount: string;
    /** The amount of coins locked by the user to do inference. */
    userLock: Coin;
    /** The amount of coins locked by the inference agent. */
    minerLock: Coin;
    /** the price of each token in session. */
    tokenPrice: TokenPrice;
    /** The expiration timestamp of the session. */
    expirationAt: Timestamp;
    /** The payment information for the session. */
    payment?: Payment;
    /** The status of the session. */
    status: SessionStatus;
    /** The challenge information for the session. */
    challengeInfo: ChallengeInfo[];
}
/** VrfSeed represents the VRF seed for each user. */
export interface VrfSeed {
    /** The account of the user. */
    account: string;
    /** The VRF seed for the user. */
    seed: Uint8Array;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
export declare const InnerValues: {
    typeUrl: string;
    encode(message: InnerValues, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InnerValues;
    fromJSON(object: any): InnerValues;
    toJSON(message: InnerValues): JsonSafe<InnerValues>;
    fromPartial<I extends Exact<DeepPartial<InnerValues>, I>>(object: I): InnerValues;
};
export declare const Prestige: {
    typeUrl: string;
    encode(message: Prestige, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Prestige;
    fromJSON(object: any): Prestige;
    toJSON(message: Prestige): JsonSafe<Prestige>;
    fromPartial<I extends Exact<DeepPartial<Prestige>, I>>(object: I): Prestige;
};
export declare const InferenceAgent: {
    typeUrl: string;
    encode(message: InferenceAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InferenceAgent;
    fromJSON(object: any): InferenceAgent;
    toJSON(message: InferenceAgent): JsonSafe<InferenceAgent>;
    fromPartial<I extends Exact<DeepPartial<InferenceAgent>, I>>(object: I): InferenceAgent;
};
export declare const AgentModel: {
    typeUrl: string;
    encode(message: AgentModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AgentModel;
    fromJSON(object: any): AgentModel;
    toJSON(message: AgentModel): JsonSafe<AgentModel>;
    fromPartial<I extends Exact<DeepPartial<AgentModel>, I>>(object: I): AgentModel;
};
export declare const TokenPrice: {
    typeUrl: string;
    encode(message: TokenPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenPrice;
    fromJSON(object: any): TokenPrice;
    toJSON(message: TokenPrice): JsonSafe<TokenPrice>;
    fromPartial<I extends Exact<DeepPartial<TokenPrice>, I>>(object: I): TokenPrice;
};
export declare const PaymentContribution: {
    typeUrl: string;
    encode(message: PaymentContribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentContribution;
    fromJSON(object: any): PaymentContribution;
    toJSON(message: PaymentContribution): JsonSafe<PaymentContribution>;
    fromPartial<I extends Exact<DeepPartial<PaymentContribution>, I>>(object: I): PaymentContribution;
};
export declare const Payment: {
    typeUrl: string;
    encode(message: Payment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Payment;
    fromJSON(object: any): Payment;
    toJSON(message: Payment): JsonSafe<Payment>;
    fromPartial<I extends Exact<DeepPartial<Payment>, I>>(object: I): Payment;
};
export declare const ChallengeValidator: {
    typeUrl: string;
    encode(message: ChallengeValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeValidator;
    fromJSON(object: any): ChallengeValidator;
    toJSON(message: ChallengeValidator): JsonSafe<ChallengeValidator>;
    fromPartial<I extends Exact<DeepPartial<ChallengeValidator>, I>>(object: I): ChallengeValidator;
};
export declare const ChallengeInfo: {
    typeUrl: string;
    encode(message: ChallengeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeInfo;
    fromJSON(object: any): ChallengeInfo;
    toJSON(message: ChallengeInfo): JsonSafe<ChallengeInfo>;
    fromPartial<I extends Exact<DeepPartial<ChallengeInfo>, I>>(object: I): ChallengeInfo;
};
export declare const Session: {
    typeUrl: string;
    encode(message: Session, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Session;
    fromJSON(object: any): Session;
    toJSON(message: Session): JsonSafe<Session>;
    fromPartial<I extends Exact<DeepPartial<Session>, I>>(object: I): Session;
};
export declare const VrfSeed: {
    typeUrl: string;
    encode(message: VrfSeed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VrfSeed;
    fromJSON(object: any): VrfSeed;
    toJSON(message: VrfSeed): JsonSafe<VrfSeed>;
    fromPartial<I extends Exact<DeepPartial<VrfSeed>, I>>(object: I): VrfSeed;
};
