import { useEffect, useState } from "react";
import { registerTwitchExtContextHandlers } from "../services/TwitchContext/TwitchContext.service";

export type ViewModes = 'viewer' | 'dashboard' | 'config';
export type Themes = 'light' | 'dark';

export function useTwitchContext({mode, theme}: {mode: ViewModes, theme: Themes}):[Themes, ViewModes] {

    const [twitchTheme, setTwitchTheme] = useState<Themes>(theme);
    const [extensionMode, setExtensionMode] = useState<ViewModes>(mode);

    useEffect(()=>{
        registerTwitchExtContextHandlers({
            theme:(newTheme)=>setTwitchTheme(newTheme),
            mode:(newMode)=>setExtensionMode(newMode)
        });
    },[]);

    return [twitchTheme,extensionMode]
}
