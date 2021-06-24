import React from 'react';
import './ThemeConfigEditor.css';
import { ColorsModel } from '../../../Config/model/Colors.model';
import { ColorPickerWidget } from '../components/ColorPickerWidget/ColorPickerWidget.component';

interface ThemeConfigEditorProps { 
    title: string,
    theme: ColorsModel, 
    colorChangeHandlers: {
        background: (color:string)=>void,
        accent: (color:string)=>void,
        text: (color:string)=>void,
        altText: (color:string)=>void,
    }
}

export function ThemeConfigEditor({title, theme, colorChangeHandlers }: ThemeConfigEditorProps) {
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
        </div>
    );
}
