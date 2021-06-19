import { ConfigState } from './config/config.state';
import { DataState } from "./shared/data/data.state";

export interface AppState { 
    data: DataState, 
    config: ConfigState
};
