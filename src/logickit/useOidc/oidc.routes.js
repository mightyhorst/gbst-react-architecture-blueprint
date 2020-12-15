import React from 'react';


/**
 * @import Services
 */
import { useOidc } from './oidc.context'
import { IDP_REDIRECT_URI } from './oidc.config';


/**
 * @import Routes
 */
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


export function OidcRoutes() {

    const [oidcStore, oidcActions] = useOidc();

    const {
        accessToken,
        oidcTokens,
        user,
        status,
    } = oidcStore; 

    return (
        <>
            <BrowserRouter basename="/">
                <Switch>
                    <Route exact path={IDP_REDIRECT_URI || '/oauth/redirect'}
                        render={(props) => {

                            /**
                             * @todo IDp 
                             * 
                             *   response_mode=query|fragment
                             */
                            const hash = props.location.hash;
                            const query = props.location.search;

                            oidcActions.login(query);

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

    const [oidcStore, oidcActions] = useOidc();



    const isAuth = true;


    return (
        <Route {...rest}
            render={(props) => {
                return isAuth === true ? <Component {...props} /> : <Redirect to='/login' />
            }}
        />
    );
}
// export function ProtectedRoute(path:string, component: React.ReactElement){

//     // const [user] = useUser(); 
//     const user = {
//         name: 'Mithcy',
//         workspaces: [
//             {
//                 name: '@masterclass',
//                 role: ['OWNER', 'ADMIN']
//             }
//         ]
//     }

//     const {playbookId} = props.location.params

//     var playbookModel = getPlaybook(playbookId)
//     var workspace = playbookModel.workspace;

//     const playbookWs = user.workspaces.find(w => w.name === workspace);

//     if(user.role === 'OWNER' || ADMIN)

//     return (<Route path={path} component={component} />)
// })