"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAgentExtension = setupAgentExtension;
exports.setupDHTExtension = setupDHTExtension;
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./codec/agent/v1/query");
const helpers_1 = require("./codec/helpers");
const query_2 = require("./codec/dht/v1/query");
function setupAgentExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const agentQueryService = new query_1.QueryClientImpl(rpc);
    return {
        agent: {
            params: async () => {
                return await agentQueryService.Params({});
            },
            inferenceAgentRequest: async (account, modelName, limit, key) => {
                return await agentQueryService.InferenceAgentRequest({ account, modelName, limit, key });
            },
            agentByModelRequest: async (modelName, status) => {
                return await agentQueryService.AgentByModelRequest({ modelName, status });
            },
            sessionRequest: async (id) => {
                return await agentQueryService.SessionRequest({ id });
            },
            sessionByAgentRequest: async (account, status, expireTime, limit, orderDesc, key) => {
                return await agentQueryService.SessionByAgentRequest({ account, status, expireTime: (0, helpers_1.toTimestamp)(expireTime), limit, orderDesc, key });
            },
            sessionByChallengeRequest: async (account, limit, key) => {
                return await agentQueryService.SessionByChallengeRequest({ account, limit, key });
            },
            VRFSeedRequest: async (account) => {
                return await agentQueryService.VRFSeedRequest({ account });
            }
        }
    };
}
function setupDHTExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const dhtQueryService = new query_2.QueryClientImpl(rpc);
    return {
        dht: {
            params: async () => {
                return await dhtQueryService.Params({});
            },
            getModel: async (modelName) => {
                return await dhtQueryService.GetModel({
                    modelName
                });
            },
            getModelBlocks: async (modelName, pagination) => {
                return await dhtQueryService.GetModelBlocks({
                    modelName,
                    pagination
                });
            },
            getNode: async (nodeId) => {
                return await dhtQueryService.GetNode({
                    nodeId
                });
            },
            getMiner: async (nodeId) => {
                return await dhtQueryService.GetMiner({
                    nodeId
                });
            },
            getOrchestrator: async (nodeId) => {
                return await dhtQueryService.GetOrchestrator({
                    nodeId
                });
            },
            getAllOrchestrator: async (pagination) => {
                return await dhtQueryService.GetAllOrchestrator({
                    pagination
                });
            },
            getOrchestratorsByParams: async (inferenceType, availability, limit, key) => {
                return await dhtQueryService.GetOrchestratorsByParams({
                    inferenceType,
                    availability,
                    limit,
                    key
                });
            },
            getOrchestratorHeartbeat: async (nodeId) => {
                return await dhtQueryService.GetOrchestratorHeartbeat({
                    nodeId
                });
            },
            getMinerHeartbeat: async (nodeId) => {
                return await dhtQueryService.GetMinerHeartbeat({
                    nodeId
                });
            },
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZ0JBLGtEQWdEQztBQUVELDhDQW9FQztBQXRJRCwrQ0FHMEI7QUFDMUIsa0RBRWdDO0FBRWhDLDZDQUE4QztBQUM5QyxnREFFOEI7QUFLOUIsU0FBZ0IsbUJBQW1CLENBQUMsSUFBaUI7SUFDbkQsTUFBTSxHQUFHLEdBQUcsSUFBQSxrQ0FBdUIsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxNQUFNLGlCQUFpQixHQUFHLElBQUksdUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUvQyxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUNqQixPQUFPLE1BQU0saUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFDRCxxQkFBcUIsRUFBRSxLQUFLLEVBQzFCLE9BQWUsRUFDZixTQUFpQixFQUNqQixLQUFXLEVBQ1gsR0FBZSxFQUNmLEVBQUU7Z0JBQ0YsT0FBTyxNQUFNLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMzRixDQUFDO1lBQ0QsbUJBQW1CLEVBQUUsS0FBSyxFQUN4QixTQUFpQixFQUNqQixNQUF3QixFQUN4QixFQUFFO2dCQUNGLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzVFLENBQUM7WUFDRCxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQVUsRUFBRSxFQUFFO2dCQUNuQyxPQUFPLE1BQU0saUJBQWlCLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBQ0QscUJBQXFCLEVBQUUsS0FB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