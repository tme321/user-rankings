import { useMemo } from "react";
import { AuthState } from "../state/AuthState.state";
import { useTwitchExtAuth } from "./TwitchExtAuth.hook";
import { useTwitchExtConfig } from "./TwitchExtConfig.hook";
import { Themes, useTwitchContext, ViewModes } from "./TwitchExtContext.hook";

export function useTwitchPanelExtension<Config>(): [AuthState, Config | undefined, Themes, ViewModes, boolean] {
    const [theme, viewMode] = useTwitchContext();
    const authState = useTwitchExtAuth();
    const twitchConfig = useTwitchExtConfig<Config>();

    const isLoading = useMemo(
        () => {
          return !(authState.isAuthed && !!twitchConfig);
        },
        [authState, twitchConfig],
    );

    return [
        authState, 
        twitchConfig,
        theme, 
        viewMode,
        isLoading
    ];
}