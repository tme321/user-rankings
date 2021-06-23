import { useEffect, useState } from "react";

export function useTwitchExtConfig<Config>(): Config | undefined {
    const twitchExt = window.Twitch.ext;
    const [twitchConfig, setTwitchConfig] = useState<Config>();
    
    useEffect(()=>{
        twitchExt.configuration.onChanged(()=>{
            if(twitchExt.configuration.broadcaster && twitchExt.configuration.broadcaster.content) {
                setTwitchConfig(JSON.parse(twitchExt.configuration.broadcaster.content));
            }
        });
    },[]);

    return twitchConfig;
}