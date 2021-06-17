import './RankingsHeader.css';
import { RankingsHeaderProps } from './RankingsHeader.props';
import { TitleHeader } from '../TitleHeader/TitleHeader.component';
import { TitleImg } from '../TitleImg/TitleImg.component';
import { ColumnsHeader } from '../ColumnsHeader/ColumnsHeader.component';

const FullHeader = (props: RankingsHeaderProps) => (
    <>
        <TitleHeader {...props}/>
        <ColumnsHeader 
            category={props.category} 
            isColumnHeadersTop={props.isColumnHeadersTop}  
            width={props.layoutWidth} />
    </>);

/**
 * @description If a headerUrl is passed render only it 
 * as the entire header.  Otherwise render a title header with
 * the chosen text or image url and column headers as the chosen
 * text.
 */
export function RankingsHeader(props: RankingsHeaderProps) {
    return (
        <header className="header"> 
            {
                props.headerUrl ?
                    <TitleImg titleUrl={props.headerUrl}/>: 
                    <FullHeader {...props}/>
            }
        </header>
    );
}
