import { DataState } from '../data/data.state';
import { HttpClient } from './http-client.model';
import axios from "axios";

export class HttpClientService implements HttpClient {
    
    async get(url: string) {
        return axios.get<DataState>(url)
            .then(response=>response.data)
            .catch(error=> {
                console.log(error);
            }); 
    }

    async put(url: string, data: DataState) {
        return axios.post(url, data)
            .catch(error=> {
                console.log(error)
            });
    } 
}