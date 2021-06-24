import React, { useState } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker, RGBColor, ColorResult } from 'react-color';
import { ColorPickerButtonProps } from './ColorPickerButton.props';

interface ColorPickerButtonState {
  displayColorPicker: boolean;
}

function convertStringToRGBColor(color:string): RGBColor {
  const regexCSSrgba =  /rgba\((?<r>\d+),(?<g>\d+),(?<b>\d+),(?<a>\d+)\)/m;
  const colorsMatch = regexCSSrgba.exec(color);
  const rgbColor: RGBColor = { 
    r: Number.parseInt(colorsMatch?.groups?.r || '') || 241, 
    g: Number.parseInt(colorsMatch?.groups?.g || '') || 112, 
    b: Number.parseInt(colorsMatch?.groups?.b || '') || 19, 
    a: Number.parseInt(colorsMatch?.groups?.a || '') || 1
  }
  return rgbColor;
}

function convertRGBColorToString(color:RGBColor): string {
  return `rgb(${color.r},${color.g},${color.b},${color.a})`;
}


export function ColorPickerButton(props: ColorPickerButtonProps) {
  const [buttonState, setButtonState] = useState<ColorPickerButtonState>(()=>{
    const color = convertStringToRGBColor(props.color)
    return { displayColorPicker: false, color: color };
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
      //color: color.rgb 
    });

    if(props.handleChange) {
      props.handleChange(convertRGBColorToString(color.rgb));
    }
  };

  const color = convertStringToRGBColor(props.color);

  const styles = reactCSS({
    'default': {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: props.color,
      },
      swatch: {
        padding: '2px',
        background: 'darkgray',
        borderRadius: '1px',
        marginTop: '4px',
        //marginLeft: '20px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <div>
      <div style={ styles.swatch } onClick={ handleClick }>
        <div style={ styles.color } />
      </div>
        { buttonState.displayColorPicker ? 
        <div style={ styles.popover as any }>
          <div style={ styles.cover as any } onClick={ handleClose }/>
          <SketchPicker color={ color } onChange={ handleChange } />
        </div> : null }
    </div>
  );
}
