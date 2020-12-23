import React from 'react';

/**
 * @requires 💅UiKit
 */
import {
    Journey,
    NextStepButton,
    PrevStepButton,
} from './uikit';

/**
 * @requires 🖖LogicKit
 */
import {
    JourneyProvider,
    useJourney,
} from './logickit';



/**
 * @component ExampleUseJourneyPage
 * @desc How to use hook in the wild  
 */
export function ExampleUseJourneyPage() {

    const steps = [
        {
            title: 'Client Details'
        },
        {
            title: 'Application Details'
        }
    ];

    return <JourneyProvider steps={steps}>
        <ExampleUseJourney />
    </JourneyProvider>
}
function ExampleUseJourney() {

    const [journeyStore, journeyActions] = useJourney();

    /**
     * @step render
     */
    return (
        <Journey>
            <Journey.Nav>
                <Journey.NavStep step={0} title='Client Details' isActive />
                <Journey.NavStep step={1} title='Application Details' />
                <Journey.NavStep step={2} title='Summary' />
            </Journey.Nav>
            <Journey.Content>
                <Journey.Step step={0} >
                    {/* <Journey.StepWell title='Product Details'>

                        </Journey.StepWell>

                        <Journey.StepWell step={1} title='Advisor'>
                             
                        </Journey.StepWell>

                        <Journey.StepWell step={2} title='Personal Details'>
                            
                        </Journey.StepWell> */}

                    <pre className='pre-well'>
                        {JSON.stringify(journeyStore, null, 4)}
                    </pre>

                    <Journey.StepFooter>
                        <PrevStepButton onNextStep={journeyActions.previousStep} />
                        <NextStepButton onNextStep={journeyActions.nextStep} />
                    </Journey.StepFooter>
                </Journey.Step>
                <Journey.Step step={1}>

                    Step 1
                    
                    <Journey.StepFooter>
                        <PrevStepButton onNextStep={journeyActions.previousStep} />
                        <NextStepButton onNextStep={journeyActions.nextStep} />
                    </Journey.StepFooter>
                </Journey.Step>
                <Journey.Step step={2}>
                    Step 2

                    <Journey.StepFooter>
                        <PrevStepButton onNextStep={journeyActions.previousStep} />
                        <NextStepButton onNextStep={journeyActions.nextStep} />
                    </Journey.StepFooter>
                </Journey.Step>
            </Journey.Content>
        </Journey>
    );

}

