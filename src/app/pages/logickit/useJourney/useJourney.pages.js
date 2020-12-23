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
    ExampleLayoutPage,
    ExampleCompoundsPage,
    ExampleElementsPage,
    ExampleUseJourneyPage,
    ExampleUseFormikPage,
    ExampleUseApiPage,
    ExampleUseAuthPage,

    LayoutCodeSnippet,
    CompoundsCodeSnippet,
    ElementsCodeSnippet,
    UseJourneyCodeSnippet,
    UseFormikCodeSnippet,
    UseApiCodeSnippet,
    UseAuthCodeSnippet,
} from './examples';

/**
 * @page 1 
 * @component UseJourneyArchitecturePage
 * @route /cat/logickit/scene/useasync/step/architecture
 */
export function UseJourneyArchitecturePage() {
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
 * @component UseJourneyExamplePage
 * @route /cat/logickit/scene/useasync/step/example
 */
export function UseJourneyLayoutPage() {
    return (
        <Page >
            <ExampleLayoutPage />
        </Page>
    )
}
export function UseJourneyCompoundsPage() {
    return (
        <Page >

            <ExampleCompoundsPage />

        </Page>
    )
}
export function UseJourneyElementsPage() {
    return (
        <Page >

            <ExampleElementsPage />

        </Page>
    )
}
export function UseJourneyUseJourneyPage() {
    return (
        <Page >

            <ExampleUseJourneyPage />

        </Page>
    )
}
export function UseJourneyUseFormikPage() {
    return (
        <Page >

            <ExampleUseFormikPage />

        </Page>
    )
}
export function UseJourneyUseApiPage() {
    return (
        <Page >

            <ExampleUseApiPage />

        </Page>
    )
}
export function UseJourneyUseAuthPage() {
    return (
        <Page >

            <ExampleUseAuthPage />

        </Page>
    )
}

/**
 * @page 3
 * @component UseJourneyExampleCodePage
 * @route /cat/logickit/scene/useasync/step/code
 */
export function UseJourneyLayoutCodePage() {
    return (
        <Page >
            <LayoutCodeSnippet />
        </Page>
    )
}
export function UseJourneyCompoundsCodePage() {
    return (
        <Page >
            <CompoundsCodeSnippet />
        </Page>
    )
}
export function UseJourneyElementsCodePage() {
    return (
        <Page >
            <ElementsCodeSnippet />
        </Page>
    )
}
export function UseJourneyUseJourneyCodePage() {
    return (
        <Page >
            <UseJourneyCodeSnippet />
        </Page>
    )
}
export function UseJourneyUseFormikCodePage() {
    return (
        <Page >
            <UseFormikCodeSnippet />
        </Page>
    )
}
export function UseJourneyUseApiCodePage() {
    return (
        <Page >
            <UseApiCodeSnippet />
        </Page>
    )
}
export function UseJourneyUseAuthCodePage() {
    return (
        <Page >
            <UseAuthCodeSnippet />
        </Page>
    )
}


function Footer({sampleLink='#', codeLink='#'}) {
    return (
        <nav class="page--nav">
            <a href={sampleLink} class="btn btn-folder isActive">
                Sample
            </a>
            <a href={codeLink} class="btn btn-code">
                Code
            </a>
        </nav>
    )
}