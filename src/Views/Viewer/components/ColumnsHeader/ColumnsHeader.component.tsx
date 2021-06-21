import './ColumnsHeader.css';

/**
 * @description The table entry column headers renderer. 
 */
export function ColumnsHeader ({ category , isColumnHeadersTop, width }: { 
    category: string, 
    isColumnHeadersTop: boolean, 
    width: number
}) {
    return (
        <h2 className={
                isColumnHeadersTop?
                    "categories-header fixed" : 
                    "categories-header"
                }
            style={ {width: width} }>
            <div>
                <span>User Name</span>
                <span>{category}</span>
            </div>
        </h2>);
}
