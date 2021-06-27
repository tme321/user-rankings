export type TabSelectorProps = {
    color: string;
    toggledColor: string;
    text: string;
    isSelected: boolean;
    handleSelected: (tabName:string)=> void;
}
