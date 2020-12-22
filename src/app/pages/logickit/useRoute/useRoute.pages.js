import React from 'react';

/**
 * @requires Styes
 */
import './styles';

/**
 * @requires Hooks 
 */
import {
    Page,
} from '../../../../uikit';

/**
 * @requires Components
 * @description Examples 
 */
import {
    ExampleArchitecture,
    ExampleComponent,
    ExampleComponentCodeSnippet,
} from './examples';

/**
 * @page 1 
 * @component UseRoutesArchitecturePage
 * @route /cat/logickit/scene/useasync/step/architecture
 */
export function UseRouteArchitecturePage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleArchitecture />
            </Page.Padding>
        </Page>
    )
}

/**
 * @page 2 
 * @component UseRoutesExamplePage
 * @route /cat/logickit/scene/useasync/step/example
 */
export function UseRouteExamplePage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleComponent />
            </Page.Padding>
        </Page>
    )
}

/**
 * @page 3
 * @component UseRoutesExampleCodePage
 * @route /cat/logickit/scene/useasync/step/code
 */
export function UseRouteExampleCodePage(){
    return (
        <Page >
            <ExampleComponentCodeSnippet />
        </Page>
    )
}
