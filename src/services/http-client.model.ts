import { DataState } from '../shared/data/data.state';

export interface HttpClient {
    get:(url: string)=>Promise<void | DataState>,
    put:(url: string, data: DataState)=>Promise<unknown>;
}