import React from 'react';
import Code from 'react-code-prettify';

const txtLayoutCode = `
/**
 * @component myExampleAsyncFn
 * @description Contrived example that will wait and fail/succeed 50% of the time
 */
const myExampleAsyncFn = () => {

    return new Promise((onSuccess, onError) => {
        setTimeout(() => {
            ++count % 2 === 0
                ? onSuccess("🙌 Submitted successfully 🙌")
                : onError("😞 Oh no there was an error 😞");
        }, 2000);
    });
};

/**
 * @component ExampleComponent
 * @desc How to use hook in the wild  
 */
export function ExampleComponent({isInvokedImmediately=false, count=0}) {

    /**
     * @step use hook 
     * @desc 
     *  Hooks are pub/sub. When the "executeAsyncFn" is invoked, the state for status/value/error will be automatically updated; 
     *  and the render function will get these values instantly as the hook progresses through its lifecycle from idle -> pending -> success or failure
     */
    const {
        executeAsyncFn: run,
        status,
        data,
        error,
    } = useAsync(myExampleAsyncFn, isInvokedImmediately);

    /**
     * @step render
     */
    return (
        <>
            {status === StatusEnum.IDLE && <div> Please click the button to start </div>}
            {status === StatusEnum.SUCCESS && <div> {data} </div>}
            {status === StatusEnum.FAILED && <div> {error?.message || error} </div>}

            <button
                onClick={run}
                disabled={status === StatusEnum.PENDING}
            >
                {status === StatusEnum.PENDING ? 'Loading...' : 'Run the Function'}
            </button>

            <pre style={{ whiteSpace: 'pre' }}>
                Status: {status} <br />
                data: {data} <br />
                error: {error}
            </pre>
        </>
    );

}  
`
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
export function LayoutCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtLayoutCode)} 
        language="javascript" 
    />
}

/**
 * @component Compounds 
 */
const txtCompundsCode = `
/**
 * @component 
 * @description Contrived example 
 */

`;
export function CompoundsCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtCompundsCode)} 
        language="javascript" 
    />
}

/**
 * @component Elements 
 */
const txtElementsCode = `
/**
 * @component 
 * @description Contrived example 
 */

`;
export function ElementsCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtElementsCode)} 
        language="javascript" 
    />
}

/**
 * @component useJourney 
 */
const txtUseJourneyCode = `
/**
 * @component 
 * @description Contrived example 
 */

`;
export function UseJourneyCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtUseJourneyCode)} 
        language="javascript" 
    />
}

/**
 * @component useFormik 
 */
const txtUseFormikCode = `
/**
 * @component 
 * @description Contrived example 
 */

`;
export function UseFormikCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtUseFormikCode)} 
        language="javascript" 
    />
}

/**
 * @component useApi 
 */
const txtUseApiCode = `
/**
 * @component 
 * @description Contrived example 
 */

`;
export function UseApiCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtUseApiCode)} 
        language="javascript" 
    />
}

/**
 * @component useAuth 
 */
const txtUseAuthCode = `
/**
 * @component 
 * @description Contrived example 
 */

`;
export function UseAuthCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtUseAuthCode)} 
        language="javascript" 
    />
}







