import { useEffect, useState } from "react";
import { decode } from 'jsonwebtoken';
import { DecodedTwitchToken } from "../models/DecodedTwitchToken.model";
import { AuthState } from "../state/AuthState.state";
import { modCheck } from "../helpers/modCheck";
import { defaultAuthToken } from "../defaults/authToken";

export function useTwitchExtAuth(): AuthState {
    const twitchExt = window.Twitch.ext;
    const [authState,setAuthState] = useState<AuthState>({
        token: defaultAuthToken,
        isMod: false,
        isAuthed: false
    });
    
    useEffect(()=>{
        twitchExt.onAuthorized((auth)=>{
            try {
                const decodedToken: DecodedTwitchToken = 
                    decode(auth.token) as DecodedTwitchToken;
                
                if(decodedToken) {
                    setAuthState({
                        token: auth,
                        isMod: modCheck(decodedToken.role),
                        isAuthed: !!auth.token && !!decodedToken.opaque_user_id
                    });
                }
            }
            catch {
                setAuthState({
                    token: defaultAuthToken,
                    isMod: false,
                    isAuthed: false
                });
            }
        })
    },[]);

    return authState;
}