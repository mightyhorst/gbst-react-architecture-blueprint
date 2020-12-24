import {useState, useEffect} from 'react';


export function useSessionStorage(key, initialValue)
{
    /**
     * State to store our value
     * Pass initial state function to useState so logic is only executed once
     */
    const [storedValue, setStoredValue] = useState(() => {
        try {
            /** 
             * Get from local storage by key
             */
            const item = window.sessionStorage.getItem(key);

            /** 
             * Parse stored json or if none return initialValue
             */
            return item ? JSON.parse(item) : initialValue;

        } catch (error) {
            /** 
             * If error also return initialValue
             */
            return initialValue;
        }
    });

    // -- Update the storedValue if the key changes and an existing key is found
    useEffect(() => {

        try {
            /** 
             * Get from local storage by key
             */
            const item = window.sessionStorage.getItem(key);

            /** 
             * Parse stored json or if none return initialValue
             */
            setStoredValue(item ? JSON.parse(item) : null);

        } catch (error) {
            setStoredValue(null);
        }

    }, [key]);

    
    /**
     * Return a wrapped version of useState's setter function that persists the new value to localStorage. 
     * @param {any} value - value to save  
     */
    const setValue = value => {
        try {
            /** 
             * Allow value to be a function so we have same API as useState
             */
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            
            /** 
             * Save state
             */
            setStoredValue(valueToStore);
            /** 
             * Save to local storage
             */
            window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            /** 
             * A more advanced implementation would handle the error case
             */
            console.log(error);
        }
    };

    const removeItem = () => {
        window.sessionStorage.removeItem(key);
        setStoredValue(null);
    }

    return [storedValue, setValue, removeItem];
}