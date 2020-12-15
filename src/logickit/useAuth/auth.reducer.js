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
            return {...state, ...action.payload};

        case 'LOGIN_SUCCESS':
            return {...state, ...action.payload};

        case 'LOGIN_FAILED':
            return {...state, ...action.payload};
    
        
        default:
            return { ...state, ...action.payload };
    }
}


