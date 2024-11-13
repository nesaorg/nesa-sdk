import EncryptUtils from "./encryptUtils";

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

export const socket: ISocket = {
  webSocket: null,
  everSucceeded: false,
  wsUrl: "",
  socketOpen: false,
  heartbeatTimer: undefined,
  heartbeatInterval: 5000,
  signatureData: "",
  forceClose: false,

  init(handle) {
    socket.wsUrl = handle.wsUrl;
    let webSocket;
    if (typeof window === "undefined") {
      const WebSocket = require("ws");
      const protocols = [handle.authToken || ""];
      webSocket = new WebSocket(socket.wsUrl, protocols);
    } else {
      const protocols = [handle.authToken || ""];
      webSocket = new WebSocket(socket.wsUrl, protocols);
    }
    socket.webSocket = webSocket;
    socket.webSocket!.onopen = () => {
      socket.socketOpen = true;
      socket.everSucceeded = true;
      this.signatureData = EncryptUtils.signHeartbeat(handle.recordId, "hello");
      if (!handle.isBypass && this.signatureData === "") {
        handle?.onerror?.(new Error("SignatureData is null"));
      } else {
        socket.send({
          message: "hello",
          signature_message: this.signatureData,
        }, () => {
          console.log("websocket opened");
          socket.heartbeat();
          handle?.onopen?.();
        });
      }
    };
    socket.webSocket!.onclose = (e) => {
      if (socket.everSucceeded && !socket.forceClose) {
        console.log("websocket closed, reconnecting");
        clearInterval(socket.heartbeatTimer);
        setTimeout(() => {
          socket.init(handle);
        }, socket.heartbeatInterval);
        socket.socketOpen = false;
        handle?.onclose?.(e);
      }
    };
    socket.webSocket!.onerror = (e) => {
      handle?.onerror?.(e);
    };
    return undefined;
  },

  heartbeat() {
    if (socket.heartbeatTimer) {
      clearInterval(socket.heartbeatTimer);
    }
    socket.heartbeatTimer = setInterval(() => {
      socket.send({
        message: "hello",
        signature_message: this.signatureData,
      });
    }, socket.heartbeatInterval);
  },

  send(data: any, callback?: Function) {
    if (
      socket.webSocket &&
      !!socket.webSocket?.readyState === socket.socketOpen
    ) {
      socket.webSocket.send(JSON.stringify(data));
      callback && callback();
    }
  },

  close() {
    clearInterval(socket.heartbeatTimer);
    socket.webSocket?.close();
  },
};
