declare class EncryptUtils {
    static privateKey: any;
    static privateKeyByModelName: {
        [modelName: string]: any;
    };
    static publicKey: any;
    static publicKeyByModelName: {
        [modelName: string]: any;
    };
    static privateKeyBuf: any;
    static privateKeyBufByModelName: {
        [modelName: string]: any;
    };
    static generateKey(modelName: string): {
        privateKey: any;
        publicKey: any;
    };
    static sortObjectKeys(obj: Record<string, any>): Record<string, any>;
    static signMessage(message: string, chatSeq: number, isQuestion?: boolean, modelName?: string): string;
    static requestVrf(client: any, offlineSigner: any, modelName?: string): Promise<any>;
    static signHeartbeat(message: string, modelName?: string): string;
}
export default EncryptUtils;
