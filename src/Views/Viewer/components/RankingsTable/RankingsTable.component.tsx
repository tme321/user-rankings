import './RankingsTable.css';
import { DataState } from "../../../../shared/data/data.state";
import { RankingsEntry } from "../RankingsEntry/RankingsEntry.component";

/** 
 * @description A table of rankings entries.
 */
export function RankingsTable(props: { model: DataState }) {    
    return (
        <main className="entries">
            <ul>
                { 
                    props.model.entries?.map(entry=>
                        <RankingsEntry {...entry} key={entry.username}/>)
                }
            </ul>
        </main>
    );
}
