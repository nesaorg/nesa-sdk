/// <reference types="long" />
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsResponse, QueryInferenceAgentResponse, QuerySessionResponse, QueryVRFSeedResponse, QuerySessionByAgentResponse } from "./codec/agent/v1/query";
import { SessionStatus } from "./codec/agent/v1/agent";
export interface AgentExtension {
    readonly agent: {
        readonly params: () => Promise<QueryParamsResponse>;
        readonly inferenceAgentRequest: (account: string, modelName: string, limit: Long, key: Uint8Array) => Promise<QueryInferenceAgentResponse>;
        readonly sessionRequest: (id: string) => Promise<QuerySessionResponse>;
        readonly sessionByAgentRequest: (account: string, status: SessionStatus, limit: Long, orderDesc: boolean, key: Uint8Array, expireTime?: Date) => Promise<QuerySessionByAgentResponse>;
        readonly VRFSeedRequest: (account: string) => Promise<QueryVRFSeedResponse>;
    };
}
export declare function setupAgentExtension(base: QueryClient): AgentExtension;
