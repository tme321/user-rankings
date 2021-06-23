import React, { useContext } from 'react';
import './ColumnsHeader.css';
import { ColorsContext } from '../../../../Context/Colors.context';

/**
 * @description The table entry column headers renderer. 
 */
export function ColumnsHeader ({ category , isColumnHeadersTop, width }: { 
    category: string, 
    isColumnHeadersTop: boolean, 
    width: number
}) {
    const theme = useContext(ColorsContext);
    
    return (
        <h2 className={
                isColumnHeadersTop?
                    "categories-header fixed" : 
                    "categories-header"
                }
            style={{ width: width, backgroundColor: theme.background }}>
            <div>
                <span>User Name</span>
                <span>{category}</span>
            </div>
        </h2>);
}
