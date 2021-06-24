import { ColorModesModel } from "../model/ColorModes.model";

/**
 * @description - These colors are taken from the official
 * twitch guidelines at 
 * https://dev.twitch.tv/docs/extensions/designing#panel-extension-guidelines
 */
export const defaultColorModesConfig: ColorModesModel = {
    light: {
        background: `rgba(${0xff},${0xff},${0xff},${0x01})`,
        accent: `rgba(${0x64},${0x41},${0xa4},${0x01})`, 
        text: `rgba(${0x23},${0x21},${0x27},${0x01})`,
        altText: `rgba(${0x40},${0x40},${0x40},${0x01})`,
        link: `rgba(${0x64},${0x41},${0xa4},${0x01})`,
        textOverlay: `rgba(${0xe5},${0xe3},${0xe8},${0x01})`,
    },
    dark: {
        background: `rgba(${0x20},${0x1c},${0x2b},${0x01})`,
        accent: `rgba(${0x64},${0x41},${0xa4},${0x01})`,
        text: `rgba(${0xe5},${0xe3},${0xe8},${0x01})`,
        altText: `rgba(${0xb5},${0xb3},${0xb8},${0x01})`,
        link: `rgba(${0xe2},${0xdb},${0xf0},${0x01})`,
        textOverlay: `rgba(${0xe5},${0xe3},${0xe8},${0x01})`,
    }
}