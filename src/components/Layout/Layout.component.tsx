import './Layout.css';
import { RankingsTable } from "../RankingsTable/RankingsTable.component";
import { RankingsHeader } from '../RankingsHeader/RankingsHeader.component';
import { AppState } from '../../App.state';

export function Layout(props: AppState) {
    return (
        <div className="layout">
            <RankingsHeader {...props}/>
            <RankingsTable model={props.data} />
        </div>);
}