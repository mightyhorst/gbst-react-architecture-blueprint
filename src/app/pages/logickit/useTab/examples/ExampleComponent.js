import React from 'react';

/**
 * @requires 🖖LogicKit
 */
// import {
//     StatusEnum,
//     useAsync
// } from '../../../../../logickit';

/**
 * @requires Router  
 */
import {
    useLocation,
    useHistory
} from 'react-router-dom';

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

    let history = useHistory();
    const [tab, setTab] = React.useState('home');

    function handleClick() {
        history.push("?tab="+tab);
      }

    return (
        <Tabs 
            id="use-tabs-example"
            activeKey={tab}
            onSelect={(_tab) => setTab(_tab)}
            transition={false}
        >
            {/* <LinkContainer to="?tab=home"> */}
                <Tab eventKey="home" title="Home" onClick={handleClick}>
                    <Padding>
                        <ExampleForm />
                    </Padding>
                </Tab>
            {/* </LinkContainer> */}
            {/* <LinkContainer to="?tab=profile"> */}
                <Tab eventKey="profile" title="Profile">
                    <Padding>
                        <ExampleForm />
                    </Padding>
                </Tab>
            {/* </LinkContainer> */}
            {/* <LinkContainer to="?tab=contact"> */}
                <Tab eventKey="contact" title="Disabled" disabled>
                    <Padding>
                        <ExampleForm />
                    </Padding>
                </Tab>
            {/* </LinkContainer> */}
        </Tabs>
    );
}

function Padding({children, vert, horiz}){
    return (
        <div style={{
            paddingHorizontal: horiz || 20,
            paddingVertical: vert || 20,
        }}>
            {children}
        </div>
    )
}
