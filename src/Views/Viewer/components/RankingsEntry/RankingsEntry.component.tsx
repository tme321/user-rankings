import React, { CSSProperties, useContext } from 'react';
import './RankingsEntry.css';
import { ColorsContext } from '../../../../Context/Colors.context';
import { RankingsEntryProps } from './RankingsEntry.props';

/** 
 * @description A single table entry of the rankings.
 */
export function RankingsEntry({username, value, style}: RankingsEntryProps) {
    const theme = useContext(ColorsContext);
    return (
        <li className="entry" 
            style={{ ...style, borderColor: theme.accent }}>
            <span>{username}</span>
            <span>{value}</span>
        </li>)
}