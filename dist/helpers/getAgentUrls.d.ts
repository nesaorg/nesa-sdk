import type { InferenceAgent } from "../codec/agent/v1/agent";
export declare const getAgentUrls: (selectAgent: InferenceAgent, chatId: string, agentSessionId: string) => {
    agentChatUrl: string;
    agentHeartbeatUrl: string;
};
