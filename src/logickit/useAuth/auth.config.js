/** 
 * @desc to mimic ember simple auth, this is to make sure auth is consistent with how ember manage auth token/storage
 */
export const OAUTH2_PASSWORD_GRANT = process.env.REACT_APP_OAUTH2_PASSWORD_GRANT || 'authenticator:oauth2';
export const OAUTH2_CUSTOM_IMPLICIT = process.env.REACT_APP_OAUTH2_PASSWORD_GRANT || 'authenticator:oauth2-custom-implicit';

/**
 * @constant OAuth2 config
 * @desc you can set ENV variables with create react app with "REACT_APP_" prefix 
 * @see https://create-react-app.dev/docs/adding-custom-environment-variables/
 */
export const CLIENT_ID =  process.env.REACT_APP_OAUTH_CLIENT_ID || 'comp_boui';
export const CLIENT_SECRET = process.env.REACT_APP_OAUTH_CLIENT_SECRET || '';
export const TOKEN_URI = process.env.REACT_APP_OAUTH_TOKEN_URI || '/oauth/token';
export const AUTH_URI = process.env.REACT_APP_OAUTH_AUTH_URI || '/oauth/authorize';
export const REDIRECT_URI = process.env.REACT_APP_OAUTH_REDIRECT_URI || '/';
export const SCOPES = process.env.REACT_APP_OAUTH_REDIRECT_URI ? process.env.REACT_APP_OAUTH_REDIRECT_URI.split(',') : [];
