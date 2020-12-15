import { ApiRespEnum, ApiErrorEnum } from './';

/**
 * @desc Convert thwe status code to an enum 
 * @param {number} statusCode - HTTP status code
 * @returns 
 *      [
 *          {ApiResEnum} apiResponseEnum - The API response category,
 *          {ApiErrorEnum} apiErrorEnum? - The API error category, 
 *      ]  
 */
export function statusCodeToEnum(statusCode) {

    const statusCodeRange = Math.floor(statusCode / 100) * 100;

    switch (statusCodeRange) {
        case 200:
            return [ApiRespEnum.SUCCESS, null];
        case 300:
            return [ApiRespEnum.REDIRECT, null];
        case 400:
            if (statusCode === 401)
                return [ApiRespEnum.ERROR, ApiErrorEnum.AUTHN];
            else if (statusCode === 403)
                return [ApiRespEnum.ERROR, ApiErrorEnum.AUTHZ];
            else
                return [ApiRespEnum.ERROR, ApiErrorEnum.REQUEST];
        case 500:
            return [ApiRespEnum.ERROR, ApiErrorEnum.RESPONSE];
        default:
            return [ApiRespEnum.ERROR, ApiErrorEnum.UNKNOWN];
    }
}

/**
 * 
 * @param {AxiosResponse} axiosResponse 
        data: T;
        status: number;
        statusText: string;
        headers: any;
        config: AxiosRequestConfig;
        request?: any;
 * @param {AxiosError} axiosError 
        config: AxiosRequestConfig;
        code?: string;
        request?: any;
        response?: AxiosResponse<T>;
        isAxiosError: boolean;
        toJSON: () => object;
 */
export function transformResponse(axiosResponse, axiosError) {

    let data = axiosResponse?.data || null;
    let errorModel = axiosError ? {
        category: null,
        message: null
    } : null;


    /**
     * @desc set the error models status code   
     */
    const statusCode = axiosResponse?.statusCode || axiosError?.response?.status;
    const [apiResponseEnum, apiErrorEnum] = statusCodeToEnum(statusCode);
    if (axiosError) {
        errorModel.category = apiErrorEnum;

        /*
        * The request was made and the server responded with a
        * status code that falls out of the range of 2xx
        */
        if (axiosError.response) {

            const { data, status, headers } = axiosError.response;

            console.log('Axios Response Error', { data, status, headers });
            errorModel.message = axiosError?.message;
            errorModel.url = axiosError.response.config?.url;

        }
        /*
        * The request was made but no response was received, `error.request`
        * is an instance of XMLHttpRequest in the browser and an instance
        * of http.ClientRequest in Node.js
        */
        else if (axiosError.request) {

            console.log('Axios Request Error', axiosError.request);
            errorModel.message = `Request failed: ${axiosError}`;
        }
        /**
         * Something happened in setting up the request and triggered an Error
         */
        else {
            console.log('Axios Unknown Error', axiosError.message);
            errorModel.message = `Something happened in setting up the request and triggered an Error: ${axiosError.message}`;
        }

    }

    return { data, error: errorModel }

}



/**
 * @name withApi service
 * @description  
 * @async
 *  
 * @param {string} url - path relative to the baseUrl  
 * @param {string} method - Http Verb e.g. 'GET', 'PUT', 'POST', 'PATCH', 'DELETE'  
 * @param {any} reqData? - data payload for the request   
 * @param {string} accessToken? - JWT access token    
 * @param {AxiosHeaders} headers? - Axios headers other than bearer token     
 * @param {AxiosConfig} additonalOptions? - Axios config options      
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
export async function withApi(url, method = HttpMethod.GET, reqData = null, accessToken = null, headers = {}, additonalOptions = {}, retries = 3, shouldCache = true) {

    /**
     * @step axios request 
     * @desc configure the axios request
     */
    const cancelTokenSource = axios.CancelToken.source();

    let options = {
        method,
        headers: headers || {},
        cancelToken: cancelTokenSource.token,
        ...additonalOptions
    }
    if (reqData)
        options.data = reqData;

    if (accessToken)
        options.headers.Authorization = `Bearer ${accessToken}`;


    /**
     * @step execute async 
     * @desc we can reuse the useAsync hook here, in place of a axios service, to  
     */
    let apiResponse, apiError;
    try {
        apiResponse = axios({ url, ...options });
    }
    catch (err){
        console.log({ err });
        apiError = err;

    }

    /**
     * @step process response
     * @desc We can 'strongly type' the response to make branching logic easier 
     */
    const { data, error } = transformResponse(apiResponse, apiError);


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