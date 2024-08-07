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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = __importStar(require("crypto-js"));
const utils_1 = require("./utils");
const Secp256k1 = __importStar(require("@lionello/secp256k1-js"));
const walletOperation_1 = __importDefault(require("./walletOperation"));
class EncryptUtils {
    static generateKey(modelName) {
        let privateKeyBuf;
        if (typeof window === "undefined") {
            const crypto = require("crypto");
            privateKeyBuf = crypto.randomBytes(32);
        }
        else {
            privateKeyBuf = window.crypto.getRandomValues(new Uint8Array(32));
        }
        this.privateKeyBuf = privateKeyBuf;
        this.privateKeyBufByModelName[modelName] = privateKeyBuf;
        const privateKey = Secp256k1.uint256(privateKeyBuf, 16);
        const publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey);
        this.privateKey = privateKey;
        this.privateKeyByModelName[modelName] = privateKey;
        this.publicKey = publicKey;
        this.publicKeyByModelName[modelName] = publicKey;
        return {
            privateKey,
            publicKey,
        };
    }
    static sortObjectKeys(obj) {
        if (Array.isArray(obj)) {
            return obj.sort().map(EncryptUtils.sortObjectKeys);
        }
        else if (typeof obj === "object" && obj !== null) {
            return Object.keys(obj)
                .sort()
                .reduce((acc, key) => {
                acc[key] = EncryptUtils.sortObjectKeys(obj[key]);
                return acc;
            }, {});
        }
        return obj;
    }
    static signMessage(message, chatSeq, isQuestion, modelName) {
        if (!modelName) {
            if (!this.privateKey || !this.publicKey) {
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
            const signature = Secp256k1.ecsign(this.privateKey, digest);
            let sigV = signature.v.toString().length < 2
                ? `0${signature.v.toString()}`
                : signature.v.toString();
            sigV = sigV.length < 2 ? `0${sigV}` : sigV;
            const signatureData = `${signature.r}${signature.s}${sigV}`;
            return signatureData;
        }
        if (!this.privateKeyByModelName[modelName] ||
            !this.publicKeyByModelName[modelName]) {
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
        const signature = Secp256k1.ecsign(this.privateKeyByModelName[modelName], digest);
        let sigV = signature.v.toString().length < 2
            ? `0${signature.v.toString()}`
            : signature.v.toString();
        sigV = sigV.length < 2 ? `0${sigV}` : sigV;
        const signatureData = `${signature.r}${signature.s}${sigV}`;
        return signatureData;
    }
    static requestVrf(client, offlineSigner, modelName) {
        if (!modelName) {
            return new Promise((resolve, reject) => {
                walletOperation_1.default.requestVrfSeed(client, offlineSigner)
                    .then((res) => {
                    if (res?.seed) {
                        const publicKeyY = BigInt(`0x${this.publicKey.y}`);
                        let compressedPublicKey = "";
                        if (publicKeyY % 2n === 0n) {
                            compressedPublicKey = "02" + this.publicKey.x;
                        }
                        else {
                            compressedPublicKey = "03" + this.publicKey.x;
                        }
                        const [hash, proof] = (0, utils_1.Evaluate)(this.privateKeyBuf, res.seed);
                        console.log("sessionId: ", compressedPublicKey);
                        resolve({
                            vrf: {
                                seed: res.seed,
                                proof,
                                hashRandom: hash,
                            },
                            sessionId: compressedPublicKey,
                        });
                    }
                    else {
                        reject(new Error("Vrf seed is null"));
                    }
                })
                    .catch((err) => {
                    console.log("requestVrf-err: ", err);
                    reject(err);
                });
            });
        }
        return new Promise((resolve, reject) => {
            walletOperation_1.default.requestVrfSeed(client, offlineSigner)
                .then((res) => {
                if (res?.seed) {
                    const publicKeyY = BigInt(`0x${this.publicKeyByModelName[modelName].y}`);
                    let compressedPublicKey = "";
                    if (publicKeyY % 2n === 0n) {
                        compressedPublicKey =
                            "02" + this.publicKeyByModelName[modelName].x;
                    }
                    else {
                        compressedPublicKey =
                            "03" + this.publicKeyByModelName[modelName].x;
                    }
                    const [hash, proof] = (0, utils_1.Evaluate)(this.privateKeyBufByModelName[modelName], res.seed);
                    console.log("sessionId: ", compressedPublicKey);
                    resolve({
                        vrf: {
                            seed: res.seed,
                            proof,
                            hashRandom: hash,
                        },
                        sessionId: compressedPublicKey,
                    });
                }
                else {
                    reject(new Error("Vrf seed is null"));
                }
            })
                .catch((err) => {
                console.log("requestVrf-err: ", err);
                reject(err);
            });
        });
    }
    static signHeartbeat(message, modelName) {
        if (!modelName) {
            if (!this.privateKey) {
                return "";
            }
            const signDataHash = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
            const digest = Secp256k1.uint256(signDataHash, 16);
            const signature = Secp256k1.ecsign(this.privateKey, digest);
            let sigV = signature.v.toString().length < 2
                ? `0${signature.v.toString()}`
                : signature.v.toString();
            sigV = sigV.length < 2 ? `0${sigV}` : sigV;
            const signatureData = `${signature.r}${signature.s}${sigV}`;
            return signatureData;
        }
        if (!this.privateKeyByModelName[modelName]) {
            return "";
        }
        const signDataHash = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
        const digest = Secp256k1.uint256(signDataHash, 16);
        const signature = Secp256k1.ecsign(this.privateKeyByModelName[modelName], digest);
        let sigV = signature.v.toString().length < 2
            ? `0${signature.v.toString()}`
            : signature.v.toString();
        sigV = sigV.length < 2 ? `0${sigV}` : sigV;
        const signatureData = `${signature.r}${signature.s}${sigV}`;
        return signatureData;
    }
}
EncryptUtils.privateKeyByModelName = {};
EncryptUtils.publicKeyByModelName = {};
EncryptUtils.privateKeyBufByModelName = {};
exports.default = EncryptUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdFV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2VuY3J5cHRVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXNDO0FBQ3RDLG1DQUFtQztBQUNuQyxrRUFBb0Q7QUFDcEQsd0VBQWdEO0FBRWhELE1BQU0sWUFBWTtJQVVoQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQWlCO1FBQ2xDLElBQUksYUFBYSxDQUFDO1FBQ2xCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLGFBQWEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7YUFBTSxDQUFDO1lBQ04sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxhQUFhLENBQUM7UUFFekQsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLG1DQUFtQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FB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