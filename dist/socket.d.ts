/// <reference types="node" />
interface ISocket {
    webSocket: WebSocket | null;
    wsUrl: string;
    everSucceeded: boolean;
    socketOpen: boolean;
    heartbeatTimer: NodeJS.Timeout | string | number | undefined;
    heartbeatInterval: number;
    init: (handle: {
        modelName?: string;
        recordId: string;
        wsUrl: string;
        isBypass?: boolean;
        authToken?: string;
        onopen: () => void;
        onclose?: (e: Event) => void;
        onerror?: (e: Event | Error) => void;
    }) => WebSocket | null | undefined;
    heartbeat: Function;
    send: (data: any, callback?: Function) => void;
    close: Function;
    signatureData: string;
    forceClose: boolean;
}
export declare const socket: ISocket;
export {};
