import { ConfigState } from './config/config.state';
import { DataState } from "./data/data.state";

export interface AppState { 
    data: DataState, 
    config: ConfigState 
};
