import './RankingsTable.css';
import { DataState } from "../../data/data.state";
import { RankingsEntry } from "./RankingsEntry.component";

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
