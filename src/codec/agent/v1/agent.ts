/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "agent.v1";
/** AgentStatus enumerates the inference agent status. */
export enum AgentStatus {
  /** AGENT_STATUS_ACTIVE - AGENT_STATUS_ACTIVE represents the active status. */
  AGENT_STATUS_ACTIVE = 0,
  /** AGENT_STATUS_INACTIVE - AGENT_STATUS_INACTIVE represents the inactive status. */
  AGENT_STATUS_INACTIVE = 1,
  UNRECOGNIZED = -1,
}
export function agentStatusFromJSON(object: any): AgentStatus {
  switch (object) {
    case 0:
    case "AGENT_STATUS_ACTIVE":
      return AgentStatus.AGENT_STATUS_ACTIVE;
    case 1:
    case "AGENT_STATUS_INACTIVE":
      return AgentStatus.AGENT_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AgentStatus.UNRECOGNIZED;
  }
}
export function agentStatusToJSON(object: AgentStatus): string {
  switch (object) {
    case AgentStatus.AGENT_STATUS_ACTIVE:
      return "AGENT_STATUS_ACTIVE";
    case AgentStatus.AGENT_STATUS_INACTIVE:
      return "AGENT_STATUS_INACTIVE";
    case AgentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** AgentModelStatus enumerates the each model status of inference agent. */
export enum AgentModelStatus {
  /** AGENT_MODEL_STATUS_ACTIVE - AGENT_MODEL_STATUS_ACTIVE represents the active model status. */
  AGENT_MODEL_STATUS_ACTIVE = 0,
  /** AGENT_MODEL_STATUS_INACTIVE - AGENT_MODEL_STATUS_INACTIVE represents the inactive model status. */
  AGENT_MODEL_STATUS_INACTIVE = 1,
  UNRECOGNIZED = -1,
}
export function agentModelStatusFromJSON(object: any): AgentModelStatus {
  switch (object) {
    case 0:
    case "AGENT_MODEL_STATUS_ACTIVE":
      return AgentModelStatus.AGENT_MODEL_STATUS_ACTIVE;
    case 1:
    case "AGENT_MODEL_STATUS_INACTIVE":
      return AgentModelStatus.AGENT_MODEL_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AgentModelStatus.UNRECOGNIZED;
  }
}
export function agentModelStatusToJSON(object: AgentModelStatus): string {
  switch (object) {
    case AgentModelStatus.AGENT_MODEL_STATUS_ACTIVE:
      return "AGENT_MODEL_STATUS_ACTIVE";
    case AgentModelStatus.AGENT_MODEL_STATUS_INACTIVE:
      return "AGENT_MODEL_STATUS_INACTIVE";
    case AgentModelStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ValidatorStatus enumerates the statuses of validators. */
export enum ValidatorStatus {
  /** ValidatorStatusAbsent - ValidatorStatusAbsent indicates the validator is absent to submit info on chain. */
  ValidatorStatusAbsent = 0,
  /** ValidatorStatusSubmit - ValidatorStatusSubmit indicates the validator has submitted a response. */
  ValidatorStatusSubmit = 1,
  /** ValidatorStatusConsistent - ValidatorStatusConsistent indicates the validator's response is consistent to majority. */
  ValidatorStatusConsistent = 2,
  /** ValidatorStatusInconsistent - ValidatorStatusInconsistent indicates the validator's response is inconsistent to majority. */
  ValidatorStatusInconsistent = 3,
  UNRECOGNIZED = -1,
}
export function validatorStatusFromJSON(object: any): ValidatorStatus {
  switch (object) {
    case 0:
    case "ValidatorStatusAbsent":
      return ValidatorStatus.ValidatorStatusAbsent;
    case 1:
    case "ValidatorStatusSubmit":
      return ValidatorStatus.ValidatorStatusSubmit;
    case 2:
    case "ValidatorStatusConsistent":
      return ValidatorStatus.ValidatorStatusConsistent;
    case 3:
    case "ValidatorStatusInconsistent":
      return ValidatorStatus.ValidatorStatusInconsistent;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ValidatorStatus.UNRECOGNIZED;
  }
}
export function validatorStatusToJSON(object: ValidatorStatus): string {
  switch (object) {
    case ValidatorStatus.ValidatorStatusAbsent:
      return "ValidatorStatusAbsent";
    case ValidatorStatus.ValidatorStatusSubmit:
      return "ValidatorStatusSubmit";
    case ValidatorStatus.ValidatorStatusConsistent:
      return "ValidatorStatusConsistent";
    case ValidatorStatus.ValidatorStatusInconsistent:
      return "ValidatorStatusInconsistent";
    case ValidatorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SessionStatus enumerates the statuses of a session. */
export enum SessionStatus {
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
  UNRECOGNIZED = -1,
}
export function sessionStatusFromJSON(object: any): SessionStatus {
  switch (object) {
    case 0:
    case "SESSION_STATUS_DEFAULT":
      return SessionStatus.SESSION_STATUS_DEFAULT;
    case 1:
    case "SESSION_STATUS_PENDING":
      return SessionStatus.SESSION_STATUS_PENDING;
    case 2:
    case "SESSION_STATUS_SUBMITTED":
      return SessionStatus.SESSION_STATUS_SUBMITTED;
    case 3:
    case "SESSION_STATUS_CHALLENGE_SUBMIT_CID":
      return SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_CID;
    case 4:
    case "SESSION_STATUS_CHALLENGE_SUBMIT_REPLY":
      return SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_REPLY;
    case 5:
    case "SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE":
      return SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE;
    case 6:
    case "SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN":
      return SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN;
    case 7:
    case "SESSION_STATUS_CHALLENGE_ARBITRATION":
      return SessionStatus.SESSION_STATUS_CHALLENGE_ARBITRATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SessionStatus.UNRECOGNIZED;
  }
}
export function sessionStatusToJSON(object: SessionStatus): string {
  switch (object) {
    case SessionStatus.SESSION_STATUS_DEFAULT:
      return "SESSION_STATUS_DEFAULT";
    case SessionStatus.SESSION_STATUS_PENDING:
      return "SESSION_STATUS_PENDING";
    case SessionStatus.SESSION_STATUS_SUBMITTED:
      return "SESSION_STATUS_SUBMITTED";
    case SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_CID:
      return "SESSION_STATUS_CHALLENGE_SUBMIT_CID";
    case SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_REPLY:
      return "SESSION_STATUS_CHALLENGE_SUBMIT_REPLY";
    case SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE:
      return "SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE";
    case SessionStatus.SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN:
      return "SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN";
    case SessionStatus.SESSION_STATUS_CHALLENGE_ARBITRATION:
      return "SESSION_STATUS_CHALLENGE_ARBITRATION";
    case SessionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseParams(): Params {
  return {
    agentMinimumLock: Coin.fromPartial({}),
    userMinimumLock: Coin.fromPartial({}),
    sessionTime: Duration.fromPartial({}),
    challengeTime: Duration.fromPartial({}),
    globalSeed: new Uint8Array(),
    lowestAgentVersion: Long.UZERO,
    highestAgentVersion: Long.UZERO,
    challengeRate: Long.UZERO,
    validatorCount: Long.UZERO,
    challengeRound: Long.UZERO,
    challengeCidTime: Duration.fromPartial({}),
    challengeReplyTime: Duration.fromPartial({}),
    challengeMerkleTime: Duration.fromPartial({}),
    challengeOriginTime: Duration.fromPartial({}),
    agentValidTime: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/agent.v1.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentMinimumLock !== undefined) {
      Coin.encode(message.agentMinimumLock, writer.uint32(10).fork()).ldelim();
    }
    if (message.userMinimumLock !== undefined) {
      Coin.encode(message.userMinimumLock, writer.uint32(18).fork()).ldelim();
    }
    if (message.sessionTime !== undefined) {
      Duration.encode(message.sessionTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.challengeTime !== undefined) {
      Duration.encode(message.challengeTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.globalSeed.length !== 0) {
      writer.uint32(42).bytes(message.globalSeed);
    }
    if (!message.lowestAgentVersion.isZero()) {
      writer.uint32(48).uint64(message.lowestAgentVersion);
    }
    if (!message.highestAgentVersion.isZero()) {
      writer.uint32(56).uint64(message.highestAgentVersion);
    }
    if (!message.challengeRate.isZero()) {
      writer.uint32(64).uint64(message.challengeRate);
    }
    if (!message.validatorCount.isZero()) {
      writer.uint32(72).uint64(message.validatorCount);
    }
    if (!message.challengeRound.isZero()) {
      writer.uint32(80).uint64(message.challengeRound);
    }
    if (message.challengeCidTime !== undefined) {
      Duration.encode(message.challengeCidTime, writer.uint32(90).fork()).ldelim();
    }
    if (message.challengeReplyTime !== undefined) {
      Duration.encode(message.challengeReplyTime, writer.uint32(98).fork()).ldelim();
    }
    if (message.challengeMerkleTime !== undefined) {
      Duration.encode(message.challengeMerkleTime, writer.uint32(106).fork()).ldelim();
    }
    if (message.challengeOriginTime !== undefined) {
      Duration.encode(message.challengeOriginTime, writer.uint32(114).fork()).ldelim();
    }
    if (message.agentValidTime !== undefined) {
      Duration.encode(message.agentValidTime, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentMinimumLock = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.userMinimumLock = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.sessionTime = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.challengeTime = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.globalSeed = reader.bytes();
          break;
        case 6:
          message.lowestAgentVersion = reader.uint64() as Long;
          break;
        case 7:
          message.highestAgentVersion = reader.uint64() as Long;
          break;
        case 8:
          message.challengeRate = reader.uint64() as Long;
          break;
        case 9:
          message.validatorCount = reader.uint64() as Long;
          break;
        case 10:
          message.challengeRound = reader.uint64() as Long;
          break;
        case 11:
          message.challengeCidTime = Duration.decode(reader, reader.uint32());
          break;
        case 12:
          message.challengeReplyTime = Duration.decode(reader, reader.uint32());
          break;
        case 13:
          message.challengeMerkleTime = Duration.decode(reader, reader.uint32());
          break;
        case 14:
          message.challengeOriginTime = Duration.decode(reader, reader.uint32());
          break;
        case 15:
          message.agentValidTime = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.agentMinimumLock)) obj.agentMinimumLock = Coin.fromJSON(object.agentMinimumLock);
    if (isSet(object.userMinimumLock)) obj.userMinimumLock = Coin.fromJSON(object.userMinimumLock);
    if (isSet(object.sessionTime)) obj.sessionTime = Duration.fromJSON(object.sessionTime);
    if (isSet(object.challengeTime)) obj.challengeTime = Duration.fromJSON(object.challengeTime);
    if (isSet(object.globalSeed)) obj.globalSeed = bytesFromBase64(object.globalSeed);
    if (isSet(object.lowestAgentVersion)) obj.lowestAgentVersion = Long.fromValue(object.lowestAgentVersion);
    if (isSet(object.highestAgentVersion)) obj.highestAgentVersion = Long.fromValue(object.highestAgentVersion);
    if (isSet(object.challengeRate)) obj.challengeRate = Long.fromValue(object.challengeRate);
    if (isSet(object.validatorCount)) obj.validatorCount = Long.fromValue(object.validatorCount);
    if (isSet(object.challengeRound)) obj.challengeRound = Long.fromValue(object.challengeRound);
    if (isSet(object.challengeCidTime)) obj.challengeCidTime = Duration.fromJSON(object.challengeCidTime);
    if (isSet(object.challengeReplyTime)) obj.challengeReplyTime = Duration.fromJSON(object.challengeReplyTime);
    if (isSet(object.challengeMerkleTime)) obj.challengeMerkleTime = Duration.fromJSON(object.challengeMerkleTime);
    if (isSet(object.challengeOriginTime)) obj.challengeOriginTime = Duration.fromJSON(object.challengeOriginTime);
    if (isSet(object.agentValidTime)) obj.agentValidTime = Duration.fromJSON(object.agentValidTime);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.agentMinimumLock !== undefined && (obj.agentMinimumLock = message.agentMinimumLock ? Coin.toJSON(message.agentMinimumLock) : undefined);
    message.userMinimumLock !== undefined && (obj.userMinimumLock = message.userMinimumLock ? Coin.toJSON(message.userMinimumLock) : undefined);
    message.sessionTime !== undefined && (obj.sessionTime = message.sessionTime ? Duration.toJSON(message.sessionTime) : undefined);
    message.challengeTime !== undefined && (obj.challengeTime = message.challengeTime ? Duration.toJSON(message.challengeTime) : undefined);
    message.globalSeed !== undefined && (obj.globalSeed = base64FromBytes(message.globalSeed !== undefined ? message.globalSeed : new Uint8Array()));
    message.lowestAgentVersion !== undefined && (obj.lowestAgentVersion = (message.lowestAgentVersion || Long.UZERO).toString());
    message.highestAgentVersion !== undefined && (obj.highestAgentVersion = (message.highestAgentVersion || Long.UZERO).toString());
    message.challengeRate !== undefined && (obj.challengeRate = (message.challengeRate || Long.UZERO).toString());
    message.validatorCount !== undefined && (obj.validatorCount = (message.validatorCount || Long.UZERO).toString());
    message.challengeRound !== undefined && (obj.challengeRound = (message.challengeRound || Long.UZERO).toString());
    message.challengeCidTime !== undefined && (obj.challengeCidTime = message.challengeCidTime ? Duration.toJSON(message.challengeCidTime) : undefined);
    message.challengeReplyTime !== undefined && (obj.challengeReplyTime = message.challengeReplyTime ? Duration.toJSON(message.challengeReplyTime) : undefined);
    message.challengeMerkleTime !== undefined && (obj.challengeMerkleTime = message.challengeMerkleTime ? Duration.toJSON(message.challengeMerkleTime) : undefined);
    message.challengeOriginTime !== undefined && (obj.challengeOriginTime = message.challengeOriginTime ? Duration.toJSON(message.challengeOriginTime) : undefined);
    message.agentValidTime !== undefined && (obj.agentValidTime = message.agentValidTime ? Duration.toJSON(message.agentValidTime) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.agentMinimumLock !== undefined && object.agentMinimumLock !== null) {
      message.agentMinimumLock = Coin.fromPartial(object.agentMinimumLock);
    }
    if (object.userMinimumLock !== undefined && object.userMinimumLock !== null) {
      message.userMinimumLock = Coin.fromPartial(object.userMinimumLock);
    }
    if (object.sessionTime !== undefined && object.sessionTime !== null) {
      message.sessionTime = Duration.fromPartial(object.sessionTime);
    }
    if (object.challengeTime !== undefined && object.challengeTime !== null) {
      message.challengeTime = Duration.fromPartial(object.challengeTime);
    }
    message.globalSeed = object.globalSeed ?? new Uint8Array();
    if (object.lowestAgentVersion !== undefined && object.lowestAgentVersion !== null) {
      message.lowestAgentVersion = Long.fromValue(object.lowestAgentVersion);
    }
    if (object.highestAgentVersion !== undefined && object.highestAgentVersion !== null) {
      message.highestAgentVersion = Long.fromValue(object.highestAgentVersion);
    }
    if (object.challengeRate !== undefined && object.challengeRate !== null) {
      message.challengeRate = Long.fromValue(object.challengeRate);
    }
    if (object.validatorCount !== undefined && object.validatorCount !== null) {
      message.validatorCount = Long.fromValue(object.validatorCount);
    }
    if (object.challengeRound !== undefined && object.challengeRound !== null) {
      message.challengeRound = Long.fromValue(object.challengeRound);
    }
    if (object.challengeCidTime !== undefined && object.challengeCidTime !== null) {
      message.challengeCidTime = Duration.fromPartial(object.challengeCidTime);
    }
    if (object.challengeReplyTime !== undefined && object.challengeReplyTime !== null) {
      message.challengeReplyTime = Duration.fromPartial(object.challengeReplyTime);
    }
    if (object.challengeMerkleTime !== undefined && object.challengeMerkleTime !== null) {
      message.challengeMerkleTime = Duration.fromPartial(object.challengeMerkleTime);
    }
    if (object.challengeOriginTime !== undefined && object.challengeOriginTime !== null) {
      message.challengeOriginTime = Duration.fromPartial(object.challengeOriginTime);
    }
    if (object.agentValidTime !== undefined && object.agentValidTime !== null) {
      message.agentValidTime = Duration.fromPartial(object.agentValidTime);
    }
    return message;
  }
};
function createBaseInnerValues(): InnerValues {
  return {
    seed: new Uint8Array()
  };
}
export const InnerValues = {
  typeUrl: "/agent.v1.InnerValues",
  encode(message: InnerValues, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seed.length !== 0) {
      writer.uint32(10).bytes(message.seed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InnerValues {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InnerValues {
    const obj = createBaseInnerValues();
    if (isSet(object.seed)) obj.seed = bytesFromBase64(object.seed);
    return obj;
  },
  toJSON(message: InnerValues): JsonSafe<InnerValues> {
    const obj: any = {};
    message.seed !== undefined && (obj.seed = base64FromBytes(message.seed !== undefined ? message.seed : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InnerValues>, I>>(object: I): InnerValues {
    const message = createBaseInnerValues();
    message.seed = object.seed ?? new Uint8Array();
    return message;
  }
};
function createBasePrestige(): Prestige {
  return {
    count: Long.UZERO,
    total: Long.UZERO
  };
}
export const Prestige = {
  typeUrl: "/agent.v1.Prestige",
  encode(message: Prestige, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.count.isZero()) {
      writer.uint32(8).uint64(message.count);
    }
    if (!message.total.isZero()) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Prestige {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrestige();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint64() as Long;
          break;
        case 2:
          message.total = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Prestige {
    const obj = createBasePrestige();
    if (isSet(object.count)) obj.count = Long.fromValue(object.count);
    if (isSet(object.total)) obj.total = Long.fromValue(object.total);
    return obj;
  },
  toJSON(message: Prestige): JsonSafe<Prestige> {
    const obj: any = {};
    message.count !== undefined && (obj.count = (message.count || Long.UZERO).toString());
    message.total !== undefined && (obj.total = (message.total || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Prestige>, I>>(object: I): Prestige {
    const message = createBasePrestige();
    if (object.count !== undefined && object.count !== null) {
      message.count = Long.fromValue(object.count);
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = Long.fromValue(object.total);
    }
    return message;
  }
};
function createBaseInferenceAgent(): InferenceAgent {
  return {
    account: "",
    url: "",
    version: Long.UZERO,
    prestige: Prestige.fromPartial({}),
    status: 0,
    validUntil: Timestamp.fromPartial({})
  };
}
export const InferenceAgent = {
  typeUrl: "/agent.v1.InferenceAgent",
  encode(message: InferenceAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (!message.version.isZero()) {
      writer.uint32(24).uint64(message.version);
    }
    if (message.prestige !== undefined) {
      Prestige.encode(message.prestige, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.validUntil !== undefined) {
      Timestamp.encode(message.validUntil, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InferenceAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInferenceAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.version = reader.uint64() as Long;
          break;
        case 4:
          message.prestige = Prestige.decode(reader, reader.uint32());
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.validUntil = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InferenceAgent {
    const obj = createBaseInferenceAgent();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.url)) obj.url = String(object.url);
    if (isSet(object.version)) obj.version = Long.fromValue(object.version);
    if (isSet(object.prestige)) obj.prestige = Prestige.fromJSON(object.prestige);
    if (isSet(object.status)) obj.status = agentStatusFromJSON(object.status);
    if (isSet(object.validUntil)) obj.validUntil = fromJsonTimestamp(object.validUntil);
    return obj;
  },
  toJSON(message: InferenceAgent): JsonSafe<InferenceAgent> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.url !== undefined && (obj.url = message.url);
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    message.prestige !== undefined && (obj.prestige = message.prestige ? Prestige.toJSON(message.prestige) : undefined);
    message.status !== undefined && (obj.status = agentStatusToJSON(message.status));
    message.validUntil !== undefined && (obj.validUntil = fromTimestamp(message.validUntil).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InferenceAgent>, I>>(object: I): InferenceAgent {
    const message = createBaseInferenceAgent();
    message.account = object.account ?? "";
    message.url = object.url ?? "";
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromValue(object.version);
    }
    if (object.prestige !== undefined && object.prestige !== null) {
      message.prestige = Prestige.fromPartial(object.prestige);
    }
    message.status = object.status ?? 0;
    if (object.validUntil !== undefined && object.validUntil !== null) {
      message.validUntil = Timestamp.fromPartial(object.validUntil);
    }
    return message;
  }
};
function createBaseAgentModel(): AgentModel {
  return {
    account: "",
    modelName: "",
    lock: Long.UZERO,
    status: 0
  };
}
export const AgentModel = {
  typeUrl: "/agent.v1.AgentModel",
  encode(message: AgentModel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.modelName !== "") {
      writer.uint32(18).string(message.modelName);
    }
    if (!message.lock.isZero()) {
      writer.uint32(24).uint64(message.lock);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AgentModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgentModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.modelName = reader.string();
          break;
        case 3:
          message.lock = reader.uint64() as Long;
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AgentModel {
    const obj = createBaseAgentModel();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.lock)) obj.lock = Long.fromValue(object.lock);
    if (isSet(object.status)) obj.status = agentModelStatusFromJSON(object.status);
    return obj;
  },
  toJSON(message: AgentModel): JsonSafe<AgentModel> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.lock !== undefined && (obj.lock = (message.lock || Long.UZERO).toString());
    message.status !== undefined && (obj.status = agentModelStatusToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AgentModel>, I>>(object: I): AgentModel {
    const message = createBaseAgentModel();
    message.account = object.account ?? "";
    message.modelName = object.modelName ?? "";
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = Long.fromValue(object.lock);
    }
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseTokenPrice(): TokenPrice {
  return {
    inputPrice: Coin.fromPartial({}),
    outputPrice: Coin.fromPartial({})
  };
}
export const TokenPrice = {
  typeUrl: "/agent.v1.TokenPrice",
  encode(message: TokenPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputPrice !== undefined) {
      Coin.encode(message.inputPrice, writer.uint32(10).fork()).ldelim();
    }
    if (message.outputPrice !== undefined) {
      Coin.encode(message.outputPrice, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputPrice = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.outputPrice = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenPrice {
    const obj = createBaseTokenPrice();
    if (isSet(object.inputPrice)) obj.inputPrice = Coin.fromJSON(object.inputPrice);
    if (isSet(object.outputPrice)) obj.outputPrice = Coin.fromJSON(object.outputPrice);
    return obj;
  },
  toJSON(message: TokenPrice): JsonSafe<TokenPrice> {
    const obj: any = {};
    message.inputPrice !== undefined && (obj.inputPrice = message.inputPrice ? Coin.toJSON(message.inputPrice) : undefined);
    message.outputPrice !== undefined && (obj.outputPrice = message.outputPrice ? Coin.toJSON(message.outputPrice) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TokenPrice>, I>>(object: I): TokenPrice {
    const message = createBaseTokenPrice();
    if (object.inputPrice !== undefined && object.inputPrice !== null) {
      message.inputPrice = Coin.fromPartial(object.inputPrice);
    }
    if (object.outputPrice !== undefined && object.outputPrice !== null) {
      message.outputPrice = Coin.fromPartial(object.outputPrice);
    }
    return message;
  }
};
function createBasePaymentContribution(): PaymentContribution {
  return {
    account: "",
    rate: Long.UZERO,
    amount: undefined
  };
}
export const PaymentContribution = {
  typeUrl: "/agent.v1.PaymentContribution",
  encode(message: PaymentContribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (!message.rate.isZero()) {
      writer.uint32(16).uint64(message.rate);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentContribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentContribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.rate = reader.uint64() as Long;
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PaymentContribution {
    const obj = createBasePaymentContribution();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.rate)) obj.rate = Long.fromValue(object.rate);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: PaymentContribution): JsonSafe<PaymentContribution> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.rate !== undefined && (obj.rate = (message.rate || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PaymentContribution>, I>>(object: I): PaymentContribution {
    const message = createBasePaymentContribution();
    message.account = object.account ?? "";
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = Long.fromValue(object.rate);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  }
};
function createBasePayment(): Payment {
  return {
    inputTokens: [],
    outputTokens: [],
    merkleRoot: new Uint8Array(),
    contributions: []
  };
}
export const Payment = {
  typeUrl: "/agent.v1.Payment",
  encode(message: Payment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.inputTokens) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.outputTokens) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.merkleRoot.length !== 0) {
      writer.uint32(26).bytes(message.merkleRoot);
    }
    for (const v of message.contributions) {
      PaymentContribution.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.inputTokens.push(reader.uint64() as Long);
            }
          } else {
            message.inputTokens.push(reader.uint64() as Long);
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.outputTokens.push(reader.uint64() as Long);
            }
          } else {
            message.outputTokens.push(reader.uint64() as Long);
          }
          break;
        case 3:
          message.merkleRoot = reader.bytes();
          break;
        case 4:
          message.contributions.push(PaymentContribution.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Payment {
    const obj = createBasePayment();
    if (Array.isArray(object?.inputTokens)) obj.inputTokens = object.inputTokens.map((e: any) => Long.fromValue(e));
    if (Array.isArray(object?.outputTokens)) obj.outputTokens = object.outputTokens.map((e: any) => Long.fromValue(e));
    if (isSet(object.merkleRoot)) obj.merkleRoot = bytesFromBase64(object.merkleRoot);
    if (Array.isArray(object?.contributions)) obj.contributions = object.contributions.map((e: any) => PaymentContribution.fromJSON(e));
    return obj;
  },
  toJSON(message: Payment): JsonSafe<Payment> {
    const obj: any = {};
    if (message.inputTokens) {
      obj.inputTokens = message.inputTokens.map(e => (e || Long.UZERO).toString());
    } else {
      obj.inputTokens = [];
    }
    if (message.outputTokens) {
      obj.outputTokens = message.outputTokens.map(e => (e || Long.UZERO).toString());
    } else {
      obj.outputTokens = [];
    }
    message.merkleRoot !== undefined && (obj.merkleRoot = base64FromBytes(message.merkleRoot !== undefined ? message.merkleRoot : new Uint8Array()));
    if (message.contributions) {
      obj.contributions = message.contributions.map(e => e ? PaymentContribution.toJSON(e) : undefined);
    } else {
      obj.contributions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Payment>, I>>(object: I): Payment {
    const message = createBasePayment();
    message.inputTokens = object.inputTokens?.map(e => Long.fromValue(e)) || [];
    message.outputTokens = object.outputTokens?.map(e => Long.fromValue(e)) || [];
    message.merkleRoot = object.merkleRoot ?? new Uint8Array();
    message.contributions = object.contributions?.map(e => PaymentContribution.fromPartial(e)) || [];
    return message;
  }
};
function createBaseChallengeValidator(): ChallengeValidator {
  return {
    account: "",
    hash: new Uint8Array(),
    originHash: new Uint8Array(),
    status: 0
  };
}
export const ChallengeValidator = {
  typeUrl: "/agent.v1.ChallengeValidator",
  encode(message: ChallengeValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    if (message.originHash.length !== 0) {
      writer.uint32(26).bytes(message.originHash);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        case 3:
          message.originHash = reader.bytes();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChallengeValidator {
    const obj = createBaseChallengeValidator();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.originHash)) obj.originHash = bytesFromBase64(object.originHash);
    if (isSet(object.status)) obj.status = validatorStatusFromJSON(object.status);
    return obj;
  },
  toJSON(message: ChallengeValidator): JsonSafe<ChallengeValidator> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.originHash !== undefined && (obj.originHash = base64FromBytes(message.originHash !== undefined ? message.originHash : new Uint8Array()));
    message.status !== undefined && (obj.status = validatorStatusToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChallengeValidator>, I>>(object: I): ChallengeValidator {
    const message = createBaseChallengeValidator();
    message.account = object.account ?? "";
    message.hash = object.hash ?? new Uint8Array();
    message.originHash = object.originHash ?? new Uint8Array();
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseChallengeInfo(): ChallengeInfo {
  return {
    questionId: Long.UZERO,
    cid: "",
    answerHash: new Uint8Array(),
    cutMerkle: [],
    validators: [],
    hashCount: Long.UZERO
  };
}
export const ChallengeInfo = {
  typeUrl: "/agent.v1.ChallengeInfo",
  encode(message: ChallengeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.questionId.isZero()) {
      writer.uint32(8).uint64(message.questionId);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    if (message.answerHash.length !== 0) {
      writer.uint32(26).bytes(message.answerHash);
    }
    for (const v of message.cutMerkle) {
      writer.uint32(34).bytes(v!);
    }
    for (const v of message.validators) {
      ChallengeValidator.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.hashCount.isZero()) {
      writer.uint32(48).uint64(message.hashCount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questionId = reader.uint64() as Long;
          break;
        case 2:
          message.cid = reader.string();
          break;
        case 3:
          message.answerHash = reader.bytes();
          break;
        case 4:
          message.cutMerkle.push(reader.bytes());
          break;
        case 5:
          message.validators.push(ChallengeValidator.decode(reader, reader.uint32()));
          break;
        case 6:
          message.hashCount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChallengeInfo {
    const obj = createBaseChallengeInfo();
    if (isSet(object.questionId)) obj.questionId = Long.fromValue(object.questionId);
    if (isSet(object.cid)) obj.cid = String(object.cid);
    if (isSet(object.answerHash)) obj.answerHash = bytesFromBase64(object.answerHash);
    if (Array.isArray(object?.cutMerkle)) obj.cutMerkle = object.cutMerkle.map((e: any) => bytesFromBase64(e));
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => ChallengeValidator.fromJSON(e));
    if (isSet(object.hashCount)) obj.hashCount = Long.fromValue(object.hashCount);
    return obj;
  },
  toJSON(message: ChallengeInfo): JsonSafe<ChallengeInfo> {
    const obj: any = {};
    message.questionId !== undefined && (obj.questionId = (message.questionId || Long.UZERO).toString());
    message.cid !== undefined && (obj.cid = message.cid);
    message.answerHash !== undefined && (obj.answerHash = base64FromBytes(message.answerHash !== undefined ? message.answerHash : new Uint8Array()));
    if (message.cutMerkle) {
      obj.cutMerkle = message.cutMerkle.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.cutMerkle = [];
    }
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ChallengeValidator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.hashCount !== undefined && (obj.hashCount = (message.hashCount || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChallengeInfo>, I>>(object: I): ChallengeInfo {
    const message = createBaseChallengeInfo();
    if (object.questionId !== undefined && object.questionId !== null) {
      message.questionId = Long.fromValue(object.questionId);
    }
    message.cid = object.cid ?? "";
    message.answerHash = object.answerHash ?? new Uint8Array();
    message.cutMerkle = object.cutMerkle?.map(e => e) || [];
    message.validators = object.validators?.map(e => ChallengeValidator.fromPartial(e)) || [];
    if (object.hashCount !== undefined && object.hashCount !== null) {
      message.hashCount = Long.fromValue(object.hashCount);
    }
    return message;
  }
};
function createBaseSession(): Session {
  return {
    sessionId: "",
    account: "",
    modelName: "",
    agentAccount: "",
    userLock: Coin.fromPartial({}),
    minerLock: Coin.fromPartial({}),
    tokenPrice: TokenPrice.fromPartial({}),
    expirationAt: Timestamp.fromPartial({}),
    payment: undefined,
    status: 0,
    challengeInfo: []
  };
}
export const Session = {
  typeUrl: "/agent.v1.Session",
  encode(message: Session, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.modelName !== "") {
      writer.uint32(26).string(message.modelName);
    }
    if (message.agentAccount !== "") {
      writer.uint32(34).string(message.agentAccount);
    }
    if (message.userLock !== undefined) {
      Coin.encode(message.userLock, writer.uint32(42).fork()).ldelim();
    }
    if (message.minerLock !== undefined) {
      Coin.encode(message.minerLock, writer.uint32(50).fork()).ldelim();
    }
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(58).fork()).ldelim();
    }
    if (message.expirationAt !== undefined) {
      Timestamp.encode(message.expirationAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.payment !== undefined) {
      Payment.encode(message.payment, writer.uint32(74).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    for (const v of message.challengeInfo) {
      ChallengeInfo.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Session {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.modelName = reader.string();
          break;
        case 4:
          message.agentAccount = reader.string();
          break;
        case 5:
          message.userLock = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.minerLock = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        case 8:
          message.expirationAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.payment = Payment.decode(reader, reader.uint32());
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.challengeInfo.push(ChallengeInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Session {
    const obj = createBaseSession();
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.agentAccount)) obj.agentAccount = String(object.agentAccount);
    if (isSet(object.userLock)) obj.userLock = Coin.fromJSON(object.userLock);
    if (isSet(object.minerLock)) obj.minerLock = Coin.fromJSON(object.minerLock);
    if (isSet(object.tokenPrice)) obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
    if (isSet(object.expirationAt)) obj.expirationAt = fromJsonTimestamp(object.expirationAt);
    if (isSet(object.payment)) obj.payment = Payment.fromJSON(object.payment);
    if (isSet(object.status)) obj.status = sessionStatusFromJSON(object.status);
    if (Array.isArray(object?.challengeInfo)) obj.challengeInfo = object.challengeInfo.map((e: any) => ChallengeInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: Session): JsonSafe<Session> {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.agentAccount !== undefined && (obj.agentAccount = message.agentAccount);
    message.userLock !== undefined && (obj.userLock = message.userLock ? Coin.toJSON(message.userLock) : undefined);
    message.minerLock !== undefined && (obj.minerLock = message.minerLock ? Coin.toJSON(message.minerLock) : undefined);
    message.tokenPrice !== undefined && (obj.tokenPrice = message.tokenPrice ? TokenPrice.toJSON(message.tokenPrice) : undefined);
    message.expirationAt !== undefined && (obj.expirationAt = fromTimestamp(message.expirationAt).toISOString());
    message.payment !== undefined && (obj.payment = message.payment ? Payment.toJSON(message.payment) : undefined);
    message.status !== undefined && (obj.status = sessionStatusToJSON(message.status));
    if (message.challengeInfo) {
      obj.challengeInfo = message.challengeInfo.map(e => e ? ChallengeInfo.toJSON(e) : undefined);
    } else {
      obj.challengeInfo = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Session>, I>>(object: I): Session {
    const message = createBaseSession();
    message.sessionId = object.sessionId ?? "";
    message.account = object.account ?? "";
    message.modelName = object.modelName ?? "";
    message.agentAccount = object.agentAccount ?? "";
    if (object.userLock !== undefined && object.userLock !== null) {
      message.userLock = Coin.fromPartial(object.userLock);
    }
    if (object.minerLock !== undefined && object.minerLock !== null) {
      message.minerLock = Coin.fromPartial(object.minerLock);
    }
    if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
      message.tokenPrice = TokenPrice.fromPartial(object.tokenPrice);
    }
    if (object.expirationAt !== undefined && object.expirationAt !== null) {
      message.expirationAt = Timestamp.fromPartial(object.expirationAt);
    }
    if (object.payment !== undefined && object.payment !== null) {
      message.payment = Payment.fromPartial(object.payment);
    }
    message.status = object.status ?? 0;
    message.challengeInfo = object.challengeInfo?.map(e => ChallengeInfo.fromPartial(e)) || [];
    return message;
  }
};
function createBaseVrfSeed(): VrfSeed {
  return {
    account: "",
    seed: new Uint8Array()
  };
}
export const VrfSeed = {
  typeUrl: "/agent.v1.VrfSeed",
  encode(message: VrfSeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.seed.length !== 0) {
      writer.uint32(18).bytes(message.seed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VrfSeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVrfSeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.seed = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VrfSeed {
    const obj = createBaseVrfSeed();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.seed)) obj.seed = bytesFromBase64(object.seed);
    return obj;
  },
  toJSON(message: VrfSeed): JsonSafe<VrfSeed> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.seed !== undefined && (obj.seed = base64FromBytes(message.seed !== undefined ? message.seed : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VrfSeed>, I>>(object: I): VrfSeed {
    const message = createBaseVrfSeed();
    message.account = object.account ?? "";
    message.seed = object.seed ?? new Uint8Array();
    return message;
  }
};