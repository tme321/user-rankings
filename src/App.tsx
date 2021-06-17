import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Layout } from './components/Layout/Layout.component';
import { Loading } from './components/Loading/Loading.component';
import { AppState } from './App.state';

const defaultState: AppState = { data: { category: 'default', entries: [] }, config: { dataUrl: '' } };

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
    
  return (
    <>
      {
        isLoading? 
          <Loading/>: 
          <Layout {...data}></Layout>
      }
    </>
  );
}

export default App;


function sleep(ms: number) {
  // add ms millisecond timeout before promise resolution
  return new Promise(resolve => setTimeout(resolve, ms))
}


