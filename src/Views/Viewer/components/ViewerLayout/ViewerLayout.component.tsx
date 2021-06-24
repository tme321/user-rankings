import React, { useCallback, useContext, useState } from 'react';
import './ViewerLayout.css';
import { RankingsTable } from "../RankingsTable/RankingsTable.component";
import { RankingsHeader } from "../RankingsHeader/RankingsHeader.component";
import { RankingsHeaderProps } from "../RankingsHeader/RankingsHeader.props";
import { AppState } from '../../../../App.state';
import { ColoredScrollbars } from '../../../../shared/components/ColoredScrollbar/ColoredScrollbar.component';
import { ColorsContext } from '../../../../Context/Colors.context';

/**
 * @description The viewer layout component is responsible for orchestrating the
 * layout of the entire extension in viewer mode.
 * @param props The entire AppState is passed to the layout to divide
 * between the headers and the content body.
 */
export function ViewerLayout(props: AppState) {
    /**
     * Track when the column headers should become sticky
     * to the top of the view or should attach themselves to
     * the bottom of the title box.
     */

    const [isColumnHeadersTop, setColumnHeadersTop] = useState(false);
    const [titleHeight, setTitleHeight] = useState(1000);

    /**
     * Hit testing for the column headers.
     */
    const handleScrolling = (event: any) => { 
        if(!isColumnHeadersTop && event.target.scrollTop >= titleHeight) {
            setColumnHeadersTop(true);
        }
        else if(isColumnHeadersTop && event.target.scrollTop < titleHeight) {
            setColumnHeadersTop(false);
        } 
    };

    /**
     * Determine the width to use for the column headers when
     * they transition to fixed position. 
     */

    const [layoutWidth, setLayoutWidth] = useState(1100);
    const layoutDiv = useCallback(node => {
        if (node !== null) {
            console.log("width: ", node.clientWidth);
            setLayoutWidth(node.clientWidth);
        }
    }, []);

    /**
     * Make props for the header 
     */

    const rhProps: RankingsHeaderProps = {
        isColumnHeadersTop: isColumnHeadersTop,
        category: props.data.category,
        titleText: 'Tears List',
        //titleUrl: props.config.titleUrl,
        //headerUrl: props.config.headerUrl,
        layoutWidth: layoutWidth,
        setTitleHeight: setTitleHeight
    }

    const theme = useContext(ColorsContext);

    return (
        <ColoredScrollbars 
            style={{ height: 500, color: theme.text, background: theme.background }} 
            thumbColor={theme.accent} 
            onScroll={handleScrolling}>

            <div ref={layoutDiv} 
                style={{  }}>
                <RankingsHeader {...rhProps}/>
                <RankingsTable model={props.data} />
            </div>

        </ColoredScrollbars>
    );
}
