/**
 * @requires Libraries
 */
import { useState, useMemo } from 'react';

/**
 * @requires Models
 */
import { StorageStrategy } from './storage.models';

/**
 * @requires Hooks
 */
import { useLocalStorage } from '../useLocalStorage';
import { useSessionStorage } from '../useSessionStorage';
import { useCookieStorage } from '../useCookieStorage';

export function useStorage(strategy, key, initialValue)
{
    let localStorage = useLocalStorage(key, initialValue);
    let sessionStorage = useSessionStorage(key, initialValue);
    let cookieStorage = useCookieStorage(key, initialValue);

    // -- Based on the strategy, return the correct hook data to be used by the component
    switch(strategy)
    {
        case StorageStrategy.COOKIE:
            return cookieStorage;

        case StorageStrategy.SESSION:
            return sessionStorage;

        case StorageStrategy.LOCAL:
        default:
            return localStorage;
    }  
}