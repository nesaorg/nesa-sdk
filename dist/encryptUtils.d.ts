import { NesaClient } from "./client";
import { CosmjsOfflineSigner } from "@leapwallet/cosmos-snap-provider";
import { VRF } from "./codec/agent/v1/tx";
type Key = {
    x: string;
    y: string;
};
declare class EncryptUtils {
    static privateKeyMap: {
        [recordId: string]: Key;
    };
    static publicKeyMap: {
        [recordId: string]: Key;
    };
    static privateKeyBufMap: {
        [recordId: string]: Key;
    };
    static generateKey(recordId: string): {
        privateKey: any;
        publicKey: any;
    };
    static signMessage(recordId: string, message: string, chatSeq: number, isQuestion?: boolean): string;
    static requestVrf(recordId: string, client: NesaClient, offlineSigner: CosmjsOfflineSigner): Promise<{
        vrf: VRF;
        sessionId: string;
    }>;
    static signHeartbeat(recordId: string, message: string): string;
}
export default EncryptUtils;
