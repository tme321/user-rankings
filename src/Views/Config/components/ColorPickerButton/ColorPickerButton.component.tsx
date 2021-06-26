import React, { useState } from 'react';
import './ColorPickerButton.css';
import { SketchPicker, ColorResult } from 'react-color';
import { ColorPickerButtonProps } from './ColorPickerButton.props';
import { convertStringToRGBColor, convertRGBColorToString } from './ColorPickerButton.helpers';
import { ColorPickerButtonState } from './ColorPickerButton.state';

export function ColorPickerButton(props: ColorPickerButtonProps) {
    const [buttonState, setButtonState] = useState<ColorPickerButtonState>(()=>{
        return { displayColorPicker: false,
        color: convertStringToRGBColor(props.color) };
    });

    const handleClick = () => {
        setButtonState({
            ...buttonState, 
            displayColorPicker: !buttonState.displayColorPicker  
        });
    };

    const handleClose = () => {
        setButtonState({
            ...buttonState,
            displayColorPicker: false 
        });
    };

    const handleChange = (color: ColorResult) => {
        setButtonState({ 
            ...buttonState, 
            color: color.rgb
        });

        if(props.handleChange) {
            props.handleChange(convertRGBColorToString(color.rgb));
        }
    };

    const selectedColorStyle = { 
        backgroundColor: convertRGBColorToString(buttonState.color) 
    };

    return (
        <div>
            <div 
                className="swatch-container" 
                onClick={ handleClick }>
                <div 
                    className="color-container" 
                    style={selectedColorStyle} />
            </div>
            { 
                buttonState.displayColorPicker ? 
                    <div className="popover-container" >
                    <div className="cover-container" 
                        onClick={ handleClose }/>
                        <SketchPicker 
                            color={ buttonState.color } 
                            onChange={ handleChange } />
                    </div> : 
                    null 
            }
        </div>
    );
}
