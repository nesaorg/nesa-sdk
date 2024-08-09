"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgentUrls = void 0;
const getAgentUrls = (selectAgent) => {
    const baseUrl = `${selectAgent.url}${selectAgent.url?.endsWith("/") ? "" : "/"}`;
    return {
        agentWsUrl: `${baseUrl}chat`,
        agentHeartbeatUrl: `${baseUrl}heartbeat`,
    };
};
exports.getAgentUrls = getAgentUrls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWdlbnRVcmxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvZ2V0QWdlbnRVcmxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVPLE1BQU0sWUFBWSxHQUFHLENBQUMsV0FBMkIsRUFBRSxFQUFFO0lBQzFELE1BQU0sT0FBTyxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FDaEMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FDeEMsRUFBRSxDQUFDO0lBQ0gsT0FBTztRQUNMLFVBQVUsRUFBRSxHQUFHLE9BQU8sTUFBTTtRQUM1QixpQkFBaUIsRUFBRSxHQUFHLE9BQU8sV0FBVztLQUN6QyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUlcsUUFBQSxZQUFZLGdCQVF2QiJ9