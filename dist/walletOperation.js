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
    static getNesaClient(chainInfo, offlineSigner, modelName) {
        return new Promise(async (resolve, reject) => {
            if (offlineSigner) {
                const { chainId, rpc } = chainInfo;
                const account = (await offlineSigner.getAccounts())[0];
                client_1.NesaClient.connectWithSigner(rpc, offlineSigner, account.address, chainId, {
                    gasPrice: stargate_1.GasPrice.fromString(`0.025${chainInfo.feeCurrencies[0].coinMinimalDenom}`),
                    estimatedBlockTime: 6,
                    estimatedIndexerTime: 5,
                }, modelName)
                    .then((client) => {
                    resolve(client);
                })
                    .catch((error) => {
                    reject(error);
                });
            }
            else {
                reject(new Error("No wallet installed, please install keplr or metamask wallet first"));
            }
        });
    }
    static registerSession(client, modelName, lockAmount, denom, chainInfo, offlineSigner) {
        encryptUtils_1.default.generateKey(modelName);
        return new Promise(async (resolve, reject) => {
            const lockBalance = { denom: denom, amount: lockAmount };
            encryptUtils_1.default.requestVrf(client, offlineSigner, modelName).then(async (res) => {
                const fee = {
                    amount: [
                        {
                            denom: chainInfo.feeCurrencies[0].coinMinimalDenom,
                            amount: "6",
                        },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0T3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dhbGxldE9wZXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHFDQUFzQztBQUN0QywrQ0FBNEM7QUFFNUMsa0VBQTBDO0FBQzFDLGdEQUF3QjtBQUV4QixNQUFNLGVBQWU7SUFDbkIsTUFBTSxDQUFDLGFBQWEsQ0FDbEIsU0FBb0IsRUFDcEIsYUFBa0IsRUFDbEIsU0FBa0I7UUFFbEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLElBQUksYUFBYSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO2dCQUNuQyxNQUFNLE9BQU8sR0FBZ0IsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxtQkFBVSxDQUFDLGlCQUFpQixDQUMxQixHQUFHLEVBQ0gsYUFBYSxFQUNiLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxFQUNQO29CQUNFLFFBQVEsRUFBRSxtQkFBUSxDQUFDLFVBQVUsQ0FDM0IsUUFBUSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQ3REO29CQUNELGtCQUFrQixFQUFFLENBQUM7b0JBQ3JCLG9CQUFvQixFQUFFLENBQUM7aUJBQ3hCLEVBQ0QsU0FBUyxDQUNWO3FCQUNFLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUNmLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO2lCQUFN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