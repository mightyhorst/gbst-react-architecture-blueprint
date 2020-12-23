import React, {useState} from 'react';

/**
 * @requires 🖖LogicKit
 */
import {
    StatusEnum, 
    useApi
} from '../../../../../logickit';


/**
 * @component ExampleComponent
 * @desc How to use hook in the wild  
 */
export function ExampleComponentUseApi() {

    const [isSuccess, setIsSuccess] = useState(true);

    const url = isSuccess ? "/users" : "/error";

    /**
     * @step useApi hook
     * @desc Extract all the data we need from the useApi hook and 
     */
    const {
        status,
        data,
        error,
        refetch
    } = useApi(url, "GET", )

    const checkIsSuccessHandler = (e) => {
        setIsSuccess((oldSuccess) => !oldSuccess );
    }

    return (
        <div>
            <label htmlFor='isSuccess'>
                <span> Return Error </span>
                <input 
                    type='checkbox' 
                    name='isSuccess' 
                    value={isSuccess} 
                    onClick={checkIsSuccessHandler} 
                />
            </label>
            <button onClick={refetch}>Click to start</button>
            {status === StatusEnum.IDLE && <div> Please click the button to start </div>}
            {status === StatusEnum.PENDING && <div> loading... </div>}
            {status === StatusEnum.SUCCESS && <div><pre>{JSON.stringify(data)}</pre></div>}
            {status === StatusEnum.FAILED && <div> {error?.message || error} </div>}
        </div>
    )
}
// export function ExampleComponent({isInvokedImmediately=false}) {

//     /**
//      * @step use hook 
//      * @desc 
//      *  Hooks are pub/sub. When the "executeAsyncFn" is invoked, the state for status/value/error will be automatically updated; 
//      *  and the render function will get these values instantly as the hook progresses through its lifecycle from idle -> pending -> success or failure
//      */
//     const {
//         executeAsyncFn: run,
//         status,
//         data,
//         error,
//     } = useAsync(myExampleAsyncFn, isInvokedImmediately);

//     /**
//      * @step render
//      */
//     return (
//         <>
//             <label htmlFor='isSuccess'>
//                 <span> Return success </span>
//                 <input type='checkbox' name='isSuccess' value={!!isSuccess.current} onClick={e => isSuccess.current = !isSuccess.current } />
//             </label>
//             {status === StatusEnum.IDLE && <div> Please click the button to start </div>}
//             {status === StatusEnum.PENDING && <div> loading... </div>}
//             {status === StatusEnum.SUCCESS && <div> {data} </div>}
//             {status === StatusEnum.FAILED && <div> {error?.message || error} </div>}

//             <button
//                 onClick={run}
//                 disabled={status === StatusEnum.PENDING}
//             >
//                 {status === StatusEnum.PENDING ? 'Loading...' : 'Run the Function'}
//             </button>

//             <pre className='pre-well'>
//                 Status: {status} <br />
//                 data: {data} <br />
//                 error: {error}
//             </pre>
//         </>
//     );

// }

