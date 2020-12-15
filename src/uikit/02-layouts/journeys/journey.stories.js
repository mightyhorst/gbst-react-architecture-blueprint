import React, { useEffect, useState } from 'react';

/**
 * @requires Storybook 
 */
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as booleanKnob, number as numberKnob, object as objectKnob, text as textKnob } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withConsole } from '@storybook/addon-console';

/**
 * @requires Components 
 */
import {
    TOGGLES,
    DATES,
} from './elements';
import {
    Page,
    useJourney,
    JourneyProvider,
    Journey,
    JourneyNav,
    JourneyNavStep,
    JourneyNavStepWithLogic, 
    JourneyStep,
    JourneyStepWithLogic ,
    JourneyContent,
    JourneyStepWell,
    JourneyStepFooter,
    NextStepButton,
} from '../../';
import InputTypeahead, { InputTypeaheadField } from '../../../components/generic/forms/InputTypeahead';
import SelectControl from '../../../components/generic/forms/SelectControl';
import { DatePeriodInputControl } from '../../../components/generic/forms/DatePeriodInputControl';
import {
    InputCurrencyRangeTableExample,
    InputGroupSizeExample,
} from '../../05-elements/forms'



/**
 * @namespace Hooks 
 * @requires FormHooks 
 */
import { useForm } from '../../../hooks/useForm';


/**
 * @namespace Hooks 
 * @requires ApiHooks 
 */
import { useGet, usePost, usePut, usePatch, useDelete } from '../../../hooks/useApi';
import { StatusEnum } from '../../../hooks/useAsync';
import { useAuth, AuthProvider } from '../../../hooks/useAuth';

/**
 * @namespace mock 
 * @requires mocks for API hooks 
 */
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
const mock = new MockAdapter(axios);


/**
 * @namespace storybook 
 */
storiesOf('💅UIKit/02-layouts/journeys', module)
    .addDecorator(withKnobs)
    .addDecorator(withNotes)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .add('architecture', () => {
        return <iframe
            style={{
                border: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }}
            src='http://gbst-react-patterns.surge.sh/uikit/journey.html'
        />
    })
    .add('step 1: Portal', () => {

        /**
         * @const Knobs 
         */
        const txtContents = textKnob('Contents', 'This is a page');

        return (
            <Page>
                {txtContents}
            </Page>
        );
    })
    .add('step 2.1: Layout - Journey ', () => {

        /**
         * @const Knobs 
         */


        /**
         * @function ExampleJourney
         * @desc 
         */
        function ExampleJourney() {

            /**
             * @step render
             */
            return (

                <Journey>
                    <JourneyNav>

                    </JourneyNav>
                    <JourneyContent>

                    </JourneyContent>
                </Journey>

            );

        }

        return (
            <Page>
                <ExampleJourney />
            </Page>
        );
    })
    .add('step 2.2: Layout - Journey Steps ', () => {

        /**
         * @const Knobs 
         */


        /**
         * @function ExampleJourney
         * @desc 
         */
        function ExampleJourney() {

            /**
             * @step render
             */
            return (

                <Journey>

                    <JourneyNav>
                        <JourneyNavStep step={1} title='Client Details' isActive />
                        <JourneyNavStep step={2} title='Application Details' />
                        <JourneyNavStep step={3} title='Summary' />
                    </JourneyNav>
                    <JourneyContent>
                        <JourneyStep>

                        </JourneyStep>
                        <JourneyStep>

                        </JourneyStep>
                        <JourneyStep>

                        </JourneyStep>
                    </JourneyContent>


                </Journey>

            );

        }

        return (
            <Page>
                <ExampleJourney />
            </Page>
        );
    })
    .add('step 2.3: Layout - Journey Content ', () => {

        /**
         * @const Knobs 
         */


        /**
         * @function ExampleJourney
         * @desc 
         */
        function ExampleJourney() {

            const onNextStep = () => {
                alert('@todo next step');
            }

            /**
             * @step render
             */
            return (
                <Journey>
                    <JourneyNav>
                        <JourneyNavStep step={1} title='Client Details' isActive />
                        <JourneyNavStep step={2} title='Application Details' />
                        <JourneyNavStep step={3} title='Summary' />
                    </JourneyNav>
                    <JourneyContent>
                        <JourneyStep>
                            <JourneyStepWell title='Product Details'>

                            </JourneyStepWell>

                            <JourneyStepWell title='Advisor'>

                            </JourneyStepWell>

                            <JourneyStepWell title='Personal Details'>

                            </JourneyStepWell>

                            <JourneyStepFooter>
                                <NextStepButton onNextStep={onNextStep} />
                            </JourneyStepFooter>
                        </JourneyStep>
                    </JourneyContent>
                </Journey>
            );

        }

        return (
            <Page>
                <ExampleJourney />
            </Page>
        );
    })
    .add('step 3.1: Compounds - Wells ', () => {

        /**
         * @const Knobs 
         */


        /**
         * @function ExampleJourney
         * @desc 
         */
        function ExampleJourney() {

            const onNextStep = () => {
                alert('@todo next step');
            }

            /**
             * @step render
             */
            return (
                <Journey>
                    <JourneyNav>
                        <JourneyNavStep step={1} title='Client Details' isActive />
                        <JourneyNavStep step={2} title='Application Details' />
                        <JourneyNavStep step={3} title='Summary' />
                    </JourneyNav>
                    <JourneyContent>
                        <JourneyStep>
                            <ProductWell>

                            </ProductWell>
                            <AdvisorWell>

                            </AdvisorWell>
                            <PersonalDetailsWell>

                            </PersonalDetailsWell>
                            <JourneyStepFooter>
                                <NextStepButton onNextStep={onNextStep} />
                            </JourneyStepFooter>
                        </JourneyStep>
                    </JourneyContent>
                </Journey>
            );

        }

        function ProductWell({ children }) {
            return (
                <JourneyStepWell title='Product Details'>
                    {children}
                </JourneyStepWell>
            )
        }

        function AdvisorWell({ children }) {
            return (
                <JourneyStepWell title='Advisor'>
                    {children}
                </JourneyStepWell>
            )
        }

        function PersonalDetailsWell({ children }) {
            return (
                <JourneyStepWell title='Personal Details'>
                    {children}
                </JourneyStepWell>
            );
        }

        return (
            <Page>
                <ExampleJourney />
            </Page>
        );
    })
    .add('step 4.1: Elements', () => {

        /**
         * @const Knobs 
         */
        const productOptions = objectKnob('Products Data', [
            {
                "fund": "Canada Life",
                "fundId": "4",
                "subfund": "Canada Life Pension Annuity",
                "subfundId": "4",
                "product": "CL Accumulation",
                "productId": "57",
                "productFlag": "A",
                "productType": "Accumulation",
                "id": "57",
                "label": "Canada Life / Canada Life Pension Annuity / CL Accumulation",
                "value": "57"
            },
            {
                "fund": "Canada Life",
                "fundId": "4",
                "subfund": "Canada Life Pension Annuity",
                "subfundId": "4",
                "product": "TEST Accumulation ServiceFlag N",
                "productId": "69",
                "productFlag": "A",
                "productType": "Accumulation",
                "id": "69",
                "label": "Canada Life / Canada Life Pension Annuity / TEST Accumulation ServiceFlag N",
                "value": "69"
            },
            {
                "fund": "GBST Scheme",
                "fundId": "3",
                "subfund": "GBST (Guarantee)",
                "subfundId": "2",
                "product": "GBST SIPP Uncrystallised",
                "productId": "19",
                "productFlag": "A",
                "productType": "Accumulation",
                "id": "19",
                "label": "GBST Scheme / GBST (Guarantee) / GBST SIPP Uncrystallised",
                "value": "19"
            },
            {
                "fund": "GBST Scheme",
                "fundId": "3",
                "subfund": "InfoComp (Annuity)",
                "subfundId": "3",
                "product": "InfoComp SIPP Uncrystallised",
                "productId": "51",
                "productFlag": "A",
                "productType": "Accumulation",
                "id": "51",
                "label": "GBST Scheme / InfoComp (Annuity) / InfoComp SIPP Uncrystallised",
                "value": "51"
            }
        ]);


        /**
         * @function ExampleJourney
         * @desc 
         */
        function ExampleJourney() {

            const onNextStep = () => {
                alert('@todo next step');
            }

            /**
             * @step render
             */
            return (
                <Journey>
                    <JourneyNav>
                        <JourneyNavStep step={1} title='Client Details' isActive />
                        <JourneyNavStep step={2} title='Application Details' />
                        <JourneyNavStep step={3} title='Summary' />
                    </JourneyNav>
                    <JourneyContent>
                        <JourneyStep>
                            <ProductWell>
                                <InputElement
                                    index={1}
                                    productOptions={productOptions}
                                    errorMsg='Please ensure that Product Details are entered.'
                                />
                            </ProductWell>
                            <AdvisorWell>
                                <DATES />
                            </AdvisorWell>
                            <PersonalDetailsWell>
                                <InputCurrencyRangeTableExample />
                            </PersonalDetailsWell>
                            <JourneyStepFooter>
                                <NextStepButton onNextStep={onNextStep} />
                            </JourneyStepFooter>
                        </JourneyStep>
                    </JourneyContent>
                </Journey>
            );

        }

        function ProductWell({ children }) {
            return (
                <JourneyStepWell title='Product Details'>
                    {children}
                </JourneyStepWell>
            );
            return (
                <JourneyStepWell title='Product Details'>
                    <InputElement
                        index={0}
                        productOptions={productOptions}
                    />
                    <InputElement
                        index={1}
                        productOptions={productOptions}
                        errorMsg='Please ensure that Product Details are entered.'
                    />
                    {/* <RowCompound
                        txtLbl='Date Control'
                        isReq={true}
                        errorMsg='Error Message'
                        index={0}
                    >
                        <DateElement />
                    </RowCompound> */}
                    <DATES />
                    {/* <TOGGLES /> */}

                </JourneyStepWell>
            )
        }

        function RowCompound({ children, txtLbl, isReq, errorMsg, index }) {
            return (<>
                <div className="DynamicColumns-col" dataColIndex={index || 0}>
                    <span data-validation-state={errorMsg ? 'error' : 'valid'}>
                        <label dataComponentName="ControlLabel" htmlFor="product-9594" className="control-label ControlLabel">
                            {txtLbl}
                            {isReq && <span className="required"> *</span>}
                        </label>
                    </span>

                    {children}

                    {errorMsg &&
                        <div className="inline-error">
                            <span dataComponentName="HelpBlock" className="help-block HelpBlock">
                                {errorMsg}
                            </span>
                        </div>
                    }
                </div>
            </>)
        }

        function InputElement({ productOptions, errorMsg, index }) {
            return (<>
                <div className="DynamicColumns-col" dataColIndex={index || 0}>
                    <span validationstate={errorMsg ? 'error' : 'valid'}>
                        <label dataComponentName="ControlLabel" htmlFor="product-9594" className="control-label ControlLabel">
                            Please select a product to commence
                            <span className="required"> *</span>
                        </label>
                    </span>

                    <InputTypeahead
                        clearOnInvalidSelection
                        options={productOptions}
                        validateParams={{ productOptions }}
                        onChange={(args) => {
                            console.log(args);
                        }}
                    />

                    {errorMsg &&
                        <div className="inline-error">
                            <span dataComponentName="HelpBlock" className="help-block HelpBlock">
                                {errorMsg}
                            </span>
                        </div>
                    }
                </div>
            </>)
        }



        function DateElement(props) {

            var someDate = new Date();
            var numberOfDaysToAdd = 3;
            var date = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

            return (<>
                <DatePeriodInputControl
                    type='date'
                    value={date}
                    defaultValue={date}
                    min="2018-01-01"
                    max="2021-12-31"
                    onChange={e => {
                        console.log(e)
                    }}
                    onBlur={e => {
                        console.log(e)
                    }}
                    name='Date Field'
                    label='Datearama'
                    periodYearsProps={{
                        prefix: 'Start',
                        value: '2020-12-12',
                        disabled: false
                    }}
                    periodMonthsProps={{
                        prefix: 'End',
                        value: '2020-12-12',
                        disabled: false
                    }}
                />
                <DatePeriodInputControl
                    periodYearsProps={{
                        prefix: 'Period Years',
                        value: 1,
                    }}
                    periodMonthsProps={{
                        prefix: 'Period Months',
                    }}
                />
            </>)
        }

        function AdvisorWell({ children }) {
            return (
                <JourneyStepWell title='Advisor'>
                    {children}
                </JourneyStepWell>
            )
        }

        function PersonalDetailsWell({ children }) {
            return (
                <JourneyStepWell title='Personal Details'>
                    {children}
                </JourneyStepWell>
            );
        }

        return (
            <Page>
                <ExampleJourney />
            </Page>
        );
    })
    .add('💅 LogicKit/step 1: Add journey state', () => {

        /**
         * @const Knobs 
         */
        const steps = objectKnob('Initial Steps', [
            {
                title: 'Client Details'
            },
            {
                title: 'Application Details'
            }
        ]);        


        /**
         * @function ExampleJourney
         * @desc 
         */
        function ExampleJourney() {

            const [journeyStore, journeyActions] = useJourney();

            /**
             * @step render
             */
            return (
                <Page>

                    <pre>
                        {JSON.stringify(journeyStore, null, 4)}
                    </pre>
                    <button onClick={journeyActions.previousStep}> Previous Step </button>
                    <button onClick={journeyActions.nextStep}> Next Step </button>
                    <Journey>

                        <JourneyNav>
                            <JourneyNavStep step={0} title='Client Details' isActive />
                            <JourneyNavStep step={1} title='Application Details' />
                            <JourneyNavStep step={2} title='Summary' />
                        </JourneyNav>
                        <JourneyContent>
                            <JourneyStep step={0}>

                            </JourneyStep>
                            <JourneyStep step={1}>

                            </JourneyStep>
                            <JourneyStep step={2}>

                            </JourneyStep>
                        </JourneyContent>


                    </Journey>
                </Page>
            );

        }

        return (
            <JourneyProvider steps={steps}>
                <ExampleJourney />
            </JourneyProvider>
        );
    })
    .add('💅 LogicKit/step 2: Add form state', () => {

        /**
         * @namespace Knobs  
         * @const Steps  
         */
        const steps = objectKnob('Initial Steps', [
            {
                title: 'Client Details'
            },
            {
                title: 'Application Details'
            }
        ]);
        /**
         * @namespace Knobs  
         * @const Forms 
         */
        const formData = objectKnob('Form Data', {
            name: 'Mitchy',
            email: 'nick@email.com',
        });

        /**
         * @function ExampleJourney
         * @desc 
         */
        function ExampleJourney() {

            const [journeyStore, journeyActions] = useJourney();

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
                <Page>

                    <pre>
                        {JSON.stringify(journeyStore, null, 4)}
                    </pre>
                    <button onClick={journeyActions.previousStep}> Previous Step </button>
                    <button onClick={journeyActions.nextStep}> Next Step </button>
                    <Journey>

                        <JourneyNav>
                            <JourneyNavStepWithLogic step={0} title='Client Details' />
                            <JourneyNavStepWithLogic step={1} title='Application Details' />
                            <JourneyNavStepWithLogic step={2} title='Summary' />
                        </JourneyNav>
                        <JourneyContent>
                            <JourneyStepWithLogic step={0} validator={validateStep1}>

                                <ExampleForm onFormChange={onFormChange} initialValues={formData} />

                            </JourneyStepWithLogic>
                            <JourneyStepWithLogic step={1}>

                            </JourneyStepWithLogic>
                            <JourneyStepWithLogic  step={2}>

                            </JourneyStepWithLogic>
                        </JourneyContent>


                    </Journey>
                </Page>
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
            useEffect(()=>{
                onFormChange(values, errors);
            }, [values, errors])


            /**
             * @function submitHandler 
             * @description callback from use form once the form has been submitted 
             */
            const [submittedData, setSubmittedData] = useState(null);
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

                    <h4> Form Values </h4>
                    <pre>
                        {JSON.stringify(values, null, 4)}
                    </pre>
                    <h4> Form Errors </h4>
                    <pre>
                        {JSON.stringify(errors, null, 4)}
                    </pre>
                    <h4> Form Touched </h4>
                    <pre>
                        {JSON.stringify(touched, null, 4)}
                    </pre>

                    {submittedData && <>
                        <hr />
                        <h3> Submitted on 💾 Save </h3>
                        <pre>
                            {JSON.stringify(submittedData, null, 4)}
                        </pre>
                    </>}
                </>
            );

        }

        return (
            <JourneyProvider steps={steps}>
                <ExampleJourney />
            </JourneyProvider>
        );
    })
    .add('💅 LogicKit/step 4: Add API + Auth Provider', () => {

        /**
         * @const Knobs 
         */
        const url = textKnob('API URL', '/api/get/stuff');
        const stepsApi = objectKnob('Mock API Data', [
            {
                title: 'Client Details'
            },
            {
                title: 'Application Details'
            }
        ]);
        const mockWaitTime = numberKnob('Mock Wait Time', 1000);

        /**
         * @namespace mock 
         */
        mock.onGet(url).reply((req) => {
            return [200, stepsApi];
        });

        /**
         * @function ExampleComponent
         * @desc How to use hook in the wild  
         */
        function ExampleWithAuthProvider() {

            /**
             * @step input form
             * @desc let's create some sample login form to show if the user isn't logged in
             */
            const [username, setUsername] = useState('shukut');
            const [password, setPassword] = useState('shukut');
            const txtUsername = <input type="text" value={username} onChange={e => { setUsername(e.target.value) }} />   
            const txtPwd = <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} />

            /**
             * @step useAuth to login 
             * @desc this will return a token which we can pass instantly to useGet
             */
            const [authStore, authActions] = useAuth(); 
            const token = authStore?.data?.default?.access_token;
            console.log({authStore})

            /**
             * @step use GET hook 
             * @desc the token is automagically updated via pub/sub 
             */
            const {
                status,
                data,
                error,
                cancel,
                refetch: fetch,
            } = useGet(url, mockWaitTime, token);

            /**
             * @function login handler 
             */
            function login(){
                if(status !== StatusEnum.PENDING)
                    authActions.login(username, password);
            }

            return (<>
                {token ?
                    <>
                        <button onClick={fetch}>  
                            {status === StatusEnum.PENDING ? <i> ✋ loading...</i> : <>🧙 GET api data </>}
                        </button>
                        <h4> Token </h4>
                        <pre> {token} </pre>

                        <h4> Data: {status} </h4>
                        <pre> {JSON.stringify(data, null, 4)} </pre>
                    </>
                    : 
                    <>
                        {txtUsername}
                        {txtPwd}
                        <button onClick={login}> 🙅 Login first </button>
                    </>
                }
            </>)

        }

        /**
         * @pattern Provider Pattern
         * @desc We need to wrap the component with the AuthProvider which uses Context to inject the auth actions and store
         * This means we can use the hook: useAuth 
         */
        return (
            <AuthProvider>
                <ExampleWithAuthProvider />
            </AuthProvider>
        );

    })
    .add('💅 LogicKit/step 5: Journey + API + Auth Provider', () => {

        /**
         * @namespace Knobs  
         * @const Forms 
         */
        const formData = objectKnob('Form Data', {
            name: 'Mitchy',
            email: 'nick@email.com',
        });

        /**
         * @const Knobs 
         */
        const url = textKnob('API URL', '/api/get/stuff');
        const stepsApi = objectKnob('Mock API Data', [
            {
                title: 'Client Details'
            },
            {
                title: 'Application Details'
            }
        ]);
        const mockWaitTime = numberKnob('Mock Wait Time', 1000);

        /**
         * @namespace mock 
         */
        mock.onGet(url).reply((req) => {
            return [200, stepsApi];
        });

        /**
         * @function ExampleComponent
         * @desc How to use hook in the wild  
         */
        function ExampleWithAuthProvider({children}) {

            /**
             * @step input form
             * @desc let's create some sample login form to show if the user isn't logged in
             */
            const [username, setUsername] = useState('shukut');
            const [password, setPassword] = useState('shukut');
            const txtUsername = <input type="text" value={username} onChange={e => { setUsername(e.target.value) }} />   
            const txtPwd = <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} />

            /**
             * @step useAuth to login 
             * @desc this will return a token which we can pass instantly to useGet
             */
            const [authStore, authActions] = useAuth(); 
            const token = authStore?.data?.default?.access_token;
            console.log({authStore})

            /**
             * @step use GET hook 
             * @desc the token is automagically updated via pub/sub 
             */
            const {
                status,
                data,
                error,
                cancel,
                refetch: fetch,
            } = useGet(url, mockWaitTime, token);

            /**
             * @function login handler 
             */
            function login(){
                if(status !== StatusEnum.PENDING)
                    authActions.login(username, password);
            }

            return (<>
                {token ?
                    <>
                        <button onClick={fetch}>  
                            {status === StatusEnum.PENDING ? <i> ✋ loading...</i> : <>🧙 GET api data </>}
                        </button>
                        {
                            status === StatusEnum.SUCCESS && children
                        }
                    </>
                    : 
                    <>
                        {txtUsername}
                        {txtPwd}
                        <button onClick={login}> 🙅 Login first </button>
                    </>
                }
            </>)

        }

        
        /**
         * @component ExampleJourney
         * @desc 
         */
        function ExampleJourney() {

            const [journeyStore, journeyActions] = useJourney();

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
                <Page>

                    <pre>
                        {JSON.stringify(journeyStore, null, 4)}
                    </pre>
                    <button onClick={journeyActions.previousStep}> Previous Step </button>
                    <button onClick={journeyActions.nextStep}> Next Step </button>
                    <Journey>

                        <JourneyNav>
                            <JourneyNavStepWithLogic step={0} title='Client Details' />
                            <JourneyNavStepWithLogic step={1} title='Application Details' />
                            <JourneyNavStepWithLogic step={2} title='Summary' />
                        </JourneyNav>
                        <JourneyContent>
                            <JourneyStepWithLogic step={0} validator={validateStep1}>

                                <ExampleForm onFormChange={onFormChange} initialValues={formData} />

                            </JourneyStepWithLogic>
                            <JourneyStepWithLogic step={1}>

                            </JourneyStepWithLogic>
                            <JourneyStepWithLogic  step={2}>

                            </JourneyStepWithLogic>
                        </JourneyContent>


                    </Journey>
                </Page>
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
            useEffect(()=>{
                onFormChange(values, errors);
            }, [values, errors])


            /**
             * @function submitHandler 
             * @description callback from use form once the form has been submitted 
             */
            const [submittedData, setSubmittedData] = useState(null);
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

                    <h4> Form Values </h4>
                    <pre>
                        {JSON.stringify(values, null, 4)}
                    </pre>
                    <h4> Form Errors </h4>
                    <pre>
                        {JSON.stringify(errors, null, 4)}
                    </pre>
                    <h4> Form Touched </h4>
                    <pre>
                        {JSON.stringify(touched, null, 4)}
                    </pre>

                    {submittedData && <>
                        <hr />
                        <h3> Submitted on 💾 Save </h3>
                        <pre>
                            {JSON.stringify(submittedData, null, 4)}
                        </pre>
                    </>}
                </>
            );

        }

        /**
         * @pattern Provider Pattern
         * @desc We need to wrap the component with the AuthProvider which uses Context to inject the auth actions and store
         * This means we can use the hook: useAuth 
         */
        return (
            <AuthProvider>
                <ExampleWithAuthProvider>
                    <JourneyProvider steps={stepsApi}>
                        <ExampleJourney />
                    </JourneyProvider>
                </ExampleWithAuthProvider>
            </AuthProvider>
        );

    })
