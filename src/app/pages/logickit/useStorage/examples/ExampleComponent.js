import React, {useState} from 'react';

/**
 * @requires 🖖LogicKit
 */
import {
    useStorage,
    StorageStrategy
} from '../../../../../logickit';


export function ExampleComponent()
{
    const [strategy, setStrategy] = useState(StorageStrategy.LOCAL);
    const [key, setKey] = useState("");
    
    const [storageValue, setStorageValue, deleteStorageItem] = useStorage(strategy, key, "");

    const onChangeStrategyHandler = (e) => {
        setStrategy(e.target.value);
    }

    const onChangeKeyHandler = (e) => {
        setKey(e.target.value);
    }

    const onChangeValueHandler = (e) => {
        setStorageValue(e.target.value)
    }

    return (
        <>  
            <div>
                <label htmlFor='strategy'>
                    <span> Strategy </span>
                    <select  
                        name='strategy' 
                        value={strategy} 
                        onChange={onChangeStrategyHandler} 
                    >
                        <option 
                            value={StorageStrategy.LOCAL}
                            label={StorageStrategy.LOCAL}
                        />
                        <option 
                            value={StorageStrategy.SESSION}
                            label={StorageStrategy.SESSION}
                        />
                        <option 
                            value={StorageStrategy.COOKIE}
                            label={StorageStrategy.COOKIE}
                        />
                    </select>
                </label>
            </div>
            <label htmlFor='key'>
                <span> Key </span>
                <input 
                    type='text' 
                    name='key' 
                    value={key} 
                    placeholder="key"
                    onChange={onChangeKeyHandler} 
                />
            </label>
            <label htmlFor='value'>
                <span> Value </span>
                <input 
                    type='text' 
                    name='value' 
                    placeholder="value"
                    value={storageValue || ""} 
                    onChange={onChangeValueHandler} 
                />
            </label>

            <div>
                <h5>Stored with {strategy}</h5>
                <div>Value</div>
                <pre className="pre-well">
                    {JSON.stringify(storageValue, null, 4)}
                </pre>
            </div>

            {
                storageValue == undefined 
                ?
                null
                :
                <button 
                    onClick={deleteStorageItem}
                >
                    Delete item
                </button>
            }
        </>
    )
}

// /**
//  * @component myExampleAsyncFn
//  * @description Contrived example that will wait and fail/succeed 50% of the time
//  */
// const count = React.createRef(0);
// const isSuccess = React.createRef(true);
// const myExampleAsyncFn = () => {

//     return new Promise((onSuccess, onError) => {
//         setTimeout(() => {
//             isSuccess.current
//             // ++count.current % 2 === 0
//                 ? onSuccess("🙌 Submitted successfully 🙌")
//                 : onError("😞 Oh no there was an error 😞");
//         }, 2000);
//     });
// };

// /**
//  * @component ExampleComponent
//  * @desc How to use hook in the wild  
//  */
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

