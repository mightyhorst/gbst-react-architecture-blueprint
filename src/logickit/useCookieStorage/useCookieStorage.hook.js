/**
 * @requires Libraries
 */
import { useState, useCallback, useEffect } from 'react';
import Cookies from 'js-cookie';


/**
 * A hook that allows the component to define and store data to cookies using the
 * js-cookie library.
 * 
 * This hook can create, update and delete a cookie based on its key name
 *
 * @export
 * @param {*} key
 * @param {*} initialValue
 * @returns
 */
export function useCookieStorage(key, initialValue)
{
    // -- Define the state of the cookie value. Used to provide the component with a direct value
    const [storedValue, setStoredValue] = useState(() => {
        try
        {
            const value = Cookies.get(key);
            return value;
        }
        catch(error)
        {
            return initialValue;
        }
    });

    // -- Update the storedValue by refetching the cookie if the key has changed
    useEffect(() => {

        try {
            /** 
             * Get from local storage by key
             */
            const item = Cookies.get(key);

            /** 
             * Parse stored json or if none return initialValue
             */
            setStoredValue(item || null);

        } catch (error) {
            setStoredValue(null);
        }

    }, [key]);


    // -- Allow the component to update the value of a cookie
    const setValue = useCallback((value) => {
        try
        {
            /** 
             * Allow value to be a function so we have same API as useState
             */
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            // -- Save the value to the cookie
            Cookies.set(key, valueToStore);

            // -- Save the value in state
            setStoredValue(valueToStore)
        }
        catch(error)
        {
            console.log(error);
        }
    }, [key]);

    // -- Allow the component to delete an existing cookie
    const removeItem = () => {
        Cookies.remove(key);
        setStoredValue(null);
    }

    return [storedValue, setValue, removeItem];
}



// const [value, setValue] = useState<string | null>(() => Cookies.get(cookieName) || null);

//   const updateCookie = useCallback(
//     (newValue: string, options?: Cookies.CookieAttributes) => {
//       Cookies.set(cookieName, newValue, options);
//       setValue(newValue);
//     },
//     [cookieName]
//   );

//   const deleteCookie = useCallback(() => {
//     Cookies.remove(cookieName);
//     setValue(null);
//   }, [cookieName]);

//   return [value, updateCookie, deleteCookie];