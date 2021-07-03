import React from 'react';
import './ColumnsHeader.css';
import { ColumnHeaderProps } from './ColumnsHeader.props';

/**
 * @description The table entry column headers renderer. 
 */
export function ColumnsHeader ({ 
    category,
    usersColumnText, 
    isColumnHeadersTop, 
    width }: ColumnHeaderProps) {

    return (
        <h2 className={
                isColumnHeadersTop?
                    "categories-header fixed" :
                    "categories-header"
                }
            >
            <div>
                <span>{usersColumnText}</span>
                <span>{category}</span>
            </div>
        </h2>);
}
