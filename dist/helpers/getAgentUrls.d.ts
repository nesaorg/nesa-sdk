import type { InferenceAgent } from "../codec/agent/v1/agent";
export declare const getAgentUrls: (selectAgent: InferenceAgent) => {
    agentWsUrl: string;
    agentHeartbeatUrl: string;
};
