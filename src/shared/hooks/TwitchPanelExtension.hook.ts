import { useEffect, useMemo } from "react";
import { AuthState } from "../state/AuthState.state";
import { useTwitchExtAuth } from "./TwitchExtAuth.hook";
import { IsConfigTester, TwitchConfigSetter, useTwitchExtConfig } from "./TwitchExtConfig.hook";
import { Themes, useTwitchContext, ViewModes } from "./TwitchExtContext.hook";

const listenBroadcast = (target: string, content: string, message: string)=>{
    const msg = JSON.parse(message);
    window.Twitch.ext.rig.log("channel message: " + msg);
    if(msg.event) {

    }
}

export function useTwitchPanelExtension<Config>({mode, defaultConfig, isConfig}: {
    mode: ViewModes,
    defaultConfig: Config, 
    isConfig: IsConfigTester<Config>
}): 
    [AuthState, Config, TwitchConfigSetter<Config>, Themes, ViewModes, boolean] {
    const [theme, viewMode] = useTwitchContext({mode, theme: 'dark'});
    const authState = useTwitchExtAuth();
    const [twitchConfig,saveTwitchConfig] = useTwitchExtConfig<Config>({defaultConfig, isConfig});

    const isLoading = useMemo(
        () => {
          return !(authState.isAuthed && !!twitchConfig);
        },
        [authState, twitchConfig],
    );

    useEffect(()=>{
        const twitchExt = window.Twitch.ext;
        if(authState.isAuthed){
            twitchExt.rig.log('listening');
            twitchExt.listen('broadcast',listenBroadcast);
        }
        return ()=>{twitchExt.unlisten('broadcast',listenBroadcast);};
    
    },[authState])

    return [
        authState, 
        twitchConfig,
        saveTwitchConfig,
        theme, 
        viewMode,
        isLoading
    ];
}