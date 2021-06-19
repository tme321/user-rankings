import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { ViewerLayout } from './ViewerExtension/components/ViewerLayout/ViewerLayout.component';
import { Loading } from './ViewerExtension/components/Loading/Loading.component';
import { AppState } from './App.state';
import { registerContextListener } from './shared/services/TwitchContext/TwitchContext.service';

const defaultState: AppState = { data: { category: 'default', entries: [] }, config: { dataUrl: '' } };

const lightMode = 'light-mode';
const darkMode = 'dark-mode';

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

  const [theme, setTheme] = useState<string>(darkMode);

  useEffect(() => {
    console.log('context use effect');
    registerContextListener((context, changed)=>{
      if(changed.includes('theme')) {
        if(context.theme === 'light') {
          setTheme(lightMode);
        }
        if(context.theme === 'dark') {
          setTheme(darkMode);
        }
      }
    });
  }, []);
  
    
  return (
    <div className={`app-container ${theme}`}>
      {
        isLoading? 
          <Loading/>: 
          <ViewerLayout {...data}></ViewerLayout>
      }
    </div>
  );
}

export default App;


function sleep(ms: number) {
  // add ms millisecond timeout before promise resolution
  return new Promise(resolve => setTimeout(resolve, ms))
}


