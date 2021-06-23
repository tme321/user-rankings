import React from 'react';
import { defaultColorModesConfig } from '../Config/defaults/ColorModesConfig';
import { colorConfigToContext } from './helpers';

export type ColorsContextType = {
    background: string,
    acccent: string,
    text: string,
    altText: string,
    link: string,
    textOverlay: string,
};

export type ColorModesContextType = {
    dark: ColorsContextType;
    light: ColorsContextType;
}

export const modes: ColorModesContextType = colorConfigToContext(defaultColorModesConfig);

export const ColorsContext = React.createContext(modes.dark);