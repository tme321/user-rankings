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
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "inline-block", paddingRight: "2px"  }}>
                <input defaultValue={username}/>
            </div>
            <div style={{ display: "inline-block", paddingLeft: "2px" }}>
                <input ref={valueInputRef} defaultValue={value}/>
            </div>
        </div>
    );
}