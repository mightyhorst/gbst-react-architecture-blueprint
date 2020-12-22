import React, { useState } from 'react';

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
import { useFormik } from 'formik';
import * as Yup from 'yup';


/**
 * @namespace storybook 
 */
storiesOf('🖖LogicKit/hooks/05-useFormik', module)
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
            src='http://gbst-react-patterns.surge.sh/hooks/useFormik.html'
        />
    })
    .add('useFormik hello world', () => {

        /**
         * @const Knobs 
         */
        const formDataFromKnob = objectKnob('Form Data', {
            name: 'Mitchy',
            imgUrl: '',
            email: 'nick@email.com'
        });

        /**
         * @function ExampleComponent
         * @desc How to use hook in the wild  
         */
        function ExampleComponent({ initialValues }) {

            /**
             * @step use hook 
             * @desc 
             * 
             */
            const {
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            } = useFormik({
                initialValues,
                onSubmit: submitHandler,
            });

            /**
             * @function submitHandler 
             * @description callback from use form once the form has been submitted 
             */
            const [submittedData, setSubmittedData] = useState(null);
            function submitHandler(_values) {
                setSubmittedData(_values);
            }

            /**
             * @step render
             */
            return (
                <>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {(touched?.email && !errors.email && values?.email?.length > 0) && <div> 🤑 </div>}
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
            <ExampleComponent initialValues={formDataFromKnob} />
        );
    })
    .add('useFormik with validation', () => {

        /**
         * @const Knobs 
         */
        const formDataFromKnob = objectKnob('Form Data', {
            name: 'Mitchy',
            imgUrl: '',
            email: 'nick@email.com'
        });

        /**
         * @function ExampleComponent
         * @desc How to use hook in the wild  
         */
        function ExampleComponent({ initialValues }) {

            /**
             * @step use hook 
             * @desc 
             * 
             */
            const {
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            } = useFormik({
                initialValues,
                onSubmit: submitHandler,
                validate: validationHandler,
            });

            /**
             * @function submitHandler 
             * @description callback from use form once the form has been submitted 
             */
            const [submittedData, setSubmittedData] = useState(null);
            function submitHandler(_values) {
                setSubmittedData(_values);
            }

            /**
             * @function validationHandler
             * @description validation handler 
             * @returns {boolean} isValid - return true if valid 
             * @returns {Object} errorMsg - return a field:errorMsg if invalid  
             */
            function validationHandler(_values) {

                // return console.log(values);
                const email = _values?.email;

                if (!email) return { email: 'You need to provide an email' };

                if (email?.length < 5) return { email: 'Your email must be greater than 5 chars in length ' }

                return true;
            }

            /**
             * @step render
             */
            return (
                <>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {(errors.email) && <div>🥵 {errors.email}</div>}
                            {(touched.email && !errors.email && values.email.length > 0) && <div> 🤑 </div>}
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
            <ExampleComponent initialValues={formDataFromKnob} />
        );
    })
    .add('useFormik with Validation Schema', () => {

        /**
         * @const Knobs 
         */
        const formDataFromKnob = objectKnob('Form Data', {
            name: 'Mitchy',
            imgUrl: '',
            email: 'nick@email.com'
        });

        /**
         * @function ExampleComponent
         * @desc How to use hook in the wild  
         */
        function ExampleComponent({ initialValues }) {

            /**
             * @step use hook 
             * @desc 
             * 
             */
            const {
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            } = useFormik({
                initialValues,
                onSubmit: submitHandler,
                validationSchema: validationHandler()
            });

            /**
             * @function submitHandler 
             * @description callback from use form once the form has been submitted 
             */
            const [submittedData, setSubmittedData] = useState(null);
            function submitHandler(_values) {
                setSubmittedData(_values);
            }

            /**
             * @constant validationSchema
             * @description Let's use yup by replacing the validation handler with validationSchema 
             * @returns {boolean} isValid - return true if valid 
             * @returns {Object} errorMsg - return a field:errorMsg if invalid  
             */
            function validationHandler() {

                return Yup.object({
                    email: Yup
                        .string()
                        .email('Invalid email')
                        .min(5, 'Must be more than 5 chars')
                        .required('An email is required bro')

                })
                    
            }

            /**
             * @step render
             */
            return (
                <>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {(errors.email) && <div>🥵 {errors.email}</div>}
                            {(touched.email && !errors.email) && <div> 🤑 </div>}
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
            <ExampleComponent initialValues={formDataFromKnob} />
        );
    });