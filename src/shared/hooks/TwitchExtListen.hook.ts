const listenBroadcast = (target: string, content: string, message: string)=>{
    const msg = JSON.parse(message);
    console.log("channel message: ",msg);
    if(msg.event) {

    }
}

export function useTwitchExtListen () {
    const twitchExt = window.Twitch.ext;
    twitchExt.listen('broadcast',listenBroadcast);

    return ()=>{twitchExt.unlisten('broadcast',listenBroadcast);};
}