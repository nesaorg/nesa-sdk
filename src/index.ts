import ChatClient from "./chatClient";
import WalletOperation from './walletOperation'

class NesaSdk {
  public modelId: string;

  constructor(modelId: string) {
    this.modelId = modelId;
  }

  getConfig() {
    return {
      modelId: this.modelId,
    };
  }
}

export { ChatClient, WalletOperation };
export default NesaSdk;
