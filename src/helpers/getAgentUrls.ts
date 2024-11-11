import type { InferenceAgent } from "../codec/agent/v1/agent";

export const getAgentUrls = (selectAgent: InferenceAgent,chatId:string) => {
  const baseUrl = `${selectAgent.url}${
    selectAgent.url?.endsWith("/") ? "" : "/"
  }`;
  return {
    agentWsUrl: `${baseUrl}chat?chat-id=${chatId}`,
    agentHeartbeatUrl: `${baseUrl}heartbeat?chat-id=${chatId}`,
  };
};
