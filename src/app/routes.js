import React from 'react';

/**
 * @requires Router
 */
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

/**
 * @requires Apps 
 */
import Logickit_useJourney_step01_JourneyProvider from "./steps/cat-02-logickit/scene-01-useJourney/step-01-JourneyProvider/output/01-App";

export function AppRoutes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Logickit_useJourney_step01_JourneyProvider />
                </Route>
            </Switch>
        </Router>
    );  
}

