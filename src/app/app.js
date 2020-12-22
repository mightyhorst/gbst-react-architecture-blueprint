import React from 'react';

/**
 * @requires Routes 
 */
import { AppRoutes } from './routes';

/**
 * @css Importing the Bootstrap CSS
 **/
import 'bootstrap/dist/css/bootstrap.min.css';

export function App(){
    return (<>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
        <AppRoutes />
    </>);
}
