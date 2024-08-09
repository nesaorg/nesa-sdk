"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const stargate_1 = require("@cosmjs/stargate");
const encryptUtils_1 = __importDefault(require("./encryptUtils"));
const long_1 = __importDefault(require("long"));
class WalletOperation {
    static async getNesaClient(chainInfo, offlineSigner) {
        if (!offlineSigner) {
            throw new Error("No wallet installed, please install keplr or metamask wallet first");
        }
        const { chainId, rpc } = chainInfo;
        const account = (await offlineSigner.getAccounts())[0];
        return client_1.NesaClient.connectWithSigner(rpc, offlineSigner, account.address, chainId, {
            gasPrice: stargate_1.GasPrice.fromString(`0.025${chainInfo.feeCurrencies[0].coinMinimalDenom}`),
            estimatedBlockTime: 6,
            estimatedIndexerTime: 5,
        });
    }
    static async registerSession(recordId, client, modelName, lockAmount, denom, chainInfo, offlineSigner) {
        encryptUtils_1.default.generateKey(recordId);
        const res = await encryptUtils_1.default.requestVrf(recordId, client, offlineSigner);
        const fee = {
            amount: [
                { denom: chainInfo.feeCurrencies[0].coinMinimalDenom, amount: "6" },
            ],
            gas: "200000",
        };
        if (res?.vrf && res?.sessionId) {
            return client.signRegisterSession(res.sessionId, modelName, fee, { denom: denom, amount: lockAmount }, res.vrf);
        }
        throw new Error("Vrf seed is null");
    }
    static requestAgentInfo(client, agentName, modelName) {
        console.log("modelName: ", modelName);
        if (!client) {
            throw "Client init failed";
        }
        return client.getInferenceAgent(agentName, modelName, long_1.default.fromNumber(0), new Uint8Array());
    }
    static requestParams(client) {
        if (!client) {
            throw new Error("Client init failed");
        }
        return client.getParams();
    }
    static async requestVrfSeed(client, offlineSigner) {
        const account = (await offlineSigner.getAccounts())[0];
        return client.getVRFSeed(account.address);
    }
}
exports.default = WalletOperation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0T3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dhbGxldE9wZXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHFDQUFzQztBQUN0QywrQ0FBNEM7QUFFNUMsa0VBQTBDO0FBQzFDLGdEQUF3QjtBQUd4QixNQUFNLGVBQWU7SUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQ3hCLFNBQW9CLEVBQ3BCLGFBQThDO1FBRTlDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuQixNQUFNLElBQUksS0FBSyxDQUNiLG9FQUFvRSxDQUNyRSxDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ25DLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2RCxPQUFPLG1CQUFVLENBQUMsaUJBQWlCLENBQ2pDLEdBQUcsRUFDSCxhQUFhLEVBQ2IsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLEVBQ1A7WUFDRSxRQUFRLEVBQUUsbUJBQVEsQ0FBQyxVQUFVLENBQzNCLFFBQVEsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUN0RDtZQUNELGtCQUFrQixFQUFFLENBQUM7WUFDckIsb0JBQW9CLEVBQUUsQ0FBQztTQUN4QixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQzFCLFFBQWdCLEVBQ2hCLE1BQWtCLEVBQ2xCLFNBQWlCLEVBQ2pCLFVBQWtCLEVBQ2xCLEtBQWEsRUFDYixTQUFvQixFQUNwQixhQUFrQztRQUVsQyxzQkFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuQyxNQUFNLEdBQUcsR0FBRyxNQUFNLHNCQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFM0UsTUFBTSxHQUFHLEdBQUc7WUFDVixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO2FBQ3BFO1lBQ0QsR0FBRyxFQUFFLFFBQVE7U0FDZCxDQUFDO1FBRUYsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUMvQixPQUFPLE1BQU0sQ0FBQyxtQkFBbUIsQ0FDL0IsR0FBRyxDQUFDLFNBQVMsRUFDYixTQUFTLEVBQ1QsR0FBRyxFQUNILEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQ1IsQ0FBQztRQUNKLENBQUM7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDckIsTUFBOEIsRUFDOUIsU0FBaUIsRUFDakIsU0FBaUI7UUFFakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osTUFBTSxvQkFBb0IsQ0FBQztRQUM3QixDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUMsaUJBQWlCLENBQzdCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsY0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFDbEIsSUFBSSxVQUFVLEVBQUUsQ0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQThCO1FBQ2pELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUN6QixNQUFrQixFQUNsQixhQUFrQztRQUVsQyxNQUFNLE9BQU8sR0FBZ0IsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBRUQsa0JBQWUsZUFBZSxDQUFDIn0=