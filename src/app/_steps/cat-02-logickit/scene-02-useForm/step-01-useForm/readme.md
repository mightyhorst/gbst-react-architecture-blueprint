# 🖖 LogicKit - useForm

Forms are ephemeral by nature so we don't need to persist the state, but we do need to validate it before passing it on to another hook for sending to the API or sharing wth other components on our behalf.

Let's take a look at a simple example of how to perfom form validation with `useForm`

### Formik replacement

`useForm` is a complete replacement for Formik entirely. That's because it was actually written by the Jared Palmer the Formk creator by following a tutorial of his: [https://egghead.io/lessons/react-build-your-own-formik-using-react-hooks-with-jared-palmer](https://egghead.io/lessons/react-build-your-own-formik-using-react-hooks-with-jared-palmer)

It works exactly the same, however I have chosen to expose it as a library so we can demysteify its usage and use it in tutorials for learning React state management with hooks.

Formik is completely optional in React, is is ironically supposed to make things easier, and often complicates things.

### 👉 No Provider

We don't need a provider for useForm because we don't want to share state automatically.

> We will see how to hook up the form to useJourney in the next lesson

### 👉 useForm

First let's grab the hook.

```js
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
```

We pass in `initialValues` to seed the default values. 

And we can pass in callbacks for on submit and validating the form `submitHandler` and `validationHandler`


#### Add the form 
We wire up the form like so:

```js
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
  </label>
  <div>
    <input type="submit" value="💾 Save" />
  </div>
</form>
```

* `onSubmit` connects the callback for `submitHandler` and will run the `validationHandler` to make any errors 
* `onChange` listens to any change events and updates the values, touched and errors values 
* `onBlur` listens to any blur event, like clicking away from the form, and updates the values, touched and errors values

### Print the form state 
We can now print the state as it's live updated

```js
<h4> Form Values </h4>
<pre>{JSON.stringify(values, null, 4)}</pre>
<h4> Form Errors </h4>
<pre>{JSON.stringify(errors, null, 4)}</pre>
<h4> Form Touched </h4>
<pre>{JSON.stringify(touched, null, 4)}</pre>

```

> Where `JSON.stringify` will convet a JSON object to a string and `null, 4` will create line breaks with 4 spaces per tab 

