import './RankingsHeader.css';
import { AppState } from '../../App.state';
import { ConfigState } from '../../config/config.state';

const TitleImg = (url:string) => (<h1><img className="title-img" src={url}/></h1>);
const TitleText = (txt:string) => (<h1>{txt}</h1>);

const TitleHeader = (config: ConfigState) => (
    <>
        {
            config.titleUrl?
                TitleImg(config.titleUrl):
                TitleText(config.titleText?config.titleText:"No Title")
        }   
    </>);

const SubHeader = (category: string)=>(
    <h2>
        <span>User Name</span>
        <span>{category}</span>
    </h2>);

const FullHeader = (config: ConfigState, category: string) => (
    <>
        {TitleHeader(config)}
        {SubHeader(category)}
    </>);

export function RankingsHeader(props: AppState) {
    return (
        <header className="header">
            {
                props.config.headerUrl ?
                    TitleImg(props.config.headerUrl): 
                    FullHeader(props.config, props.data.category)
            }
        </header>
    );
}

