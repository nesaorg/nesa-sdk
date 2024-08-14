"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
const encryptUtils_1 = __importDefault(require("./encryptUtils"));
exports.socket = {
    web_socket: null,
    ever_succeeded: false,
    ws_url: "",
    socket_open: false,
    heartbeat_timer: undefined,
    heartbeat_interval: 5000,
    signatureData: "",
    forceClose: false,
    init(handle) {
        exports.socket.ws_url = handle.ws_url;
        let web_socket;
        if (typeof window === "undefined") {
            const WebSocket = require("ws");
            web_socket = new WebSocket(exports.socket.ws_url);
        }
        else {
            web_socket = new WebSocket(exports.socket.ws_url);
        }
        exports.socket.web_socket = web_socket;
        exports.socket.web_socket.onopen = () => {
            exports.socket.socket_open = true;
            exports.socket.ever_succeeded = true;
            this.signatureData = encryptUtils_1.default.signHeartbeat(handle.recordId, "hello");
            if (this.signatureData === "") {
                handle?.onerror?.(new Error("SignatureData is null"));
            }
            else {
                exports.socket.heartbeat();
                handle?.onopen?.();
            }
        };
        exports.socket.web_socket.onclose = (e) => {
            if (exports.socket.ever_succeeded && !exports.socket.forceClose) {
                clearInterval(exports.socket.heartbeat_timer);
                setTimeout(() => {
                    exports.socket.init(handle);
                }, exports.socket.heartbeat_interval);
                exports.socket.socket_open = false;
                handle?.onclose?.(e);
            }
        };
        exports.socket.web_socket.onerror = (e) => {
            handle?.onerror?.(e);
        };
        return undefined;
    },
    heartbeat() {
        if (exports.socket.heartbeat_timer) {
            clearInterval(exports.socket.heartbeat_timer);
        }
        exports.socket.heartbeat_timer = setInterval(() => {
            exports.socket.send({
                message: "hello",
                signature_message: this.signatureData,
            });
        }, exports.socket.heartbeat_interval);
    },
    send(data, callback) {
        if (exports.socket.web_socket &&
            !!exports.socket.web_socket?.readyState === exports.socket.socket_open) {
            exports.socket.web_socket.send(JSON.stringify(data));
            callback && callback();
        }
    },
    close() {
        clearInterval(exports.socket.heartbeat_timer);
        exports.socket.web_socket?.close();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrRUFBMEM7QUF3QjdCLFFBQUEsTUFBTSxHQUFZO0lBQzdCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsV0FBVyxFQUFFLEtBQUs7SUFDbEIsZUFBZSxFQUFFLFNBQVM7SUFDMUIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixhQUFhLEVBQUUsRUFBRTtJQUNqQixVQUFVLEVBQUUsS0FBSztJQUVqQixJQUFJLENBQUMsTUFBTTtRQUNULGNBQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLFVBQVUsQ0FBQztRQUNmLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDbEMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxjQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQzthQUFNLENBQUM7WUFDTixVQUFVLEdBQUcsSUFBSSxTQUFTLENBQUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFDRCxjQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUMvQixjQUFNLENBQUMsVUFBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDL0IsY0FBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUIsY0FBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzFFLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDOUIsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sY0FBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQixNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQztZQUNyQixDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsY0FBTSxDQUFDLFVBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLGNBQU0sQ0FBQyxjQUFjLElBQUksQ0FBQyxjQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2hELGFBQWEsQ0FBQyxjQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsY0FBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxFQUFFLGNBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUM5QixjQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7UUFDSCxDQUFDLENBQUM7UUFDRixjQUFNLENBQUMsVUFBVyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2pDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksY0FBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzNCLGFBQWEsQ0FBQyxjQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELGNBQU0sQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUN4QyxjQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYTthQUN0QyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsY0FBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFTLEVBQUUsUUFBbUI7UUFDakMsSUFDRSxjQUFNLENBQUMsVUFBVTtZQUNqQixDQUFDLENBQUMsY0FBTSxDQUFDLFVBQVUsRUFBRSxVQUFVLEtBQUssY0FBTSxDQUFDLFdBQVcsRUFDdEQsQ0FBQztZQUNELGNBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QyxRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsYUFBYSxDQUFDLGNBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QyxjQUFNLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFDIn0=