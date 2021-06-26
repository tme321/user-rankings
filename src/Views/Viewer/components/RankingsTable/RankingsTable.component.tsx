import React, { useContext } from 'react';
import './RankingsTable.css';
import { RankingsEntry } from "../RankingsEntry/RankingsEntry.component";
import { ColorsContext } from '../../../../Context/Colors.context';
import { RankingsTableProps } from './RankingsTable.props';

/** 
 * @description A table of rankings entries.
 */
export function RankingsTable({ tableData }: RankingsTableProps) {    

    const theme = useContext(ColorsContext);

    const entries = tableData.entries?.map((entry,index)=>
        <RankingsEntry {...entry} 
            key={entry.username} 
            style={{ color:`${index%2?theme.altText:theme.text}` }}/>);

    return (
        <main>
            <ul className="entries">
                {entries}
            </ul>
        </main>
    );
}
