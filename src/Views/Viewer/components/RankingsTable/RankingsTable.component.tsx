import React from 'react';
import './RankingsTable.css';
import { RankingsEntry } from "../RankingsEntry/RankingsEntry.component";
import { RankingsTableProps } from './RankingsTable.props';

/** 
 * @description A table of rankings entries.
 */
export function RankingsTable({ tableData }: RankingsTableProps) {    
    const entries = tableData.entries?.map((entry,index)=>
        <RankingsEntry {...entry} 
            key={entry.username}/>);

    return (
        <main>
            <ul className="entries">
                {entries}
            </ul>
        </main>
    );
}
