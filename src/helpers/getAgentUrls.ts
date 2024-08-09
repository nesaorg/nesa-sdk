import type { InferenceAgent } from "../codec/agent/v1/agent";

export const getAgentUrls = (selectAgent: InferenceAgent) => {
  const baseUrl = `${selectAgent.url}${
    selectAgent.url?.endsWith("/") ? "" : "/"
  }`;
  return {
    agentWsUrl: `${baseUrl}chat`,
    agentHeartbeatUrl: `${baseUrl}heartbeat`,
  };
};
