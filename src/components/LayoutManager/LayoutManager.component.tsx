import React from 'react';
import './LayoutManager.css';
import { LayoutManagerProps } from './LayoutManager.props';
import { ConfigLayout } from '../../Views/Config/components/ConfigLayout/ConfigLayout.component';
import { DashboardLayout } from '../../Views/Dashboard/components/DashboardLayout/DashboardLayout.component';
import { ViewerLayout } from '../../Views/Viewer/components/ViewerLayout/ViewerLayout.component';

export function LayoutManager({ 
    layoutMode,  
    renderConfig, 
    handleSaveConfig, 
    tableData} : LayoutManagerProps) {

    switch(layoutMode) {
        case 'config': { return (
            <ConfigLayout 
                config={renderConfig} 
                handleSaveConfig={handleSaveConfig}/>
        )}
        case 'dashboard': { return (
            <DashboardLayout 
                config={renderConfig}
                tableData={tableData}/>
        )}
        case 'viewer': { return (
            <ViewerLayout 
                config={renderConfig} 
                tableData={tableData}/>
        )}
        default : { return <div>Unknown layout selected</div>; }
    }
}