/**
 * @description Render an image inside <h1> tags.
 * @param props The url of the image.
 */
export function TitleImg ({titleUrl}:{ titleUrl: string }){ 
    return (
    <h1>
        <img className="title-img" src={titleUrl} alt=""/>
    </h1>);
}
