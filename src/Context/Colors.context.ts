import React from 'react';
import { defaultColorModesConfig } from '../Config/defaults/ColorModesConfig';
import { ColorModesModel } from '../Config/model/ColorModes.model';
/*
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
*/

export const defaultModes: ColorModesModel = defaultColorModesConfig;

export const ColorsContext = React.createContext(defaultModes.dark);