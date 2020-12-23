import React from 'react';

/**
 * @requires 🖖LogicKit
 */
// import {
//     StatusEnum,
//     useAsync
// } from '../../../../../logickit';

/**
 * @requires Bootstrap  
 */
import { LinkContainer } from 'react-router-bootstrap';
import {
    Tabs,
    Tab, 
} from 'react-bootstrap';

/**
* @requires Components 
*/
import { ExampleForm } from '../../useFormik/examples/ExampleForm';


/**
 * @component useTabsExample
 * @description Contrived example to use tabs 
 */
export function ExampleComponent(){

    const [tab, setTab] = React.useState('home');


    return (
        <Tabs 
            id="use-tabs-example"
            activeKey={tab}
            onSelect={(_tab) => setTab(_tab)}
        >
            <LinkContainer to="?tab=home">
                <Tab eventKey="home" title="Home">
                    <ExampleForm />
                </Tab>
            </LinkContainer>
            <LinkContainer to="?tab=profile">
                <Tab eventKey="profile" title="Profile">
                    <ExampleForm />
                </Tab>
            </LinkContainer>
            <LinkContainer to="?tab=contact">
                <Tab eventKey="contact" title="Contact" disabled>
                    <ExampleForm />
                </Tab>
            </LinkContainer>
        </Tabs>
    );
}
