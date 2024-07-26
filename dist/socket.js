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
    signatureData: '',
    forceClose: false,
    init(handle) {
        exports.socket.ws_url = handle.ws_url;
        let web_socket;
        if (typeof window === 'undefined') {
            const WebSocket = require('ws');
            web_socket = new WebSocket(exports.socket.ws_url);
        }
        else {
            web_socket = new WebSocket(exports.socket.ws_url);
        }
        exports.socket.web_socket = web_socket;
        exports.socket.web_socket.onopen = () => {
            exports.socket.socket_open = true;
            exports.socket.ever_succeeded = true;
            this.signatureData = encryptUtils_1.default.signHeartbeat("hello");
            if (this.signatureData === "") {
                handle?.onerror && handle?.onerror(new Error('SignatureData is null'));
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
                "message": "hello",
                "signature_message": this.signatureData
            });
        }, exports.socket.heartbeat_interval);
    },
    send(data, callback) {
        if (exports.socket.web_socket && (!!exports.socket.web_socket?.readyState) === exports.socket.socket_open) {
            exports.socket.web_socket.send(JSON.stringify(data));
            callback && callback();
        }
    },
    close() {
        clearInterval(exports.socket.heartbeat_timer);
        exports.socket.web_socket && exports.socket.web_socket.close();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrRUFBMEM7QUFzQjdCLFFBQUEsTUFBTSxHQUFZO0lBQzNCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsV0FBVyxFQUFFLEtBQUs7SUFDbEIsZUFBZSxFQUFFLFNBQVM7SUFDMUIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixhQUFhLEVBQUUsRUFBRTtJQUNqQixVQUFVLEVBQUUsS0FBSztJQUVqQixJQUFJLENBQUMsTUFBTTtRQUNQLGNBQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLFVBQVUsQ0FBQTtRQUNkLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDaEMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxjQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUFNLENBQUM7WUFDSixVQUFVLEdBQUcsSUFBSSxTQUFTLENBQUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFDRCxjQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUMvQixjQUFNLENBQUMsVUFBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDN0IsY0FBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUIsY0FBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN4RCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQzVCLE1BQU0sRUFBRSxPQUFPLElBQUksTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUE7WUFDMUUsQ0FBQztpQkFBTSxDQUFDO2dCQUNKLGNBQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsTUFBTSxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDckMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUNELGNBQU0sQ0FBQyxVQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsSUFBSSxjQUFNLENBQUMsY0FBYyxJQUFJLENBQUMsY0FBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM5QyxhQUFhLENBQUMsY0FBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBO2dCQUNyQyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNaLGNBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3ZCLENBQUMsRUFBRSxjQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDOUIsY0FBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7Z0JBQzFCLE1BQU0sRUFBRSxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN4QyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBQ0QsY0FBTSxDQUFDLFVBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMvQixNQUFNLEVBQUUsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsQ0FBQyxDQUFBO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLGNBQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixhQUFhLENBQUMsY0FBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxjQUFNLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDdEMsY0FBTSxDQUFDLElBQUksQ0FBQztnQkFDUixTQUFTLEVBQUUsT0FBTztnQkFDbEIsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDMUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLGNBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBUyxFQUFFLFFBQW1CO1FBQy9CLElBQUksY0FBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFNLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxLQUFLLGNBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoRixjQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNELGFBQWEsQ0FBQyxjQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDckMsY0FBTSxDQUFDLFVBQVUsSUFBSSxjQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2xELENBQUM7Q0FDSixDQUFBIn0=