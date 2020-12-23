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
    ExampleComponentUseApi,
    ExampleComponentCodeSnippet,
} from './examples';

/**
 * @page 1 
 * @component UseApiArchitecturePage
 * @route /cat/logickit/scene/useasync/step/architecture
 */
export function UseApiArchitecturePage(){
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
 * @component UseApiExamplePage
 * @route /cat/logickit/scene/useasync/step/example
 */
export function UseApiUseGetPage(){
    return (
        <Page >
            <Page.Padding>
                <ExampleComponentUseApi />
            </Page.Padding>
        </Page>
    )
}
export function UseApiUseAuthPage(){
    return (
        <Page >
            <Page.Padding>
                todo 
            </Page.Padding>
        </Page>
    )
}



/**
 * @page 3
 * @component UseApiExampleCodePage
 * @route /cat/logickit/scene/useasync/step/code
 */
export function UseApiExampleCodePage(){
    return (
        <Page >
            <ExampleComponentCodeSnippet />
        </Page>
    )
}

