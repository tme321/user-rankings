import { HeaderModel } from "../../../../Config/model/Header.model";

export type RankingsHeaderProps = {
    isColumnHeadersTop: boolean;
    category: string;
    usersColumnText: string;
    titleText: string;
    titleUrl: string;
    headerUrl: string;
    layoutWidth: number;
    selectedHeaderType: HeaderModel;
    setTitleHeight: (height: number)=>void;
}
