export type TwitchContextCallback<C,K extends keyof C> = (context: C,changed: readonly K[])=>void;

/**
 * Extract the possible values of a twitch context entry
 * and allow a context key to be mapped to a callback 
 * whose parameter is the extracted possible values.
 */
export type TwitchContextHandlerMap<C> =
{ [K in keyof C]: <V extends NonNullable<C[K]>>(val:V)=>void }

function isNotNull<T>(val: T | null): val is NonNullable<T> {
    if (val === null || val === undefined ) {
      return false;
    }
    return true;
}

export const handleTwitchExtContextChanges =
    <C, K extends keyof C>
    (handlers: TwitchContextHandlerMap<C>): TwitchContextCallback<C,K> => 
        (context, changed) => {
            changed.forEach(key=>{
                if(handlers[key]) {
                    const val = context[key];
                    if(isNotNull(val)) {
                        handlers[key](val);
                    }
                }
            });
        }

export function registerTwitchExtContextHandlers
    <C extends Partial<Twitch.ext.Context>>
        (handlers: TwitchContextHandlerMap<C>) {
            const contextCallback = handleTwitchExtContextChanges(handlers);
            // small hack because the typings suck
            window.Twitch.ext.onContext(contextCallback as any);
}

export function registerTwitchExtConfigHandler(callback:()=>void) {
    window.Twitch.ext.configuration.onChanged(callback);
}

export function registerTwitchExtErrorHandler(errorCallback:(error: any)=>void) {
    window.Twitch.ext.onError(errorCallback);
}