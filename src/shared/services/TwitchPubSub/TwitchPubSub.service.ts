export type TwitchScopes = 
    'bits:read' | 
    'channel:read:redemptions' | 
    'channel:read:subscriptions' | 
    'channel:moderate' | 
    'chat:read' | 
    'whispers:read';

export type TwitchWebsocketMessage<T> = { 
    type: string;
    data: T;
    topic: string;
    message: string;
}

export class TwitchPubSub {
    websocket: WebSocket;
    twitchOAuthState: string = '';

    constructor(
        private pubsubUrl: string = 'wss://pubsub-edge.twitch.tv',
        private clientId: string = '',
        private scope: TwitchScopes = 'bits:read',
        private redirectURI: string = '') {
        this.websocket = new WebSocket(pubsubUrl);
        this.initializeWebSocket();
        
    }

    initializeWebSocket() {
        this.websocket.onopen = (event) => {
            console.log('websocket open');
            //$('.ws-output').append('INFO: Socket Opened\n');
            //heartbeat();
            //heartbeatHandle = setInterval(heartbeat, heartbeatInterval);
        };

        this.websocket.onerror = (error) => {
            console.log('Websocket Error:', JSON.stringify(error));
        };
    
        this.websocket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('Websocket receive: ', JSON.stringify(message));
            if (message.type == 'RECONNECT') {
                console.log('INFO: Reconnecting...\n');
                //setTimeout(connect, reconnectInterval);
            }
        };
    
        this.websocket.onclose = () => {
            console.log('INFO: Socket Closed\n');
            //clearInterval(heartbeatHandle);
            console.log('INFO: Reconnecting...\n');
            //setTimeout(connect, reconnectInterval);
        };
    }

    authUrl() {
        this.twitchOAuthState = this.nonce(15);
        var url = 'https://api.twitch.tv/kraken/oauth2/authorize' +
            '?response_type=token' +
            '&client_id=' + this.clientId + 
            '&redirect_uri=' + this.redirectURI +
            '&state=' + this.twitchOAuthState +
            '&scope=' + this.scope;
        return url
    }
    

    heartbeat() {
        const message = {
            type: 'PING'
        };
        console.log('SENT: ' + JSON.stringify(message) + '\n');
        this.websocket.send(JSON.stringify(message));
    }

    // Source: https://www.thepolyglotdeveloper.com/2015/03/create-a-random-nonce-string-using-javascript/
    nonce(length: number) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
}