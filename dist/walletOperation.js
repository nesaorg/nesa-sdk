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
    static registerSession(client, modelName = "", lockAmount, denom, chainInfo, offlineSigner) {
        encryptUtils_1.default.generateKey();
        return new Promise(async (resolve, reject) => {
            const lockBalance = { denom: denom, amount: lockAmount };
            const res = await encryptUtils_1.default.requestVrf(client, offlineSigner);
            const res2 = await encryptUtils_1.default.requestVrf(client, offlineSigner);
            console.log("res", { res1: res?.sessionId, res2: res2?.sessionId });
            const fee = {
                amount: [
                    { denom: chainInfo.feeCurrencies[0].coinMinimalDenom, amount: "6" },
                ],
                gas: "200000",
            };
            if (res?.vrf && res?.sessionId) {
                resolve(client.signRegisterSession(res.sessionId, modelName, fee, lockBalance, res.vrf));
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