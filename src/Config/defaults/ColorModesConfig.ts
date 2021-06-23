import { ColorModesConfig } from "../Config.state";

/**
 * @description - These colors are taken from the official
 * twitch guidelines at 
 * https://dev.twitch.tv/docs/extensions/designing#panel-extension-guidelines
 */
export const defaultColorModesConfig: ColorModesConfig = {
    light: {
        background: {
            r:0x0f,
            g:0x0f,
            b:0x0f,
            a: 1
        },
        acccent: {
            r:0x64,
            g:0x41,
            b:0xa4,
            a: 1
        },
        text: {
            r:0x23,
            g:0x21,
            b:0x27,
            a: 1
        },
        altText: {
            r:0x40,
            g:0x40,
            b:0x40,
            a: 1
        },
        link: {
            r:0x64,
            g:0x41,
            b:0xa4,
            a: 1
        },
        textOverlay: {
            r:0xe5,
            g:0xe3,
            b:0xe8,
            a: 1
        },
    },
    dark: {
        background: {
            r:0x20,
            g:0x1c,
            b:0x2b,
            a: 1
        },
        acccent: {
            r:0x64,
            g:0x41,
            b:0xa4,
            a: 1
        },
        text: {
            r:0xe5,
            g:0xe3,
            b:0xe8,
            a: 1
        },
        altText: {
            r:0xb5,
            g:0xb3,
            b:0xb8,
            a: 1
        },
        link: {
            r:0xe2,
            g:0xdb,
            b:0xf0,
            a: 1
        },
        textOverlay: {
            r:0xe5,
            g:0xe3,
            b:0xe8,
            a: 1
        },
    }
}