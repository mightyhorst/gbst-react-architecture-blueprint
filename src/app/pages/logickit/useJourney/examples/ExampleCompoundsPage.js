import React from 'react';

/**
 * @requires 💅UiKit
 */
import {
    Journey,
    NextStepButton, 
} from './uikit';

/**
 * @requires 🖖LogicKit
 */
import {
    JourneyProvider
} from './logickit';



/**
 * @component ExampleCompoundsPage
 * @desc How to use hook in the wild  
 */
export function ExampleCompoundsPage() {

    const onNextStep = () => {
        alert('@todo next step');
    }

    const steps = [
        {
            title: 'Client Details'
        },
        {
            title: 'Application Details'
        }
    ];

    /**
     * @step render
     */
    return (
        <JourneyProvider steps={steps}>
            <Journey>
                <Journey.Nav>
                    <Journey.NavStep step={0} title='Client Details' isActive />
                    <Journey.NavStep step={1} title='Application Details' />
                    <Journey.NavStep step={2} title='Summary' />
                </Journey.Nav>
                <Journey.Content>
                    <Journey.Step step={0} >
                        <Journey.StepWell title='Product Details'>

                        </Journey.StepWell>

                        <Journey.StepWell step={1} title='Advisor'>

                        </Journey.StepWell>

                        <Journey.StepWell step={2} title='Personal Details'>

                        </Journey.StepWell>

                        <Journey.StepFooter>
                            <NextStepButton onNextStep={onNextStep} />
                        </Journey.StepFooter> 
                    </Journey.Step>
                    <Journey.Step step={1}>

                    </Journey.Step>
                    <Journey.Step step={2}>

                    </Journey.Step>
                </Journey.Content>
            </Journey>
        </JourneyProvider>
    );

}

