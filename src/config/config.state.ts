import { RGBColor } from 'react-color';

export type HeaderType = 'titleText' | 'titleUrl' | 'headerUrl';

export interface ConfigState {
    dataUrl: string;
    selectedHeaderType: HeaderType;
    titleText?: string;
    titleUrl?: string;
    headerUrl?: string;
    categoryText?: string;
    
}

export interface ColorsConfig {
    background: RGBColor,
    acccent: RGBColor,
    text: RGBColor,
    altText: RGBColor,
    link: RGBColor,
    textOverlay: RGBColor,
}

export interface ColorModesConfig {
    light:ColorsConfig,
    dark:ColorsConfig
}

