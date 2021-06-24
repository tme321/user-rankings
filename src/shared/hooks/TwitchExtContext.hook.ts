import { useEffect, useState } from "react";
import { registerTwitchExtContextHandlers } from "../services/TwitchContext/TwitchContext.service";

export type ViewModes = 'viewer' | 'dashboard' | 'config';
export type Themes = 'light' | 'dark';

export function useTwitchContext():[Themes, ViewModes] {

    const [twitchTheme, setTwitchTheme] = useState<Themes>('dark');
    const [extensionMode, setExtensionMode] = useState<ViewModes>('config');

    useEffect(()=>{
        registerTwitchExtContextHandlers({
            theme:(newTheme)=>setTwitchTheme(newTheme),
            mode:(newMode)=>setExtensionMode(newMode)
        });
    },[]);

    return [twitchTheme,extensionMode]
}