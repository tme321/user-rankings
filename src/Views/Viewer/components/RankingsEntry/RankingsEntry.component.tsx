import React from 'react';
import './RankingsEntry.css';
import { RankingsEntryProps } from './RankingsEntry.props';

/** 
 * @description A single table entry of the rankings.
 */
export function RankingsEntry({username, value }: RankingsEntryProps) {
    return (
        <li className="entry">
            <span>{username}</span>
            <span>{value}</span>
        </li>)
}