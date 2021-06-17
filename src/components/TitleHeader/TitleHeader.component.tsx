import { useEffect } from "react";
import useMeasure from 'react-use-measure'
import { RankingsHeaderProps } from "../RankingsHeader/RankingsHeader.props";
import { TitleImg } from "../TitleImg/TitleImg.component";
import { TitleText } from "../TitleText/TitleText.component";


/**
 * @description Render the title text or image and track
 * the height to report back to the parent container.
 */
export function TitleHeader(props: RankingsHeaderProps) {

    /**
     * measure the height of the title height
     * for hit boxing the column headers 
     */

    const [titleDiv, bounds] = useMeasure();
    const setTitleHeight = props.setTitleHeight;
    
    useEffect(()=>{
        setTitleHeight(bounds.height)
    },[bounds.height, setTitleHeight]);
    
    return (
        <div ref={titleDiv}>
            {
                props.titleUrl?
                    <TitleImg titleUrl={props.titleUrl}/>:
                    <TitleText text={props.titleText}/>
            } 
        </div>
    );
}