import { useEffect, useState } from "react";

export type TwitchConfigSetter<Config> = ({config, version}: {config: Config, version?: string}) =>void;
export type IsConfigTester<Config> = (config:Config)=> config is Config;

export function useTwitchExtConfig<Config>({
    defaultConfig, 
    isConfig 
}:
{
    isConfig: IsConfigTester<Config>, 
    defaultConfig: Config
}): [Config, TwitchConfigSetter<Config>] {

    const [twitchConfig, setTwitchConfig] = useState<Config>(defaultConfig);
    
    useEffect(()=>{
        const twitchExt = window.Twitch.ext;
        twitchExt.configuration.onChanged(()=>{
            if(twitchExt.configuration.broadcaster && 
                twitchExt.configuration.broadcaster.content) {
                    const maybeConfig = JSON.parse(twitchExt.configuration.broadcaster.content);
                    if(isConfig(maybeConfig)) {
                        setTwitchConfig(maybeConfig)        
                    }
            }
        });
    },[]);

    const saveConfig = ({config, version=""}: {config: Config, version?: string}) => {
        const twitchExt = window.Twitch.ext;
        twitchExt.configuration.set(
            "broadcaster",
            version,
            JSON.stringify(config));
    }

    return [twitchConfig, saveConfig];
}