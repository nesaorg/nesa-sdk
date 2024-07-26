/* eslint-disable */
import {
  Params,
  InnerValues,
  InferenceAgent,
  AgentModel,
  Session,
  VrfSeed,
} from "./agent";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "agent.v1";

export interface GenesisState {
  params?: Params;
  innerValues?: InnerValues;
  agents: InferenceAgent[];
  agentModels: AgentModel[];
  sessions: Session[];
  vrfSeeds: VrfSeed[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    innerValues: undefined,
    agents: [],
    agentModels: [],
    sessions: [],
    vrfSeeds: [],
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.innerValues !== undefined) {
      InnerValues.encode(
        message.innerValues,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.agents) {
      InferenceAgent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.agentModels) {
      AgentModel.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.vrfSeeds) {
      VrfSeed.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.innerValues = InnerValues.decode(reader, reader.uint32());
          break;
        case 3:
          message.agents.push(InferenceAgent.decode(reader, reader.uint32()));
          break;
        case 4:
          message.agentModels.push(AgentModel.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sessions.push(Session.decode(reader, reader.uint32()));
          break;
        case 6:
          message.vrfSeeds.push(VrfSeed.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      innerValues: isSet(object.innerValues)
        ? InnerValues.fromJSON(object.innerValues)
        : undefined,
      agents: Array.isArray(object?.agents)
        ? object.agents.map((e: any) => InferenceAgent.fromJSON(e))
        : [],
      agentModels: Array.isArray(object?.agentModels)
        ? object.agentModels.map((e: any) => AgentModel.fromJSON(e))
        : [],
      sessions: Array.isArray(object?.sessions)
        ? object.sessions.map((e: any) => Session.fromJSON(e))
        : [],
      vrfSeeds: Array.isArray(object?.vrfSeeds)
        ? object.vrfSeeds.map((e: any) => VrfSeed.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.innerValues !== undefined &&
      (obj.innerValues = message.innerValues
        ? InnerValues.toJSON(message.innerValues)
        : undefined);
    if (message.agents) {
      obj.agents = message.agents.map((e) =>
        e ? InferenceAgent.toJSON(e) : undefined
      );
    } else {
      obj.agents = [];
    }
    if (message.agentModels) {
      obj.agentModels = message.agentModels.map((e) =>
        e ? AgentModel.toJSON(e) : undefined
      );
    } else {
      obj.agentModels = [];
    }
    if (message.sessions) {
      obj.sessions = message.sessions.map((e) =>
        e ? Session.toJSON(e) : undefined
      );
    } else {
      obj.sessions = [];
    }
    if (message.vrfSeeds) {
      obj.vrfSeeds = message.vrfSeeds.map((e) =>
        e ? VrfSeed.toJSON(e) : undefined
      );
    } else {
      obj.vrfSeeds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.innerValues =
      object.innerValues !== undefined && object.innerValues !== null
        ? InnerValues.fromPartial(object.innerValues)
        : undefined;
    message.agents =
      object.agents?.map((e) => InferenceAgent.fromPartial(e)) || [];
    message.agentModels =
      object.agentModels?.map((e) => AgentModel.fromPartial(e)) || [];
    message.sessions =
      object.sessions?.map((e) => Session.fromPartial(e)) || [];
    message.vrfSeeds =
      object.vrfSeeds?.map((e) => VrfSeed.fromPartial(e)) || [];
    return message;
  },
};

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
