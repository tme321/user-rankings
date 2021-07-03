import React from 'react';
import './ThemeConfigEditor.css';
import { ColorPickerWidget } from '../ColorPickerWidget/ColorPickerWidget.component';
import { ThemeConfigEditorProps } from './ThemeConfigEditor.props';


export function ThemeConfigEditor({ 
    title, 
    theme, 
    colorChangeHandlers}: ThemeConfigEditorProps) {

    const handleResetClick = () => {
        colorChangeHandlers.reset();
    };
        
    return (
        <div className="colors-container" 
            style={{ 
                borderColor: theme.accent, 
                backgroundColor: theme.background,
                color: theme.text
            }}>
            <h2 className="theme-title">
                <span>{title}</span>
            </h2>
            <ColorPickerWidget 
                label="Background Color:" 
                color={theme.background} 
                handleColorChange={colorChangeHandlers.background}/>
            <ColorPickerWidget 
                label="Accent Color:" 
                color={theme.accent} 
                labelColor={theme.accent}
                handleColorChange={colorChangeHandlers.accent}/>
            <ColorPickerWidget 
                label="Text Color:" 
                color={theme.text}
                handleColorChange={colorChangeHandlers.text}/>
            <ColorPickerWidget 
                label="Secondary Text Color:" 
                color={theme.altText} 
                labelColor={theme.altText}
                handleColorChange={colorChangeHandlers.altText}/>
            <div>
                <button className="reset-btn"
                    onClick={handleResetClick} 
                    type="reset">
                        Reset to Defaults
                </button>
            </div>
        </div>
    );
}
