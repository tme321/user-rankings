export type RadioSelectGroupProps<SelectionType> = {
    title: string;
    groupName: string;
    items: RadioGroupItem<SelectionType>[];
    currentSelection: SelectionType;
    handleSelection: (selectedValue: SelectionType)=>void;
}

export type RadioGroupItem<SelectionType> = { 
    content: JSX.Element, 
    label: string, 
    selectionValue: SelectionType
};