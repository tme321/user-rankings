import './Layout.css';
import { RankingsTable } from "../RankingsTable/RankingsTable.component";
import { RankingsHeader } from "../RankingsHeader/RankingsHeader.component";
import { RankingsHeaderProps } from "../RankingsHeader/RankingsHeader.props";
import { AppState } from '../../App.state';
import { useCallback, useEffect, useRef, useState } from 'react';

export function Layout(props: AppState) {
    const [isColumnHeadersTop, setColumnHeadersTop] = useState(false);

    const handleScrolling = (event:any) => { 
        if(!isColumnHeadersTop && event.target.scrollTop >= 130) {
            console.log("add class");
            setColumnHeadersTop(true);
        }
        else if(isColumnHeadersTop && event.target.scrollTop < 130) {
            console.log("remove class");
            setColumnHeadersTop(false);
        } 
    };

    /*
    const ref = useRef<HTMLHeadingElement>(null);
    
    useEffect(() => {
        console.log('width', ref.current ? ref.current.clientWidth : 0);
    }, [ref.current]);
    */

    const [layoutWidth, setLayoutWidth] = useState(0);
    const layoutDiv = useCallback(node => {
        if (node !== null) {
            console.log("width: ", node.clientWidth);
            setLayoutWidth(node.clientWidth);
        }
    }, []);
    

    const rhProps: RankingsHeaderProps = {
        isColumnHeadersTop: isColumnHeadersTop,
        category: props.data.category,
        titleText: props.config.titleText,
        titleUrl: props.config.titleUrl,
        headerUrl: props.config.headerUrl,
        layoutWidth: layoutWidth
    }

    return (
        <div className="layout" ref={layoutDiv} onScroll={handleScrolling}>
            <RankingsHeader {...rhProps}/>
            <RankingsTable model={props.data} />
        </div>);
}