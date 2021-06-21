import './ColorPickerWidget.css';
import { ColorPickerButton } from '../ColorPickerButton/ColorPickerButton.component';
import { RGBColor } from 'react-color';

export function ColorPickerWidget(props: { label: string, color?: RGBColor }) {
    return (
        <div className="color-picker-widget">
            <label>{props.label}</label><ColorPickerButton color={props.color}/>
        </div>
    )
}