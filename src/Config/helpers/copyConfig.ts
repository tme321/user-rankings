import { ConfigModel } from "../model/Config.model";

export function copyConfig(config: ConfigModel):ConfigModel {
    return {
        ...config,
        themes: {
            dark: {...config.themes.dark},
            light: {...config.themes.light},
        }
    };
}