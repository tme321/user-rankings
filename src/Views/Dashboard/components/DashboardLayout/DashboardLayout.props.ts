import { ConfigModel } from "../../../../Config/model/Config.model";
import { DataState } from "../../../../shared/data/data.state";

export type DashboardLayoutProps = {
    tableData: DataState;
    config: ConfigModel;
}