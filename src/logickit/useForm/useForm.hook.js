import { useState, useReducer } from 'react';

function formReducer(store, action){

    switch(action.type){
        case 'SET_FIELD_VALUE':
            return {
                ...store,
                values: {
                    ...store.values,
                    ...action.payload,
                }
            }
        case 'SET_FIELD_TOUCHED':
            return {
                ...store,
                touched: {
                    ...store.touched,
                    ...action.payload,
                }
            }
        case 'SET_FIELD_ERROR':
            return {
                ...store,
                errors: {
                    ...store.errors,
                    ...action.payload,
                }
            }
        case 'CLEAR_ERRORS':
            return {
                ...store,
                errors: {}
            }
        default:
            return store; 
    }
}

export function useForm({initialValues, submitHandler, validationHandler}){

    /**
     * @step validate props
     */
    if(!submitHandler) throw new Error(`🤯 You must include 'submitHandler' callback to useForm`);

    /**
     * @step 
     */
    const [formState, dispatch] = useReducer(formReducer, {
        values: initialValues || {},
        errors: {},
        touched: {},
    });

    /**
     * 
     * @param {Event} event - on change event 
     */
    const onChange = (event) => {
        event.persist(); 

        const { name: fieldName, value: fieldValue } = event?.target;

        dispatch({
            type: 'SET_FIELD_VALUE',
            payload: {
                [fieldName]: fieldValue, 
            }
        })

        // _checkErrors();
    }    

    const onBlur = (event) => {
        event.persist();
        
        const { name: fieldName } = event?.target;

        dispatch({
            type: 'SET_FIELD_TOUCHED',
            payload: {
                [fieldName]: true, 
            }
        })

        // _checkErrors(); 
    }

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch({type: 'CLEAR_ERRORS'});
        
        const isValid = _checkErrors();
        // _setAllTocuhed();

        if(isValid) submitHandler(formState.values); 
    }

    const _checkErrors = () => {
        let isValid = validationHandler ? false : true; 
        let validationResult; 

        if(validationHandler){
            validationResult = validationHandler();

            if(typeof(validationResult) === 'boolean') isValid = validationResult;
            else isValid = false; 
        } 

        if(!isValid){
            dispatch({
                type: 'SET_FIELD_ERROR',
                payload: validationResult
            })
        } 

        return isValid;
    }

    return {
        onChange, 
        onSubmit,
        onBlur,
        values: formState.values, 
        errors: formState.errors,
        touched: formState.touched,
    }

}
