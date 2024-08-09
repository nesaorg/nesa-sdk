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
    static async getNesaClient(chainInfo, offlineSigner, modelName) {
        if (!offlineSigner) {
            throw new Error("No wallet installed, please install keplr or metamask wallet first");
        }
        const { chainId, rpc } = chainInfo;
        const account = (await offlineSigner.getAccounts())[0];
        return client_1.NesaClient.connectWithSigner(rpc, offlineSigner, account.address, chainId, {
            gasPrice: stargate_1.GasPrice.fromString(`0.025${chainInfo.feeCurrencies[0].coinMinimalDenom}`),
            estimatedBlockTime: 6,
            estimatedIndexerTime: 5,
        }, modelName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0T3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dhbGxldE9wZXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHFDQUFzQztBQUN0QywrQ0FBNEM7QUFFNUMsa0VBQTBDO0FBQzFDLGdEQUF3QjtBQUd4QixNQUFNLGVBQWU7SUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQ3hCLFNBQW9CLEVBQ3BCLGFBQThDLEVBQzlDLFNBQWtCO1FBRWxCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuQixNQUFNLElBQUksS0FBSyxDQUNiLG9FQUFvRSxDQUNyRSxDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ25DLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2RCxPQUFPLG1CQUFVLENBQUMsaUJBQWlCLENBQ2pDLEdBQUcsRUFDSCxhQUFhLEVBQ2IsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLEVBQ1A7WUFDRSxRQUFRLEVBQUUsbUJBQVEsQ0FBQyxVQUFVLENBQzNCLFFBQVEsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUN0RDtZQUNELGtCQUFrQixFQUFFLENBQUM7WUFDckIsb0JBQW9CLEVBQUUsQ0FBQztTQUN4QixFQUNELFNBQVMsQ0FDVixDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUMxQixRQUFnQixFQUNoQixNQUFrQixFQUNsQixTQUFpQixFQUNqQixVQUFrQixFQUNsQixLQUFhLEVBQ2IsU0FBb0IsRUFDcEIsYUFBa0M7UUFFbEMsc0JBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkMsTUFBTSxHQUFHLEdBQUcsTUFBTSxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRTNFLE1BQU0sR0FBRyxHQUFHO1lBQ1YsTUFBTSxFQUFFO2dCQUNOLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTthQUNwRTtZQUNELEdBQUcsRUFBRSxRQUFRO1NBQ2QsQ0FBQztRQUVGLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDL0IsT0FBTyxNQUFNLENBQUMsbUJBQW1CLENBQy9CLEdBQUcsQ0FBQyxTQUFTLEVBQ2IsU0FBUyxFQUNULEdBQUcsRUFDSCxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUNwQyxHQUFHLENBQUMsR0FBRyxDQUNSLENBQUM7UUFDSixDQUFDO1FBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQ3JCLE1BQWtCLEVBQ2xCLFNBQWlCLEVBQ2pCLFNBQWlCO1FBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNaLE1BQU0sb0JBQW9CLENBQUM7UUFDN0IsQ0FBQztRQUVELE9BQU8sTUFBTSxDQUFDLGlCQUFpQixDQUM3QixTQUFTLEVBQ1QsU0FBUyxFQUNULGNBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQ2xCLElBQUksVUFBVSxFQUFFLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUE4QjtRQUNqRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUVELE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FDekIsTUFBa0IsRUFDbEIsYUFBa0M7UUFFbEMsTUFBTSxPQUFPLEdBQWdCLENBQUMsTUFBTSxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRjtBQUVELGtCQUFlLGVBQWUsQ0FBQyJ9