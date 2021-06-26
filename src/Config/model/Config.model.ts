import { HeaderModel } from "./Header.model";
import { ColorModesModel } from "./ColorModes.model";

export interface ConfigModel {
    dataUrl: string;
    selectedHeaderType: HeaderModel;
    usersColumnText: string;
    titleText?: string;
    titleUrl?: string;
    headerUrl?: string;
    categoryText: string;
    themes: ColorModesModel
}
