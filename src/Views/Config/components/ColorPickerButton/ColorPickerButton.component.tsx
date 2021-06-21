import React, { useState } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker, RGBColor, ColorResult } from 'react-color';

interface ColorPickerButtonState {
    displayColorPicker: boolean;
    color: RGBColor;
}

export function ColorPickerButton(props: any) {
    const [buttonState, setButtonState] = useState<ColorPickerButtonState>(()=>{
      const color = props.color ? 
        props.color:
        { 
          r: 241,
          g: 112,
          b: 19,
          a: 1,
        };
      return { displayColorPicker: false, color: color };
    });
    

    const handleClick = () => {
        setButtonState({ 
            ...buttonState, 
            displayColorPicker: !buttonState.displayColorPicker  
        })
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
        })
    };

    const styles = reactCSS({
        'default': {
            color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgba(${ buttonState.color.r }, ${ buttonState.color.g }, ${ buttonState.color.b }, ${ buttonState.color.a })`,
            },
            swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
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
                <SketchPicker color={ buttonState.color } onChange={ handleChange } />
            </div> : null }
        </div>
    );
}

/*
class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
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
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

export default SketchExample
*/