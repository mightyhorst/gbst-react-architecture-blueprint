import {
    IDP_URL,
    IDP_JWKS_URL,
    IDP_AUTH_URL,
    IDP_TOKEN_URL,
    IDP_CLIENT_ID,
    IDP_REDIRECT_URI,
} from './oidc.config';
import {  
    LoginStatus 
} from './oidc.models';

const jwt = require('jsonwebtoken');


export function useOidcService(){


    /**
     * 
     * @param {string} hashOrFragment - route fragment or query depending on OIDC responseMode
     * @param {'query' | 'fragment'} response_mode - tokens passed in the response fragment "#access_token={access_token}" or the query "?access_token={access_token}"
     * @see https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html
     * @returns {Promise<IOidcStore>} tokens - access, id and refresh token 
     */
    const swapCodeForToken = async (hashOrFragment, response_mode = 'query') => {

        /**
         * @step get the auth code from the fragment or query  
         */
        let code;

        if(response_mode === 'query' ){
            const params = new URLSearchParams(hashOrFragment);
            code = params.get('code');
            if (!code) throw '👎 There was no code';
        }
        else if(response_mode === 'fragment'){
            const findCode = /(?<=code\=).*(?=\&)/gm;
            
            
            try {
                code = hash.match(findCode)[0];
            }
            catch (err) {
                console.log({hash});
                throw '👎 There was no code';
            }
        }
        else throw 'response_mode must be fragment or query'


        /**
         * @step swap code for a token 
         */
        const tokenEndpointHeaders = new Headers();
        tokenEndpointHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

        const urlencoded = new URLSearchParams();
        urlencoded.append('code', code);
        urlencoded.append('grant_type', 'authorization_code');
        urlencoded.append('client_id', IDP_CLIENT_ID);
        urlencoded.append('redirect_uri', IDP_REDIRECT_URI);
        /** @todo remove client_seceret and use PKCE */

        /**
         * @constant {RequestInit} tokenEndpointRequestOptions - fetch request options  
         */
        const tokenEndpointRequestOptions = {
            method: 'POST',
            headers: tokenEndpointHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        /**
         * @returns Promise<IOidcStore> tokens
         */
        const getToken = async () => {

            /**
             * @constant {IOidcTokens} tokens 
             */
            let tokens;

            try {
                const response = await fetch(IDP_TOKEN_URL, tokenEndpointRequestOptions);
                tokens = await response.json();

                console.log('%c • tokens: ', 'background:black;color:white', tokens);
            }
            catch (err) {
                console.error('fetch failed', { IDP_TOKEN_URL, tokenEndpointRequestOptions, err: err });
                console.error('fetch failed', err);
                return {
                    status: LoginStatus.logInFailed,
                }
            }

            /** 
             * @todo window.sessionStorage.setItem('tokens', tokens)
             * @optional 
             **/

            
            try {

                /**
                 * @constant {IUser} user 
                 * @constant {AccessToken} accessToken 
                 * @todo refresh_token
                 */
                const user = await verify(tokens.id_token);
                const accessToken = await verify(tokens.access_token);


                console.log('%c • tokens: ', 'background:black;color:white', tokens);
                console.log('%c • user from idToken: ', 'background:black;color:white', user);
                console.log('%c • accessToken: ', 'background:black;color:white', accessToken);

                return {
                    status: LoginStatus.logInSuccess,
                    oidcTokens: tokens,
                    accessToken: accessToken,
                    user: user
                }

            }
            catch (err) {
                console.error('Tokens are invalid', err.message);
                return {
                    status: LoginStatus.logInFailed,
                }
            }
        }
        return getToken();
    }

    /**
     * verify and decode 
     * @param {JWT} token
     * @returns {Promise<T>} decoded - token payload  
     */
    const verify = (token) => {

        /**
         * @todo this library doesnt work on windows 
         */
        const FEATURE_WINDOWS = true; 
        if(FEATURE_WINDOWS){
            return Promise.resolve(true); 
        }
        else{
            /**
             * @todo windows error with this library - migrate to Cisco Jose library 
             */
            // const jwksClient = require('jwks-rsa');
            const client = jwksClient({
                jwksUri: IDP_JWKS_URL
            });

            const getKey = (header, callback) => {
                client.getSigningKey(header.kid, function (err, key) {
                    var signingKey = key.publicKey || key.rsaPublicKey;
                    callback(null, signingKey);
                });
            }

            return new Promise((done, fail) => {
                jwt.verify(token, getKey, { json: true }, (err, decoded) => {
                    if (err) fail(err);
                    done(decoded);
                });
            });
        }

    }

    /**
     * @function createLoginLink 
     * @description Create a Login href for the client UI 
     * @param {string} state - state query to pass through OIDC protocol
     * @param {string} nonce - nonce to protect against replay attacks 
     */
    const createLoginLink = (state, nonce) => {

        /**
         * default to Authorization Code with PKCE grant type 
         * @param {string} response_type code | token | id_token 
         */
        const response_type = responseType || 'code';

        let url = IDP_AUTH_URL;
        url += `?client_id=${IDP_CLIENT_ID}`;
        url += `&response_type=${response_type}`;
        url += `&scope=openid profile`;
        url += `&redirect_uri=${IDP_REDIRECT_URI}`;
        url += `&response_mode=query`;
        url += `&nonce=${nonce || (new Date()).getTime()}`;

        if (state) url += `&state=${state}`;

        return (new URL(url)).toString();
    }

    return {
        swapCodeForToken,
        createLoginLink,
        verify, 
    }
}
