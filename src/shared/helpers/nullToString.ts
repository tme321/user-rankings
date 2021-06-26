/**
 * Accept a value that might be a string or null or undefined and
 * convert it to a valid string.
 * @param maybeNull The possibly null or undefined string
 * @returns The original string if defined, if not the empty string.
 */
export function nullToString(maybeNull?: string): string {
    return (maybeNull === null || maybeNull === undefined)? '' : maybeNull;
}
