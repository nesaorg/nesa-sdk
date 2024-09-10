import { QueryClient } from "@cosmjs/stargate";
import { AgentModelStatus, SessionStatus } from "./codec/agent/v1/agent";
import { PageRequest } from "./codec/cosmos/base/query/v1beta1/pagination";
import { Availability, InferenceType } from "./codec/dht/v1/orchestrator";
export declare function setupAgentExtension(base: QueryClient): {
    agent: {
        params: () => Promise<import("./codec/agent/v1/query").QueryParamsResponse>;
        inferenceAgentRequest: (account: string, modelName: string, limit: Long, key: Uint8Array) => Promise<import("./codec/agent/v1/query").QueryInferenceAgentResponse>;
        agentByModelRequest: (modelName: string, status: AgentModelStatus) => Promise<import("./codec/agent/v1/query").QueryAgentByModelResponse>;
        sessionRequest: (id: string) => Promise<import("./codec/agent/v1/query").QuerySessionResponse>;
        sessionByAgentRequest: (account: string, status: SessionStatus | undefined, expireTime: Date, limit: Long, orderDesc: boolean, key: Uint8Array) => Promise<import("./codec/agent/v1/query").QuerySessionByAgentResponse>;
        sessionByChallengeRequest: (account: string, limit: Long, key: Uint8Array) => Promise<import("./codec/agent/v1/query").QuerySessionByChallengeResponse>;
        VRFSeedRequest: (account: string) => Promise<import("./codec/agent/v1/query").QueryVRFSeedResponse>;
    };
};
export declare function setupDHTExtension(base: QueryClient): {
    dht: {
        params: () => Promise<import("./codec/dht/v1/query").QueryParamsResponse>;
        getModel: (modelName: string) => Promise<import("./codec/dht/v1/query").QueryGetModelResponse>;
        getModelBlocks: (modelName: string, pagination?: PageRequest) => Promise<import("./codec/dht/v1/query").QueryGetModelBlocksResponse>;
        getNode: (nodeId: string) => Promise<import("./codec/dht/v1/query").QueryGetNodeResponse>;
        getMiner: (nodeId: string) => Promise<import("./codec/dht/v1/query").QueryGetMinerResponse>;
        getOrchestrator: (nodeId: string) => Promise<import("./codec/dht/v1/query").QueryGetOrchestratorResponse>;
        getAllOrchestrator: (pagination?: PageRequest) => Promise<import("./codec/dht/v1/query").QueryGetAllOrchestratorResponse>;
        getOrchestratorsByParams: (inferenceType: InferenceType, availability: Availability, limit: number, key: Uint8Array) => Promise<import("./codec/dht/v1/query").QueryGetOrchestratorsByParamsResponse>;
        getOrchestratorHeartbeat: (nodeId: string) => Promise<import("./codec/dht/v1/query").QueryGetOrchestratorHeartbeatResponse>;
        getMinerHeartbeat: (nodeId: string) => Promise<import("./codec/dht/v1/query").QueryGetMinerHeartbeatResponse>;
    };
};
