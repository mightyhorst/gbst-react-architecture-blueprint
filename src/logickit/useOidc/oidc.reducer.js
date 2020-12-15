import {  LoginStatus } from './oidc.models';

/**
 * @namespace store
 * @constant {IOidcStore} initState - inita state 
 */
export const initState = {
    status: LoginStatus.loggedOut,
}

/**
 * @namespace reducer
 * @function oidcReducer
 * @param {IOidcStore} state - store 
 * @param {OidcActionTypes} action - action published  
 * @returns {IOidcStore} store 
 */
export function oidcReducer(state, action) {

    switch (action.type) {
        case 'LOGIN_PENDING':
            return {...state, ...action.payload};

        case 'LOGIN_SUCCESS':
            return {...state, ...action.payload};

        case 'LOGIN_FAILED':
            return {...state, ...action.payload};
    
        
        default:
            return { ...state, ...action.payload };
    }
}


