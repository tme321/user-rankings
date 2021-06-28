import React, { useContext } from 'react';
import './EditDataTable.css';
import { EditDataTableProps } from './EditDataTable.props';
import { ColorsContext } from '../../../../Context/Colors.context';
import { ColoredScrollbars } from '../../../../shared/components/ColoredScrollbar/ColoredScrollbar.component';
import { EditTableEntry } from '../EditTableEntry/EditTableEntry.component';

export function EditDataTable({tableData, config, gotoUserEntry}: EditDataTableProps) {
    const theme = useContext(ColorsContext);
    
    const entries = tableData.entries?.map((entry)=>(
        <EditTableEntry
            key={entry.username}
            {...entry}
            gotoUserEntry={gotoUserEntry} 
        />));

    return (
        <ColoredScrollbars 
            style={{ height: 500, color: theme.text, background: theme.background }} 
            thumbColor={theme.accent} 
            onScroll={()=>{}}>
            <form>
                <div className="entries">
                    <span style={{ 
                        display: "flex", 
                        justifyContent: "center",
                        fontSize: "1em" }}>
                        <div style={{ 
                            width: "165px",
                            textAlign: "center",
                            display: "inline-block", 
                            paddingRight: "2px"  }}>
                            <label style={{ }}>{config.usersColumnText}</label>
                        </div>
                        <div style={{ 
                            width: "165px",
                            textAlign: "center",
                            display: "inline-block", 
                            paddingLeft: "2px"  }}>
                            <label style={{  }}>{config.categoryText}</label>
                        </div>
                    </span>
                    {entries}
                </div>
            </form>
        </ColoredScrollbars>
    );
}
