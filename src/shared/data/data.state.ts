export type DataEntry = { 
    username: string,
    value: string
};

type DataEntries = Array<DataEntry>;

export interface DataState {
    entries: DataEntries
}