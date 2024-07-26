import ChatClient from "./chatClient";
import WalletOperation from './walletOperation';
declare class NesaSdk {
    modelId: string;
    constructor(modelId: string);
    getConfig(): {
        modelId: string;
    };
}
export { ChatClient, WalletOperation };
export default NesaSdk;
