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
 * @component UseFormikArchitecturePage
 * @route /cat/logickit/scene/useasync/step/architecture
 */
export function UseFormikArchitecturePage(){
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
 * @component UseFormikExamplePage
 * @route /cat/logickit/scene/useasync/step/example
 */
export function UseFormikExamplePage(){
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
 * @component UseFormikExampleCodePage
 * @route /cat/logickit/scene/useasync/step/code
 */
export function UseFormikExampleCodePage(){
    return (
        <Page >
            <ExampleComponentCodeSnippet />
        </Page>
    )
}