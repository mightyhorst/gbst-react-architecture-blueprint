import React from "react";
import ReactDOM from "react-dom";

/**
 * @requires UIKit 
 */
import { Page } from './uikit';

/**
 * @app
 */
// import App from './App';
import App from "./app/steps/cat-02-logickit/scene-01-useJourney/step-01-JourneyProvider/output/01-App";
// import App from "./app/steps/cat-02-logickit/scene-02-useForm/step-01-useForm/output/01-App";
import {Sidebar} from './app/sidebar';

/**
 * @requires Routes 
 */
import { AppRoutes } from './app';

/**
 * @css Importing the Bootstrap CSS
 **/
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
    
    <Sidebar />
    <AppRoutes />
    
</>, document.getElementById("root"));
