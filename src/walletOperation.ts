import { AccountData } from "@cosmjs/proto-signing";
import { NesaClient } from "./client";
import { GasPrice } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";
import EncryptUtils from "./encryptUtils";
import Long from "long";
import type { CosmjsOfflineSigner } from "@leapwallet/cosmos-snap-provider";

class WalletOperation {
  static async getNesaClient(
    chainInfo: ChainInfo,
    offlineSigner: CosmjsOfflineSigner | undefined,
    modelName?: string
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
      },
      modelName
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

    const res = await EncryptUtils.requestVrf(recordId, client, offlineSigner);

    const fee = {
      amount: [
        { denom: chainInfo.feeCurrencies[0].coinMinimalDenom, amount: "6" },
      ],
      gas: "200000",
    };

    if (res?.vrf && res?.sessionId) {
      return client.signRegisterSession(
        res.sessionId,
        modelName,
        fee,
        { denom: denom, amount: lockAmount },
        res.vrf
      );
    }

    throw new Error("Vrf seed is null");
  }

  static requestAgentInfo(
    client: NesaClient,
    agentName: string,
    modelName: string
  ) {
    console.log("modelName: ", modelName);

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
}

export default WalletOperation;
