import { DataEntry } from "../../../../shared/data/data.state";

export type EditTableEntryProps = DataEntry & {
    gotoUserEntry: string;
};