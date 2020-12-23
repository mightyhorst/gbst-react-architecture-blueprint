import {  LoginStatus } from './auth.models';

/**
 * @namespace store
 * @constant {IAuthStore} initState - inita state 
 */
export const initState = {
    status: LoginStatus.loggedOut,
    data: null,
}

/**
 * @namespace reducer
 * @function authReducer
 * @param {IAuthStore} state - store 
 * @param {AuthActionTypes} action - action published  
 * @returns {IAuthStore} store 
 */
export function authReducer(state, action) {

    switch (action.type) {
        case 'LOGIN_PENDING':
            return {...state, ...action.payload, status: LoginStatus.loggingIn};

        case 'LOGIN_SUCCESS':
            return {...state, ...action.payload, status: LoginStatus.logInSuccess};

        case 'LOGIN_FAILED':
            return {...state, ...action.payload, status: LoginStatus.logInFailed};
        
        case 'LOGOUT_PENDING':
            return {...state, ...action.payload, status: LoginStatus.loggingOut};
        
            case 'LOGOUT_SUCCESS':
            return {...state, ...action.payload, status: LoginStatus.loggedOut};
            
        default:
            return { ...state, ...action.payload };
    }
}


