import React, { useContext } from 'react';
import { ColorsContext } from '../../Context/Colors.context';
import './Loading.css';

export function Loading() {
    const theme = useContext(ColorsContext);
    
    return (
        <div className="load-container indicator" 
            style={{ backgroundColor: theme.background, color: theme.text }}>
            <div className="loader">Loading...</div>
        </div>
    )
}

//