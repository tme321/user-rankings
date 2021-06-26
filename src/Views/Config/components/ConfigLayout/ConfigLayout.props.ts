import { ConfigModel } from "../../../../Config/model/Config.model";

export type ConfigLayoutProps = { 
    config: ConfigModel; 
    handleSaveConfig: (config: ConfigModel)=>void ;
}