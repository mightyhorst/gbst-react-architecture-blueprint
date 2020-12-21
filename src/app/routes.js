import React from 'react';

/**
 * @requires Router
 */
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

/**
 * @requires Apps 
 */
import Cat2Scene1Step1 from "./steps/cat-02-logickit/scene-01-useJourney/step-01-JourneyProvider/output/01-App";

/**
 * @constant routes 
 */
const routes = [
    {
        catId: 1,
        sceneId: 1,
        stepId: 1,
        // importComponent: `./steps/cat-02-logickit/scene-01-useJourney/step-01-JourneyProvider/output/01-App`,
        Component: Cat2Scene1Step1,
    }
];

export function AppRoutes(){

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Cat2Scene1Step1 />
                </Route>
                <Route 
                    path="/cat/:catId/scene/:sceneId/step/:stepId"
                    render={({match: {params: {catId, sceneId, stepId}}}) => {

                        const route = routes.find(route => {
                            console.log({
                                'parseInt(catId)': parseInt(catId),
                                'route.catId': route.catId,
                                'parseInt(sceneId)': parseInt(sceneId),
                                'route.sceneId': route.sceneId, 
                                'parseInt(stepId)': parseInt(stepId), 
                                'route.stepId': route.stepId
                            })
                            return parseInt(catId) === route.catId && parseInt(sceneId) === route.sceneId && parseInt(stepId) === route.stepId; 
                        });
                        const Component = route?.Component;

                        return <React.Suspense fallback={'loading...'}>
                            <Component />
                            {/* <Logickit_useJourney_step01_JourneyProvider /> */}
                        </React.Suspense>
                    }}
                />
            </Switch>
        </Router>
    );  
}



