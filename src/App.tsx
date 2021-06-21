import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { AppState } from './App.state';
import { registerContextHandlers } from './shared/services/TwitchContext/TwitchContext.service';
import { Loading } from './Views/Loading/Loading.component';
import { ViewerLayout } from './Views/Viewer/components/ViewerLayout/ViewerLayout.component';
import { ConfigLayout } from './Views/Config/components/ConfigLayout/ConfigLayout.component';
import { DashboardLayout } from './Views/Dashboard/components/DashboardLayout/DashboardLayout.component';

const defaultState: AppState = { data: { category: 'default', entries: [] }, config: { dataUrl: '' } };

const lightMode = 'light-mode';
const darkMode = 'dark-mode';

type ViewModes = 'viewer' | 'dashboard' | 'config';

function App() {
  const [data, setData] = useState<AppState>(defaultState);
  const [url, setUrl] = useState('/config/user-bits.json');
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      await sleep(1000);

      const result = await Promise.resolve(
        require("./test/giftedSubs.test.json")
      );

      setData({ 
        data: result, 
        config: { dataUrl: '', 
          titleText: "Hall of Fame"
        } 
      });
      setIsLoading(false);
    };
 
    fetchData();
  }, [url]);

  const [appTheme, setAppTheme] = useState<string>(darkMode);
  const [appMode, setAppMode] = useState<ViewModes>('config');

  const renderLayout = (layoutMode: ViewModes) => {
    switch(layoutMode) {
      case 'config': { return (<ConfigLayout/>) }
      case 'dashboard': { return (<DashboardLayout/>) }
      case 'viewer': { return (<ViewerLayout {...data}/>) }
    }
  }
  

  /**
   * Twitch Context Handlers
   */
  useEffect(() => {
    registerContextHandlers({
      theme:(newTheme)=>{
        switch(newTheme){
          case 'light':{
            setAppTheme(lightMode);
            break;
          }
          case 'dark':{
            setAppTheme(darkMode);
            break;
          }        
        }
      },
      mode:(newMode)=>setAppMode(newMode as ViewModes)
    });    
  }, []);
    
  return (
    <div className={`app-container ${appTheme}`}>
      {
        isLoading? 
          <Loading/>:
          renderLayout(appMode)
      }
    </div>
  );
}




function sleep(ms: number) {
  // add ms millisecond timeout before promise resolution
  return new Promise(resolve => setTimeout(resolve, ms))
}


export default App;