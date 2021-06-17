export interface RankingsHeaderProps {
    isColumnHeadersTop: boolean;
    category: string;
    titleText?: string;
    titleUrl?: string;
    headerUrl?: string;
    layoutWidth: number;
    setTitleHeight: (height: number)=>void;
}
