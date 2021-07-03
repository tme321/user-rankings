import React, { useState } from 'react';
import './ColorPickerButton.css';
import { SketchPicker, ColorResult } from 'react-color';
import { ColorPickerButtonProps } from './ColorPickerButton.props';
import { convertRGBColorToString } from './ColorPickerButton.helpers';
import { ColorPickerButtonState } from './ColorPickerButton.state';

export function ColorPickerButton(props: ColorPickerButtonProps) {
    const [buttonState, setButtonState] = 
        useState<ColorPickerButtonState>({ displayColorPicker: false });

    const handleClick = () => {
        setButtonState({
            displayColorPicker: !buttonState.displayColorPicker  
        });
    };

    const handleClose = () => {
        setButtonState({
            displayColorPicker: false 
        });
    };

    const handleChange = (color: ColorResult) => {
        if(props.handleChange) {
            props.handleChange(convertRGBColorToString(color.rgb));
        }
    };

    const selectedColorStyle = { 
        backgroundColor: props.color 
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
                                color={ props.color } 
                                onChange={ handleChange } />
                    </div> : 
                    null 
            }
        </div>
    );
}
