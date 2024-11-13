"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgentUrls = void 0;
const getAgentUrls = (selectAgent, chatId, agentSessionId) => {
    const baseUrl = `${selectAgent.url}${selectAgent.url?.endsWith("/") ? "" : "/"}`;
    return {
        agentChatUrl: `${baseUrl}chat?chat-id=${chatId}&session-id=${agentSessionId}`,
        agentHeartbeatUrl: `${baseUrl}heartbeat?chat-id=${chatId}&session-id=${agentSessionId}`,
    };
};
exports.getAgentUrls = getAgentUrls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWdlbnRVcmxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvZ2V0QWdlbnRVcmxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVPLE1BQU0sWUFBWSxHQUFHLENBQUMsV0FBMkIsRUFBRSxNQUFjLEVBQUUsY0FBc0IsRUFBRSxFQUFFO0lBQ2xHLE1BQU0sT0FBTyxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FDaEMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FDeEMsRUFBRSxDQUFDO0lBQ0gsT0FBTztRQUNMLFlBQVksRUFBRSxHQUFHLE9BQU8sZ0JBQWdCLE1BQU0sZUFBZSxjQUFjLEVBQUU7UUFDN0UsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLHFCQUFxQixNQUFNLGVBQWUsY0FBYyxFQUFFO0tBQ3hGLENBQUM7QUFDSixDQUFDLENBQUM7QUFSVyxRQUFBLFlBQVksZ0JBUXZCIn0=