import { RGBColor } from 'react-color';

export interface ColorPickerWidgetProps { 
    label: string;
    labelColor?: string;
    color: string;
    handleColorChange?:(color: string)=>void; 
}