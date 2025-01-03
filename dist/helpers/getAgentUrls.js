"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgentUrls = void 0;
const getAgentUrls = (selectAgent, chatId, agentSessionId) => {
    const baseUrl = `${selectAgent.url}${selectAgent.url?.endsWith("/") ? "" : "/"}`;
    const paramChatId = chatId && chatId !== '' ? `&chat-id=${chatId}` : '';
    const paramSessionId = agentSessionId && agentSessionId !== '' ? `&session-id=${agentSessionId}` : '';
    return {
        agentChatUrl: `${baseUrl}chat?${paramChatId}${paramSessionId}`,
        agentHeartbeatUrl: `${baseUrl}heartbeat?${paramChatId}${paramSessionId}`,
    };
};
exports.getAgentUrls = getAgentUrls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWdlbnRVcmxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvZ2V0QWdlbnRVcmxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVPLE1BQU0sWUFBWSxHQUFHLENBQUMsV0FBMkIsRUFBRSxNQUFlLEVBQUUsY0FBdUIsRUFBRSxFQUFFO0lBQ3BHLE1BQU0sT0FBTyxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FDaEMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FDeEMsRUFBRSxDQUFDO0lBRUgsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUN2RSxNQUFNLGNBQWMsR0FBRyxjQUFjLElBQUksY0FBYyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0lBQ3JHLE9BQU87UUFDTCxZQUFZLEVBQUUsR0FBRyxPQUFPLFFBQVEsV0FBVyxHQUFHLGNBQWMsRUFBRTtRQUM5RCxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sYUFBYSxXQUFXLEdBQUcsY0FBYyxFQUFFO0tBQ3pFLENBQUM7QUFDSixDQUFDLENBQUM7QUFYVyxRQUFBLFlBQVksZ0JBV3ZCIn0=