import React from 'react';

import {
    authReducer,
    initState,
} from './auth.reducer';
import {
    AuthActionCreators,
} from './auth.actions';


/**
 * @context dont export context, export the hook useContext instead 
 */
export const AuthContext = React.createContext(null);

/**
 * @context provider 
 * wrap the contents in this to inject the auth store
 * access it using useAuth hook 
 */
export function AuthProvider({ children }) {

    const [authStore, dispatch] = React.useReducer(authReducer, initState)

    /**
     * @constant {IAuthActionCreators} authActions 
     * @desc 
     *      action creator to publish actions  
     */
    const authActions = AuthActionCreators(dispatch);

    /**
    * @step 1
    * @desc on load - preprocess init state or prefetch any async 
    * @author Mitchy 
    */
    React.useEffect(() => {
        // 1. preprocess 
        // 2. or prefetch e.g jwks 
        // 3. check if localstorage is empty here
    }, []);

    /**
    * @step 2
    * @desc on change - persist side effects 
    * @author Mitchy 
    */
    /*
     React.useEffect(() => {
         localStorage.setItem(AuthLocalStorageKey.status, JSON.stringify(authStore.status));
         updateSession<LoginStatus>(AuthLocalStorageKey.status, authStore.status); 
     }, [authStore.status]);
     */
     

    return (
        <>
            <AuthContext.Provider value={[authStore, authActions]}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

