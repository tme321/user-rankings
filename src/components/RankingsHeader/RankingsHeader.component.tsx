import './RankingsHeader.css';
import { RankingsHeaderProps } from './RankingsHeader.props';

const TitleImg = (url:string) => (
    <h1>
        <img className="title-img" src={url} alt=""/>
    </h1>);

const TitleText = (txt:string) => (<h1>{txt}</h1>);

const TitleHeader = (props: RankingsHeaderProps) => (
    <>
        {
            props.titleUrl?
                TitleImg(props.titleUrl):
                TitleText(props.titleText? props.titleText: "untitled")
        }   
    </>);

const SubHeader = (category: string, isColumnHeadersTop: boolean, width: number)=>(
    <h2 className={isColumnHeadersTop?"categories-header fixed" : "categories-header"}
        style={ {width: width} }>
        <div>
            <span>User Name</span>
            <span>{category}</span>
        </div>
    </h2>);

const FullHeader = (props: RankingsHeaderProps) => (
    <>
        {TitleHeader(props)}
        {SubHeader(props.category, props.isColumnHeadersTop, props.layoutWidth)}
    </>);

export function RankingsHeader(props: RankingsHeaderProps) {
    return (
        <header className="header"> 
            {
                props.headerUrl ?
                    TitleImg(props.headerUrl): 
                    FullHeader(props)
            }
        </header>
    );
}

            /*
            {
                props.config.headerUrl ?
                    TitleImg(props.config.headerUrl): 
                    FullHeader(props.config, props.data.category)
            }
            */


