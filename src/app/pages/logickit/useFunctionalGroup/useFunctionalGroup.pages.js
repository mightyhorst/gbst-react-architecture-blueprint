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
 * @component UseFunctionalGroupArchitecturePage
 * @route /cat/logickit/scene/useasync/step/architecture
 */
export function UseFunctionalGroupArchitecturePage(){
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
 * @component UseFunctionalGroupExamplePage
 * @route /cat/logickit/scene/useasync/step/example
 */
export function UseFunctionalGroupExamplePage(){
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
 * @component UseFunctionalGroupExampleCodePage
 * @route /cat/logickit/scene/useasync/step/code
 */
export function UseFunctionalGroupExampleCodePage(){
    return (
        <Page >
            <ExampleComponentCodeSnippet />
        </Page>
    )
}
