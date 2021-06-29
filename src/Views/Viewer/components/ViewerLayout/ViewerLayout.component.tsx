import React, { useCallback, useContext, useEffect, useRef, useState, UIEvent } from 'react';
import './ViewerLayout.css';
import { RankingsTable } from "../RankingsTable/RankingsTable.component";
import { RankingsHeader } from "../RankingsHeader/RankingsHeader.component";
import { RankingsHeaderProps } from "../RankingsHeader/RankingsHeader.props";
import { ColorsContext } from '../../../../Context/Colors.context';
import { ViewerLayoutProps } from './ViewerLayout.props';
import { nullToString } from '../../../../shared/helpers/nullToString';

/**
 * @description The viewer layout component is responsible for orchestrating the
 * layout of the entire extension in viewer mode.
 * @param props The entire AppState is passed to the layout to divide
 * between the headers and the content body.
 */
export function ViewerLayout({config, tableData}: ViewerLayoutProps) {
    /**
     * Track when the column headers should become sticky
     * to the top of the view or should attach themselves to
     * the bottom of the title box.
     */
    const [isColumnHeadersTop, setColumnHeadersTop] = useState(false);
    const [titleHeight, setTitleHeight] = useState(50);

    /**
     * Hit testing for the column headers.
     */
    const handleScrolling = (event: UIEvent<HTMLDivElement>) => { 
        if(!isColumnHeadersTop && 
            (event.target as HTMLDivElement).scrollTop >= titleHeight) {
            setColumnHeadersTop(true);
        }
        else if(isColumnHeadersTop && 
            (event.target as HTMLDivElement).scrollTop < titleHeight) {
            setColumnHeadersTop(false);
        } 
    };

    /**
     * Determine the width to use for the column headers when
     * they transition to fixed position. 
     */

    //const [layoutWidth, setLayoutWidth] = useState(300);
   
    /**
     * Make props for the header 
     */
    const rhProps: RankingsHeaderProps = {
        isColumnHeadersTop: isColumnHeadersTop,
        category: config.categoryText,
        usersColumnText: config.usersColumnText,
        titleText: nullToString(config.titleText),
        titleUrl: nullToString(config.titleUrl),
        headerUrl: nullToString(config.headerUrl),
        layoutWidth: 300, //layoutWidth,
        selectedHeaderType: config.selectedHeaderType,        
        setTitleHeight: setTitleHeight
    }

    const theme = useContext(ColorsContext);

    const viewContainer = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(viewContainer) {
            viewContainer.current?.style.setProperty(
                "--scrollbarBG", theme.background)
            viewContainer.current?.style.setProperty(
                "--thumbBG", theme.accent)
        }
    },[viewContainer, theme]);

    return (
        <div className="view-container"
            ref={viewContainer}
            onScroll={handleScrolling}
            style={{ 
                color: theme.text, 
                background: theme.background,
            }}>
            <div  
                style={{
                    overflow: "hidden" 
                }}>
                <RankingsHeader {...rhProps}/>
                <RankingsTable tableData={tableData} />
            </div>
        </div>
        /*</div>*/
    );
}

/*
        <ColoredScrollbars 
            style={{ 
                height: "500px",
                width: "320px", 
                overflowX: "hidden",
                display: "block"
            }} 
            thumbColor={theme.accent} 
            onScroll={handleScrolling}>

        </ColoredScrollbars>


*/