import { OfflineSigner, Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargateTypes,
  SigningStargateClient,
  SigningStargateClientOptions,
  GasPrice,
  isDeliverTxFailure,
  Event,
  QueryClient,
} from "@cosmjs/stargate";
import { CometClient, connectComet } from "@cosmjs/tendermint-rpc";
import { Logger, NoopLogger } from "./logger";
import { createDeliverTxFailureMessage } from "./utils";
import {
  MsgUpdateParams,
  MsgRegisterInferenceAgent,
  MsgRegisterSession,
  MsgRegisterSessionResponse,
  MsgSubmitPayment,
  VRF,
} from "./codec/agent/v1/tx";
import { Payment, Params, SessionStatus } from "./codec/agent/v1/agent";
import { Coin } from "./codec/cosmos/base/v1beta1/coin";
import { AgentExtension, setupAgentExtension } from "./queries";
import {
  // QueryModelAllResponse,
  // QueryModelResponse,
  QueryParamsResponse,
  QueryInferenceAgentResponse,
  QuerySessionResponse,
  // QuerySessionByAgentResponse,
  QueryVRFSeedResponse,
  QuerySessionByAgentResponse,
} from "./codec/agent/v1/query";
import { StdFee } from "@cosmjs/amino";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";

export type NesaClientOptions = SigningStargateClientOptions & {
  logger?: Logger;
  gasPrice: GasPrice;
  estimatedBlockTime: number;
  estimatedIndexerTime: number;
};

function nesaRegistry(): Registry {
  return new Registry([
    ...defaultStargateTypes,
    ["/agent.v1.MsgUpdateParams", MsgUpdateParams],
    // ['/agent.v1.MsgRegisterModel', MsgRegisterModel],
    ["/agent.v1.MsgRegisterInferenceAgent", MsgRegisterInferenceAgent],
    ["/agent.v1.MsgRegisterSession", MsgRegisterSession],
    ["/agent.v1.MsgSubmitPayment", MsgSubmitPayment],
    ["/agent.v1.VRF", VRF],
  ]);
}

/// This is the default message result with no extra data
export interface MsgResult {
  readonly events: readonly Event[];
  /** Transaction hash (might be used as transaction ID). Guaranteed to be non-empty upper-case hex */
  readonly transactionHash: string;
  /** block height where this transaction was committed - only set if we send 'block' mode */
  readonly height: number;
}

export type RegisterSessionResult = MsgResult & {
  readonly account: string;
};

export class NesaClient {
  public readonly gasPrice: GasPrice;
  public readonly sign: SigningStargateClient;
  public readonly signByModel: { [modelName: string]: SigningStargateClient } =
    {};
  public readonly query: QueryClient & AgentExtension;
  public readonly queryByModel: {
    [modelName: string]: QueryClient & AgentExtension;
  } = {};
  public readonly tm: CometClient;
  public readonly tmByModel: { [modelName: string]: CometClient } = {};
  public readonly senderAddress: string;
  public readonly senderAddressByModel: { [modelName: string]: string } = {};
  public readonly logger: Logger;

  public readonly chainId: string;
  // public readonly revisionNumber: Long;
  public readonly estimatedBlockTime: number;
  public readonly estimatedIndexerTime: number;
  private broadcastPromise: any;
  private broadcastPromiseByModel: { [modelName: string]: any } = {};
  private signResult: any;
  private signResultByModel: { [modelName: string]: any } = {};

  public static async connectWithSigner(
    endpoint: string,
    signer: OfflineSigner,
    senderAddress: string,
    chainId: string | undefined,
    options: NesaClientOptions,
    modelName?: string
  ): Promise<NesaClient> {
    const mergedOptions = {
      ...options,
      registry: nesaRegistry(),
    };
    const tmClient = await connectComet(endpoint);
    const signingClient = await SigningStargateClient.createWithSigner(
      tmClient,
      signer,
      mergedOptions
    );
    if (!chainId) {
      chainId = await signingClient.getChainId();
    }
    return new NesaClient(
      signingClient,
      tmClient,
      senderAddress,
      chainId,
      options,
      modelName
    );
  }

  private constructor(
    signingClient: SigningStargateClient,
    tmClient: CometClient,
    senderAddress: string,
    chainId: string,
    options: NesaClientOptions,
    modelName?: string
  ) {
    this.sign = signingClient;

    if (modelName) {
      this.signByModel[modelName] = signingClient;
    }

    this.tm = tmClient;

    if (modelName) {
      this.tmByModel[modelName] = tmClient;
    }

    this.query = QueryClient.withExtensions(tmClient, setupAgentExtension);

    if (modelName) {
      this.queryByModel[modelName] = QueryClient.withExtensions(
        tmClient,
        setupAgentExtension
      );
    }
    this.senderAddress = senderAddress;

    if (modelName) {
      this.senderAddressByModel[modelName] = senderAddress;
    }

    this.chainId = chainId;
    // this.revisionNumber = parseRevisionNumber(chainId);

    this.gasPrice = options.gasPrice;
    this.logger = options.logger ?? new NoopLogger();
    this.estimatedBlockTime = options.estimatedBlockTime;
    this.estimatedIndexerTime = options.estimatedIndexerTime;
  }

  public async updateParams(
    authority: string,
    params: Params
  ): Promise<MsgResult> {
    this.logger.verbose("Update Params");
    const senderAddress = this.senderAddress;
    const updateParamsMsg = {
      typeUrl: "/agent.v1.MsgUpdateParams",
      value: MsgUpdateParams.fromPartial({
        authority,
        params,
      }),
    };
    this.logger.debug("Update Params Message: ", updateParamsMsg);
    const result = await this.sign.signAndBroadcast(
      senderAddress,
      [updateParamsMsg],
      "auto"
    );
    if (isDeliverTxFailure(result)) {
      throw new Error(createDeliverTxFailureMessage(result));
    }
    return {
      events: result.events,
      transactionHash: result.transactionHash,
      height: result.height,
    };
  }

  public async registerInferenceAgent(
    // account: string,
    url: string,
    version: Long
  ): Promise<MsgResult> {
    this.logger.verbose(`Register Inference Agent`);
    const senderAddress = this.senderAddress;
    const registerInferenceAgentMsg = {
      typeUrl: "/agent.v1.MsgRegisterInferenceAgent",
      value: MsgRegisterInferenceAgent.fromPartial({
        account: senderAddress,
        url,
        version,
      }),
    };
    this.logger.debug("Register Model Message: ", registerInferenceAgentMsg);
    const result = await this.sign.signAndBroadcast(
      senderAddress,
      [registerInferenceAgentMsg],
      "auto"
    );
    if (isDeliverTxFailure(result)) {
      throw new Error(createDeliverTxFailureMessage(result));
    }

    return {
      events: result.events,
      transactionHash: result.transactionHash,
      height: result.height,
    };
  }

  public broadcastRegisterSession(modelName?: string) {
    if (!modelName) {
      if (!this.signResult) {
        return new Error("Please sign first");
      }
      if (this.broadcastPromise) {
        return this.broadcastPromise;
      }
      this.broadcastPromise = new Promise((resolve, reject) => {
        this.sign
          .broadcastTx(Uint8Array.from(TxRaw.encode(this.signResult).finish()))
          .then((result) => {
            if (isDeliverTxFailure(result)) {
              reject(new Error(createDeliverTxFailureMessage(result)));
            } else {
              resolve({
                events: result.events,
                transactionHash: result.transactionHash,
                height: result.height,
                account: MsgRegisterSessionResponse.decode(
                  result.msgResponses[0]?.value
                ).account,
              });
            }
          })
          .catch((error) => {
            reject(error);
          });
      });

      return;
    }
    if (!this.signResultByModel[modelName]) {
      return new Error("Please sign first");
    }
    if (this.broadcastPromiseByModel[modelName]) {
      return this.broadcastPromiseByModel[modelName];
    }
    this.broadcastPromiseByModel[modelName] = new Promise((resolve, reject) => {
      this.sign
        .broadcastTx(
          Uint8Array.from(
            TxRaw.encode(this.signResultByModel[modelName]).finish()
          )
        )
        .then((result) => {
          if (isDeliverTxFailure(result)) {
            reject(new Error(createDeliverTxFailureMessage(result)));
          } else {
            resolve({
              events: result.events,
              transactionHash: result.transactionHash,
              height: result.height,
              account: MsgRegisterSessionResponse.decode(
                result.msgResponses[0]?.value
              ).account,
            });
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public async signRegisterSession(
    sessionId: string,
    modelName: string,
    fee: StdFee,
    lockBalance?: Coin,
    vrf?: VRF
  ): Promise<any> {
    if (!modelName) {
      this.logger.verbose(`Register Session`);
      const senderAddress = this.senderAddress;
      const registerSessionMsg = {
        typeUrl: "/agent.v1.MsgRegisterSession",
        value: MsgRegisterSession.fromPartial({
          account: senderAddress,
          sessionId,
          modelName,
          lockBalance,
          vrf,
        }),
      };
      const signResult = await this.sign.sign(
        senderAddress,
        [registerSessionMsg],
        fee,
        ""
      );
      this.signResult = signResult;

      // this.signResultByModel[modelName] = signResult;

      const hex = Buffer.from(
        Uint8Array.from(TxRaw.encode(this.signResult).finish())
      ).toString("hex");
      this.broadcastPromise = undefined;
      this.broadcastRegisterSession();
      return {
        sessionId,
        transactionHash: toHex(sha256(Buffer.from(hex, "hex"))).toUpperCase(),
      };
    }

    this.logger.verbose(`Register Session`);
    const senderAddress = this.senderAddressByModel[modelName];
    const registerSessionMsg = {
      typeUrl: "/agent.v1.MsgRegisterSession",
      value: MsgRegisterSession.fromPartial({
        account: senderAddress,
        sessionId,
        modelName,
        lockBalance,
        vrf,
      }),
    };
    const signResult = await this.signByModel[modelName]?.sign(
      senderAddress,
      [registerSessionMsg],
      fee,
      ""
    );
    this.signResultByModel[modelName] = signResult;

    const hex = Buffer.from(
      Uint8Array.from(TxRaw.encode(this.signResultByModel[modelName]).finish())
    ).toString("hex");
    this.broadcastPromiseByModel[modelName] = undefined;
    this.broadcastRegisterSession(modelName);
    return {
      sessionId,
      transactionHash: toHex(sha256(Buffer.from(hex, "hex"))).toUpperCase(),
    };
  }

  public async registerSession(
    // account: string,
    sessionId: string,
    modelName: string,
    lockBalance?: Coin,
    vrf?: VRF
  ): Promise<RegisterSessionResult> {
    this.logger.verbose(`Register Session`);
    const senderAddress = this.senderAddress;
    const registerSessionMsg = {
      typeUrl: "/agent.v1.MsgRegisterSession",
      value: MsgRegisterSession.fromPartial({
        account: senderAddress,
        sessionId,
        modelName,
        lockBalance,
        vrf,
      }),
    };
    this.logger.debug("Register Session Message: ", registerSessionMsg);
    const result = await this.sign.signAndBroadcast(
      senderAddress,
      [registerSessionMsg],
      "auto"
    );
    if (isDeliverTxFailure(result)) {
      throw new Error(createDeliverTxFailureMessage(result));
    }

    return {
      events: result.events,
      transactionHash: result.transactionHash,
      height: result.height,
      account: MsgRegisterSessionResponse.decode(result.msgResponses[0]?.value)
        .account,
    };
  }

  public async submitPayment(
    sessionId: string,
    signature: Uint8Array,
    payment?: Payment
  ): Promise<MsgResult> {
    this.logger.verbose(`Submit Payment`);
    const senderAddress = this.senderAddress;
    const submitPaymentMsg = {
      typeUrl: "/agent.v1.MsgSubmitPayment",
      value: MsgSubmitPayment.fromPartial({
        account: senderAddress,
        sessionId,
        signature,
        payment,
      }),
    };
    this.logger.debug("Submit Payment Message: ", submitPaymentMsg);
    const result = await this.sign.signAndBroadcast(
      senderAddress,
      [submitPaymentMsg],
      "auto"
    );
    if (isDeliverTxFailure(result)) {
      throw new Error(createDeliverTxFailureMessage(result));
    }

    return {
      events: result.events,
      transactionHash: result.transactionHash,
      height: result.height,
    };
  }

  public async getParams(): Promise<QueryParamsResponse> {
    const result = await this.query.agent.params();
    return result;
  }

  public async getInferenceAgent(
    account: string,
    modelName: string,
    limit: Long,
    key: Uint8Array
  ): Promise<QueryInferenceAgentResponse> {
    const result = await this.query.agent.inferenceAgentRequest(
      account,
      modelName,
      limit,
      key
    );
    return result;
  }

  public async getSession(sessionId: string): Promise<QuerySessionResponse> {
    const result = await this.query.agent.sessionRequest(sessionId);
    return result;
  }

  public async getSessionByAgent(
    account: string,
    status: SessionStatus,
    limit: Long,
    orderDesc: boolean,
    key: Uint8Array,
    expireTime?: Date
  ): Promise<QuerySessionByAgentResponse> {
    const result = await this.query.agent.sessionByAgentRequest(
      account,
      status,
      limit,
      orderDesc,
      key,
      expireTime
    );
    return result;
  }

  public async getVRFSeed(account: string): Promise<QueryVRFSeedResponse> {
    const result = await this.query.agent.VRFSeedRequest(account);
    return result;
  }
}
