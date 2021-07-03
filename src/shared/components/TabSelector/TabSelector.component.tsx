import React from "react";
import './TabSelector.css';
import { TabSelectorProps } from "./TabSelector.props";

export function TabSelector({ text, isSelected, handleSelected }: TabSelectorProps) {
    const handleClick = ()=>{ handleSelected(text); };

    return (
        <button  className={isSelected?"tab selected":"tab"}
            onClick={handleClick}>
            {text}
        </button>
    );
}