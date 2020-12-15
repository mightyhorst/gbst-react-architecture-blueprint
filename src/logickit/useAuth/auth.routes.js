import React from 'react';


/**
 * @import Services
 */
import { useAuth } from './useAuth.hook'
import { REDIRECT_URI } from './auth.config';


/**
 * @import Routes
 */
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


export function AuthRoutes() {

    const [authStore, authActions] = useAuth();

    const {
        accessToken,
        authTokens,
        user,
        status,
    } = authStore; 

    return (
        <>
            <BrowserRouter basename="/">
                <Switch>
                    <Route exact path={REDIRECT_URI || '/oauth/redirect'}
                        render={(props) => {

                            /**
                             * @todo IDp 
                             * 
                             *   response_mode=query|fragment
                             */
                            const hash = props.location.hash;
                            const query = props.location.search;

                            authActions.login(query);

                            return <Redirect to='/#' />;
                        }}
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}


/**
 * Private Props - check is AUthenticated or functional groups or redirect to login 
 * @param { path, Component, render, ...rest } privateRouteProps  
 */
const PrivateRoute = ({ path, Component, render, ...rest }) => {

    const [authStore, authActions] = useAuth();



    const isAuth = true;


    return (
        <Route {...rest}
            render={(props) => {
                return isAuth === true ? <Component {...props} /> : <Redirect to='/login' />
            }}
        />
    );
}
