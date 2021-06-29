import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import './ConfigLayout.css'
import { RadioSelectGroup } from '../RadioSelectGroup/RadioSelectGroup.component';
import { ColorsContext } from '../../../../Context/Colors.context';
import { ConfigModel } from '../../../../Config/model/Config.model';
import { copyConfig } from '../../../../Config/helpers/copyConfig';
import { ThemeConfigEditor } from '../ThemeConfigEditor/ThemeConfigEditor.component';
import { HeaderModel } from '../../../../Config/model/Header.model';
import { ConfigLayoutProps } from './ConfigLayout.props';
import { RadioGroupItem } from '../RadioSelectGroup/RadioSelectGroup.props';

export function ConfigLayout({config, handleSaveConfig }: ConfigLayoutProps) {

    const theme = useContext(ColorsContext);

    const [currentConfig, setConfig] = useState<ConfigModel>(copyConfig(config));
    const [isFormPristine, setFormPristine] = useState(true);

    useEffect(()=>{
        setConfig(copyConfig(config));
    },[config]);

    const handleTitleBehaviorSelection = (select: HeaderModel) => {
        setConfig((prevConfig)=>{
            const newConfig = {...prevConfig};
            newConfig.selectedHeaderType = select;
            return newConfig;
        });
        setFormPristine(false);
    }        

    const handleTitleTextChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((prevConfig)=>{
            const newConfig = copyConfig(prevConfig);
            newConfig.titleText = e.target.value;
            return newConfig;
        });
        setFormPristine(false);
    };

    const handleTitleUrlChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((prevConfig)=>{
            const newConfig = copyConfig(prevConfig);
            newConfig.titleUrl = e.target.value;
            return newConfig;
        });
        setFormPristine(false);
    };

    const handleHeaderUrlChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((prevConfig)=>{
            const newConfig = copyConfig(prevConfig);
            newConfig.headerUrl = e.target.value;
            return newConfig;
        });
        setFormPristine(false);
    };

    const handleDataUrlChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((prevConfig)=>{
            const newConfig = copyConfig(prevConfig);
            newConfig.dataUrl = e.target.value;
            return newConfig;
        });
        setFormPristine(false);
    };

    const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((prevConfig)=>{
            const newConfig = copyConfig(prevConfig);
            newConfig.categoryText = e.target.value;
            return newConfig;
        });
        setFormPristine(false);
    };

    const handleUsersColumnTextChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setConfig((prevConfig)=>{
            const newConfig = copyConfig(prevConfig);
            newConfig.usersColumnText = e.target.value;
            return newConfig;
        });
        setFormPristine(false);
    };

    const colorChangeHandlers = {
        dark: {
            background: (color: string)=>{ 
                setConfig((prevConfig)=>{
                    const newConfig = copyConfig(prevConfig);
                    newConfig.themes.dark.background = color;
                    return newConfig;
                });
                setFormPristine(false);
            },
            accent: (color: string)=>{ 
                setConfig((prevConfig)=>{
                    const newConfig = copyConfig(prevConfig);
                    newConfig.themes.dark.accent = color;
                    return newConfig
                });
                setFormPristine(false);
            },
            text: (color: string)=>{ 
                setConfig((prevConfig)=>{
                    const newConfig = copyConfig(prevConfig);
                    newConfig.themes.dark.text = color;
                    return newConfig;
                });
                setFormPristine(false);
            },
            altText: (color: string)=>{ 
                setConfig((prevConfig)=>{
                    const newConfig = copyConfig(prevConfig);
                    newConfig.themes.dark.altText = color;
                    return newConfig;
                });
                setFormPristine(false);
            },
        },
        light: {
            background: (color: string)=>{ 
                setConfig((prevConfig)=>{
                    const newConfig = copyConfig(prevConfig);
                    newConfig.themes.light.background = color;
                    return newConfig;
                });
                setFormPristine(false);
            },
            accent: (color: string)=>{ 
                setConfig((prevConfig)=>{
                    const newConfig = copyConfig(prevConfig);
                    newConfig.themes.light.accent = color;
                    return newConfig;
                });
                setFormPristine(false);
            },
            text: (color: string)=>{ 
                setConfig((prevConfig)=>{
                    const newConfig = copyConfig(prevConfig);
                    newConfig.themes.light.text = color;
                    return newConfig;
                });
                setFormPristine(false);
            },
            altText: (color: string)=>{ 
                setConfig((prevConfig)=>{
                    const newConfig = copyConfig(prevConfig);
                    newConfig.themes.light.altText = color;
                    return newConfig;
                });
                setFormPristine(false);
            },
        }
    }
    
    const handleSubmit = (event: FormEvent) => {
        handleSaveConfig(currentConfig);
        setFormPristine(true);
        event.preventDefault();
    }

    const ColorsRadioGroupContent: RadioGroupItem<HeaderModel>[] = [{
        content: (<input
                    className="radio-group-input" 
                    value={currentConfig.titleText} 
                    onChange={handleTitleTextChange}/>),
        label: "Title Text:",
        selectionValue: 'titleText'
    },
    {
        content: (<input 
                    className="radio-group-input" 
                    value={currentConfig.titleUrl} 
                    onChange={handleTitleUrlChange}/>),
        label: "Title Url:",
        selectionValue: 'titleUrl'
    },
    {
        content: (<input 
                    className="radio-group-input" 
                    value={currentConfig.headerUrl} 
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
                        <button className="submit" 
                            style={{
                            background: isFormPristine?"#cccccc":theme.accent, 
                            color: isFormPristine?"#666666":theme.text,
                        }}
                        disabled={isFormPristine}
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
                                value={currentConfig.dataUrl} 
                                onChange={handleDataUrlChange}/>
                            <input 
                                value={currentConfig.categoryText} 
                                onChange={handleCategoryChange}/>
                            <input 
                                value={currentConfig.usersColumnText} 
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
