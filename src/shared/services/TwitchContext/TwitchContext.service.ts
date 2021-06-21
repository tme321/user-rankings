export type TwitchContextCallback<C,K extends keyof C> = (context: C,changed: readonly K[])=>void;
export type TwitchContextHandlerMap<C,K extends keyof C> = Record<K,(val:NonNullable<C[K]>)=>void>;

function isNotNull<T>(val: T | null): val is NonNullable<T> {
    if (val === null || val === undefined ) {
      return false;
    }
    return true;
}

export const handleContextChanges =
    <C, K extends keyof C>
    (handlers: TwitchContextHandlerMap<C,K>): TwitchContextCallback<C,K> => 
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

export function registerContextHandlers
    <C extends Partial<Twitch.ext.Context>,
     K extends keyof C>
        (handlers: TwitchContextHandlerMap<C,K>) {
            const contextCallback = handleContextChanges(handlers);
            // small hack because the typings suck
            window.Twitch.ext.onContext(contextCallback as any);

    /* testing code */
    /*
    setTimeout(() => {
        contextCallback({ theme: "light"} as any,['theme'] as any);
    }, 5000);

    setTimeout(() => {
        contextCallback({ theme: "dark"} as any,['theme'] as any);
    }, 10000);

    setTimeout(() => {
        contextCallback({ mode: "config"} as any,['mode'] as any);
    }, 15000);

    setTimeout(() => {
        contextCallback({ mode: "dashboard"} as any,['mode'] as any);
    }, 20000);

    setTimeout(() => {
        contextCallback({ mode: "viewer"} as any,['mode'] as any);
    }, 25000);
    */

}

