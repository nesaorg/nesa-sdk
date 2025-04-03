"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = __importStar(require("crypto-js"));
const utils_1 = require("./utils");
const Secp256k1 = __importStar(require("@lionello/secp256k1-js"));
const walletOperation_1 = __importDefault(require("./walletOperation"));
class EncryptUtils {
    static generateKey(recordId) {
        let privateKeyBuf;
        if (typeof window === "undefined") {
            const crypto = require("crypto");
            privateKeyBuf = crypto.randomBytes(32);
        }
        else {
            privateKeyBuf = window.crypto.getRandomValues(new Uint8Array(32));
        }
        this.privateKeyBufMap[recordId] = privateKeyBuf;
        const privateKey = Secp256k1.uint256(privateKeyBuf, 16);
        const publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey);
        this.privateKeyMap[recordId] = privateKey;
        this.publicKeyMap[recordId] = publicKey;
        return { privateKey, publicKey };
    }
    static signMessage(recordId, message, chatSeq, isQuestion) {
        if (!this.privateKeyMap[recordId] || !this.publicKeyMap[recordId]) {
            return "";
        }
        let messageData;
        if (isQuestion) {
            const sortSignDataHash = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
            messageData = `${sortSignDataHash}|${chatSeq}`;
        }
        else {
            messageData = message;
        }
        const signDataHash = CryptoJS.SHA256(messageData).toString(CryptoJS.enc.Hex);
        const digest = Secp256k1.uint256(signDataHash, 16);
        const signature = Secp256k1.ecsign(this.privateKeyMap[recordId], digest);
        let sigV = signature.v.toString().length < 2
            ? `0${signature.v.toString()}`
            : signature.v.toString();
        sigV = sigV.length < 2 ? `0${sigV}` : sigV;
        const signatureData = `${signature.r}${signature.s}${sigV}`;
        return signatureData;
    }
    static async requestVrf(recordId, client, offlineSigner) {
        const res = await walletOperation_1.default.requestVrfSeed(client, offlineSigner);
        if (!res?.seed) {
            throw new Error("Vrf seed is null");
        }
        const publicKeyY = BigInt(`0x${this.publicKeyMap[recordId].y}`);
        let compressedPublicKey = "";
        if (publicKeyY % 2n === 0n) {
            compressedPublicKey = "02" + this.publicKeyMap[recordId].x;
        }
        else {
            compressedPublicKey = "03" + this.publicKeyMap[recordId].x;
        }
        const [hash, proof] = (0, utils_1.Evaluate)(this.privateKeyBufMap[recordId], res.seed);
        console.log("sessionId: ", compressedPublicKey);
        return {
            vrf: { seed: res.seed, proof, hashRandom: hash },
            sessionId: compressedPublicKey,
        };
    }
    static signHeartbeat(recordId, message) {
        if (!this.privateKeyMap[recordId]) {
            return "";
        }
        const signDataHash = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
        const digest = Secp256k1.uint256(signDataHash, 16);
        const signature = Secp256k1.ecsign(this.privateKeyMap[recordId], digest);
        let sigV = signature.v.toString().length < 2
            ? `0${signature.v.toString()}`
            : signature.v.toString();
        sigV = sigV.length < 2 ? `0${sigV}` : sigV;
        const signatureData = `${signature.r}${signature.s}${sigV}`;
        return signatureData;
    }
}
EncryptUtils.privateKeyMap = {};
EncryptUtils.publicKeyMap = {};
EncryptUtils.privateKeyBufMap = {};
exports.default = EncryptUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdFV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2VuY3J5cHRVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkMsa0VBQW9EO0FBQ3BELHdFQUFnRDtBQU9oRCxNQUFNLFlBQVk7SUFLaEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFnQjtRQUNqQyxJQUFJLGFBQWEsQ0FBQztRQUVsQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDO2FBQU0sQ0FBQztZQUNOLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsYUFBYSxDQUFDO1FBRWhELE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUV4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsV0FBVyxDQUNoQixRQUFnQixFQUNoQixPQUFlLEVBQ2Ys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