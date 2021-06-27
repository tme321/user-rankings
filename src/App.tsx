import React, { useCallback, useEffect, useState } from 'react';
//import axios from 'axios';
import './App.css';
import { TableData } from './App.state';
import { Loading } from './Views/Loading/Loading.component';
import { ViewerLayout } from './Views/Viewer/components/ViewerLayout/ViewerLayout.component';
import { ConfigLayout } from './Views/Config/components/ConfigLayout/ConfigLayout.component';
import { DashboardLayout } from './Views/Dashboard/components/DashboardLayout/DashboardLayout.component';
import { ColorsContext, modes } from './Context/Colors.context';
import { useTwitchPanelExtension } from './shared/hooks/TwitchPanelExtension.hook';
import { ViewModes } from './shared/hooks/TwitchExtContext.hook';
import { ConfigModel } from './Config/model/Config.model';
import { DataState } from './shared/data/data.state';
import { defaultConfigState } from './Config/defaults/ConfigState';
import { isAConfig } from './Config/helpers/isAConfig';

const defaultTableData: TableData = { tableData: { entries: [] } };

function App() {
    const [data, setData] = useState<TableData>(defaultTableData);
    const [url, setUrl] = useState('/config/user-bits.json');
    const [auth, config, saveConfig, theme, mode, isLoading] =  
        useTwitchPanelExtension({ 
            defaultConfig: defaultConfigState, 
            isConfig: isAConfig });

    useEffect(() => {
        const fetchData = async () => {
            //setIsLoading(true);

            //await sleep(1000);

            const result = await Promise.resolve<DataState>(
                require("./test/giftedSubs.test.json")
            );

            setData({ 
                tableData: result
            });
            //setIsLoading(false);
        };

        fetchData();
    }, [url]);

    const handleSaveConfig = (newConfig: ConfigModel) => {
        saveConfig({config: newConfig})
    }

    const renderLayout = (layoutMode: ViewModes, renderConfig: ConfigModel) => {
        switch(layoutMode) {
            case 'config': { return (
                <ConfigLayout 
                    config={renderConfig} 
                    handleSaveConfig={handleSaveConfig}/>
            )}
            case 'dashboard': { return (
                <DashboardLayout 
                    config={renderConfig}
                    tableData={data.tableData}/>
            )}
            case 'viewer': { return (
                <ViewerLayout 
                    config={renderConfig} 
                    tableData={data.tableData}/>
            )}
        }
    }

    return (
        <ColorsContext.Provider value={modes[theme]}>
            <div className={`app-container`}>
            {
                false? 
                    <Loading/>:
                    renderLayout(mode, config)
            }
            </div>
        </ColorsContext.Provider>
    );
}


function sleep(ms: number) {
// add ms millisecond timeout before promise resolution
return new Promise(resolve => setTimeout(resolve, ms))
}


export default App;