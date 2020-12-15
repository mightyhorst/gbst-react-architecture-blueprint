export const RoleEnum = {
    Owner: 'OWNER', // ---> Billing and close account 
    Admin: 'ADMIN', // ---> read /write and CRUD users
    Writer: 'WRITER', // ---> read/write 
    Reader: 'READER', // ---> read and fork 
}
export const PermisionsEnum = {
    Billing: 'Billing',
    Read: 'Read',
    Write: 'Write',
}

export const TokenType = {
    Bearer: 'Bearer'
}

export const LoginStatus = {
    loggingIn: 'loggingIn',
    logInSuccess: 'logInSuccess',
    logInFailed: 'logInFailed',
    loggingOut: 'loggingOut',
    loggedOut: 'loggedOut',
}


/**
 * @const AuthLocalStorageKey
 * @desc key used to identity the auth storage value 
 */
export const AuthLocalStorageKey = {
    status: 'auth.status',
    accessToken: 'auth.accessToken',
    authTokens: 'auth.authTokens',
    user: 'auth.user',
    jwks: 'auth.jwks',
}