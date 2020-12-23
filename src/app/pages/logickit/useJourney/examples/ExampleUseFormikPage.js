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
    useForm,
} from './logickit';



/**
 * @component ExampleUseFormikPage
 * @desc How to use hook in the wild  
 */
export function ExampleUseFormikPage() {

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
     * @const Forms 
     */
    const formData = {
        name: 'Mitchy',
        email: 'nick@email.com',
    };

    function validateStep1(stepValues){
        return {
            isValid: false, 
            errors:{
                email: 'FAILED! '+stepValues.email
            }
        }
    }

    function onFormChange(values, errors){
        const stepId = 0; 
        journeyActions.updateStep(stepId, values, errors);
    }

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
                <Journey.Step step={0} validator={validateStep1}>
                    
                    

                    <ExampleForm onFormChange={onFormChange} initialValues={formData} />


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


/**
 * @function ExampleForm
 * @desc How to use hook in the wild  
 */
function ExampleForm({onFormChange, initialValues}) {

    /**
     * @step use hook 
     * @desc 
     */
    const {
        values,
        errors,
        touched,
        onChange,
        onBlur, 
        onSubmit, 
    } = useForm({
        initialValues,
        submitHandler,
        validationHandler,
    });

    /**
     * @hooks useEffect
     * Watch the values
     */
    // const [journeyStore, journeyActions] = useJourney();
    React.useEffect(()=>{
        onFormChange(values, errors);
    }, [values, errors])


    /**
     * @function submitHandler 
     * @description callback from use form once the form has been submitted 
     */
    const [submittedData, setSubmittedData] = React.useState(null);
    function submitHandler(){
        setSubmittedData(values);
    }

    /**
     * @function validationHandler
     * @description validation handler 
     * @returns {boolean} isValid - return true if valid 
     * @returns {Object} errorMsg - return a field:errorMsg if invalid  
     */
    function validationHandler(){

        const email = values?.email; 

        if(!email) return { email: 'You need to provide an email'};

        if(email.length < 5) return {email: 'Your email must be greater than 5 chars in length '}

        return true; 
    }

    /**
     * @step render
     */
    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    Email: 
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                    {(touched.email && errors.email) && <div>🥵 {errors.email}</div> } 
                    {(touched.email && !errors.email && values.email.length > 0) && <div> 🤑 </div> }
                </label>
                <div>
                    <input type="submit" value='💾 Save' />
                </div>
            </form>

            
            <pre className='pre-well'>
                Form Values:
                {JSON.stringify(values, null, 4)}
            </pre>
            
            <pre className='pre-well'>
                Form Errors:
                {JSON.stringify(errors, null, 4)}
            </pre>
            
            <pre className='pre-well'>
                Form Touched:
                {JSON.stringify(touched, null, 4)}
            </pre>

            {submittedData && <>
                <hr />
                <h3> Submitted on 💾 Save </h3>
                <pre className='pre-well'>
                    {JSON.stringify(submittedData, null, 4)}
                </pre>
            </>}
        </>
    );

}

