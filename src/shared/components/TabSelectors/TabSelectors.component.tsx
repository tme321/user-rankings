import React, { useContext, useMemo, useState } from 'react';
import './TabSelectors.css';
import { TabSelectorsProps } from './TabSelectors.props'
import { ColorsContext } from '../../../Context/Colors.context';
import { TabSelector } from '../TabSelector/TabSelector.component';

export function TabSelectors({tabs}: TabSelectorsProps) {
    const theme = useContext(ColorsContext);

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
            color={theme.text} 
            toggledColor={theme.accent}
            isSelected={name===selectedTab}
            handleSelected={(tabName:string)=>{ setSelectedTab(tabName) }}/>
    ));
    
    return (
        <>
            <div className="tabs" 
                style={{ borderColor: theme.accent }}>
                {tabSelectors}
            </div>
            <div className="content">{tabs[selectedTab]}</div>
        </>
    );
}