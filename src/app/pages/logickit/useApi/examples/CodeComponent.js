import React from 'react';
import Code from 'react-code-prettify';

const txtCode = `
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
    const [mockWaitTime, setMockWaitTime] = useState(0);

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
    } = useApi(url, "GET", undefined, undefined, undefined, undefined, undefined, undefined, mockWaitTime)

    const checkIsSuccessHandler = (e) => {
        setIsSuccess((oldSuccess) => !oldSuccess );
    }

    const changeMockWaitTimeHandler = (e) => {
        setMockWaitTime(e.target.value);
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
            <label 
                htmlFor="mockWaitTime"
            >
                <span>Mock wait time (ms)</span>
                <input
                    type="number"
                    name="mockWaitTime"
                    value={mockWaitTime}
                    onChange={changeMockWaitTimeHandler}
                />
            </label>
            <button onClick={refetch}>Click to start</button>
            {status === StatusEnum.IDLE && <div> Please click the button to start </div>}
            {status === StatusEnum.PENDING && <div> loading... </div>}
            {status === StatusEnum.SUCCESS && <div><pre className="pre-well">{JSON.stringify(data, null, 4)}</pre></div>}
            {status === StatusEnum.FAILED && <div> {error?.message || error} </div>}
        </div>
    )
}
`
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
export function ExampleComponentCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtCode)} 
        language="javascript" 
    />
}
