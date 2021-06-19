import './RankingsEntry.css';
import { DataEntry } from "../../../shared/data/data.state";

/** 
 * @description A single table entry of the rankings.
 */
export function RankingsEntry(props: DataEntry) {
    return (
        <li className="entry">
            <span>{props.username}</span>
            <span>{props.value}</span>
        </li>)
}