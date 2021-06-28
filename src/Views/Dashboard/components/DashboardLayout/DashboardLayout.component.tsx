import React, { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import './DashboardLayout.css';
import { DashboardLayoutProps } from './DashboardLayout.props';
import { ColorsContext } from '../../../../Context/Colors.context';
import { TabSelectors } from '../../../../shared/components/TabSelectors/TabSelectors.component';
import { EditDataTable } from '../EditDataTable/EditDataTable.component';

export function DashboardLayout({config, tableData}: DashboardLayoutProps) {
    const theme = useContext(ColorsContext);

    const [gotoState, setGotoState] = useState<string>('');

    const [tempState, setTempState] = useState<string>('');
        
    const handleGoTo = () => {
        setGotoState(tempState);
    };

    const handleGoToChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTempState(e.target.value);
    };

    const handleFindUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            setGotoState((e.target as HTMLInputElement).value);
        }
    }
    const handleFindUserFocus = ()=>{ setGotoState('') };

    const tabs={
            "Data":(
                <>
                    <div>
                        <input type="text"
                            onFocus={handleFindUserFocus}
                            onKeyPress={handleFindUser} 
                            placeholder="Username"
                            onChange={handleGoToChange} 
                            defaultValue={gotoState}/>
                        <button onClick={handleGoTo}>Go To</button>
                    </div>
                    <EditDataTable
                        gotoUserEntry={gotoState} 
                        tableData={tableData}
                        config={config}/>
                </>),
            "Events":(<>Events</>)};

    return (
        <div className="dashboard-layout" 
            style={{
                backgroundColor: theme.background, 
                color: theme.text
            }}>
            <h1 className="dashboard-header">
                <span>User Rankings</span>
            </h1>
            

            <div className="container">
                <TabSelectors tabs={tabs}/>                
            </div>
        </div>
    );
}
