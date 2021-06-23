import React, { FormEvent, useContext, useState } from 'react';
import './ConfigLayout.css'
import { ColorPickerWidget } from '../ColorPickerWidget/ColorPickerWidget.component';
import { defaultColorModesConfig } from '../../../../Config//defaults/ColorModesConfig';
import { RadioSelectGroup } from '../RadioSelectGroup/RadioSelectGroup.component';
import { defaultConfigState } from '../../../../Config/defaults/ConfigState';
import { ColorsContext } from '../../../../Context/Colors.context';

export function ConfigLayout() {

    const theme = useContext(ColorsContext);

    const [config, setConfig] = useState(defaultConfigState);

    const ColorsRadioGroupContent = [{
        content: (<input/>),
        label: "Title Text:"
    },
    {
        content: (<input/>),
        label: "Title Url:"
    },
    {
        content: (<input/>),
        label: "Header Url:"
    }]; 

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }

    return (
        <div className="config-layout" 
            style={{ background: theme.background, color: theme.text }}>
            <h1><span>Configuration</span></h1>
            <form onSubmit={handleSubmit}>
                <div className="colors-container">
                    <ColorPickerWidget label="Background Color:" color={defaultColorModesConfig.dark.background}/>
                    <ColorPickerWidget label="Accent Color:" color={defaultColorModesConfig.dark.acccent}/>
                    <ColorPickerWidget label="Text Color:" color={defaultColorModesConfig.dark.text}/>
                    <ColorPickerWidget label="Secondary Text Color:" color={defaultColorModesConfig.dark.altText}/>
                </div>
                <div className="data-container">
                    <div className="data-widget">
                        <label>Data Url:</label><input/>
                    </div>

                    <RadioSelectGroup 
                        groupName="header-behavior" 
                        items={ColorsRadioGroupContent}/>
                    
                </div>
            </form>
        </div>
    );
}