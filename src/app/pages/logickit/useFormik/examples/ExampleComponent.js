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
import * as Yup from 'yup';


/**
 * @knobs 
 */
const mockFormData = React.createRef({
    name: 'Mitchy',
    imgUrl: '',
    email: 'nick@email.com'
});

/**
 * @component ExampleComponent
 * @desc How to use hook in the wild  
 */
export function ExampleComponent({ initialValues }) {

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
