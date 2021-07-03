import React, { KeyboardEvent, useRef, useState } from 'react';
import './DashboardLayout.css';
import { DashboardLayoutProps } from './DashboardLayout.props';
import { TabSelectors } from '../../../../shared/components/TabSelectors/TabSelectors.component';
import { EditDataTable } from '../EditDataTable/EditDataTable.component';

export function DashboardLayout({config, tableData}: DashboardLayoutProps) {

    const [gotoState, setGotoState] = useState<string>('');
    const gotoInput = useRef(null);
        
    const handleGoTo = () => {
        setGotoState((gotoInput?.current as any).value);
    };

    const handleFindUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            setGotoState((e.target as HTMLInputElement).value);
        }
    };

    const handleFindUserFocus = ()=>{ setGotoState('') };

    const tabs={
            "Data":(
                <>
                    <div>
                        <input type="text"
                            onFocus={handleFindUserFocus}
                            onKeyPress={handleFindUser}
                            ref={gotoInput} 
                            placeholder="Username"
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
        <div className="dashboard-layout">
            <h1 className="header">
                <span>User Rankings</span>
            </h1>

            <div className="content">
                <TabSelectors tabs={tabs}/>                
            </div>
        </div>
    );
}
