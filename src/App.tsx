import React, { useCallback, useEffect, useState } from 'react';
//import axios from 'axios';
import './App.css';
import { AppState } from './App.state';
import { Loading } from './Views/Loading/Loading.component';
import { ViewerLayout } from './Views/Viewer/components/ViewerLayout/ViewerLayout.component';
import { ConfigLayout } from './Views/Config/components/ConfigLayout/ConfigLayout.component';
import { DashboardLayout } from './Views/Dashboard/components/DashboardLayout/DashboardLayout.component';
import { ColorModesContextType, ColorsContext, modes } from './Context/Colors.context';
import { useTwitchPanelExtension } from './shared/hooks/TwitchPanelExtension.hook';
import { ViewModes } from './shared/hooks/TwitchExtContext.hook';

const defaultState: AppState = { data: { category: 'default', entries: [] } };

type modes = keyof ColorModesContextType;


function App() {
  const [data, setData] = useState<AppState>(defaultState);
  const [url, setUrl] = useState('/config/user-bits.json');
  const [auth, config, theme, mode, isLoading] =  useTwitchPanelExtension();
  
  useEffect(() => {
    const fetchData = async () => {
      //setIsLoading(true);
      
      //await sleep(1000);

      const result = await Promise.resolve(
        require("./test/giftedSubs.test.json")
      );

      setData({ 
        data: result
      });
      //setIsLoading(false);
    };
 
    fetchData();
  }, [url]);

  const renderLayout = (layoutMode: ViewModes) => {
    switch(layoutMode) {
      case 'config': { return (<ConfigLayout/>) }
      case 'dashboard': { return (<DashboardLayout/>) }
      case 'viewer': { return (<ViewerLayout {...data}/>) }
    }
  }

  return (
    <ColorsContext.Provider value={modes[theme]}>
      <div className={`app-container`}>
        {
          isLoading? 
            <Loading/>:
            renderLayout(mode)
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