import React from 'react';
import './RankingsHeader.css';
import { RankingsHeaderProps } from './RankingsHeader.props';
import { TitleImg } from '../TitleImg/TitleImg.component';
import { ColumnsHeader } from '../ColumnsHeader/ColumnsHeader.component';
import { TitleText } from '../TitleText/TitleText.component';

/**
 * @description If a headerUrl is passed render only it 
 * as the entire header.  Otherwise render a title header with
 * the chosen text or image url and column headers as the chosen
 * text.
 */
export function RankingsHeader(props: RankingsHeaderProps) {

    const headerLayout = ()=>{
        switch(props.selectedHeaderType) {
            case 'titleText': {
                return(<>
                    <TitleText text={props.titleText}/>
                    <ColumnsHeader 
                        category={props.category}
                        usersColumnText={props.usersColumnText}  
                        isColumnHeadersTop={props.isColumnHeadersTop}  
                        width={props.layoutWidth} />
                </>);
            }
            case 'titleUrl': {
                return(<>
                    <TitleImg titleUrl={props.titleUrl}/>
                    <ColumnsHeader 
                        category={props.category}
                        usersColumnText={props.usersColumnText} 
                        isColumnHeadersTop={props.isColumnHeadersTop}  
                        width={props.layoutWidth} />

                </>);
            } 
            case 'headerUrl' : {
                return(<TitleImg titleUrl={props.headerUrl}/>);
            }
        }
    }

    return (
        <header className="header">
            {
                headerLayout()
            } 
        </header>
    );
}
