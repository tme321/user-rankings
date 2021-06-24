import { ConfigModel } from "../model/Config.model";

export function isAConfig(config: any): config is ConfigModel {
    return config?.selectedHeaderType
        && config?.dataUrl
        && config?.categoryText
        && config?.themes?.dark
        && config?.themes?.light;
}