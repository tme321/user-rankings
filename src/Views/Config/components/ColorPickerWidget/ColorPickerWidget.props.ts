export type ColorPickerWidgetProps = { 
    label: string;
    labelColor?: string;
    color: string;
    handleColorChange?:(color: string)=>void; 
}