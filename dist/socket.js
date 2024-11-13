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
        if (typeof window === "undefined") {
            const WebSocket = require("ws");
            const protocols = [handle.authToken || ""];
            webSocket = new WebSocket(exports.socket.wsUrl, protocols);
        }
        else {
            const protocols = [handle.authToken || ""];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrRUFBMEM7QUEwQjdCLFFBQUEsTUFBTSxHQUFZO0lBQzdCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsYUFBYSxFQUFFLEtBQUs7SUFDcEIsS0FBSyxFQUFFLEVBQUU7SUFDVCxVQUFVLEVBQUUsS0FBSztJQUNqQixjQUFjLEVBQUUsU0FBUztJQUN6QixpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLFVBQVUsRUFBRSxLQUFLO0lBRWpCLElBQUksQ0FBQyxNQUFNO1FBQ1QsY0FBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksU0FBUyxDQUFDO1FBQ2QsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUNsQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxjQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxjQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxjQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM3QixjQUFNLENBQUMsU0FBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDOUIsY0FBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDekIsY0FBTSxDQUFD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