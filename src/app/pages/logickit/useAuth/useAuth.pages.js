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
    connectAuthProvider,
    ExampleComponentUseAuth,
    ExampleComponentCodeSnippet,
} from './examples';

/**
 * @namespace mock 
 */
import { worker } from './mocks';
worker.start(); 


/**
 * @page 1 
 * @component UseAuthArchitecturePage
 * @route /cat/logickit/scene/useasync/step/architecture
 */
export function UseAuthArchitecturePage(){
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
 * @component UseAuthExamplePage
 * @route /cat/logickit/scene/useasync/step/example
 */
export function UseAuthSimplePage(){
    return (
        <Page >
            <Page.Padding>
                {connectAuthProvider(ExampleComponentUseAuth)}
            </Page.Padding>
        </Page>
    )
}
export function UseAuthUseApiPage(){
    return (
        <Page >
            <Page.Padding>
                todo - copy from api + auth example 
            </Page.Padding>
        </Page>
    )
}

/**
 * @page 3
 * @component UseAuthExampleCodePage
 * @route /cat/logickit/scene/useasync/step/code
 */
export function UseAuthExampleCodePage(){
    return (
        <Page >
            <ExampleComponentCodeSnippet />
        </Page>
    )
}
