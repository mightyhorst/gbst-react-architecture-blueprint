import {useState, useCallback, useEffect, useMemo} from 'react';
import axios from 'axios';

/**
 * @requires Hooks
 */
import { useAsync } from '../';
import { 
    StatusEnum, 
    HttpMethod,
    ApiRespEnum, 
    ApiErrorEnum, 
    transformResponse 
} from '../';

/**
 * @name useApi hook
 * @description  
 *      
 *  
 * @param {string} url - path relative to the baseUrl  
 * @param {string} method - Http Verb e.g. 'GET', 'PUT', 'POST', 'PATCH', 'DELETE'  
 * @param {any} reqData? - data payload for the request   
 * @param {string} accessToken? - JWT access token    
 * @param {AxiosHeaders} headers? - Axios headers other than bearer token     
 * @param {AxiosConfig} additionalOptions? - Axios config options      
 * @param {number} retries? - attempt request again      
 * @param {boolean} shouldCache? - should we cache the repsonse       
 * @returns 
     *      {boolean} status - idle -> progress -> success/failure
     *      {any} data - data from the API 
     *      {ApiError} error - error from the API with error catgorisation 
     *      {Function} cancel - cancel function 
     *      {Function} refetch - invalidates any cached fetches and grabs fresh copy     
 * @author Nick Mitchell 
 */
export const useApi = (url, method = HttpMethod.GET, reqData = null, accessToken = null, headers = {}, additionalOptions = {}, retries = 3, shouldCache = true, mockWaitTime = 0) => {

    /**
     * @step axios request 
     * @desc configure the axios request
     */
    const cancelTokenSource = axios.CancelToken.source();

    
    /**
     * @step Generate options
     * @desc useMemo caches the options object and will only mutate if the required data changes
     */
    const options = useMemo(() => {

        const options = {
            url,
            method,
            headers: headers || {},
            cancelToken: cancelTokenSource.token,
            ...additionalOptions
        }

        if(reqData) 
            options.data = reqData;
        
        if(accessToken)
            options.headers.Authorization = `Bearer ${accessToken}`;

        return options;

    }, [method, headers, cancelTokenSource, additionalOptions, reqData, accessToken]);


    /**
     * @step Create our api request
     * @desc Uses the options from above to fire an Axios request. useCallback will only rebuild if the options change
     */
    const executeApiRequest = useCallback(() => {
        return new Promise((done, fail)=>{
            axios(options)
                .then(res=>{
                    console.log({res});

                    if(mockWaitTime === 0){
                        done(res);
                    }
                    else{
                        setTimeout(()=>{
                            done(res);
                        }, mockWaitTime);
                    }
                })
                .catch(err=>{
                    console.log({err});
                    fail(err)
                });
        })
    }, [options, mockWaitTime]);
    const { status: requestLifecycle, data: apiResponse, error: apiError, executeAsyncFn: refetch } = useAsync(executeApiRequest, false); 

    /**
     * @step process response
     * @desc We can 'strongly type' the response to make branching logic easier 
     */
    const {data, error} = transformResponse(apiResponse, apiError); 
    

    /**
     * @returns 
     *      {boolean} status - idle -> progress -> success/failure 
     *      {any} data - data from the API 
     *      {ApiError} error - error from the API with error catgorisation 
     *      {Function} cancel - cancel function 
     *      {Function} refetch - invalidates any cached fetches and grabs fresh copy  
     */
    return {
        status: requestLifecycle,
        data,
        error,
        cancel: () => cancelTokenSource.cancel(),
        refetch, 
    }

}

/**
 * GET /api/request
 * @param {string} url - path relative to the baseUrl  
 * @param {string} accessToken? - JWT access token    
 * @param {AxiosHeaders} headers? - Axios headers other than bearer token     
 * @param {AxiosConfig} additonalOptions? - Axios config options      
 * @param {number} retries? - attempt request again 
 * @param {boolean} shouldCache? - should we cache the repsonse  
 */
export function useGet(url,  mockWaitTime = 0, accessToken = null, headers = {}, additonalOptions = {}, retries = 3, shouldCache = true){
    return useApi(
        url,
        HttpMethod.GET,
        null,
        accessToken,
        headers,
        additonalOptions,
        retries,
        shouldCache, 
        mockWaitTime,
    );
}

/**
 * POST /api/request
 * @param {string} url - path relative to the baseUrl  
 * @param {any} data? - data payload   
 * @param {string} accessToken? - JWT access token    
 * @param {AxiosHeaders} headers? - Axios headers other than bearer token     
 * @param {AxiosConfig} additonalOptions? - Axios config options      
 * @param {number} retries? - attempt request again 
 * @param {boolean} shouldCache? - should we cache the repsonse  
 */
export function usePost(url, data = {}, accessToken, headers = {}, additonalOptions = {}, retries = 3, shouldCache = true, mockWaitTime = 0){
    return useApi(
        url,
        HttpMethod.POST,
        data,
        accessToken,
        headers,
        additonalOptions,
        retries,
        shouldCache,
        mockWaitTime,
    );
}

/**
 * PUT /api/request
 * @param {string} url - path relative to the baseUrl  
 * @param {any} data? - data payload   
 * @param {string} accessToken? - JWT access token    
 * @param {AxiosHeaders} headers? - Axios headers other than bearer token     
 * @param {AxiosConfig} additonalOptions? - Axios config options      
 * @param {number} retries? - attempt request again 
 * @param {boolean} shouldCache? - should we cache the repsonse  
 */
export function usePut(url, data = {}, accessToken, headers = {}, additonalOptions = {}, retries = 3, shouldCache = true, mockWaitTime = 0){
    return useApi(
        url,
        HttpMethod.PUT,
        data,
        accessToken,
        headers,
        additonalOptions,
        retries,
        shouldCache,
        mockWaitTime,
    );
}

/**
 * PATCH /api/request
 * @param {string} url - path relative to the baseUrl  
 * @param {any} data? - data payload   
 * @param {string} accessToken? - JWT access token    
 * @param {AxiosHeaders} headers? - Axios headers other than bearer token     
 * @param {AxiosConfig} additonalOptions? - Axios config options      
 * @param {number} retries? - attempt request again 
 * @param {boolean} shouldCache? - should we cache the repsonse  
 */
export function usePatch(url, data = {}, accessToken, headers = {}, additonalOptions = {}, retries = 3, shouldCache = true, mockWaitTime = 0){
    return useApi(
        url,
        HttpMethod.PUT,
        data,
        accessToken,
        headers,
        additonalOptions,
        retries,
        shouldCache,
        mockWaitTime,
    );
}

/**
 * DELETE /api/request
 * @param {string} url - path relative to the baseUrl  
 * @param {any} data? - data payload   
 * @param {string} accessToken? - JWT access token    
 * @param {AxiosHeaders} headers? - Axios headers other than bearer token     
 * @param {AxiosConfig} additonalOptions? - Axios config options      
 * @param {number} retries? - attempt request again 
 * @param {boolean} shouldCache? - should we cache the repsonse  
 */
export function useDelete(url, data = {}, accessToken, headers = {}, additonalOptions = {}, retries = 3, shouldCache = true, mockWaitTime = 0){
    return useApi(
        url,
        HttpMethod.DELETE,
        data,
        accessToken,
        headers,
        additonalOptions,
        retries,
        shouldCache,
        mockWaitTime,
    );
}
