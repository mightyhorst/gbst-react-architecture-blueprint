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
    ExampleComponent,
    ExampleComponentCodeSnippet,
} from './examples';

/**
 * @page 1 
 * @component UseAsyncArchitecturePage
 * @route /cat/logickit/scene/useasync/step/architecture
 */
export function UseAsyncArchitecturePage(){
    return (
        <Page>
            <Page.Padding>
                <iframe 
                    style={{
                        border: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%', 
                    }}
                    src='http://gbst-react-patterns.surge.sh/'
                />
            </Page.Padding>
        </Page>
    )
}

/**
 * @page 2 
 * @component UseAsyncExamplePage
 * @route /cat/logickit/scene/useasync/step/example
 */
export function UseAsyncExamplePage(){
    return (
        <Page>
            <Page.Padding>
                <ExampleComponent />
            </Page.Padding>
        </Page>
    )
}

/**
 * @page 3
 * @component UseAsyncExampleCodePage
 * @route /cat/logickit/scene/useasync/step/code
 */
export function UseAsyncExampleCodePage(){
    return (
        <Page>
            <ExampleComponentCodeSnippet />
        </Page>
    )
}
