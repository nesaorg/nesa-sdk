import * as CryptoJS from "crypto-js";
import { Evaluate } from "./utils";
import * as Secp256k1 from "@lionello/secp256k1-js";
import WalletOperation from "./walletOperation";
import { NesaClient } from "./client";
import { CosmjsOfflineSigner } from "@leapwallet/cosmos-snap-provider";
import { VRF } from "./codec/agent/v1/tx";

type Key = { x: string; y: string };

class EncryptUtils {
  public static privateKeyMap: { [recordId: string]: Key } = {};
  public static publicKeyMap: { [recordId: string]: Key } = {};
  public static privateKeyBufMap: { [recordId: string]: Key } = {};

  static generateKey(recordId: string) {
    let privateKeyBuf;

    if (typeof window === "undefined") {
      const crypto = require("crypto");
      privateKeyBuf = crypto.randomBytes(32);
    } else {
      privateKeyBuf = window.crypto.getRandomValues(new Uint8Array(32));
    }
    this.privateKeyBufMap[recordId] = privateKeyBuf;

    const privateKey = Secp256k1.uint256(privateKeyBuf, 16);
    const publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey);

    this.privateKeyMap[recordId] = privateKey;
    this.publicKeyMap[recordId] = publicKey;

    return { privateKey, publicKey };
  }

  static signMessage(
    recordId: string,
    message: string,
    chatSeq: number,
    isQuestion?: boolean
  ) {
    if (!this.privateKeyMap[recordId] || !this.publicKeyMap[recordId]) {
      return "";
    }

    let messageData;
    if (isQuestion) {
      const sortSignDataHash = CryptoJS.SHA256(message).toString(
        CryptoJS.enc.Hex
      );
      messageData = `${sortSignDataHash}|${chatSeq}`;
    } else {
      messageData = message;
    }

    const signDataHash = CryptoJS.SHA256(messageData).toString(
      CryptoJS.enc.Hex
    );
    const digest = Secp256k1.uint256(signDataHash, 16);
    const signature = Secp256k1.ecsign(this.privateKeyMap[recordId], digest);
    let sigV =
      signature.v.toString().length < 2
        ? `0${signature.v.toString()}`
        : signature.v.toString();
    sigV = sigV.length < 2 ? `0${sigV}` : sigV;
    const signatureData = `${signature.r}${signature.s}${sigV}`;
    return signatureData;
  }

  static async requestVrf(
    recordId: string,
    client: NesaClient,
    offlineSigner: CosmjsOfflineSigner
  ) {
    const res = await WalletOperation.requestVrfSeed(client, offlineSigner);

    if (!res?.seed) {
      throw new Error("Vrf seed is null");
    }

    const publicKeyY = BigInt(`0x${this.publicKeyMap[recordId].y}`);
    let compressedPublicKey = "";
    if (publicKeyY % 2n === 0n) {
      compressedPublicKey = "02" + this.publicKeyMap[recordId].x;
    } else {
      compressedPublicKey = "03" + this.publicKeyMap[recordId].x;
    }
    const [hash, proof] = Evaluate(this.privateKeyBufMap[recordId], res.seed);
    console.log("sessionId: ", compressedPublicKey);

    return {
      vrf: { seed: res.seed, proof, hashRandom: hash } as VRF,
      sessionId: compressedPublicKey,
    };
  }

  static signHeartbeat(recordId: string, message: string) {
    if (!this.privateKeyMap[recordId]) {
      return "";
    }
    const signDataHash = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
    const digest = Secp256k1.uint256(signDataHash, 16);
    const signature = Secp256k1.ecsign(this.privateKeyMap[recordId], digest);
    let sigV =
      signature.v.toString().length < 2
        ? `0${signature.v.toString()}`
        : signature.v.toString();
    sigV = sigV.length < 2 ? `0${sigV}` : sigV;
    const signatureData = `${signature.r}${signature.s}${sigV}`;
    return signatureData;
  }
}

export default EncryptUtils;
