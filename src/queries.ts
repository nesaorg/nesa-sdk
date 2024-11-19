import {
  createProtobufRpcClient,
  QueryClient,
} from "@cosmjs/stargate";
import {
  QueryClientImpl as ClientQuery,
} from "./codec/agent/v1/query";
import { AgentModelStatus, SessionStatus } from "./codec/agent/v1/agent";
import { toTimestamp } from "./codec/helpers";
import {
  QueryClientImpl as DHTClientQuery,
} from "./codec/dht/v1/query";
import { PageRequest } from "./codec/cosmos/base/query/v1beta1/pagination";
import { Availability, InferenceType } from "./codec/dht/v1/orchestrator";


export function setupAgentExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const agentQueryService = new ClientQuery(rpc);

  return {
    agent: {
      params: async () => {
        return await agentQueryService.Params({});
      },
      inferenceAgentRequest: async (
        account: string,
        modelName: string,
        limit: Long,
        key: Uint8Array
      ) => {
        return await agentQueryService.InferenceAgentRequest({ account, modelName, limit, key });
      },
      agentByModelRequest: async (
        modelName: string,
        status: AgentModelStatus
      ) => {
        return await agentQueryService.AgentByModelRequest({ modelName, status });
      },
      sessionRequest: async (id: string) => {
        return await agentQueryService.SessionRequest({ id });
      },
      sessionByAgentRequest: async (
        account: string,
        status: SessionStatus | undefined,
        expireTime: Date,
        limit: Long,
        orderDesc: boolean,
        key: Uint8Array
      ) => {
        return await agentQueryService.SessionByAgentRequest({ account, status, expireTime: toTimestamp(expireTime), limit, orderDesc, key });
      },
      sessionByChallengeRequest: async (
        account: string,
        limit: Long,
        key: Uint8Array
      ) => {
        return await agentQueryService.SessionByChallengeRequest({ account, limit, key });
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
      params: async () => {
        return await dhtQueryService.Params({});
      },
      getModel: async (modelName: string) => {
        return await dhtQueryService.GetModel({
          modelName
        });
      },
      getModelBlocks: async (
        modelName: string,
        pagination?: PageRequest
      ) => {
        return await dhtQueryService.GetModelBlocks({
          modelName,
          pagination
        });
      },
      getNode: async (nodeId: string) => {
        return await dhtQueryService.GetNode({
          nodeId
        });
      },
      getMiner: async (nodeId: string) => {
        return await dhtQueryService.GetMiner({
          nodeId
        });
      },
      getOrchestrator: async (nodeId: string) => {
        return await dhtQueryService.GetOrchestrator({
          nodeId
        });
      },
      getAllOrchestrator: async (pagination?: PageRequest) => {
        return await dhtQueryService.GetAllOrchestrator({
          pagination
        });
      },
      getOrchestratorsByParams: async (
        inferenceType: InferenceType,
        availability: Availability,
        limit: number,
        key: Uint8Array
      ) => {
        return await dhtQueryService.GetOrchestratorsByParams({
          inferenceType,
          availability,
          limit,
          key
        });
      },
      getOrchestratorHeartbeat: async (nodeId: string) => {
        return await dhtQueryService.GetOrchestratorHeartbeat({
          nodeId
        });
      },
      getMinerHeartbeat: async (nodeId: string) => {
        return await dhtQueryService.GetMinerHeartbeat({
          nodeId
        });
      },
    }
  }
}
