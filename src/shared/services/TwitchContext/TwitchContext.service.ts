type ContextCallback = <C extends Partial<Twitch.ext.Context>>
    (context: C,changed: readonly (keyof C)[])=>void;

export function registerContextListener(callback: ContextCallback) {
    window.Twitch.ext.onContext(callback);
    
    /* Test theme context change */
    /*
    setTimeout(()=>{
        callback({ theme: 'light'},['theme'])
    },5000);
    setTimeout(()=>{
        callback({ theme: 'dark'},['theme'])
    },10000);
    */
}

