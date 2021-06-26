import { RGBColor } from "react-color";

export function convertStringToRGBColor(color:string): RGBColor {
    const regexCSSrgba =  /rgba\((?<r>\d+),(?<g>\d+),(?<b>\d+),(?<a>\d+)\)/m;
    const colorsMatch = regexCSSrgba.exec(color);
    const rgbColor: RGBColor = { 
        r: Number.parseInt(colorsMatch?.groups?.r || '') || 241, 
        g: Number.parseInt(colorsMatch?.groups?.g || '') || 112, 
        b: Number.parseInt(colorsMatch?.groups?.b || '') || 19, 
        a: Number.parseInt(colorsMatch?.groups?.a || '') || 1
    }
    return rgbColor;
}

export function convertRGBColorToString(color:RGBColor): string {
    return `rgb(${color.r},${color.g},${color.b},${color.a})`;
}
