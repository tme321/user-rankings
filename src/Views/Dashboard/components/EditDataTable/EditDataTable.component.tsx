import React, { useContext } from 'react';
import './EditDataTable.css';
import { EditDataTableProps } from './EditDataTable.props';
import { ColorsContext } from '../../../../Context/Colors.context';
import { ColoredScrollbars } from '../../../../shared/components/ColoredScrollbar/ColoredScrollbar.component';

export function EditDataTable({tableData, config}: EditDataTableProps) {
    const theme = useContext(ColorsContext);
    const entries = tableData.entries?.map((entry,index)=>(
        <div style={{ display: "flex", justifyContent: "space-evenly" }} key={entry.username}>
            <input defaultValue={entry.username}/>
            <input defaultValue={entry.value}/>
        </div>));

    return (
        <ColoredScrollbars 
            style={{ height: 500, color: theme.text, background: theme.background }} 
            thumbColor={theme.accent} 
            onScroll={()=>{}}>
            <form>
                <div className="entries">
                    <span style={{ 
                        display: "flex", 
                        justifyContent: "space-evenly",
                        fontSize: "0.5em" }}>
                        <label>{config.usersColumnText}</label>
                        <label>{config.categoryText}</label>
                    </span>
                    {entries}
                </div>
            </form>
        </ColoredScrollbars>
    );
}