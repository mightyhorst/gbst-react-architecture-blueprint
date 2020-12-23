import React, {useState} from 'react';

/**
 * @requires 🖖LogicKit
 */
// import {
//     StatusEnum, 
//     useAsync
// } from '../../../../../logickit';

/**
 * @requires Components 
 */
import { ExampleForm } from './ExampleForm';

/**
 * @requires Vendor 
 */
import { useFormik } from 'formik';

/**
 * @component ExampleValidation
 * @desc How to use hook in the wild  
 */
export function ExampleValidation({ initialValues }) {

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
                    {(touched?.email && !errors.email && values?.email?.length > 0) && <div> 🤑 </div>}
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
