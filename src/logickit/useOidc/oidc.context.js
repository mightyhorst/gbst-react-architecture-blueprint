import React from 'react';

import {
    oidcReducer,
    initState,
} from './oidc.reducer';
import {
    OidcActionCreators,
    // OidcActionTypes,
    IOidcActionCreators,
} from './oidc.actions';


/**
 * @context dont export context, export the hook useContext instead 
 */
const OidcContext = React.createContext(null);

/**
 * @hook 
 * @function useOidc - hook 
 * @returns {[IOidcStore, IOidcActionCreators]}
 */
export function useOidc() {
    const context = React.useContext(OidcContext);
    if (context === undefined) {
        throw new Error('useOidc must be used within a OidcProvider');
    }
    return context;
}

/**
 * @context provider 
 * wrap the contents in this to inject the oidc store
 * access it using useOidc hook 
 */
export function OidcProvider({ children }) {

    const [oidcStore, dispatch] = React.useReducer(oidcReducer, initState)

    /**
     * @constant {IOidcActionCreators} oidcActions 
     * @desc 
     *      action creator to publish actions  
     */
    const oidcActions = OidcActionCreators(dispatch);

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
         localStorage.setItem(OidcLocalStorageKey.status, JSON.stringify(oidcStore.status));
         updateSession<LoginStatus>(OidcLocalStorageKey.status, oidcStore.status); 
     }, [oidcStore.status]);
     */
     

    return (
        <>
            <OidcContext.Provider value={[oidcStore, oidcActions]}>
                {children}
            </OidcContext.Provider>
        </>
    );
}

