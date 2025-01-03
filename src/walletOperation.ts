import { AccountData } from "@cosmjs/proto-signing";
import { NesaClient } from "./client";
import { GasPrice } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";
import EncryptUtils from "./encryptUtils";
import Long from "long";
import type { CosmjsOfflineSigner } from "@leapwallet/cosmos-snap-provider";
import { QueryGetModelResponse } from "./codec/dht/v1/query";

class WalletOperation {
  static async getNesaClient(
    chainInfo: ChainInfo,
    offlineSigner: CosmjsOfflineSigner | undefined
  ) {
    if (!offlineSigner) {
      throw new Error(
        "No wallet installed, please install keplr or metamask wallet first"
      );
    }

    const { chainId, rpc } = chainInfo;
    const account = (await offlineSigner.getAccounts())[0];

    return NesaClient.connectWithSigner(
      rpc,
      offlineSigner,
      account.address,
      chainId,
      {
        gasPrice: GasPrice.fromString(
          `0.025${chainInfo.feeCurrencies[0].coinMinimalDenom}`
        ),
        estimatedBlockTime: 6,
        estimatedIndexerTime: 5,
      }
    );
  }

  static async registerSession(
    recordId: string,
    client: NesaClient,
    modelName: string,
    lockAmount: string,
    denom: string,
    chainInfo: ChainInfo,
    offlineSigner: CosmjsOfflineSigner
  ) {
    EncryptUtils.generateKey(recordId);
    const [resVrf, resModel] = await Promise.all([
      EncryptUtils.requestVrf(recordId, client, offlineSigner),
      this.requestModel(client, modelName)
    ])
    if (!resVrf?.vrf) {
      throw new Error("Vrf is null");
    }
    if (!resVrf?.sessionId) {
      throw new Error("SessionId is null");
    }
    if (!resModel?.model) {
      throw new Error('Model is null');
    }
    if (!resModel?.model?.tokenPrice) {
      throw new Error('Model token price is null');
    }
    const fee = {
      amount: [
        { denom: chainInfo.feeCurrencies[0].coinMinimalDenom, amount: "6" },
      ],
      gas: "200000",
    };
    const lockBalance = { denom: denom, amount: lockAmount };
    return client.signRegisterSession(resVrf.sessionId, modelName, fee, lockBalance, resVrf.vrf, resModel.model.tokenPrice);
  }

  static requestAgentInfo(
    client: NesaClient | undefined,
    agentName: string,
    modelName: string
  ) {
    // console.log("modelName: ", modelName);

    if (!client) {
      throw "Client init failed";
    }

    return client.getInferenceAgent(
      agentName,
      modelName,
      Long.fromNumber(0),
      new Uint8Array()
    );
  }

  static requestParams(client: NesaClient | undefined) {
    if (!client) {
      throw new Error("Client init failed");
    }

    return client.getParams();
  }

  static async requestVrfSeed(
    client: NesaClient,
    offlineSigner: CosmjsOfflineSigner
  ) {
    const account: AccountData = (await offlineSigner.getAccounts())[0];
    return client.getVRFSeed(account.address);
  }

  static requestModel(client: NesaClient, modelName: string): Promise<QueryGetModelResponse> {
    return client.getModel(modelName);
  }
}

export default WalletOperation;
