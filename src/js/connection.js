

const onMessageStack = [];


class Connection {
    constructor(url) {
        this.connection = this.createConnection(url);
        this.onOpenStack = [];

        this.connection.onopen = () => {
            console.log("OPEN");
            this.onOpenStack.forEach(resolve => resolve(this.connection));
        };

        this.connection.onmessage = (message) => {
            const data = JSON.parse(message.data);
            console.log("WS MESSAGE: ", data);
            if(data['type'] && this.store)
            {
                this.store.dispatch(data);
            }
            else
            {
                onMessageStack.forEach(cb => cb(data));
            }
        };
    }
    createConnection(url) {
        return new WebSocket(url);
    }
    getConnection() {
        return new Promise((resolve, reject) => {
            if(this.connection.readyState === this.connection.OPEN)
            {
                console.log("ALREADY OPEN");
                resolve(this.connection);
            }
            else {
                console.log("ADDING TO LIST", this.onOpenStack);
                this.onOpenStack.push(resolve);
            }
        });
    }
    connectActions(store) {
        this.store = store;
    }
    onMessage(cb) {
        onMessageStack.push(cb);
    }
    send(message) {
        console.log("SENDING MESSAGE", message);
        this.getConnection().then(conn => conn.send(JSON.stringify(message)));
    }
    getRTCPConnection(cb) {
        const configuration = {
            "iceServers": [{ "url": "stun:stun.1.google.com:19302" }]
        };
        const conn = new webkitRTCPeerConnection(configuration);
        conn.onicecandidate = (e) => {
            console.error("ICE CANDIDATE", e);
            connection.send({
                type: 'CANDIDATE',
                payload: e.candidate
            })
        }
        return conn;
    }
}

const websocketUrl = process.env.NODE_ENV === 'production' ?  'wss://fox-express.com/ws/' : 'ws://localhost:1337/ws/';

export default (new Connection(websocketUrl));

