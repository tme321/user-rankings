import { ColorsModel } from "../../../../Config/model/Colors.model";

export type ThemeConfigEditorProps = { 
    title: string;
    theme: ColorsModel; 
    colorChangeHandlers: {
        background: (color:string)=>void,
        accent: (color:string)=>void,
        text: (color:string)=>void,
        altText: (color:string)=>void,
    };
}
