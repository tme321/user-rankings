import { ConfigModel } from "../../../../Config/model/Config.model";
import { DataState } from "../../../../shared/data/data.state";

export type EditDataTableProps = { 
    tableData: DataState, 
    config: ConfigModel; 
};