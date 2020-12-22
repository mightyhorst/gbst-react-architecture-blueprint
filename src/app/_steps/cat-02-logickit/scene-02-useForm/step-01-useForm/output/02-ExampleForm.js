import React, {useState} from "react";

/**
* @requires LogicKit
*/
import {
  useForm,
} from './logickit';


/**
 * @component ExampleForm
 * @desc How to use hook in the wild
 */
function ExampleForm({initialValues}) {
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
    onSubmit 
  } = useForm({
    initialValues: initialValues,
    submitHandler,
    validationHandler
  });

  /**
   * @component submitHandler
   * @description callback from use form once the form has been submitted
   */
  const [submittedData, setSubmittedData] = useState(null);
  function submitHandler() {
    setSubmittedData(values);
  }

  /**
   * @component validationHandler
   * @description validation handler
   * @returns {boolean} isValid - return true if valid
   * @returns {Object} errorMsg - return a field:errorMsg if invalid
   */
  function validationHandler() {
    const email = values?.email;

    if (!email) return { email: "You need to provide an email" };

    if (email.length < 5)
      return { email: "Your email must be greater than 5 chars in length " };

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
          {touched.email && errors.email && <div>🥵 {errors.email}</div>}
          {touched.email && !errors.email && values.email.length > 0 && (
            <div> 🤑 </div>
          )}
        </label>
        <div>
          <input type="submit" value="💾 Save" />
        </div>
      </form>

      <h4> Form Values </h4>
      <pre>{JSON.stringify(values, null, 4)}</pre>
      <h4> Form Errors </h4>
      <pre>{JSON.stringify(errors, null, 4)}</pre>
      <h4> Form Touched </h4>
      <pre>{JSON.stringify(touched, null, 4)}</pre>

      {submittedData && (
        <>
          <hr />
          <h3> Submitted on 💾 Save </h3>
          <pre>{JSON.stringify(submittedData, null, 4)}</pre>
        </>
      )}
    </>
  );
}

export default ExampleForm;
