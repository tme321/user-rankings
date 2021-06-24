import './ColorPickerWidget.css';
import { ColorPickerButton } from '../ColorPickerButton/ColorPickerButton.component';
import { ColorPickerWidgetProps } from './ColorPickerWidget.props';

export function ColorPickerWidget(props: ColorPickerWidgetProps) {
    return (
        <div className="color-picker-widget">
            <label style={{ color: props.labelColor }}>{props.label}</label>
            <ColorPickerButton 
                color={props.color} 
                handleChange={props.handleColorChange}/>
        </div>
    )
}