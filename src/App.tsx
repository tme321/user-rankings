import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import './App.css';
import { TableData } from './App.state';
import { useTwitchPanelExtension } from './shared/hooks/TwitchPanelExtension.hook';
import { ViewModes } from './shared/hooks/TwitchExtContext.hook';
import { ConfigModel } from './Config/model/Config.model';
import { DataState } from './shared/data/data.state';
import { defaultConfigState } from './Config/defaults/ConfigState';
import { isAConfig } from './Config/helpers/isAConfig';
import { LayoutManager } from './components/LayoutManager/LayoutManager.component';
import { Loading } from './components/Loading/Loading.component';
import { applyTheme } from './shared/helpers/applyTheme';
import { parseQueryParams } from './shared/helpers/parseQueryParams';

const defaultTableData: TableData = { tableData: { entries: [] } };

function App() {

    const params = parseQueryParams();

    let initialMode: ViewModes = params.mode;
    console.log('initial mode: ', initialMode);

    const [data, setData] = useState<TableData>(defaultTableData);
    const [url, setUrl] = useState('/config/user-bits.json');
    const [auth, config, saveConfig, theme, mode, isLoading] = useTwitchPanelExtension({
            mode: initialMode, 
            defaultConfig: defaultConfigState, 
            isConfig: isAConfig 
    });

    /**
     * Update the url from the config.
     */
    useEffect(()=>{
        setUrl(config.dataUrl);
    },[config])

    /**
     * Update the app theme based on the config and theme context.
     */
    useEffect(()=>{
        applyTheme(config.themes[theme]);
    },[theme, config]);

    /**
     * Save a new config to twitch through the Twitch.ext library.
     * @param newConfig The new config to save to twitch.
     */
    const handleSaveConfig = (newConfig: ConfigModel) => {
        saveConfig({config: newConfig})
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await Promise.resolve<DataState>(
                require("./test/giftedSubs.test.json")
            );

            setData({ 
                tableData: result
            });
        };

        fetchData();
    }, [url]);

    return (
            <div className={`app-container`}>
            {
                false? 
                    <Loading/>:
                    <LayoutManager 
                        layoutMode={mode} 
                        renderConfig={config} 
                        handleSaveConfig={handleSaveConfig} 
                        tableData={data.tableData}/>
            }
            </div>
    );
}

export default App;