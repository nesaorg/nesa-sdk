import { AccountData } from "@cosmjs/proto-signing";
import { NesaClient } from "./client";
import { GasPrice } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types"
import EncryptUtils from "./encryptUtils";
import Long from "long";

class WalletOperation {
  static getNesaClient(chainInfo: ChainInfo, offlineSigner: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      if (offlineSigner) {
        const { chainId, rpc } = chainInfo;
        const account: AccountData = (await offlineSigner.getAccounts())[0];
        NesaClient.connectWithSigner(
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
        ).then((client) => {
          resolve(client)
        }).catch((error) => {
          reject(error)
        })
      } else {
        reject(new Error("No wallet installed, please install keplr or metamask wallet first"));
      }
    })
  }

  static registerSession(client: any, modelName: string, lockAmount: string, denom: string, chainInfo: ChainInfo, offlineSigner: any): Promise<any> {
    EncryptUtils.generateKey();
    return new Promise(async (resolve, reject) => {
      const lockBalance = { denom: denom, amount: lockAmount };
      EncryptUtils.requestVrf(client, offlineSigner).then(async (res) => {
        const fee = {
          amount: [{ denom: chainInfo.feeCurrencies[0].coinMinimalDenom, amount: "6" }],
          gas: "200000",
        }
        if (res?.vrf && res?.sessionId) {
          resolve(client.signRegisterSession(res.sessionId, modelName, fee, lockBalance, res.vrf))
        } else {
          reject(new Error('Vrf seed is null'))
        }
      })
    })
  }

  static requestAgentInfo(client: any, agentName: string, modelName: string): Promise<any> {
    console.log('modelName: ', modelName)
    return new Promise(async (resolve, reject) => {
      if (client) {
        resolve(client.getInferenceAgent(agentName, modelName, Long.fromNumber(0), new Uint8Array()))
      } else {
        reject("Client init failed");
      }
    })
  }

  static requestParams(client: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      if (client) {
        resolve(client.getParams())
      } else {
        reject("Client init failed");
      }
    })
  }

  static requestVrfSeed(client: any, offlineSigner: any): Promise<any> {
    return new Promise(async (resolve) => {
      const account: AccountData = (await offlineSigner.getAccounts())[0];
      resolve(client.getVRFSeed(account.address))
    })
  }
}

export default WalletOperation;
