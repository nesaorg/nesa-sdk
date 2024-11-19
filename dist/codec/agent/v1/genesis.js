"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const agent_1 = require("./agent");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../helpers");
exports.protobufPackage = "agent.v1";
function createBaseGenesisState() {
    return {
        params: agent_1.Params.fromPartial({}),
        innerValues: agent_1.InnerValues.fromPartial({}),
        agents: [],
        agentModels: [],
        sessions: [],
        vrfSeeds: []
    };
}
exports.GenesisState = {
    typeUrl: "/agent.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            agent_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.innerValues !== undefined) {
            agent_1.InnerValues.encode(message.innerValues, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.agents) {
            agent_1.InferenceAgent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.agentModels) {
            agent_1.AgentModel.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sessions) {
            agent_1.Session.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.vrfSeeds) {
            agent_1.VrfSeed.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = agent_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.innerValues = agent_1.InnerValues.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.agents.push(agent_1.InferenceAgent.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.agentModels.push(agent_1.AgentModel.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sessions.push(agent_1.Session.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.vrfSeeds.push(agent_1.VrfSeed.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if ((0, helpers_1.isSet)(object.params))
            obj.params = agent_1.Params.fromJSON(object.params);
        if ((0, helpers_1.isSet)(object.innerValues))
            obj.innerValues = agent_1.InnerValues.fromJSON(object.innerValues);
        if (Array.isArray(object?.agents))
            obj.agents = object.agents.map((e) => agent_1.InferenceAgent.fromJSON(e));
        if (Array.isArray(object?.agentModels))
            obj.agentModels = object.agentModels.map((e) => agent_1.AgentModel.fromJSON(e));
        if (Array.isArray(object?.sessions))
            obj.sessions = object.sessions.map((e) => agent_1.Session.fromJSON(e));
        if (Array.isArray(object?.vrfSeeds))
            obj.vrfSeeds = object.vrfSeeds.map((e) => agent_1.VrfSeed.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? agent_1.Params.toJSON(message.params) : undefined);
        message.innerValues !== undefined && (obj.innerValues = message.innerValues ? agent_1.InnerValues.toJSON(message.innerValues) : undefined);
        if (message.agents) {
            obj.agents = message.agents.map(e => e ? agent_1.InferenceAgent.toJSON(e) : undefined);
        }
        else {
            obj.agents = [];
        }
        if (message.agentModels) {
            obj.agentModels = message.agentModels.map(e => e ? agent_1.AgentModel.toJSON(e) : undefined);
        }
        else {
            obj.agentModels = [];
        }
        if (message.sessions) {
            obj.sessions = message.sessions.map(e => e ? agent_1.Session.toJSON(e) : undefined);
        }
        else {
            obj.sessions = [];
        }
        if (message.vrfSeeds) {
            obj.vrfSeeds = message.vrfSeeds.map(e => e ? agent_1.VrfSeed.toJSON(e) : undefined);
        }
        else {
            obj.vrfSeeds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = agent_1.Params.fromPartial(object.params);
        }
        if (object.innerValues !== undefined && object.innerValues !== null) {
            message.innerValues = agent_1.InnerValues.fromPartial(object.innerValues);
        }
        message.agents = object.agents?.map(e => agent_1.InferenceAgent.fromPartial(e)) || [];
        message.agentModels = object.agentModels?.map(e => agent_1.AgentModel.fromPartial(e)) || [];
        message.sessions = object.sessions?.map(e => agent_1.Session.fromPartial(e)) || [];
        message.vrfSeeds = object.vrfSeeds?.map(e => agent_1.VrfSeed.fromPartial(e)) || [];
        return message;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXNpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2RlYy9hZ2VudC92MS9nZW5lc2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLG1DQUE0RjtBQUM1Rix3REFBMEM7QUFDMUMsMkNBQTBEO0FBRTdDLFFBQUEsZUFBZSxHQUFHLFVBQVUsQ0FBQztBQVMxQyxTQUFTLHNCQUFzQjtJQUM3QixPQUFPO1FBQ0wsTUFBTSxFQUFFLGNBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQzlCLFdBQVcsRUFBRSxtQkFBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDeEMsTUFBTSxFQUFFLEVBQUU7UUFDVixXQUFXLEVBQUUsRUFBRTtRQUNmLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0FBQ0osQ0FBQztBQUNZLFFBQUEsWUFBWSxHQUFHO0lBQzFCLE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsTUFBTSxDQUFDLE9BQXFCLEVBQUUsU0FBcUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDcEUsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLGNBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkUsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN0QyxtQkFBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztR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