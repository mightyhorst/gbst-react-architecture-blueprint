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
 * @const OidcLocalStorageKey
 * @desc key used to identity the oidc storage value 
 */
export const OidcLocalStorageKey = {
    status: 'oidc.status',
    accessToken: 'oidc.accessToken',
    oidcTokens: 'oidc.oidcTokens',
    user: 'oidc.user',
    jwks: 'oidc.jwks',
}