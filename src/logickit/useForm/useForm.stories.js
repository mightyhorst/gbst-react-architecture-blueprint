import React, {useState} from 'react';

/**
 * @requires Storybook 
 */
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as booleanKnob, number as numberKnob, object as objectKnob, text as textKnob } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withConsole } from '@storybook/addon-console';

/**
 * @requires Hooks 
 */
import { useForm } from './';


/**
 * @namespace storybook 
 */
storiesOf('🖖LogicKit/hooks/05-useForms', module)
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
            src='http://gbst-react-patterns.surge.sh/hooks/useForm.html'
        />
    })
    .add('useGet simple example', () => {

        /**
         * @const Knobs 
         */
        const formData = objectKnob('Form Data', {
            name: 'Mitchy',
            imgUrl: '', 
        });

        /**
         * @function ExampleComponent
         * @desc How to use hook in the wild  
         */
        function ExampleComponent() {

            /**
             * @step use hook 
             * @desc 
             * 
             */
            const {
                values,
                errors,
                touched,
                onChange,
                onBlur, 
                onSubmit, 
            } = useForm({
                initialValues: formData,
                submitHandler,
                validationHandler,
            });

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
            <ExampleComponent />
        );
    });