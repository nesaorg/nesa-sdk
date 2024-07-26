import EncryptUtils from "./encryptUtils";

interface ISocket {
    web_socket: WebSocket | null,
    ws_url: string,
    ever_succeeded: boolean,
    socket_open: boolean,
    heartbeat_timer: NodeJS.Timeout | string | number | undefined,
    heartbeat_interval: number,
    init: (handle: {
        ws_url: string,
        onopen: () => void;
        onclose?: (e: Event) => void;
        onerror?: (e: Event | Error) => void;
    }) => (WebSocket | null | undefined),
    heartbeat: Function,
    send: (data: any, callback?: Function) => void
    close: Function,
    signatureData: string,
    forceClose: boolean
}

export const socket: ISocket = {
    web_socket: null,
    ever_succeeded: false,
    ws_url: "",
    socket_open: false,
    heartbeat_timer: undefined,
    heartbeat_interval: 5000,
    signatureData: '',
    forceClose: false,

    init(handle) {
        socket.ws_url = handle.ws_url;
        let web_socket
        if (typeof window === 'undefined') {
            const WebSocket = require('ws');
            web_socket = new WebSocket(socket.ws_url);
        } else {
            web_socket = new WebSocket(socket.ws_url);
        }
        socket.web_socket = web_socket;
        socket.web_socket!.onopen = () => {
            socket.socket_open = true;
            socket.ever_succeeded = true;
            this.signatureData = EncryptUtils.signHeartbeat("hello")
            if (this.signatureData === "") {
                handle?.onerror && handle?.onerror(new Error('SignatureData is null'))
            } else {
                socket.heartbeat();
                handle?.onopen && handle.onopen()
            }
        }
        socket.web_socket!.onclose = (e) => {
            if (socket.ever_succeeded && !socket.forceClose) {
                clearInterval(socket.heartbeat_timer)
                setTimeout(() => {
                    socket.init(handle)
                }, socket.heartbeat_interval);
                socket.socket_open = false
                handle?.onclose && handle.onclose(e)
            }
        }
        socket.web_socket!.onerror = (e) => {
            handle?.onerror && handle.onerror(e)
        }
        return undefined;
    },

    heartbeat() {
        if (socket.heartbeat_timer) {
            clearInterval(socket.heartbeat_timer);
        }
        socket.heartbeat_timer = setInterval(() => {
            socket.send({
                "message": "hello",
                "signature_message": this.signatureData
            });
        }, socket.heartbeat_interval)
    },

    send(data: any, callback?: Function) {
        if (socket.web_socket && (!!socket.web_socket?.readyState) === socket.socket_open) {
            socket.web_socket.send(JSON.stringify(data));
            callback && callback();
        }
    },

    close() {
        clearInterval(socket.heartbeat_timer)
        socket.web_socket && socket.web_socket.close()
    },
}
