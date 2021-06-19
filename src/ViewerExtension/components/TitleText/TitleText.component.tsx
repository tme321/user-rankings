import './TitleText.css';

/**
 * @description Display text inside <h1> tags.
 * @param text The text to display. 
 */
export function TitleText ({text = "untitled"}: { text?: string }) {  
    return (<h1 className="titleTextHeader">{text}</h1>); 
}
