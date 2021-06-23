import React, { CSSProperties, useContext } from 'react';
import './RankingsEntry.css';
import { DataEntry } from "../../../../shared/data/data.state";
import { ColorsContext } from '../../../../Context/Colors.context';

/** 
 * @description A single table entry of the rankings.
 */
export function RankingsEntry(props: DataEntry & { style: CSSProperties }) {
    const theme = useContext(ColorsContext);
    return (
        <li className="entry" 
            style={{ ...props.style, borderColor: theme.acccent }}>
            <span>{props.username}</span>
            <span>{props.value}</span>
        </li>)
}