const address = "ws://127.0.0.1:8765/";
let pingInterval = 1;
let counter = 0;

export class WebSocketClient {
    constructor() {
        this.webSocket = new WebSocket(address);

        this.#initialiseWS();

        window.addEventListener("pageshow", (event) => {
            if (event.persisted) {
                websocket = new WebSocket(address);
                initializeWebSocketListeners(this.webSocket);
            }
        }
        );


    }

    receivedOfflineData() {
        return this.lastMessage && this.lastMessage.type === "offline_results";
    }

    #initialiseWS() {
        this.webSocket.addEventListener("open", () => {
            console.log("CONNECTED");
            // pingInterval = setInterval(() => {
            //     console.log(`SENT: ping: ${counter}`);
            //     this.webSocket.send("ping");
            // }, 1000);
        });

        this.webSocket.addEventListener("close", () => {
            console.log("DISCONNECTED");
            clearInterval(pingInterval);
        });

        this.webSocket.addEventListener("message", (e) => {
            console.log(`RECEIVED: ${e.data}: ${counter}`);
            this.lastMessage = JSON.parse(e.data);
            // Object.entries(this.lastMessage).forEach(([k, v]) => {
            //     console.log("k : " + k);
            //     console.log("v : " + v);
            // });
            console.log("LAST MESSAGE : " + this.lastMessage);
            // if (this.lastMessage) console.log("POSITION : " + JSON.stringify(this.lastMessage.position.x + 100));

            counter++;
        });

        this.webSocket.addEventListener("error", (e) => {
            console.log(`ERROR`);
        });
    }


}
