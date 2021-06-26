import React, { useContext } from 'react';
import './ColumnsHeader.css';
import { ColorsContext } from '../../../../Context/Colors.context';
import { ColumnHeaderProps } from './ColumnsHeader.props';

/**
 * @description The table entry column headers renderer. 
 */
export function ColumnsHeader ({ 
    category,
    usersColumnText, 
    isColumnHeadersTop, 
    width }: ColumnHeaderProps) {

    const theme = useContext(ColorsContext);
    
    return (
        <h2 className={
                isColumnHeadersTop?
                    "categories-header fixed" : 
                    "categories-header"
                }
            style={{ width: width, backgroundColor: theme.background }}>
            <div>
                <span>{usersColumnText}</span>
                <span>{category}</span>
            </div>
        </h2>);
}
