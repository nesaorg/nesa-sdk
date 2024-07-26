"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAgentExtension = void 0;
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./codec/agent/v1/query");
// public async getSessionByAgent(account: string, status: SessionStatus, limit: Long, orderDesc: boolean, key: Uint8Array, expireTime?: Date): Promise<QuerySessionByAgentResponse> {
//   const result = await this.query.agent.sessionByAgentRequest(account, status, expireTime, limit, orderDesc, key);
//   return result;
// }
function setupAgentExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const agentQueryService = new query_1.QueryClientImpl(rpc);
    return {
        agent: {
            // modelRequest: async (name: string) => {
            //   return await agentQueryService.ModelRequest({ name });
            // },
            // modelRequestAll: async (key: Uint8Array, offset: Long, limit: Long, countTotal: boolean, reverse: boolean) => {
            //   return await agentQueryService.ModelRequestAll({pagination: {key, offset, limit, countTotal, reverse}});
            // },
            params: async () => {
                return await agentQueryService.Params({});
            },
            inferenceAgentRequest: async (account, modelName, limit, key) => {
                return await agentQueryService.InferenceAgentRequest({ account, modelName, limit, key });
            },
            sessionRequest: async (id) => {
                return await agentQueryService.SessionRequest({ id });
            },
            sessionByAgentRequest: async (account, status, limit, orderDesc, key, expireTime) => {
                return await agentQueryService.SessionByAgentRequest({ account, status, expireTime, limit, orderDesc, key });
            },
            VRFSeedRequest: async (account) => {
                return await agentQueryService.VRFSeedRequest({ account });
            }
        }
    };
}
exports.setupAgentExtension = setupAgentExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUcwQjtBQUMxQixrREFVZ0M7QUFrQmhDLHNMQUFzTDtBQUN0TCxxSEFBcUg7QUFDckgsbUJBQW1CO0FBQ25CLElBQUk7QUFDSixTQUFnQixtQkFBbUIsQ0FBQyxJQUFpQjtJQUNuRCxNQUFNLEdBQUcsR0FBRyxJQUFBLGtDQUF1QixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSx1QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRS9DLE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCwwQ0FBMEM7WUFDMUMsMkRBQTJEO1lBQzNELEtBQUs7WUFDTCxrSEFBa0g7WUFDbEgsNkdBQTZHO1lBQzdHLEtBQUs7WUFDTCxNQUFNLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUNELHFCQUFxQixFQUFFLEtBQUssRUFBRSxPQUFlLEVBQUUsU0FBaUIsRUFBRSxLQUFXLEVBQUUsR0FBZSxFQUFFLEVBQUU7Z0JBQ2hHLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0YsQ0FBQztZQUNELGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFBVSxFQUFFLEVBQUU7Z0JBQ25DLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELENBQUM7WUFDRCxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsT0FBZSxFQUFFLE1BQXFCLEVBQUUsS0FBVyxFQUFFLFNBQWtCLEVBQUUsR0FBZSxFQUFFLFVBQWlCLEVBQUUsRUFBRTtnQkFDM0ksT0FBTyxNQUFNLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQy9HLENBQUM7WUFDRCxjQUFjLEVBQUUsS0FBSyxFQUFFLE9BQWUsRUFBRSxFQUFFO2dCQUN4QyxPQUFPLE1BQU0saUJBQWlCLENBQUMsY0FBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUM3RCxDQUFDO1NBQ0Y7S0FDRixDQUFBO0FBQ0gsQ0FBQztBQTdCRCxrREE2QkMifQ==