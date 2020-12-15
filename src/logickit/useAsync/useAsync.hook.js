import {useState, useCallback, useEffect} from 'react';

import {StatusEnum} from '../';

/**
 * @name useAsync hook
 * @description  
 *      It's generally a good practice to indicate to users the status of any async request. 
 *      An example would be fetching data from an API and displaying a loading indicator before rendering the results. 
 *      
 *      Rather than litter your components with a bunch of useState calls to keep track of the state of an async function, 
 *      you can use our custom hook which takes an async function as an input and returns the data, error, and status datas we need to properly update our UI. 
 *      Possible datas for status prop are: "idle", "pending", "success", "error" (from the StatusEnum). 
 *      As you'll see in the code below, our hook allows both immediate execution and delayed execution using the returned execute function.
 *  
 * @param {Function} asyncFn - async function to be invoked
 * @param {boolean} isInvokedImmediately? - invoke immediately by default or defer and let the componet inovke with the expoerted `execute()` fn 
 * @returns 
 *      {Function} execute - invoke async function later
 *      {StatusEnum} status - current status of callback 
 *      {any} data - data from the executed function is successful  
 *      {Error} error - error is the function failed    
 * @author Nick Mitchell 
 */
export const useAsync = (asyncFn, isInvokedImmediately = true) => {

    const [status, setStatus] = useState(StatusEnum.IDLE);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    /**
     * @step 1 - Create a useCallback to be inoked from the useEffect side effect
     * @description
     *      The excute fn wraps the async function and handles setting the state lifecycle: idle, pending, success, failure 
     *      
     *      `useCallback` is a hook for "memoisation" of a function. 
     *      Memoisation an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
     * 
     *      because we only want asyncFn to be called from the useEffect hook below ONLY if there are changes, we need to pass the the function into the dependency array for the useEffcet hook. 
     *      This watches the asyncFn, and will only run again if this changes. Because js has shallow equality, we need to useCallback to make sure equality comparison of fn's 
     */
    const executeAsyncFn = useCallback(() => {

        setStatus(StatusEnum.PENDING);

        /**
         * NOTE - we cannot use async/await inside hooks. Why? Because the returned function is what get's "memoized". we want to memoise the asyncFn NOT Prmoise<asyncFn>
         */
        return asyncFn()
            .then(res => {
                setStatus(StatusEnum.SUCCESS);
                setData(res);
                setError(null);
            })
            .catch(err => {
                setStatus(StatusEnum.FAILED);
                setError(err);
                setData(null);
            });

    }, [asyncFn]);

    /**
     * @step 2 - useEffect to invoke the function 
     * @description 
     *      useEffect runs a side effect
     *      Side effects always run AFTER the render function for a component (or the component that inokes the hook)
     *      It will only ever run if anything in the DependencyList changes
     * 
     *      NOTE -  Js has shallow comparisons. 
     *             1. In brief, to compare equality of Objects you will need to useMemo. 
     *             2. For equality of Functions you will need to memoise the function using useMemo or useCallback as a short version
     * 
     *      NOTE - An empty [] will only ever run ionce when the component that inovkes the hook is mounted  
     */
    useEffect(()=>{
        if(isInvokedImmediately){
            executeAsyncFn();
        }
    }, []);


    return {
        executeAsyncFn, 
        status,
        data,
        error,
    }

}