import React, { useEffect, useState } from "react";
import './TabSelector.css';
import { TabSelectorProps } from "./TabSelector.props";

export function TabSelector({ color, toggledColor, text, isSelected, handleSelected }: TabSelectorProps) {

    const [buttonStyle, setButtonStyle] = useState({
        color: color,
    });

    const handleMouseEnter = ()=>{
        if(!isSelected) {
            setButtonStyle({ color: toggledColor });
        }
    };

    const handleDataMouseLeave = ()=>{
        if(!isSelected) {
            setButtonStyle({ color: color });
        }
    };

    useEffect(()=>{
        isSelected?
            setButtonStyle({ color: toggledColor }):
            setButtonStyle({ color: color });
    },[isSelected]);

    const handleClick = ()=>{ handleSelected(text); };

    return (
        <a  className="tab"
            style={buttonStyle}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleDataMouseLeave}>
            {text}
        </a>
    );
}