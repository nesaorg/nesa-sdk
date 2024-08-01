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
    static generateKey() {
        let privateKeyBuf;
        if (typeof window === "undefined") {
            const crypto = require("crypto");
            privateKeyBuf = crypto.randomBytes(32);
        }
        else {
            privateKeyBuf = window.crypto.getRandomValues(new Uint8Array(32));
        }
        this.privateKeyBuf = privateKeyBuf;
        const privateKey = Secp256k1.uint256(privateKeyBuf, 16);
        const publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey);
        this.privateKey = privateKey;
        this.publicKey = publicKey;
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
    static signMessage(message, chatSeq, isQuestion) {
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
    static requestVrf(client, offlineSigner) {
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
    static signHeartbeat(message) {
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
}
exports.default = EncryptUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdFV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2VuY3J5cHRVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXNDO0FBQ3RDLG1DQUFtQztBQUNuQyxrRUFBb0Q7QUFDcEQsd0VBQWdEO0FBRWhELE1BQU0sWUFBWTtJQU9oQixNQUFNLENBQUMsV0FBVztRQUNoQixJQUFJLGFBQWEsQ0FBQztRQUNsQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDO2FBQU0sQ0FBQztZQUNOLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsbUNBQW1DLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsT0FBTztZQUNMLFVBQVU7WUFDVixTQUFTO1NBQ1YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQXdCO1FBQzVDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckQsQ0FBQzthQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNuRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUNwQixJQUFJLEVBQUU7aUJBQ04sTUFBTSxDQUFDLENBQUMsR0FBd0IsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRSxVQUFvQjtRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4QyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7UUFDRCxJQUFJLFdBQVcsQ0FBQztRQUNoQixJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2YsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FDeEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ2pCLENBQUM7WUFDRixXQUFXLEdBQUcsR0FBRyxnQkFBZ0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqRCxDQUFDO2FBQU0sQ0FBQztZQUNOLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDeEIsQ0FBQztRQUNELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUN4RCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDakIsQ0FBQztRQUNGLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLElBQUksR0FDTixTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDOUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0MsTUFBTSxhQUFhLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDNUQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQ2YsTUFBVyxFQUNYLGFBQWtCO1FBS2xCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMseUJBQWUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQztpQkFDbEQsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ1osSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ2QsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO3dCQUMzQixtQkFBbUIsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELENBQUM7eUJBQU0sQ0FBQzt3QkFDTixtQkFBbUIsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7b0JBQ2hELE9BQU8sQ0FBQzt3QkFDTixHQUFHLEVBQUU7NEJBQ0gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJOzRCQUNkLEtBQUs7NEJBQ0wsVUFBVSxFQUFFLElBQUk7eUJBQ2pCO3dCQUNELFNBQVMsRUFBRSxtQkFBbUI7cUJBQy9CLENBQUMsQ0FBQztnQkFDTCxDQUFDO3FCQUFNLENBQUM7b0JBQ04sTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztZQUNILENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBZTtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUNELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekUsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkQsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxHQUNOLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDL0IsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM5QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzQyxNQUFNLGFBQWEsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUM1RCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxZQUFZLENBQUMifQ==