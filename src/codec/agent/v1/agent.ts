/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "agent.v1";

export enum AgentStatus {
  AGENT_STATUS_ACTIVE = 0,
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

export enum AgentModelStatus {
  AGENT_MODEL_STATUS_ACTIVE = 0,
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

export enum ValidatorStatus {
  ValidatorStatusAbsent = 0,
  ValidatorStatusSubmit = 1,
  ValidatorStatusConsistent = 2,
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

export enum SessionStatus {
  SESSION_STATUS_DEFAULT = 0,
  SESSION_STATUS_PENDING = 1,
  SESSION_STATUS_SUBMITTED = 2,
  SESSION_STATUS_CHALLENGE_SUBMIT_CID = 3,
  SESSION_STATUS_CHALLENGE_SUBMIT_REPLY = 4,
  SESSION_STATUS_CHALLENGE_SUBMIT_MERKLE = 5,
  SESSION_STATUS_CHALLENGE_SUBMIT_ORIGIN = 6,
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

export interface Params {
  /** The minimum coins that needs to be locked when an inference agent registers */
  agentMinimumLock?: Coin;
  /** The minimum coins that needs to be locked when user registers a session */
  userMinimumLock?: Coin;
  /**
   * When the session is created, the time period that inference agent can submit payment.
   * After this period, the session will be automatically canceled.
   */
  sessionTime?: Duration;
  /**
   * When the payment is submitted, the time period can be challenged.
   * After this time window, the agent receives the reward specified by the session payment.
   */
  challengeTime?: Duration;
  globalSeed: Uint8Array;
  lowestAgentVersion: Long;
  highestAgentVersion: Long;
  challengeRate: Long;
  validatorCount: Long;
  challengeRound: Long;
  challengeCidTime?: Duration;
  challengeReplyTime?: Duration;
  challengeMerkleTime?: Duration;
  challengeOriginTime?: Duration;
  agentValidTime?: Duration;
  tokenPrice: Long;
}

export interface InnerValues {
  seed: Uint8Array;
}

export interface Model {
  name: string;
  repositoryUrl: string;
}

export interface Prestige {
  count: Long;
  total: Long;
}

export interface InferenceAgent {
  account: string;
  url: string;
  version: Long;
  prestige?: Prestige;
  status: AgentStatus;
  validUntil?: Date;
}

export interface AgentModel {
  account: string;
  modelName: string;
  lock: Long;
  status: AgentModelStatus;
}

export interface PaymentContribution {
  account: string;
  rate: Long;
  amount?: Coin;
}

export interface Payment {
  tokens: Long[];
  totalPayment?: Coin;
  merkleRoot: Uint8Array;
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

export interface ChallengeInfo {
  questionId: Long;
  cid: string;
  answerHash: Uint8Array;
  cutMerkle: Uint8Array[];
  /** validators */
  validators: ChallengeValidator[];
  hashCount: Long;
}

export interface Session {
  sessionId: string;
  account: string;
  modelName: string;
  agentAccount: string;
  userLock?: Coin;
  minerLock?: Coin;
  tokenPrice: Long;
  expirationAt?: Date;
  payment?: Payment;
  status: SessionStatus;
  challengeInfo: ChallengeInfo[];
}

export interface VrfSeed {
  account: string;
  seed: Uint8Array;
}

function createBaseParams(): Params {
  return {
    agentMinimumLock: undefined,
    userMinimumLock: undefined,
    sessionTime: undefined,
    challengeTime: undefined,
    globalSeed: new Uint8Array(),
    lowestAgentVersion: Long.UZERO,
    highestAgentVersion: Long.UZERO,
    challengeRate: Long.UZERO,
    validatorCount: Long.UZERO,
    challengeRound: Long.UZERO,
    challengeCidTime: undefined,
    challengeReplyTime: undefined,
    challengeMerkleTime: undefined,
    challengeOriginTime: undefined,
    agentValidTime: undefined,
    tokenPrice: Long.UZERO,
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Duration.encode(
        message.challengeCidTime,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.challengeReplyTime !== undefined) {
      Duration.encode(
        message.challengeReplyTime,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.challengeMerkleTime !== undefined) {
      Duration.encode(
        message.challengeMerkleTime,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.challengeOriginTime !== undefined) {
      Duration.encode(
        message.challengeOriginTime,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.agentValidTime !== undefined) {
      Duration.encode(
        message.agentValidTime,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (!message.tokenPrice.isZero()) {
      writer.uint32(128).uint64(message.tokenPrice);
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
          message.challengeMerkleTime = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.challengeOriginTime = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.agentValidTime = Duration.decode(reader, reader.uint32());
          break;
        case 16:
          message.tokenPrice = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      agentMinimumLock: isSet(object.agentMinimumLock)
        ? Coin.fromJSON(object.agentMinimumLock)
        : undefined,
      userMinimumLock: isSet(object.userMinimumLock)
        ? Coin.fromJSON(object.userMinimumLock)
        : undefined,
      sessionTime: isSet(object.sessionTime)
        ? Duration.fromJSON(object.sessionTime)
        : undefined,
      challengeTime: isSet(object.challengeTime)
        ? Duration.fromJSON(object.challengeTime)
        : undefined,
      globalSeed: isSet(object.globalSeed)
        ? bytesFromBase64(object.globalSeed)
        : new Uint8Array(),
      lowestAgentVersion: isSet(object.lowestAgentVersion)
        ? Long.fromValue(object.lowestAgentVersion)
        : Long.UZERO,
      highestAgentVersion: isSet(object.highestAgentVersion)
        ? Long.fromValue(object.highestAgentVersion)
        : Long.UZERO,
      challengeRate: isSet(object.challengeRate)
        ? Long.fromValue(object.challengeRate)
        : Long.UZERO,
      validatorCount: isSet(object.validatorCount)
        ? Long.fromValue(object.validatorCount)
        : Long.UZERO,
      challengeRound: isSet(object.challengeRound)
        ? Long.fromValue(object.challengeRound)
        : Long.UZERO,
      challengeCidTime: isSet(object.challengeCidTime)
        ? Duration.fromJSON(object.challengeCidTime)
        : undefined,
      challengeReplyTime: isSet(object.challengeReplyTime)
        ? Duration.fromJSON(object.challengeReplyTime)
        : undefined,
      challengeMerkleTime: isSet(object.challengeMerkleTime)
        ? Duration.fromJSON(object.challengeMerkleTime)
        : undefined,
      challengeOriginTime: isSet(object.challengeOriginTime)
        ? Duration.fromJSON(object.challengeOriginTime)
        : undefined,
      agentValidTime: isSet(object.agentValidTime)
        ? Duration.fromJSON(object.agentValidTime)
        : undefined,
      tokenPrice: isSet(object.tokenPrice)
        ? Long.fromValue(object.tokenPrice)
        : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.agentMinimumLock !== undefined &&
      (obj.agentMinimumLock = message.agentMinimumLock
        ? Coin.toJSON(message.agentMinimumLock)
        : undefined);
    message.userMinimumLock !== undefined &&
      (obj.userMinimumLock = message.userMinimumLock
        ? Coin.toJSON(message.userMinimumLock)
        : undefined);
    message.sessionTime !== undefined &&
      (obj.sessionTime = message.sessionTime
        ? Duration.toJSON(message.sessionTime)
        : undefined);
    message.challengeTime !== undefined &&
      (obj.challengeTime = message.challengeTime
        ? Duration.toJSON(message.challengeTime)
        : undefined);
    message.globalSeed !== undefined &&
      (obj.globalSeed = base64FromBytes(
        message.globalSeed !== undefined ? message.globalSeed : new Uint8Array()
      ));
    message.lowestAgentVersion !== undefined &&
      (obj.lowestAgentVersion = (
        message.lowestAgentVersion || Long.UZERO
      ).toString());
    message.highestAgentVersion !== undefined &&
      (obj.highestAgentVersion = (
        message.highestAgentVersion || Long.UZERO
      ).toString());
    message.challengeRate !== undefined &&
      (obj.challengeRate = (message.challengeRate || Long.UZERO).toString());
    message.validatorCount !== undefined &&
      (obj.validatorCount = (message.validatorCount || Long.UZERO).toString());
    message.challengeRound !== undefined &&
      (obj.challengeRound = (message.challengeRound || Long.UZERO).toString());
    message.challengeCidTime !== undefined &&
      (obj.challengeCidTime = message.challengeCidTime
        ? Duration.toJSON(message.challengeCidTime)
        : undefined);
    message.challengeReplyTime !== undefined &&
      (obj.challengeReplyTime = message.challengeReplyTime
        ? Duration.toJSON(message.challengeReplyTime)
        : undefined);
    message.challengeMerkleTime !== undefined &&
      (obj.challengeMerkleTime = message.challengeMerkleTime
        ? Duration.toJSON(message.challengeMerkleTime)
        : undefined);
    message.challengeOriginTime !== undefined &&
      (obj.challengeOriginTime = message.challengeOriginTime
        ? Duration.toJSON(message.challengeOriginTime)
        : undefined);
    message.agentValidTime !== undefined &&
      (obj.agentValidTime = message.agentValidTime
        ? Duration.toJSON(message.agentValidTime)
        : undefined);
    message.tokenPrice !== undefined &&
      (obj.tokenPrice = (message.tokenPrice || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.agentMinimumLock =
      object.agentMinimumLock !== undefined && object.agentMinimumLock !== null
        ? Coin.fromPartial(object.agentMinimumLock)
        : undefined;
    message.userMinimumLock =
      object.userMinimumLock !== undefined && object.userMinimumLock !== null
        ? Coin.fromPartial(object.userMinimumLock)
        : undefined;
    message.sessionTime =
      object.sessionTime !== undefined && object.sessionTime !== null
        ? Duration.fromPartial(object.sessionTime)
        : undefined;
    message.challengeTime =
      object.challengeTime !== undefined && object.challengeTime !== null
        ? Duration.fromPartial(object.challengeTime)
        : undefined;
    message.globalSeed = object.globalSeed ?? new Uint8Array();
    message.lowestAgentVersion =
      object.lowestAgentVersion !== undefined &&
      object.lowestAgentVersion !== null
        ? Long.fromValue(object.lowestAgentVersion)
        : Long.UZERO;
    message.highestAgentVersion =
      object.highestAgentVersion !== undefined &&
      object.highestAgentVersion !== null
        ? Long.fromValue(object.highestAgentVersion)
        : Long.UZERO;
    message.challengeRate =
      object.challengeRate !== undefined && object.challengeRate !== null
        ? Long.fromValue(object.challengeRate)
        : Long.UZERO;
    message.validatorCount =
      object.validatorCount !== undefined && object.validatorCount !== null
        ? Long.fromValue(object.validatorCount)
        : Long.UZERO;
    message.challengeRound =
      object.challengeRound !== undefined && object.challengeRound !== null
        ? Long.fromValue(object.challengeRound)
        : Long.UZERO;
    message.challengeCidTime =
      object.challengeCidTime !== undefined && object.challengeCidTime !== null
        ? Duration.fromPartial(object.challengeCidTime)
        : undefined;
    message.challengeReplyTime =
      object.challengeReplyTime !== undefined &&
      object.challengeReplyTime !== null
        ? Duration.fromPartial(object.challengeReplyTime)
        : undefined;
    message.challengeMerkleTime =
      object.challengeMerkleTime !== undefined &&
      object.challengeMerkleTime !== null
        ? Duration.fromPartial(object.challengeMerkleTime)
        : undefined;
    message.challengeOriginTime =
      object.challengeOriginTime !== undefined &&
      object.challengeOriginTime !== null
        ? Duration.fromPartial(object.challengeOriginTime)
        : undefined;
    message.agentValidTime =
      object.agentValidTime !== undefined && object.agentValidTime !== null
        ? Duration.fromPartial(object.agentValidTime)
        : undefined;
    message.tokenPrice =
      object.tokenPrice !== undefined && object.tokenPrice !== null
        ? Long.fromValue(object.tokenPrice)
        : Long.UZERO;
    return message;
  },
};

function createBaseInnerValues(): InnerValues {
  return { seed: new Uint8Array() };
}

export const InnerValues = {
  encode(
    message: InnerValues,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      seed: isSet(object.seed)
        ? bytesFromBase64(object.seed)
        : new Uint8Array(),
    };
  },

  toJSON(message: InnerValues): unknown {
    const obj: any = {};
    message.seed !== undefined &&
      (obj.seed = base64FromBytes(
        message.seed !== undefined ? message.seed : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InnerValues>, I>>(
    object: I
  ): InnerValues {
    const message = createBaseInnerValues();
    message.seed = object.seed ?? new Uint8Array();
    return message;
  },
};

function createBaseModel(): Model {
  return { name: "", repositoryUrl: "" };
}

export const Model = {
  encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.repositoryUrl !== "") {
      writer.uint32(18).string(message.repositoryUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Model {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.repositoryUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Model {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      repositoryUrl: isSet(object.repositoryUrl)
        ? String(object.repositoryUrl)
        : "",
    };
  },

  toJSON(message: Model): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.repositoryUrl !== undefined &&
      (obj.repositoryUrl = message.repositoryUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Model>, I>>(object: I): Model {
    const message = createBaseModel();
    message.name = object.name ?? "";
    message.repositoryUrl = object.repositoryUrl ?? "";
    return message;
  },
};

function createBasePrestige(): Prestige {
  return { count: Long.UZERO, total: Long.UZERO };
}

export const Prestige = {
  encode(
    message: Prestige,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO,
      total: isSet(object.total) ? Long.fromValue(object.total) : Long.UZERO,
    };
  },

  toJSON(message: Prestige): unknown {
    const obj: any = {};
    message.count !== undefined &&
      (obj.count = (message.count || Long.UZERO).toString());
    message.total !== undefined &&
      (obj.total = (message.total || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Prestige>, I>>(object: I): Prestige {
    const message = createBasePrestige();
    message.count =
      object.count !== undefined && object.count !== null
        ? Long.fromValue(object.count)
        : Long.UZERO;
    message.total =
      object.total !== undefined && object.total !== null
        ? Long.fromValue(object.total)
        : Long.UZERO;
    return message;
  },
};

function createBaseInferenceAgent(): InferenceAgent {
  return {
    account: "",
    url: "",
    version: Long.UZERO,
    prestige: undefined,
    status: 0,
    validUntil: undefined,
  };
}

export const InferenceAgent = {
  encode(
    message: InferenceAgent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.validUntil),
        writer.uint32(50).fork()
      ).ldelim();
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
          message.validUntil = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InferenceAgent {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      url: isSet(object.url) ? String(object.url) : "",
      version: isSet(object.version)
        ? Long.fromValue(object.version)
        : Long.UZERO,
      prestige: isSet(object.prestige)
        ? Prestige.fromJSON(object.prestige)
        : undefined,
      status: isSet(object.status) ? agentStatusFromJSON(object.status) : 0,
      validUntil: isSet(object.validUntil)
        ? fromJsonTimestamp(object.validUntil)
        : undefined,
    };
  },

  toJSON(message: InferenceAgent): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.url !== undefined && (obj.url = message.url);
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.prestige !== undefined &&
      (obj.prestige = message.prestige
        ? Prestige.toJSON(message.prestige)
        : undefined);
    message.status !== undefined &&
      (obj.status = agentStatusToJSON(message.status));
    message.validUntil !== undefined &&
      (obj.validUntil = message.validUntil.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InferenceAgent>, I>>(
    object: I
  ): InferenceAgent {
    const message = createBaseInferenceAgent();
    message.account = object.account ?? "";
    message.url = object.url ?? "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    message.prestige =
      object.prestige !== undefined && object.prestige !== null
        ? Prestige.fromPartial(object.prestige)
        : undefined;
    message.status = object.status ?? 0;
    message.validUntil = object.validUntil ?? undefined;
    return message;
  },
};

function createBaseAgentModel(): AgentModel {
  return { account: "", modelName: "", lock: Long.UZERO, status: 0 };
}

export const AgentModel = {
  encode(
    message: AgentModel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      account: isSet(object.account) ? String(object.account) : "",
      modelName: isSet(object.modelName) ? String(object.modelName) : "",
      lock: isSet(object.lock) ? Long.fromValue(object.lock) : Long.UZERO,
      status: isSet(object.status)
        ? agentModelStatusFromJSON(object.status)
        : 0,
    };
  },

  toJSON(message: AgentModel): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.lock !== undefined &&
      (obj.lock = (message.lock || Long.UZERO).toString());
    message.status !== undefined &&
      (obj.status = agentModelStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AgentModel>, I>>(
    object: I
  ): AgentModel {
    const message = createBaseAgentModel();
    message.account = object.account ?? "";
    message.modelName = object.modelName ?? "";
    message.lock =
      object.lock !== undefined && object.lock !== null
        ? Long.fromValue(object.lock)
        : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBasePaymentContribution(): PaymentContribution {
  return { account: "", rate: Long.UZERO, amount: undefined };
}

export const PaymentContribution = {
  encode(
    message: PaymentContribution,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      account: isSet(object.account) ? String(object.account) : "",
      rate: isSet(object.rate) ? Long.fromValue(object.rate) : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: PaymentContribution): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.rate !== undefined &&
      (obj.rate = (message.rate || Long.UZERO).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PaymentContribution>, I>>(
    object: I
  ): PaymentContribution {
    const message = createBasePaymentContribution();
    message.account = object.account ?? "";
    message.rate =
      object.rate !== undefined && object.rate !== null
        ? Long.fromValue(object.rate)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBasePayment(): Payment {
  return {
    tokens: [],
    totalPayment: undefined,
    merkleRoot: new Uint8Array(),
    contributions: [],
  };
}

export const Payment = {
  encode(
    message: Payment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.tokens) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.totalPayment !== undefined) {
      Coin.encode(message.totalPayment, writer.uint32(18).fork()).ldelim();
    }
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
              message.tokens.push(reader.uint64() as Long);
            }
          } else {
            message.tokens.push(reader.uint64() as Long);
          }
          break;
        case 2:
          message.totalPayment = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.merkleRoot = reader.bytes();
          break;
        case 4:
          message.contributions.push(
            PaymentContribution.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Payment {
    return {
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => Long.fromValue(e))
        : [],
      totalPayment: isSet(object.totalPayment)
        ? Coin.fromJSON(object.totalPayment)
        : undefined,
      merkleRoot: isSet(object.merkleRoot)
        ? bytesFromBase64(object.merkleRoot)
        : new Uint8Array(),
      contributions: Array.isArray(object?.contributions)
        ? object.contributions.map((e: any) => PaymentContribution.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Payment): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.tokens = [];
    }
    message.totalPayment !== undefined &&
      (obj.totalPayment = message.totalPayment
        ? Coin.toJSON(message.totalPayment)
        : undefined);
    message.merkleRoot !== undefined &&
      (obj.merkleRoot = base64FromBytes(
        message.merkleRoot !== undefined ? message.merkleRoot : new Uint8Array()
      ));
    if (message.contributions) {
      obj.contributions = message.contributions.map((e) =>
        e ? PaymentContribution.toJSON(e) : undefined
      );
    } else {
      obj.contributions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Payment>, I>>(object: I): Payment {
    const message = createBasePayment();
    message.tokens = object.tokens?.map((e) => Long.fromValue(e)) || [];
    message.totalPayment =
      object.totalPayment !== undefined && object.totalPayment !== null
        ? Coin.fromPartial(object.totalPayment)
        : undefined;
    message.merkleRoot = object.merkleRoot ?? new Uint8Array();
    message.contributions =
      object.contributions?.map((e) => PaymentContribution.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseChallengeValidator(): ChallengeValidator {
  return {
    account: "",
    hash: new Uint8Array(),
    originHash: new Uint8Array(),
    status: 0,
  };
}

export const ChallengeValidator = {
  encode(
    message: ChallengeValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      account: isSet(object.account) ? String(object.account) : "",
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      originHash: isSet(object.originHash)
        ? bytesFromBase64(object.originHash)
        : new Uint8Array(),
      status: isSet(object.status) ? validatorStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: ChallengeValidator): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.originHash !== undefined &&
      (obj.originHash = base64FromBytes(
        message.originHash !== undefined ? message.originHash : new Uint8Array()
      ));
    message.status !== undefined &&
      (obj.status = validatorStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeValidator>, I>>(
    object: I
  ): ChallengeValidator {
    const message = createBaseChallengeValidator();
    message.account = object.account ?? "";
    message.hash = object.hash ?? new Uint8Array();
    message.originHash = object.originHash ?? new Uint8Array();
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseChallengeInfo(): ChallengeInfo {
  return {
    questionId: Long.UZERO,
    cid: "",
    answerHash: new Uint8Array(),
    cutMerkle: [],
    validators: [],
    hashCount: Long.UZERO,
  };
}

export const ChallengeInfo = {
  encode(
    message: ChallengeInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
          message.validators.push(
            ChallengeValidator.decode(reader, reader.uint32())
          );
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
    return {
      questionId: isSet(object.questionId)
        ? Long.fromValue(object.questionId)
        : Long.UZERO,
      cid: isSet(object.cid) ? String(object.cid) : "",
      answerHash: isSet(object.answerHash)
        ? bytesFromBase64(object.answerHash)
        : new Uint8Array(),
      cutMerkle: Array.isArray(object?.cutMerkle)
        ? object.cutMerkle.map((e: any) => bytesFromBase64(e))
        : [],
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => ChallengeValidator.fromJSON(e))
        : [],
      hashCount: isSet(object.hashCount)
        ? Long.fromValue(object.hashCount)
        : Long.UZERO,
    };
  },

  toJSON(message: ChallengeInfo): unknown {
    const obj: any = {};
    message.questionId !== undefined &&
      (obj.questionId = (message.questionId || Long.UZERO).toString());
    message.cid !== undefined && (obj.cid = message.cid);
    message.answerHash !== undefined &&
      (obj.answerHash = base64FromBytes(
        message.answerHash !== undefined ? message.answerHash : new Uint8Array()
      ));
    if (message.cutMerkle) {
      obj.cutMerkle = message.cutMerkle.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.cutMerkle = [];
    }
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? ChallengeValidator.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    message.hashCount !== undefined &&
      (obj.hashCount = (message.hashCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeInfo>, I>>(
    object: I
  ): ChallengeInfo {
    const message = createBaseChallengeInfo();
    message.questionId =
      object.questionId !== undefined && object.questionId !== null
        ? Long.fromValue(object.questionId)
        : Long.UZERO;
    message.cid = object.cid ?? "";
    message.answerHash = object.answerHash ?? new Uint8Array();
    message.cutMerkle = object.cutMerkle?.map((e) => e) || [];
    message.validators =
      object.validators?.map((e) => ChallengeValidator.fromPartial(e)) || [];
    message.hashCount =
      object.hashCount !== undefined && object.hashCount !== null
        ? Long.fromValue(object.hashCount)
        : Long.UZERO;
    return message;
  },
};

function createBaseSession(): Session {
  return {
    sessionId: "",
    account: "",
    modelName: "",
    agentAccount: "",
    userLock: undefined,
    minerLock: undefined,
    tokenPrice: Long.UZERO,
    expirationAt: undefined,
    payment: undefined,
    status: 0,
    challengeInfo: [],
  };
}

export const Session = {
  encode(
    message: Session,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    if (!message.tokenPrice.isZero()) {
      writer.uint32(56).uint64(message.tokenPrice);
    }
    if (message.expirationAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expirationAt),
        writer.uint32(66).fork()
      ).ldelim();
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
          message.tokenPrice = reader.uint64() as Long;
          break;
        case 8:
          message.expirationAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.payment = Payment.decode(reader, reader.uint32());
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.challengeInfo.push(
            ChallengeInfo.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Session {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      account: isSet(object.account) ? String(object.account) : "",
      modelName: isSet(object.modelName) ? String(object.modelName) : "",
      agentAccount: isSet(object.agentAccount)
        ? String(object.agentAccount)
        : "",
      userLock: isSet(object.userLock)
        ? Coin.fromJSON(object.userLock)
        : undefined,
      minerLock: isSet(object.minerLock)
        ? Coin.fromJSON(object.minerLock)
        : undefined,
      tokenPrice: isSet(object.tokenPrice)
        ? Long.fromValue(object.tokenPrice)
        : Long.UZERO,
      expirationAt: isSet(object.expirationAt)
        ? fromJsonTimestamp(object.expirationAt)
        : undefined,
      payment: isSet(object.payment)
        ? Payment.fromJSON(object.payment)
        : undefined,
      status: isSet(object.status) ? sessionStatusFromJSON(object.status) : 0,
      challengeInfo: Array.isArray(object?.challengeInfo)
        ? object.challengeInfo.map((e: any) => ChallengeInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Session): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.agentAccount !== undefined &&
      (obj.agentAccount = message.agentAccount);
    message.userLock !== undefined &&
      (obj.userLock = message.userLock
        ? Coin.toJSON(message.userLock)
        : undefined);
    message.minerLock !== undefined &&
      (obj.minerLock = message.minerLock
        ? Coin.toJSON(message.minerLock)
        : undefined);
    message.tokenPrice !== undefined &&
      (obj.tokenPrice = (message.tokenPrice || Long.UZERO).toString());
    message.expirationAt !== undefined &&
      (obj.expirationAt = message.expirationAt.toISOString());
    message.payment !== undefined &&
      (obj.payment = message.payment
        ? Payment.toJSON(message.payment)
        : undefined);
    message.status !== undefined &&
      (obj.status = sessionStatusToJSON(message.status));
    if (message.challengeInfo) {
      obj.challengeInfo = message.challengeInfo.map((e) =>
        e ? ChallengeInfo.toJSON(e) : undefined
      );
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
    message.userLock =
      object.userLock !== undefined && object.userLock !== null
        ? Coin.fromPartial(object.userLock)
        : undefined;
    message.minerLock =
      object.minerLock !== undefined && object.minerLock !== null
        ? Coin.fromPartial(object.minerLock)
        : undefined;
    message.tokenPrice =
      object.tokenPrice !== undefined && object.tokenPrice !== null
        ? Long.fromValue(object.tokenPrice)
        : Long.UZERO;
    message.expirationAt = object.expirationAt ?? undefined;
    message.payment =
      object.payment !== undefined && object.payment !== null
        ? Payment.fromPartial(object.payment)
        : undefined;
    message.status = object.status ?? 0;
    message.challengeInfo =
      object.challengeInfo?.map((e) => ChallengeInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVrfSeed(): VrfSeed {
  return { account: "", seed: new Uint8Array() };
}

export const VrfSeed = {
  encode(
    message: VrfSeed,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      account: isSet(object.account) ? String(object.account) : "",
      seed: isSet(object.seed)
        ? bytesFromBase64(object.seed)
        : new Uint8Array(),
    };
  },

  toJSON(message: VrfSeed): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.seed !== undefined &&
      (obj.seed = base64FromBytes(
        message.seed !== undefined ? message.seed : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VrfSeed>, I>>(object: I): VrfSeed {
    const message = createBaseVrfSeed();
    message.account = object.account ?? "";
    message.seed = object.seed ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
