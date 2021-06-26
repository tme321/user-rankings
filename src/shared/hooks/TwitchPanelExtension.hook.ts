import { useMemo } from "react";
import { AuthState } from "../state/AuthState.state";
import { useTwitchExtAuth } from "./TwitchExtAuth.hook";
import { IsConfigTester, TwitchConfigSetter, useTwitchExtConfig } from "./TwitchExtConfig.hook";
import { Themes, useTwitchContext, ViewModes } from "./TwitchExtContext.hook";

export function useTwitchPanelExtension<Config>({defaultConfig, isConfig}:{defaultConfig: Config, isConfig: IsConfigTester<Config>}): [AuthState, Config, TwitchConfigSetter<Config>, Themes, ViewModes, boolean] {
    const [theme, viewMode] = useTwitchContext();
    const authState = useTwitchExtAuth();
    const [twitchConfig,saveTwitchConfig] = useTwitchExtConfig<Config>({defaultConfig, isConfig});

    const isLoading = useMemo(
        () => {
          return !(authState.isAuthed && !!twitchConfig);
        },
        [authState, twitchConfig],
    );

    return [
        authState, 
        twitchConfig,
        saveTwitchConfig,
        theme, 
        viewMode,
        isLoading
    ];
}