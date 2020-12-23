import React, {useState} from 'react';

/**
 * @requires 🖖LogicKit
 */


/**
 * @requires Components 
 */
import { ExampleForm } from './ExampleForm';

/**
 * @requires Formik 
 */
import { useFormik } from 'formik';
import * as Yup from 'yup';

/**
 * @component ExampleValidationSchema
 * @desc 
 */
export function ExampleValidationSchema({ initialValues }) {

    /**
     * @step use hook 
     * @desc 
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
                    {(touched.email &&  errors.email) && <div>❗️ {errors.email}</div>}
                    {(touched.email && !errors.email) && <div> 🤑 </div>}
                </label>
                <div>
                    <input type="submit" value='💾 Save' />
                </div>
            </form>

            
            <pre>
                Form Values:
                {JSON.stringify(values, null, 4)}
            </pre>
            
            <pre>
                Form Errors: 
                {JSON.stringify(errors, null, 4)}
            </pre>
            
            <pre>
                Form Touched:
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
