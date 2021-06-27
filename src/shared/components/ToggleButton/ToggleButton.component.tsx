import React, { useState } from "react";
import { ToggleButtonProps } from "./ToggleButton.props";

export function ToggleButton({ color, toggledColor, text }: ToggleButtonProps) {

    const [isToggled, setToggled] = useState(false);

    const [buttonColor, setButtonColor] = useState({
        color: color,
    });

    const handleMouseEnter = ()=>{
        if(!isToggled) {
            setButtonColor({ color: toggledColor });
        }
    };

    const handleDataMouseLeave = ()=>{
        if(!isToggled) {
            setButtonColor({ color: color });
        }
    };

    const handleClick = ()=>{
        isToggled?
            setButtonColor({ color: color }):
            setButtonColor({ color: toggledColor });
        setToggled(!isToggled);
    }

    return (
        <a  style={buttonColor}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleDataMouseLeave}>
            {text}
        </a>
    );
}