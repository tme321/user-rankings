import { RGBColor, ColorResult } from 'react-color';

export interface ColorPickerButtonProps {
    color: RGBColor;
    handleChange?: (color: ColorResult)=>void;
    
}