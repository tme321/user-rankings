import React from 'react';
import './EditDataTable.css';
import { EditDataTableProps } from './EditDataTable.props';
import { EditTableEntry } from '../EditTableEntry/EditTableEntry.component';

export function EditDataTable({tableData, config, gotoUserEntry}: EditDataTableProps) {
    //const theme = useContext(ColorsContext);
    
    const entries = tableData.entries?.map((entry)=>(
        <EditTableEntry
            key={entry.username}
            {...entry}
            gotoUserEntry={gotoUserEntry} 
        />));

    return (
        <div className="edit-container scroll-bar">
            <form>
                <div className="entries">
                    <span>
                        <div className="columns-header">
                            <label>{config.usersColumnText}</label>
                        </div>
                        <div className="columns-header">
                            <label>{config.categoryText}</label>
                        </div>
                    </span>
                    {entries}
                </div>
            </form>
        </div>
    );
}
