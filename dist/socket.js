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
            this.signatureData = encryptUtils_1.default.signHeartbeat("hello", handle.modelName);
            if (this.signatureData === "") {
                handle?.onerror && handle?.onerror(new Error("SignatureData is null"));
            }
            else {
                exports.socket.heartbeat();
                handle?.onopen && handle.onopen();
            }
        };
        exports.socket.web_socket.onclose = (e) => {
            if (exports.socket.ever_succeeded && !exports.socket.forceClose) {
                clearInterval(exports.socket.heartbeat_timer);
                setTimeout(() => {
                    exports.socket.init(handle);
                }, exports.socket.heartbeat_interval);
                exports.socket.socket_open = false;
                handle?.onclose && handle.onclose(e);
            }
        };
        exports.socket.web_socket.onerror = (e) => {
            handle?.onerror && handle.onerror(e);
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
        exports.socket.web_socket && exports.socket.web_socket.close();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrRUFBMEM7QUF1QjdCLFFBQUEsTUFBTSxHQUFZO0lBQzdCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsV0FBVyxFQUFFLEtBQUs7SUFDbEIsZUFBZSxFQUFFLFNBQVM7SUFDMUIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixhQUFhLEVBQUUsRUFBRTtJQUNqQixVQUFVLEVBQUUsS0FBSztJQUVqQixJQUFJLENBQUMsTUFBTTtRQUNULGNBQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLFVBQVUsQ0FBQztRQUNmLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDbEMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxjQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQzthQUFNLENBQUM7WUFDTixVQUFVLEdBQUcsSUFBSSxTQUFTLENBQUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFDRCxjQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUMvQixjQUFNLENBQUMsVUFBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDL0IsY0FBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUIsY0FBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFBWSxDQUFDLGFBQWEsQ0FDN0MsT0FBTyxFQUNQLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7WUFDRixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQzlCLE1BQU0sRUFBRSxPQUFPLElBQUksTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7WUFDekUsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLGNBQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsTUFBTSxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEMsQ0FBQztRQUNILENBQUMsQ0FBQztRQUNGLGNBQU0sQ0FBQyxVQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxjQUFNLENBQUMsY0FBYyxJQUFJLENBQUMsY0FBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNoRCxhQUFhLENBQUMsY0FBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN0QyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLGNBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxjQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDOUIsY0FBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLE1BQU0sRUFBRSxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsY0FBTSxDQUFDLFVBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNqQyxNQUFNLEVBQUUsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLGNBQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMzQixhQUFhLENBQUMsY0FBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxjQUFNLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDeEMsY0FBTSxDQUFDLElBQUksQ0FBQztnQkFDVixPQUFPLEVBQUUsT0FBTztnQkFDaEIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDdEMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLGNBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBUyxFQUFFLFFBQW1CO1FBQ2pDLElBQ0UsY0FBTSxDQUFDLFVBQVU7WUFDakIsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxVQUFVLEVBQUUsVUFBVSxLQUFLLGNBQU0sQ0FBQyxXQUFXLEVBQ3RELENBQUM7WUFDRCxjQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILGFBQWEsQ0FBQyxjQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEMsY0FBTSxDQUFDLFVBQVUsSUFBSSxjQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pELENBQUM7Q0FDRixDQUFDIn0=