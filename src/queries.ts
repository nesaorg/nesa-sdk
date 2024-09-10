import {
  createProtobufRpcClient,
  QueryClient,
} from "@cosmjs/stargate";
import {
  QueryClientImpl as ClientQuery,
} from "./codec/agent/v1/query";
import { SessionStatus } from "./codec/agent/v1/agent";
import { toTimestamp } from "./codec/helpers";
import {
  QueryClientImpl as DHTClientQuery,
} from "./codec/dht/v1/query";


export function setupAgentExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const agentQueryService = new ClientQuery(rpc);

  return {
    agent: {
      params: async () => {
        return await agentQueryService.Params({});
      },
      inferenceAgentRequest: async (account: string, modelName: string, limit: Long, key: Uint8Array) => {
        return await agentQueryService.InferenceAgentRequest({ account, modelName, limit, key });
      },
      sessionRequest: async (id: string) => {
        return await agentQueryService.SessionRequest({ id });
      },
      sessionByAgentRequest: async (account: string, status: SessionStatus | undefined,expireTime: Date, limit: Long, orderDesc: boolean, key: Uint8Array) => {
        return await agentQueryService.SessionByAgentRequest({ account, status, expireTime: toTimestamp(expireTime), limit, orderDesc, key });
      },
      VRFSeedRequest: async (account: string) => {
        return await agentQueryService.VRFSeedRequest({ account });
      }
    }
  }
}

export function setupDHTExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const dhtQueryService = new DHTClientQuery(rpc);

  return {
    dht: {
      getModel: async (modelName: string) => {
        return await dhtQueryService.GetModel({
          modelName
        });
      },
    }
  }
}
