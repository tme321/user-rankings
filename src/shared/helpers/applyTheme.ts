import { ColorsModel } from "../../Config/model/Colors.model";

/**
 * Apply a theme to the css variables that control the 
 * style of the application.
 * @param theme The colors to apply
 */
export function applyTheme(theme: ColorsModel) {
    const root = document.getElementById("root");

    if(root) {
        root.style.setProperty(
            "--backgroundColor", theme.background);
        root.style.setProperty(
            "--accentColor", theme.accent);
        root.style.setProperty(
            "--textColor", theme.text);
        root.style.setProperty(
            "--altTextColor", theme.altText);
        root.style.setProperty(
            "--linkColor", theme.link);
        root.style.setProperty(
            "--textOverlayColor", theme.textOverlay);
    }
}