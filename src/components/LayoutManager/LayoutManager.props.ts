import { ConfigModel } from "../../Config/model/Config.model";
import { DataState } from "../../shared/data/data.state";
import { ViewModes } from "../../shared/hooks/TwitchExtContext.hook";

export type LayoutManagerProps = { 
    layoutMode: ViewModes;
    renderConfig: ConfigModel;
    handleSaveConfig: (config: ConfigModel)=>void;
    tableData: DataState;
}