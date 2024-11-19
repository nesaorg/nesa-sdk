"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
const encryptUtils_1 = __importDefault(require("./encryptUtils"));
exports.socket = {
    webSocket: null,
    everSucceeded: false,
    wsUrl: "",
    socketOpen: false,
    heartbeatTimer: undefined,
    heartbeatInterval: 5000,
    signatureData: "",
    forceClose: false,
    init(handle) {
        exports.socket.wsUrl = handle.wsUrl;
        let webSocket;
        const protocols = handle.isBypass ? handle.authToken : undefined;
        if (typeof window === "undefined") {
            const WebSocket = require("ws");
            webSocket = new WebSocket(exports.socket.wsUrl, protocols);
        }
        else {
            webSocket = new WebSocket(exports.socket.wsUrl, protocols);
        }
        exports.socket.webSocket = webSocket;
        exports.socket.webSocket.onopen = () => {
            exports.socket.socketOpen = true;
            exports.socket.everSucceeded = true;
            this.signatureData = encryptUtils_1.default.signHeartbeat(handle.recordId, "hello");
            if (!handle.isBypass && this.signatureData === "") {
                handle?.onerror?.(new Error("SignatureData is null"));
            }
            else {
                exports.socket.send({
                    message: "hello",
                    signature_message: this.signatureData,
                }, () => {
                    console.log("websocket opened");
                    exports.socket.heartbeat();
                    handle?.onopen?.();
                });
            }
        };
        exports.socket.webSocket.onclose = (e) => {
            if (exports.socket.everSucceeded && !exports.socket.forceClose) {
                console.log("websocket closed, reconnecting");
                clearInterval(exports.socket.heartbeatTimer);
                setTimeout(() => {
                    exports.socket.init(handle);
                }, exports.socket.heartbeatInterval);
                exports.socket.socketOpen = false;
                handle?.onclose?.(e);
            }
        };
        exports.socket.webSocket.onerror = (e) => {
            handle?.onerror?.(e);
        };
        return undefined;
    },
    heartbeat() {
        if (exports.socket.heartbeatTimer) {
            clearInterval(exports.socket.heartbeatTimer);
        }
        exports.socket.heartbeatTimer = setInterval(() => {
            exports.socket.send({
                message: "hello",
                signature_message: this.signatureData,
            });
        }, exports.socket.heartbeatInterval);
    },
    send(data, callback) {
        if (exports.socket.webSocket &&
            !!exports.socket.webSocket?.readyState === exports.socket.socketOpen) {
            exports.socket.webSocket.send(JSON.stringify(data));
            callback && callback();
        }
    },
    close() {
        clearInterval(exports.socket.heartbeatTimer);
        exports.socket.webSocket?.close();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrRUFBMEM7QUEwQjdCLFFBQUEsTUFBTSxHQUFZO0lBQzdCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsYUFBYSxFQUFFLEtBQUs7SUFDcEIsS0FBSyxFQUFFLEVBQUU7SUFDVCxVQUFVLEVBQUUsS0FBSztJQUNqQixjQUFjLEVBQUUsU0FBUztJQUN6QixpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLFVBQVUsRUFBRSxLQUFLO0lBRWpCLElBQUksQ0FBQyxNQUFNO1FBQ1QsY0FBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksU0FBUyxDQUFDO1FBQ2QsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2pFLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDbEMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxjQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7YUFBTSxDQUFDO1lBQ04sU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLGNBQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELGNBQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzdCLGNBQU0sQ0FBQyxTQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUM5QixjQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN6QixjQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJ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