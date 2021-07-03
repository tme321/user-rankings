import { ViewModes } from "../hooks/TwitchExtContext.hook";

export function parseQueryParams() {
    const searchParams = new URLSearchParams(window.location.search);
    const queryParams: { [name:string]: string } & { mode: ViewModes } = { mode: "viewer" };
    console.log(searchParams.entries());

    for (const [key, value] of searchParams.entries()) {
        queryParams[key] = value;
    }

    return queryParams;
}