import React from 'react';

/**
 * @requires Router
 */
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

/**
 * @requires Pages 
 */
import {
    /**
     * @cat LogicKit
     * @scene useAsync 
     */
    UseAsyncArchitecturePage,
    UseAsyncExamplePage,
    UseAsyncExampleCodePage, 

    /**
     * @cat LogicKit
     * @scene useApi 
     */
    UseApiArchitecturePage,
    UseApiUseGetPage,
    UseApiUseAuthPage,
    UseApiExampleCodePage, 

    /**
     * @cat LogicKit
     * @scene useAuth 
     */
    UseAuthArchitecturePage,
    UseAuthSimplePage,
    UseAuthUseApiPage,
    UseAuthExampleCodePage,

    /**
     * @cat LogicKit
     * @scene useFormik 
     */
    UseFormikArchitecturePage,
    UseFormikHelloWorldPage,
    UseFormikValidationPage,
    UseFormikValidationSchemaPage,
    UseFormikExampleCodePage,

    /**
     * @cat LogicKit
     * @scene useJourney 
     */
    UseJourneyArchitecturePage,
    UseJourneyLayoutPage,
    UseJourneyCompoundsPage,
    UseJourneyElementsPage,
    UseJourneyUseJourneyPage,
    UseJourneyUseFormikPage,
    UseJourneyUseApiPage,
    UseJourneyUseAuthPage,
    UseJourneyExampleCodePage,

    /**
     * @cat LogicKit
     * @scene useTabs 
     */
    UseTabArchitecturePage,
    UseTabExamplePage,
    UseTabExampleCodePage,

    /**
     * @cat LogicKit
     * @scene useFunctionalGroups 
     */
    UseFunctionalGroupArchitecturePage,
    UseFunctionalGroupExamplePage,
    UseFunctionalGroupExampleCodePage,
    
    /**
     * @cat LogicKit
     * @scene useRoutes 
     */
    UseRouteArchitecturePage,
    UseRouteExamplePage,
    UseRouteExampleCodePage,
    
    /**
     * @cat LogicKit
     * @scene useStorage 
     */
    UseStorageArchitecturePage,
    UseStorageExamplePage,
    UseStorageExampleCodePage,
} from './pages';

/**
 * @requires Components 
 */
import {
    Sidebar,
} from './sidebar';

/**
 * @constant routes 
 */
const titles = [
    {
        catId: 'logickit',
        title: 'LogicKit',
    },
    {
        sceneId: 'useasync',
        title: 'useAsync',
    },
    {
        sceneId: 'useapi',
        title: 'useApi',
    },
    {
        sceneId: 'useauth',
        title: 'useAuth',
    },
    {
        sceneId: 'useformik',
        title: 'useFormik',
    },
    {
        sceneId: 'usejourney',
        title: 'useJourney',
    },
    {
        sceneId: 'usetab',
        title: 'useTab',
    },
    {
        sceneId: 'usefunctionalgroup',
        title: 'useFunctionalGroup',
    },
    {
        sceneId: 'useroute',
        title: 'useRoute',
    },
    {
        sceneId: 'usestorage',
        title: 'useStorage',
    },
];
export const routes = [

    /**
     * @cat LogicKit
     * @scene useAsync 
     */
    {
        catId: 'logickit',
        sceneId: 'useasync',
        stepId: 'architecture',
        Component: UseAsyncArchitecturePage,
    },
    {
        catId: 'logickit',
        sceneId: 'useasync',
        stepId: 'example',
        title: '🖖 useAsync example',
        Component: UseAsyncExamplePage,
    },
    {
        catId: 'logickit',
        sceneId: 'useasync',
        stepId: 'code',
        Component: UseAsyncExampleCodePage,
    },

    /**
     * @cat LogicKit
     * @scene useApi 
     */
    {
        catId: 'logickit',
        sceneId: 'useapi',
        stepId: 'architecture',
        title: 'Architecture',
        Component: UseApiArchitecturePage,
    },
    {
        catId: 'logickit',
        sceneId: 'useapi',
        stepId: 'useget',
        title: '🖖 useGet simple example',
        Component: UseApiUseGetPage,
    },
    {
        catId: 'logickit',
        sceneId: 'useapi',
        stepId: 'useapi-useauth',
        title: '🖖 useApi with token from useAuth',
        Component: UseApiUseAuthPage,
    },
    {
        catId: 'logickit',
        sceneId: 'useapi',
        stepId: 'code',
        Component: UseApiExampleCodePage,
    },

    /**
     * @cat LogicKit
     * @scene useAuth  
     */
    {
        catId: 'logickit',
        sceneId: 'useauth',
        stepId: 'architecture',
        Component: UseAuthArchitecturePage,
    },
    {
        catId: 'logickit',
        sceneId: 'useauth',
        stepId: 'simple',
        title: '🖖 useAuth simple example',
        Component: UseAuthSimplePage,
    },
    {
        catId: 'logickit',
        sceneId: 'useauth',
        stepId: 'useauth-useapi',
        title: '🖖 useAuth with useApi',
        Component: UseAuthUseApiPage,
    },
    {
        catId: 'logickit',
        sceneId: 'useauth',
        stepId: 'code',
        Component: UseAuthExampleCodePage,
    },

    /**
     * @cat LogicKit
     * @scene useFormik 
     */
    {
        catId: 'logickit',
        sceneId: 'useformik',
        stepId: 'architecture',
        title: 'Architecture',
        Component: UseFormikArchitecturePage,
    },
    {
        catId: 'logickit',
        sceneId: 'useformik',
        stepId: 'helloworld',
        title: '🖖 useFormik hello world',
        Component: UseFormikHelloWorldPage,
    },
    {
        catId: 'logickit',
        sceneId: 'useformik',
        stepId: 'validation',
        title: '🖖 useFormik with validation',
        Component: UseFormikValidationPage,
    },
    {
        catId: 'logickit',
        sceneId: 'useformik',
        stepId: 'validation-schema',
        title: '🖖 useFormik with Validation Schema',
        Component: UseFormikValidationSchemaPage,
    },
    {
        catId: 'logickit',
        sceneId: 'useformik',
        stepId: 'code',
        Component: UseFormikExampleCodePage,
    },

    /**
     * @cat LogicKit
     * @scene useJourney 
     */
    {
        catId: 'logickit',
        sceneId: 'usejourney',
        stepId: 'architecture',
        title: 'Architecture',
        Component: UseJourneyArchitecturePage,
    },
    {
        catId: 'logickit',
        sceneId: 'usejourney',
        stepId: 'uikit-layout',
        title: '💅 UIKit: Layout',
        Component: UseJourneyLayoutPage,
    },
    {
        catId: 'logickit',
        sceneId: 'usejourney',
        stepId: 'uikit-compounds',
        title: '💅 UIKit: Compounds',
        Component: UseJourneyCompoundsPage,
    },
    {
        catId: 'logickit',
        sceneId: 'usejourney',
        stepId: 'uikit-elements',
        title: '💅 UIKit: Elements',
        Component: UseJourneyElementsPage,
    },
    {
        catId: 'logickit',
        sceneId: 'usejourney',
        stepId: 'logickit-layout',
        title: '🖖 LogicKit: useJourney',
        Component: UseJourneyUseJourneyPage,
    },
    {
        catId: 'logickit',
        sceneId: 'usejourney',
        stepId: 'logickit-formik',
        title: '🖖 LogicKit: useFormik',
        Component: UseJourneyUseFormikPage,
    },
    {
        catId: 'logickit',
        sceneId: 'usejourney',
        stepId: 'logickit-useapi',
        title: '🖖 LogicKit: useApi',
        Component: UseJourneyUseApiPage,
    },
    {
        catId: 'logickit',
        sceneId: 'usejourney',
        stepId: 'logickit-useauth',
        title: '🖖 LogicKit: useAuth',
        Component: UseJourneyUseAuthPage,
    },
    {
        catId: 'logickit',
        sceneId: 'usejourney',
        stepId: 'code',
        Component: UseJourneyExampleCodePage,
    },
    
    /**
     * @cat LogicKit
     * @scene useTabs 
     */
    {
        catId: 'logickit',
        sceneId: 'usetab',
        stepId: 'architecture',
        Component: UseTabArchitecturePage,
    },
    {
        catId: 'logickit',
        sceneId: 'usetab',
        stepId: 'example',
        Component: UseTabExamplePage,
    },
    {
        catId: 'logickit',
        sceneId: 'usetab',
        stepId: 'code',
        Component: UseTabExampleCodePage,
    },
    
    /**
     * @cat LogicKit
     * @scene useFunctionalGroups 
     */
    {
        catId: 'logickit',
        sceneId: 'usefunctionalgroup',
        stepId: 'architecture',
        Component: UseFunctionalGroupArchitecturePage,
    },
    {
        catId: 'logickit',
        sceneId: 'usefunctionalgroup',
        stepId: 'example',
        Component: UseFunctionalGroupExamplePage,
    },
    {
        catId: 'logickit',
        sceneId: 'usefunctionalgroup',
        stepId: 'code',
        Component: UseFunctionalGroupExampleCodePage,
    },
    
    /**
     * @cat LogicKit
     * @scene useRoutes 
     */
    {
        catId: 'logickit',
        sceneId: 'useroute',
        stepId: 'architecture',
        Component: UseRouteArchitecturePage,
    },
    {
        catId: 'logickit',
        sceneId: 'useroute',
        stepId: 'example',
        Component: UseRouteExamplePage,
    },
    {
        catId: 'logickit',
        sceneId: 'useroute',
        stepId: 'code',
        Component: UseRouteExampleCodePage,
    },
    
    /**
     * @cat LogicKit
     * @scene useStorage 
     */
    {
        catId: 'logickit',
        sceneId: 'usestorage',
        stepId: 'architecture',
        Component: UseStorageArchitecturePage,
    },
    {
        catId: 'logickit',
        sceneId: 'usestorage',
        stepId: 'example',
        Component: UseStorageExamplePage,
    },
    {
        catId: 'logickit',
        sceneId: 'usestorage',
        stepId: 'code',
        Component: UseStorageExampleCodePage,
    },
];

export function AppRoutes(){

    return (
        <Router>
            <Switch>
                <Route 
                    exact 
                    path="/cat/:catId/scene/:sceneId/step/:stepId"
                    render={({match: {params}}) => {
                        return renderPage(params);
                    }}
                />
                <Route 
                    exact
                    path="/:catId/:sceneId/:stepId"
                    render={({match: {params}}) => {
                        return renderPage(params);
                    }}
                />
                <Route path="/">
                    HomePage 
                </Route>
            </Switch>
        </Router>
    );  
}

function renderPage({catId, sceneId, stepId}){

    const route = routes.find(route => {
        return String(catId) === route.catId && String(sceneId) === route.sceneId && String(stepId) === route.stepId; 
    });
    const Component = route?.Component;

    return (<>
        <Sidebar 
            title="GBST React Architecture" 
            activeCatId={catId} 
            activeSceneId={sceneId} 
            activeStepId={stepId}
        />
        <React.Suspense fallback={'loading...'}>
            <Component />
        </React.Suspense>
    </>);
}


/**
 * 
 * @returns {Categories[]} cats 
 */
export function getNestedRoutes(){
    let startCats = []; 
    let cats = []; 
    let startScenes =[]; 
    let scenes = []; 
    let steps =[...routes];

    /**
    * @step cats
    **/
    routes.forEach(route => {
        startCats.push(route.catId);
        startCats = [...new Set(startCats)];
        cats = [...startCats].map(cat => {
            return {
                catId: cat, 
                title: titles.find(title => title?.catId === cat)?.title,
                scenes: [],
            }
        });
    });


    /**
    * @step scenes
    **/
    routes.forEach(route => {
        startScenes.push(route.sceneId);
        startScenes = [...new Set(startScenes)];
        scenes = [...startScenes].map(scene => {
            return {
                sceneId: scene, 
                steps: [],
                title: titles.find(title => title?.sceneId === scene)?.title,
            }
         });
    });


    scenes.forEach(scene => {
        const route = routes.find(route => scene.sceneId === route.sceneId); 
        scene.catId = route.catId; 
    });


    /**
    * @step steps
    **/
    steps.forEach(step => {
        const scene = scenes.find(s => s.sceneId === step.sceneId); 
        scene?.steps?.push(step); 
    });


    /**
    * @step cats
    **/
    scenes.forEach(scene => {
        const cat = cats.find(cat => scene.catId === cat.catId); 
        cat.scenes.push(scene); 
    });

    return cats;
}
