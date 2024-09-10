/* eslint-disable */
import { Params } from "./params";
import { Model } from "./model";
import { Node } from "./node";
import { Miner } from "./miner";
import { Orchestrator } from "./orchestrator";
import { ModelBlock } from "./model_block";
import { UnbondingEntry } from "./deposit";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "dht.v1";
/** OrchestratorMiner defines an association between an orchestrator and a miner. */
export interface OrchestratorMiner {
  orchestratorId: string;
  minerId: string;
}
/** GenesisState defines the dht module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  model: Model[];
  node: Node[];
  miner: Miner[];
  orchestrator: Orchestrator[];
  orchestratorMiner: OrchestratorMiner[];
  modelBlock: ModelBlock[];
  minerUnbonding: UnbondingEntry[];
  orchestratorUnbonding: UnbondingEntry[];
  modelCreators: string[];
  modelAllowList: string[];
}
function createBaseOrchestratorMiner(): OrchestratorMiner {
  return {
    orchestratorId: "",
    minerId: ""
  };
}
export const OrchestratorMiner = {
  typeUrl: "/dht.v1.OrchestratorMiner",
  encode(message: OrchestratorMiner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orchestratorId !== "") {
      writer.uint32(10).string(message.orchestratorId);
    }
    if (message.minerId !== "") {
      writer.uint32(18).string(message.minerId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OrchestratorMiner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrchestratorMiner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestratorId = reader.string();
          break;
        case 2:
          message.minerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrchestratorMiner {
    const obj = createBaseOrchestratorMiner();
    if (isSet(object.orchestratorId)) obj.orchestratorId = String(object.orchestratorId);
    if (isSet(object.minerId)) obj.minerId = String(object.minerId);
    return obj;
  },
  toJSON(message: OrchestratorMiner): JsonSafe<OrchestratorMiner> {
    const obj: any = {};
    message.orchestratorId !== undefined && (obj.orchestratorId = message.orchestratorId);
    message.minerId !== undefined && (obj.minerId = message.minerId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OrchestratorMiner>, I>>(object: I): OrchestratorMiner {
    const message = createBaseOrchestratorMiner();
    message.orchestratorId = object.orchestratorId ?? "";
    message.minerId = object.minerId ?? "";
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    model: [],
    node: [],
    miner: [],
    orchestrator: [],
    orchestratorMiner: [],
    modelBlock: [],
    minerUnbonding: [],
    orchestratorUnbonding: [],
    modelCreators: [],
    modelAllowList: []
  };
}
export const GenesisState = {
  typeUrl: "/dht.v1.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.model) {
      Model.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.node) {
      Node.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.miner) {
      Miner.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.orchestrator) {
      Orchestrator.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.orchestratorMiner) {
      OrchestratorMiner.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.modelBlock) {
      ModelBlock.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.minerUnbonding) {
      UnbondingEntry.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.orchestratorUnbonding) {
      UnbondingEntry.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.modelCreators) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.modelAllowList) {
      writer.uint32(90).string(v!);
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
          message.model.push(Model.decode(reader, reader.uint32()));
          break;
        case 3:
          message.node.push(Node.decode(reader, reader.uint32()));
          break;
        case 4:
          message.miner.push(Miner.decode(reader, reader.uint32()));
          break;
        case 5:
          message.orchestrator.push(Orchestrator.decode(reader, reader.uint32()));
          break;
        case 6:
          message.orchestratorMiner.push(OrchestratorMiner.decode(reader, reader.uint32()));
          break;
        case 7:
          message.modelBlock.push(ModelBlock.decode(reader, reader.uint32()));
          break;
        case 8:
          message.minerUnbonding.push(UnbondingEntry.decode(reader, reader.uint32()));
          break;
        case 9:
          message.orchestratorUnbonding.push(UnbondingEntry.decode(reader, reader.uint32()));
          break;
        case 10:
          message.modelCreators.push(reader.string());
          break;
        case 11:
          message.modelAllowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.model)) obj.model = object.model.map((e: any) => Model.fromJSON(e));
    if (Array.isArray(object?.node)) obj.node = object.node.map((e: any) => Node.fromJSON(e));
    if (Array.isArray(object?.miner)) obj.miner = object.miner.map((e: any) => Miner.fromJSON(e));
    if (Array.isArray(object?.orchestrator)) obj.orchestrator = object.orchestrator.map((e: any) => Orchestrator.fromJSON(e));
    if (Array.isArray(object?.orchestratorMiner)) obj.orchestratorMiner = object.orchestratorMiner.map((e: any) => OrchestratorMiner.fromJSON(e));
    if (Array.isArray(object?.modelBlock)) obj.modelBlock = object.modelBlock.map((e: any) => ModelBlock.fromJSON(e));
    if (Array.isArray(object?.minerUnbonding)) obj.minerUnbonding = object.minerUnbonding.map((e: any) => UnbondingEntry.fromJSON(e));
    if (Array.isArray(object?.orchestratorUnbonding)) obj.orchestratorUnbonding = object.orchestratorUnbonding.map((e: any) => UnbondingEntry.fromJSON(e));
    if (Array.isArray(object?.modelCreators)) obj.modelCreators = object.modelCreators.map((e: any) => String(e));
    if (Array.isArray(object?.modelAllowList)) obj.modelAllowList = object.modelAllowList.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.model) {
      obj.model = message.model.map(e => e ? Model.toJSON(e) : undefined);
    } else {
      obj.model = [];
    }
    if (message.node) {
      obj.node = message.node.map(e => e ? Node.toJSON(e) : undefined);
    } else {
      obj.node = [];
    }
    if (message.miner) {
      obj.miner = message.miner.map(e => e ? Miner.toJSON(e) : undefined);
    } else {
      obj.miner = [];
    }
    if (message.orchestrator) {
      obj.orchestrator = message.orchestrator.map(e => e ? Orchestrator.toJSON(e) : undefined);
    } else {
      obj.orchestrator = [];
    }
    if (message.orchestratorMiner) {
      obj.orchestratorMiner = message.orchestratorMiner.map(e => e ? OrchestratorMiner.toJSON(e) : undefined);
    } else {
      obj.orchestratorMiner = [];
    }
    if (message.modelBlock) {
      obj.modelBlock = message.modelBlock.map(e => e ? ModelBlock.toJSON(e) : undefined);
    } else {
      obj.modelBlock = [];
    }
    if (message.minerUnbonding) {
      obj.minerUnbonding = message.minerUnbonding.map(e => e ? UnbondingEntry.toJSON(e) : undefined);
    } else {
      obj.minerUnbonding = [];
    }
    if (message.orchestratorUnbonding) {
      obj.orchestratorUnbonding = message.orchestratorUnbonding.map(e => e ? UnbondingEntry.toJSON(e) : undefined);
    } else {
      obj.orchestratorUnbonding = [];
    }
    if (message.modelCreators) {
      obj.modelCreators = message.modelCreators.map(e => e);
    } else {
      obj.modelCreators = [];
    }
    if (message.modelAllowList) {
      obj.modelAllowList = message.modelAllowList.map(e => e);
    } else {
      obj.modelAllowList = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.model = object.model?.map(e => Model.fromPartial(e)) || [];
    message.node = object.node?.map(e => Node.fromPartial(e)) || [];
    message.miner = object.miner?.map(e => Miner.fromPartial(e)) || [];
    message.orchestrator = object.orchestrator?.map(e => Orchestrator.fromPartial(e)) || [];
    message.orchestratorMiner = object.orchestratorMiner?.map(e => OrchestratorMiner.fromPartial(e)) || [];
    message.modelBlock = object.modelBlock?.map(e => ModelBlock.fromPartial(e)) || [];
    message.minerUnbonding = object.minerUnbonding?.map(e => UnbondingEntry.fromPartial(e)) || [];
    message.orchestratorUnbonding = object.orchestratorUnbonding?.map(e => UnbondingEntry.fromPartial(e)) || [];
    message.modelCreators = object.modelCreators?.map(e => e) || [];
    message.modelAllowList = object.modelAllowList?.map(e => e) || [];
    return message;
  }
};