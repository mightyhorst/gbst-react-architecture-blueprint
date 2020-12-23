import { createRef, useRef } from 'react';
import {
    CLIENT_ID,
    CLIENT_SECRET,
    TOKEN_URI,
    AUTH_URI,
    REDIRECT_URI,
    SCOPES,
} from './auth.config';
import {  
    LoginStatus 
} from './auth.models';
import axios from 'axios'

import ClientOAuth2 from 'client-oauth2';

const jwt = require('jsonwebtoken');


let refreshTokenTimeOut = null;
let loginURL = '/login';

class AuthService{

    constructor(){
        this.composerOauth = new ClientOAuth2({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            accessTokenUri: TOKEN_URI,
            authorizationUri: AUTH_URI,
            redirectUri: REDIRECT_URI,
            scopes: SCOPES,
          });
    }

    async login(username, password){
        
        let user;
        try{
            user = await this.composerOauth.owner.getToken(username, password);
            console.log({user});
            return user; 
        } 
        catch(loginErr){
            throw loginErr; 
        }
    } 

    async logout (){
        
        try
        {
            await axios({
                url : "/oauth/logout",
                method : "POST"
            })

            return true;
        }
        catch(err)
        {
            throw err;
        }
    } 

    isAuthenticated(){
        
    } 

    async getAccessToken(){
        
    } 

    async getAccessToken(){
        
    } 

    getUserId(){
        
    } 

    getUsername(){
        
    } 

    setLoginURL(){
        
    }

}

const authService = createRef();
export function withAuthService(forceNew = false){
    if(!authService.current || forceNew) authService.current = new AuthService();  
    return authService.current; 
}
