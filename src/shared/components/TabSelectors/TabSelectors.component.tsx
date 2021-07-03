import React, { useMemo, useState } from 'react';
import './TabSelectors.css';
import { TabSelectorsProps } from './TabSelectors.props'
import { TabSelector } from '../TabSelector/TabSelector.component';

export function TabSelectors({tabs}: TabSelectorsProps) {
    const tabNames = useMemo(()=>{
        return Object.keys(tabs);
    },[tabs])

    const [selectedTab,setSelectedTab] = useState(()=>{
        return tabNames.length > 0?
            tabNames[0]:
            ''
    });
    
    const tabSelectors = tabNames.map(name=>(
        <TabSelector
            key={name} 
            text={name} 
            isSelected={name===selectedTab}
            handleSelected={(tabName:string)=>{ setSelectedTab(tabName) }}/>
    ));
    
    return (
        <>
            <div className="tabs">
                {tabSelectors}
            </div>
            <div className="content">{tabs[selectedTab]}</div>
        </>
    );
}