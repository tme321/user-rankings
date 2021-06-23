import { CSSProperties } from "react";

export interface ColoredScrollbarProps {
    readonly style: CSSProperties;
    readonly onScroll: (event: any)=>void;
    //readonly thumbStyle: CSSProperties;
    thumbColor: string;
}
