import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

type TwitchAuthToken = 
{
    channelId:	string,
    clientId:	string,
    token:	string,
    userId:	string
};

/**
 * Helper class for authentication against an EBS service. Allows the storage of a token to be accessed across componenents. 
 */
export class Authentication{
    state: {
        token: string,
        opaque_id: string,
        user_id: string,
        isMod: boolean,
        role: string
    };

    constructor(token: string = "", opaque_id: string = ""){
        this.state={
            token,
            opaque_id,
            user_id:"",
            isMod:false,
            role:""
        }
    }

    // this does guarantee the user is a moderator- this is fairly simple to bypass - so pass the JWT and verify
    // server-side that this is true. This, however, allows you to render client-side UI for users without holding on a backend to verify the JWT. 
    isModerator(){
        return this.state.isMod
    }

    // similar to mod status, this isn't always verifyable, so have your backend verify before proceeding. 
    hasSharedId(){
        return !!this.state.user_id
    }

    getUserId(){
        return this.state.user_id
    }

    // set the token in the Authentication componenent state
    setToken(token: string,opaque_id: string){
        let mod = false;
        let role = "";
        let user_id = "";
        
        try {
            let decoded: JwtPayload & { roll: string, user_id: string } = jwt.decode(token) as JwtPayload  & { roll: string, user_id: string };
            
            if(decoded?.role === 'broadcaster' || decoded.role === 'moderator'){
                mod = true
            }

            user_id = decoded.user_id
            role = decoded.role
        } catch (e) {
            console.log('Invalid token.')
            token=''
            opaque_id=''
        }

        this.state={
            token,
            opaque_id,
            isMod:mod,
            user_id,
            role
        }
    }

    // checks to ensure there is a valid token in the state
    isAuthenticated(){
        if(this.state.token && this.state.opaque_id){
            return true
        }else{
            return false
        }
    }

    /**
     * Makes a call against a given endpoint using a specific method. 
     * 
     * Returns a Promise with the Request() object per fetch documentation.
     * 
     */

    makeCall(url: string, method="GET"){
        return new Promise((resolve, reject)=>{
            if(this.isAuthenticated()){
                let headers={
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${this.state.token}`
                }
    
                fetch(url,
                    {
                        method,
                        headers,
                    })
                    .then(response=>resolve(response))
                    .catch(e=>reject(e))
            }else{
                reject('Unauthorized')
            }
        })
    }
}