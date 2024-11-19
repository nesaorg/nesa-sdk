"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDHTExtension = exports.setupAgentExtension = void 0;
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
exports.setupAgentExtension = setupAgentExtension;
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
exports.setupDHTExtension = setupDHTExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUcwQjtBQUMxQixrREFFZ0M7QUFFaEMsNkNBQThDO0FBQzlDLGdEQUU4QjtBQUs5QixTQUFnQixtQkFBbUIsQ0FBQyxJQUFpQjtJQUNuRCxNQUFNLEdBQUcsR0FBRyxJQUFBLGtDQUF1QixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSx1QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRS9DLE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUNELHFCQUFxQixFQUFFLEtBQUssRUFDMUIsT0FBZSxFQUNmLFNBQWlCLEVBQ2pCLEtBQVcsRUFDWCxHQUFlLEVBQ2YsRUFBRTtnQkFDRixPQUFPLE1BQU0saUJBQWlCLENBQUMscUJBQXFCLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzNGLENBQUM7WUFDRCxtQkFBbUIsRUFBRSxLQUFLLEVBQ3hCLFNBQWlCLEVBQ2pCLE1BQXdCLEVBQ3hCLEVBQUU7Z0JBQ0YsT0FBTyxNQUFNLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDNUUsQ0FBQztZQUNELGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFBVSxFQUFFLEVBQUU7Z0JBQ25DLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELENBQUM7WUFDRCxxQkFBcUIsRUFBRSxLQUFLLEVBQzFCLE9BQWUsRUFDZixNQUFpQyxFQUNqQyxVQUFnQixFQUNoQixLQUFXLEVBQ1gsU0FBa0IsRUFDbEIsR0FBZSxFQUNmLEVBQUU7Z0JBQ0YsT0FBTyxNQUFNLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBQSxxQkFBVyxFQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN4SSxDQUFDO1lBQ0QseUJBQXlCLEVBQUUsS0FBSyxFQUM5QixPQUFlLEVBQ2YsS0FBVyxFQUNYLEdBQWUsRUFDZixFQUFFO2dCQUNGLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwRixDQUFDO1lBQ0QsY0FBYyxFQUFFLEtBQUssRUFBRSxPQUFlLEVBQUUsRUFBRTtnQkFDeEMsT0FBTyxNQUFNLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDN0QsQ0FBQztTQUNGO0tBQ0YsQ0FBQTtBQUNILENBQUM7QUFoREQsa0RBZ0RDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUMsSUFBaUI7SUFDakQsTUFBTSxHQUFHLEdBQUcsSUFBQSxrQ0FBdUIsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxNQUFNLGVBQWUsR0FBRyxJQUFJLHVCQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFaEQsT0FBTztRQUNMLEdBQUcsRUFBRTtZQUNILE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDakIsT0FBTyxNQUFNLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUMsQ0FBQztZQUNELFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBaUIsRUFBRSxFQUFFO2dCQUNwQyxPQUFPLE1BQU0sZUFBZSxDQUFDLFFBQVEsQ0FBQztvQkFDcEMsU0FBUztpQkFDVixDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsY0FBYyxFQUFFLEtBQUssRUFDbkIsU0FBaUIsRUFDakIsVUFBd0IsRUFDeEIsRUFBRTtnQkFDRixPQUFPLE1BQU0sZUFBZSxDQUFDLGNBQWMsQ0FBQztvQkFDMUMsU0FBUztvQkFDVCxVQUFVO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQWMsRUFBRSxFQUFFO2dCQUNoQyxPQUFPLE1BQU0sZUFBZSxDQUFDLE9BQU8sQ0FBQztvQkFDbkMsTUFBTTtpQkFDUCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFjLEVBQUUsRUFBRTtnQkFDakMsT0FBTyxNQUFNLGVBQWUsQ0FBQyxRQUFRLENBQUM7b0JBQ3BDLE1BQU07aUJBQ1AsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELGVBQWUsRUFBRSxLQUFLLEVBQUUsTUFBYyxFQUFFLEVBQUU7Z0JBQ3hDLE9BQU8sTUFBTSxlQUFlLENBQUMsZUFBZSxDQUFDO29CQUMzQyxNQUFNO2lCQUNQLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsVUFBd0IsRUFBRSxFQUFFO2dCQUNyRCxPQUFPLE1BQU0sZUFBZSxDQUFDLGtCQUFrQixDQUFDO29CQUM5QyxVQUFVO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCx3QkFBd0IsRUFBRSxLQUFLLEVBQzdCLGFBQTRCLEVBQzVCLFlBQTBCLEVBQzFCLEtBQWEsRUFDYixHQUFlLEVBQ2YsRUFBRTtnQkFDRixPQUFPLE1BQU0sZUFBZSxDQUFDLHdCQUF3QixDQUFDO29CQUNwRCxhQUFhO29CQUNiLFlBQVk7b0JBQ1osS0FBSztvQkFDTCxHQUFHO2lCQUNKLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCx3QkFBd0IsRUFBRSxLQUFLLEVBQUUsTUFBYyxFQUFFLEVBQUU7Z0JBQ2pELE9BQU8sTUFBTSxlQUFlLENBQUMsd0JBQXdCLENBQUM7b0JBQ3BELE1BQU07aUJBQ1AsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFjLEVBQUUsRUFBRTtnQkFDMUMsT0FBTyxNQUFNLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDN0MsTUFBTTtpQkFDUCxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0Y7S0FDRixDQUFBO0FBQ0gsQ0FBQztBQXBFRCw4Q0FvRUMifQ==