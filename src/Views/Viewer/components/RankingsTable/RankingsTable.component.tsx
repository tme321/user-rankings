import React, { useContext } from 'react';
import './RankingsTable.css';
import { DataState } from "../../../../shared/data/data.state";
import { RankingsEntry } from "../RankingsEntry/RankingsEntry.component";
import { ColorsContext } from '../../../../Context/Colors.context';

/** 
 * @description A table of rankings entries.
 */
export function RankingsTable(props: { model: DataState }) {    

    const theme = useContext(ColorsContext);

    const entries = props.model.entries?.map((entry,index)=>
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
