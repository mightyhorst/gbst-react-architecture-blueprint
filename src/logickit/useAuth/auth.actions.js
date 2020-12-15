import { LoginStatus } from './auth.models';
import { withAuthService } from './auth.services';


/**
 * AuthActions - factory pattern
 * @returns {IAuthActionCreators} actionCreators 
 */
export function AuthActionCreators(dispatch) {

    return {

        /**
         * @async
         * @method login 
         * @param {string} routeHashOrQuery
         */
        login: async (username, password) => {

            dispatch({
                type: 'LOGIN_PENDING',
                payload: {
                    status: LoginStatus.loggingIn
                }
            })

            try {

                /**
                 * @constant {IAuthStore} tokens - OAuth2 autorization code grant type 
                 * @desc swap the code for a token 
                 */
                const authService = withAuthService();
                const user = await authService.login(username, password);
                
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: user
                })

            }
            catch (loginErr) {
                console.error('LOGIN_FAILED', loginErr);
                dispatch({
                    type: 'LOGIN_FAILED',
                    payload: {
                        status: LoginStatus.logInFailed,
                        error: loginErr
                    }
                })
            }

        }

    }
}
