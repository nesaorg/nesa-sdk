declare class EncryptUtils {
    static privateKey: any;
    static publicKey: any;
    static privateKeyBuf: any;
    static generateKey(): {
        privateKey: any;
        publicKey: any;
    };
    static sortObjectKeys(obj: Record<string, any>): Record<string, any>;
    static signMessage(message: string, chatSeq: number, isQuestion?: boolean): string;
    static requestVrf(client: any, offlineSigner: any): Promise<any>;
    static signHeartbeat(message: string): string;
}
export default EncryptUtils;
