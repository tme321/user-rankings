import React, { useCallback, useRef } from 'react';
import './EditTableEntry.css';
import { EditTableEntryProps } from './EditTableEntry.props';

export function EditTableEntry({username, value, gotoUserEntry}: EditTableEntryProps) {
    const valueInputRef = useRef(null);

    const focusValue = useCallback(()=>{
        if(username===gotoUserEntry) {
            if(valueInputRef && valueInputRef.current) {
                (valueInputRef.current as any).focus();
            }
        }    
    },[username,gotoUserEntry,valueInputRef]);

    focusValue();
 
    return (
        <div className="entry-container">
            <div className="username">
                <input defaultValue={username}/>
            </div>
            <div className="value">
                <input ref={valueInputRef} defaultValue={value}/>
            </div>
        </div>
    );
}