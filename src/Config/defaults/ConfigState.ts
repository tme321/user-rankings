import { ConfigModel } from "../model/Config.model";
import { defaultColorModesConfig } from './ColorModesConfig';

export const defaultConfigState: ConfigModel = {
    dataUrl: '',
    selectedHeaderType: 'titleText',
    titleText: 'Default Title',
    categoryText: 'Default Category',
    themes: defaultColorModesConfig
}