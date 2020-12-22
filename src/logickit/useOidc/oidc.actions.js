import { LoginStatus } from './oidc.models';
import { useOidcService } from './oidc.services';


/**
 * OidcActions - factory pattern
 * @returns {IOidcActionCreators} actionCreators 
 */
export function OidcActionCreators(dispatch) {

    const { swapCodeForToken } = useOidcService();

    return {

        /**
         * @async
         * @method login 
         * @param {string} routeHashOrQuery
         */
        login: async (routeHashOrQuery) => {

            dispatch({
                type: 'LOGIN_PENDING',
                payload: {
                    status: LoginStatus.loggingIn
                }
            })

            try {

                /**
                 * @constant {IOidcStore} tokens - OAuth2 autorization code grant type 
                 * @desc swap the code for a token 
                 */
                
                const tokens = await swapCodeForToken(routeHashOrQuery);
                
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: tokens
                })

            }
            catch (err) {
                console.error('LOGIN_FAILED', err);
                dispatch({
                    type: 'LOGIN_FAILED',
                    payload: {
                        status: LoginStatus.logInFailed
                    }
                })
            }

        }

    }
}
