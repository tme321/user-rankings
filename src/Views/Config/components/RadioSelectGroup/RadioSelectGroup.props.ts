export interface RadioSelectGroupProps<SelectionType> {
    title: string;
    groupName: string;
    items: { content: JSX.Element, label: string, selectionValue: SelectionType}[];
    currentSelection: SelectionType;
    handleSelection: (selectedValue: SelectionType)=>void;
}
