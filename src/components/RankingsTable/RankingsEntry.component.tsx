import './RankingsEntry.css';
import { DataEntry } from "../../data/data.state";

export function RankingsEntry(props: DataEntry) {
    return (
        <li className="entry">
            <span>{props.username}</span>
            <span>{props.value}</span>
        </li>)
}