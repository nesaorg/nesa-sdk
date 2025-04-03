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
            throw new Error('No wallet installed, please install keplr or metamask wallet first');
        }
        const { chainId, rpc } = chainInfo;
        const account = (await offlineSigner.getAccounts())[0];
        if (!rpc) {
            throw new Error(`Missing chainInfo.rpc`);
        }
        if ((chainInfo.feeCurrencies || []).length === 0) {
            throw new Error(`Missing feeCurrencies (${chainInfo.feeCurrencies})`);
        }
        return client_1.NesaClient.connectWithSigner(rpc, offlineSigner, account.address, chainId, {
            gasPrice: stargate_1.GasPrice.fromString(`0.025${chainInfo.feeCurrencies[0].coinMinimalDenom}`),
            estimatedBlockTime: 6,
            estimatedIndexerTime: 5,
        });
    }
    static async registerSession(recordId, client, modelName, lockAmount, denom, chainInfo, offlineSigner) {
        encryptUtils_1.default.generateKey(recordId);
        const [resVrf, resModel] = await Promise.all([
            encryptUtils_1.default.requestVrf(recordId, client, offlineSigner),
            this.requestModel(client, modelName),
        ]);
        if (!resVrf?.vrf) {
            throw new Error('Vrf is null');
        }
        if (!resVrf?.sessionId) {
            throw new Error('SessionId is null');
        }
        if (!resModel?.model) {
            throw new Error('Model is null');
        }
        if (!resModel?.model?.tokenPrice) {
            throw new Error('Model token price is null');
        }
        const fee = {
            amount: [
                { denom: chainInfo.feeCurrencies[0].coinMinimalDenom, amount: '6' },
            ],
            gas: '200000',
        };
        const lockBalance = { denom: denom, amount: lockAmount };
        return client.signRegisterSession(resVrf.sessionId, modelName, fee, lockBalance, resVrf.vrf, resModel.model.tokenPrice);
    }
    static requestAgentInfo(client, agentName, modelName) {
        // console.log("modelName: ", modelName);
        if (!client) {
            throw 'Client init failed';
        }
        return client.getInferenceAgent(agentName, modelName, long_1.default.fromNumber(0), new Uint8Array());
    }
    static requestParams(client) {
        if (!client) {
            throw new Error('Client init failed');
        }
        return client.getParams();
    }
    static async requestVrfSeed(client, offlineSigner) {
        const account = (await offlineSigner.getAccounts())[0];
        return client.getVRFSeed(account.address);
    }
    static requestModel(client, modelName) {
        return client.getModel(modelName);
    }
}
exports.default = WalletOperation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0T3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dhbGxldE9wZXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHFDQUFzQztBQUN0QywrQ0FBNEM7QUFFNUMsa0VBQTBDO0FBQzFDLGdEQUF3QjtBQUl4QixNQUFNLGVBQWU7SUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQ3hCLFNBQW9CLEVBQ3BCLGFBQThDO1FBRTlDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuQixNQUFNLElBQUksS0FBSyxDQUNiLG9FQUFvRSxDQUNyRSxDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ25DLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNqRCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBRUQsT0FBTyxtQkFBVSxDQUFDLGlCQUFpQixDQUNqQyxHQUFHLEVBQ0gsYUFBYSxFQUNiLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxFQUNQO1lBQ0UsUUFBUSxFQUFFLG1CQUFRLENBQUMsVUFBVSxDQUMzQixRQUFRLFNBQVMsQ0FBQyxhQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FDdkQ7WUFDRCxrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLG9C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