import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import './ConfigLayout.css'
import { RadioSelectGroup } from '../RadioSelectGroup/RadioSelectGroup.component';
import { defaultConfigState } from '../../../../Config/defaults/ConfigState';
import { ColorsContext } from '../../../../Context/Colors.context';
import { ConfigModel } from '../../../../Config/model/Config.model';
import { isAConfig } from '../../../../Config/helpers/isAConfig';
import { copyConfig } from '../../../../Config/helpers/copyConfig';
import { ThemeConfigEditor } from '../ThemeConfigEditor/ThemeConfigEditor.component';
import { HeaderModel } from '../../../../Config/model/Header.model';
import { ConfigLayoutProps } from './ConfigLayout.props';
import { RadioGroupItem } from '../RadioSelectGroup/RadioSelectGroup.props';

export function ConfigLayout({config, handleSaveConfig }: ConfigLayoutProps) {

    const theme = useContext(ColorsContext);

    const [currentConfig, setConfig] = useState<ConfigModel>(copyConfig(config));

    const handleTitleBehaviorSelection = (select: HeaderModel) => {
        setConfig((config)=>{
            const newConfig = copyConfig(config);
            newConfig.selectedHeaderType = select;
            return newConfig;
        });
    }        

    const handleTitleTextChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((config)=>{
            const newConfig = copyConfig(config);
            newConfig.titleText = e.target.value;
            return newConfig;
        });
    };

    const handleTitleUrlChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((config)=>{
            const newConfig = copyConfig(config);
            newConfig.titleUrl = e.target.value;
            return newConfig;
        });
    };

    const handleHeaderUrlChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((config)=>{
            const newConfig = copyConfig(config);
            newConfig.headerUrl = e.target.value;
            return newConfig;
        });
    };

    const handleDataUrlChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((config)=>{
            const newConfig = copyConfig(config);
            newConfig.dataUrl = e.target.value;
            return newConfig;
        });
    };

    const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((config)=>{
            const newConfig = copyConfig(config);
            newConfig.categoryText = e.target.value;
            return newConfig;
        });
    };

    const handleUsersColumnTextChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((config)=>{
            const newConfig = copyConfig(config);
            newConfig.usersColumnText = e.target.value;
            return newConfig;
        });
    };

    const colorChangeHandlers = {
        dark: {
            background: (color: string)=>{ 
                setConfig((config)=>{
                    const newConfig = copyConfig(config);
                    newConfig.themes.dark.background = color;
                    return newConfig;
                });
            },
            accent: (color: string)=>{ 
                setConfig((config)=>{
                    const newConfig = copyConfig(config);
                    newConfig.themes.dark.accent = color;
                    return newConfig
                });
            },
            text: (color: string)=>{ 
                setConfig((config)=>{
                    const newConfig = copyConfig(config);
                    newConfig.themes.dark.text = color;
                    return newConfig;
                });
            },
            altText: (color: string)=>{ 
                setConfig((config)=>{
                    const newConfig = copyConfig(config);
                    newConfig.themes.dark.altText = color;
                    return newConfig;
                });
            },
        },
        light: {
            background: (color: string)=>{ 
                setConfig((config)=>{
                    const newConfig = copyConfig(config);
                    newConfig.themes.light.background = color;
                    return newConfig;
                });
            },
            accent: (color: string)=>{ 
                setConfig((config)=>{
                    const newConfig = copyConfig(config);
                    newConfig.themes.light.accent = color;
                    return newConfig;
                });
            },
            text: (color: string)=>{ 
                setConfig((config)=>{
                    const newConfig = copyConfig(config);
                    newConfig.themes.light.text = color;
                    return newConfig;
                });
            },
            altText: (color: string)=>{ 
                setConfig((config)=>{
                    const newConfig = copyConfig(config);
                    newConfig.themes.light.altText = color;
                    return newConfig;
                });
            },
        }
    }
    
    const handleSubmit = (event: FormEvent) => {
        handleSaveConfig(currentConfig);
        event.preventDefault();
    }

    const ColorsRadioGroupContent: RadioGroupItem<HeaderModel>[] = [{
        content: (<input
                    className="radio-group-input" 
                    defaultValue={currentConfig.titleText} 
                    onChange={handleTitleTextChange}/>),
        label: "Title Text:",
        selectionValue: 'titleText'
    },
    {
        content: (<input 
                    className="radio-group-input" 
                    defaultValue={currentConfig.titleUrl} 
                    onChange={handleTitleUrlChange}/>),
        label: "Title Url:",
        selectionValue: 'titleUrl'
    },
    {
        content: (<input 
                    className="radio-group-input" 
                    defaultValue={currentConfig.headerUrl} 
                    onChange={handleHeaderUrlChange}/>),
        label: "Header Url:",
        selectionValue: 'headerUrl'
    }]; 

    return (
        <div className="config-layout" 
            style={{ background: theme.background, color: theme.text }}>
            <form onSubmit={handleSubmit}>
                <h1>
                    <span>User Rankings Configuration</span>
                    <div style={{ height: "30px"}}>
                        <button style={{
                            background: theme.accent, 
                            color: theme.text,
                            borderRadius: "5px",
                        }}
                        type="submit">
                            Save Config
                        </button>
                    </div>
                </h1>
                <div className="theme-editors">
                    <ThemeConfigEditor 
                            title="Dark Mode Theme"
                            theme={currentConfig.themes.dark}
                            colorChangeHandlers={colorChangeHandlers.dark}/>
                    <ThemeConfigEditor 
                            title="Light Mode Theme"
                            theme={currentConfig.themes.light}
                            colorChangeHandlers={colorChangeHandlers.light}/>
                </div>
                
                <div className="fields-container">
                    <h2 className="data-title-container">
                        <span>Data Behavior</span>
                    </h2>
                    <div className="data-container">
                        <div className="data-labels">
                            <label>Data Url:</label>
                            <label>Ranking Category:</label>
                            <label>Users Column Text:</label>
                        </div>
                        <div className="data-inputs">
                            <input 
                                defaultValue={currentConfig.dataUrl} 
                                onChange={handleDataUrlChange}/>
                            <input 
                                defaultValue={currentConfig.categoryText} 
                                onChange={handleCategoryChange}/>
                            <input 
                                defaultValue={currentConfig.usersColumnText} 
                                onChange={handleUsersColumnTextChange}
                                />
                        </div>
                    </div>
                </div>

                <RadioSelectGroup
                        title="Header Behavior"
                        groupName="header-behavior" 
                        items={ColorsRadioGroupContent}
                        handleSelection={handleTitleBehaviorSelection}
                        currentSelection={currentConfig.selectedHeaderType}/>
            </form>
        </div>
    );
}
