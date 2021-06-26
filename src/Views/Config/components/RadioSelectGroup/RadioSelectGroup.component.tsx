import React from 'react';
import './RadioSelectGroup.css';
import { RadioSelectGroupProps } from "./RadioSelectGroup.props";

export function RadioSelectGroup<SelectionType>({ 
    title, 
    groupName, 
    items, 
    currentSelection, handleSelection }: RadioSelectGroupProps<SelectionType>) {

    const handleSelect = (selectedValue: SelectionType)=> ()=> {
        handleSelection(selectedValue);
    }

    const radioButtons = items.map((item,index)=>(
        <div key={index}>
            <input 
                type="radio" 
                id={`rsw-${index}`} 
                name={groupName} 
                checked={item.selectionValue === currentSelection}
                onChange={handleSelect(item.selectionValue)}/>
            <label htmlFor={`rsw-${index}`}>{item.label}</label>
        </div>
    ));

    const contents = items.map((item,)=>(<div>{item.content}</div>));

    return (
        <div>
            <h2 className="title-container"><span>{title}</span></h2>
            <div className="radio-group-container">
            
                <div className="radio-buttons-container">
                    {radioButtons}
                </div>
                <div className="contents-container">
                    {contents}
                </div>
            </div>
        </div>
    );
}
