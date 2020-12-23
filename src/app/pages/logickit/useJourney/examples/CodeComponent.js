import React from 'react';
import Code from 'react-code-prettify';

const txtLayoutCode = `
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
 * @component ExampleLayoutPage
 * @desc How to use hook in the wild  
 */
export function ExampleLayoutPage() {

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

`
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
export function LayoutCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtLayoutCode)} 
        language="javascript" 
    />
}

/**
 * @component Compounds 
 */
const txtCompundsCode = `
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

`;
export function CompoundsCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtCompundsCode)} 
        language="javascript" 
    />
}

/**
 * @component Elements 
 */
const txtElementsCode = `
/**
 * @component 
 * @description Contrived example 
 */

`;
export function ElementsCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtElementsCode)} 
        language="javascript" 
    />
}

/**
 * @component useJourney 
 */
const txtUseJourneyCode = `
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


`;
export function UseJourneyCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtUseJourneyCode)} 
        language="javascript" 
    />
}

/**
 * @component useFormik 
 */
const txtUseFormikCode = `
/**
 * @component 
 * @description Contrived example 
 */

`;
export function UseFormikCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtUseFormikCode)} 
        language="javascript" 
    />
}

/**
 * @component useApi 
 */
const txtUseApiCode = `
/**
 * @component 
 * @description Contrived example 
 */

`;
export function UseApiCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtUseApiCode)} 
        language="javascript" 
    />
}

/**
 * @component useAuth 
 */
const txtUseAuthCode = `
/**
 * @component 
 * @description Contrived example 
 */

`;
export function UseAuthCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtUseAuthCode)} 
        language="javascript" 
    />
}







