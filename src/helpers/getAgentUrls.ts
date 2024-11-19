import type { InferenceAgent } from "../codec/agent/v1/agent";

export const getAgentUrls = (selectAgent: InferenceAgent, chatId?: string, agentSessionId?: string) => {
  const baseUrl = `${selectAgent.url}${
    selectAgent.url?.endsWith("/") ? "" : "/"
  }`;
  
  const paramChatId = chatId && chatId !== '' ? `&chat-id=${chatId}` : ''
  const paramSessionId = agentSessionId && agentSessionId !== '' ? `&session-id=${agentSessionId}` : ''
  return {
    agentChatUrl: `${baseUrl}chat?${paramChatId}${paramSessionId}`,
    agentHeartbeatUrl: `${baseUrl}heartbeat?${paramChatId}${paramSessionId}`,
  };
};
