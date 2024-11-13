import type { InferenceAgent } from "../codec/agent/v1/agent";

export const getAgentUrls = (selectAgent: InferenceAgent, chatId: string, agentSessionId: string) => {
  const baseUrl = `${selectAgent.url}${
    selectAgent.url?.endsWith("/") ? "" : "/"
  }`;
  return {
    agentChatUrl: `${baseUrl}chat?chat-id=${chatId}&session-id=${agentSessionId}`,
    agentHeartbeatUrl: `${baseUrl}heartbeat?chat-id=${chatId}&session-id=${agentSessionId}`,
  };
};
