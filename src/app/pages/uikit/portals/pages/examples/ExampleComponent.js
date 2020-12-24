import React from 'react';

/**
 * @requires 💅UIKit
 */
import {
    Page,
} from './uikit';
import { 
    Breadcrumb 
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * @requires 🖖LogicKit
 */
// import {

// } from './logickit';


/**
 * @component ExamplePage
 * @desc 
 *      Compound component composition 
 */
export function ExamplePage() {

    /**
     * @step render
     */
    return (
        <Page>
            <Page.Header>
                <Breadcrumb>
                    <LinkContainer to="?tab=home">
                        <Breadcrumb.Item>
                            Home
                        </Breadcrumb.Item>
                    </LinkContainer>

                    <LinkContainer to="?tab=library">
                        <Breadcrumb.Item>
                            Work Item Validation
                        </Breadcrumb.Item>
                    </LinkContainer>

                    <Breadcrumb.Item active>
                        Work Item Validation Details 
                    </Breadcrumb.Item>
                </Breadcrumb>

                <Page.HeaderTitle>
                    Work Item ID #100 (Suspended) 
                </Page.HeaderTitle>
            </Page.Header>
            <Page.Contents>
                Hello World
            </Page.Contents>
        </Page>
    );

}

