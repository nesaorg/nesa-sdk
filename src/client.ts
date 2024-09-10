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
import { Payment, Params, SessionStatus,TokenPrice, AgentModelStatus } from "./codec/agent/v1/agent";
import { Coin } from "./codec/cosmos/base/v1beta1/coin";
import { setupAgentExtension,setupDHTExtension } from "./queries";
import { StdFee } from "@cosmjs/amino";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";
import { MsgRegisterModel, MsgUpdateModel } from "./codec/dht/v1/tx";
import { PageRequest } from "./codec/cosmos/base/query/v1beta1/pagination";
import { Availability, InferenceType } from "./codec/dht/v1/orchestrator";

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
    ["/dht.v1.MsgRegisterModel", MsgRegisterModel],
    ["/dht.v1.MsgUpdateModel", MsgUpdateModel],
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
  public readonly query: QueryClient & ReturnType<typeof setupAgentExtension> & ReturnType<typeof setupDHTExtension>;
  public readonly queryByModel: {
    [modelName: string]: QueryClient & ReturnType<typeof setupAgentExtension> & ReturnType<typeof setupDHTExtension>;
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
  private signResult: any;

  public static async connectWithSigner(
    endpoint: string,
    signer: OfflineSigner,
    senderAddress: string,
    chainId: string | undefined,
    options: NesaClientOptions
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
      options
    );
  }

  private constructor(
    signingClient: SigningStargateClient,
    tmClient: CometClient,
    senderAddress: string,
    chainId: string,
    options: NesaClientOptions
  ) {
    this.sign = signingClient;

    this.tm = tmClient;

    this.query = QueryClient.withExtensions(
      tmClient,
      setupAgentExtension,
      setupDHTExtension
    );

    this.senderAddress = senderAddress;

    this.chainId = chainId;
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

  public broadcastRegisterSession() {
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
  }

  public async signRegisterSession(
    sessionId: string,
    modelName: string,
    fee: StdFee,
    lockBalance: Coin,
    vrf: VRF,
    tokenPrice: TokenPrice
  ) {
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
        tokenPrice
      }),
    };
    const signResult = await this.sign.sign(
      senderAddress,
      [registerSessionMsg],
      fee,
      ""
    );
    this.signResult = signResult;

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

  public async registerSession(
    sessionId: string,
    modelName: string,
    lockBalance: Coin,
    vrf: VRF,
    tokenPrice: TokenPrice
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
        tokenPrice
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

  public async registerModel(
    creator: string,
    modelName: string,
    blockCids: string[],
    allowList: string[],
    tokenPrice?: TokenPrice
  ): Promise<MsgResult> {
    this.logger.verbose(`Register Model`);
    const senderAddress = this.senderAddress;
    const registerModelMsg = {
      typeUrl: '/dht.v1.MsgRegisterModel',
      value: MsgRegisterModel.fromPartial({
        creator,
        modelName,
        blockCids,
        allowList,
        tokenPrice
      }),
    };
    this.logger.debug('Register Model Message: ', registerModelMsg);
    const result = await this.sign.signAndBroadcast(
      senderAddress,
      [registerModelMsg],
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

  public async updateModel(
    modelName: string,
    allowList: string[],
    tokenPrice: TokenPrice
  ): Promise<MsgResult> {
    this.logger.verbose(`Update Model`);
    const senderAddress = this.senderAddress;
    const updateModelMsg = {
      typeUrl: '/dht.v1.MsgUpdateModel',
      value: MsgUpdateModel.fromPartial({
        account: senderAddress,
        modelName,
        allowList,
        tokenPrice
      }),
    };
    this.logger.debug('Update Model Message: ', updateModelMsg);
    const result = await this.sign.signAndBroadcast(
      senderAddress,
      [updateModelMsg],
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

  public async getParams() {
    const result = await this.query.agent.params();
    return result;
  }

  public async getInferenceAgent(
    account: string,
    modelName: string,
    limit: Long,
    key: Uint8Array
  ) {
    const result = await this.query.agent.inferenceAgentRequest(
      account,
      modelName,
      limit,
      key
    );
    return result;
  }

  public async getAgentByModel(
    modelName: string,
    status: AgentModelStatus
  ) {
    const result = await this.query.agent.agentByModelRequest(
      modelName,
      status
    );
    return result;
  }

  public async getSession(sessionId: string) {
    const result = await this.query.agent.sessionRequest(sessionId);
    return result;
  }

  public async getSessionByAgent(
    account: string,
    status: SessionStatus | undefined,
    expireTime: Date,
    limit: Long,
    orderDesc: boolean,
    key: Uint8Array
  ) {
    const result = await this.query.agent.sessionByAgentRequest(
      account,
      status,
      expireTime,
      limit,
      orderDesc,
      key
    );
    return result;
  }

  public async getSessionByChallenge(
    account: string,
    limit: Long,
    key: Uint8Array
  ) {
    const result = await this.query.agent.sessionByChallengeRequest(
      account,
      limit,
      key
    );
    return result;
  }

  public async getVRFSeed(account: string) {
    const result = await this.query.agent.VRFSeedRequest(account);
    return result;
  }

  public async getDhtParams() {
    const result = await this.query.dht.params();
    return result;
  }

  public async getModel(modelName: string) {
    const result = await this.query.dht.getModel(modelName);
    return result;
  }

  public async getModelBlocks(modelName: string, pagination?: PageRequest) {
    const result = await this.query.dht.getModelBlocks(modelName,pagination);
    return result;
  }

  public async getNode(nodeId: string) {
    const result = await this.query.dht.getNode(nodeId);
    return result;
  }

  public async getMiner(nodeId: string) {
    const result = await this.query.dht.getMiner(nodeId);
    return result;
  }
  
  public async getOrchestrator(nodeId: string) {
    const result = await this.query.dht.getOrchestrator(nodeId);
    return result;
  }

  public async getAllOrchestrator(pagination?: PageRequest) {
    const result = await this.query.dht.getAllOrchestrator(pagination);
    return result;
  }

  public async getOrchestratorsByParams(
    inferenceType: InferenceType,
    availability: Availability,
    limit: number,
    key: Uint8Array
  ) {
    const result = await this.query.dht.getOrchestratorsByParams(
      inferenceType,
      availability,
      limit,
      key
    );
    return result;
  }
  
  public async getOrchestratorHeartbeat(nodeId: string) {
    const result = await this.query.dht.getOrchestratorHeartbeat(nodeId);
    return result;
  }

  public async getMinerHeartbeat(nodeId: string) {
    const result = await this.query.dht.getMinerHeartbeat(nodeId);
    return result;
  }
}
