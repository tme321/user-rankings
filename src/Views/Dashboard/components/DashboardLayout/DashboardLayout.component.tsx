import React, { useContext } from 'react';
import './DashboardLayout.css';
import { DashboardLayoutProps } from './DashboardLayout.props';
import { ColorsContext } from '../../../../Context/Colors.context';
import { TabSelectors } from '../../../../shared/components/TabSelectors/TabSelectors.component';
import { EditDataTable } from '../EditDataTable/EditDataTable.component';

export function DashboardLayout({config, tableData}: DashboardLayoutProps) {
    const theme = useContext(ColorsContext);

    const tabs={
            "Data":(
                <EditDataTable 
                    tableData={tableData}
                    config={config}/>),
            "Events":(<>Events</>)};

    return (
        <div className="dashboard-layout" 
            style={{
                backgroundColor: theme.background, 
                color: theme.text
            }}>
            <h1 className="dashboard-header">
                <div className="container">
                    <span>User Rankings</span>
                        <TabSelectors tabs={tabs}/>                
                </div>
            </h1>
                
        </div>
    );
}