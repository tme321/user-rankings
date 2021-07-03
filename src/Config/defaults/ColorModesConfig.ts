import { ColorModesModel } from "../model/ColorModes.model";
import { defaultDarkColors, defaultLightColors } from './Colors';

/**
 * @description - These colors are taken from the official
 * twitch guidelines at 
 * https://dev.twitch.tv/docs/extensions/designing#panel-extension-guidelines
 */
export const defaultColorModesConfig: ColorModesModel = {
    light: defaultLightColors,
    dark: defaultDarkColors
}
