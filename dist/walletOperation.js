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
    static getNesaClient(chainInfo, offlineSigner) {
        return new Promise(async (resolve, reject) => {
            if (offlineSigner) {
                const { chainId, rpc } = chainInfo;
                const account = (await offlineSigner.getAccounts())[0];
                try {
                    const client = await client_1.NesaClient.connectWithSigner(rpc, offlineSigner, account.address, chainId, {
                        gasPrice: stargate_1.GasPrice.fromString(`0.025${chainInfo.feeCurrencies[0].coinMinimalDenom}`),
                        estimatedBlockTime: 6,
                        estimatedIndexerTime: 5,
                    });
                    resolve(client);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                reject(new Error("No wallet installed, please install keplr or metamask wallet first"));
            }
        });
    }
    static registerSession(client, 
    // modelName: string = "",
    lockAmount, denom, chainInfo, offlineSigner) {
        encryptUtils_1.default.generateKey();
        return new Promise(async (resolve, reject) => {
            const lockBalance = { denom: denom, amount: lockAmount };
            const res = await encryptUtils_1.default.requestVrf(client, offlineSigner);
            const fee = {
                amount: [
                    { denom: chainInfo.feeCurrencies[0].coinMinimalDenom, amount: "6" },
                ],
                gas: "200000",
            };
            if (res?.vrf && res?.sessionId) {
                resolve(client.signRegisterSession(res.sessionId, 
                // modelName,
                fee, lockBalance, res.vrf));
            }
            else {
                reject(new Error("Vrf seed is null"));
            }
        });
    }
    static requestAgentInfo(client, agentName, modelName) {
        console.log("modelName: ", modelName);
        return new Promise(async (resolve, reject) => {
            if (client) {
                resolve(client.getInferenceAgent(agentName, modelName, long_1.default.fromNumber(0), new Uint8Array()));
            }
            else {
                reject("Client init failed");
            }
        });
    }
    static requestParams(client) {
        return new Promise(async (resolve, reject) => {
            if (client) {
                resolve(client.getParams());
            }
            else {
                reject("Client init failed");
            }
        });
    }
    static requestVrfSeed(client, offlineSigner) {
        return new Promise(async (resolve) => {
            const account = (await offlineSigner.getAccounts())[0];
            resolve(client.getVRFSeed(account.address));
        });
    }
}
exports.default = WalletOperation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0T3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dhbGxldE9wZXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHFDQUFzQztBQUN0QywrQ0FBNEM7QUFFNUMsa0VBQTBDO0FBQzFDLGdEQUF3QjtBQUV4QixNQUFNLGVBQWU7SUFDbkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFvQixFQUFFLGFBQWtCO1FBQzNELE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLGFBQWEsRUFBRSxDQUFDO2dCQUNsQixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQztnQkFDbkMsTUFBTSxPQUFPLEdBQWdCLENBQUMsTUFBTSxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFcEUsSUFBSSxDQUFDO29CQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sbUJBQVUsQ0FBQyxpQkFBaUIsQ0FDL0MsR0FBRyxFQUNILGFBQWEsRUFDYixPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sRUFDUDt3QkFDRSxRQUFRLEVBQUUsbUJBQVEsQ0FBQyxVQUFVLENBQzNCLFFBQVEsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUN0RDt3QkFDRCxrQkFBa0IsRUFBRSxDQUFDO3dCQUNyQixvQkFBb0IsRUFBRSxDQUFDO3FCQUN4QixDQUNGLENBQUM7b0JBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7b0JBQ1gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNaLENBQUM7WUFDSCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sTUFBTSxDQUNKLElBQUksS0FBSyxDQUNQLG9FQUFvRSxD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