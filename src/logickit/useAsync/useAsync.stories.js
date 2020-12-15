import React from 'react';

/**
 * @requires Storybook 
 */
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as booleanKnob, number as numberKnob } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withConsole } from '@storybook/addon-console';

/**
 * @requires Hooks 
 */
import { useAsync, StatusEnum } from './';

storiesOf('🖖LogicKit/hooks/01-useAsync', module)
    .addDecorator(withKnobs)
    .addDecorator(withNotes)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .add('architecture', () => {
        return <iframe 
            style={{
                border: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%', 
            }}
            src='http://gbst-react-patterns.surge.sh/'
        />
    })
    .add('useAsync simple example', () => {

        /**
         * @const Knobs 
         */
        const isInvokedImmediately = booleanKnob('Invoke Async Fn Immediately?', false);
        let count = numberKnob('Count', 0);

        /**
         * @function myExampleAsyncFn
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
         * @function ExampleComponent
         * @desc How to use hook in the wild  
         */
        function ExampleComponent() {

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
                        { status === StatusEnum.PENDING ? 'Loading...' : 'Run the Function'}
                    </button>

                    <pre style={{whiteSpace: 'pre'}}>
                        Status: {status} <br />
                        data: {data} <br />
                        error: {error}    
                    </pre> 
                </>
            );

        }

        return (
            <ExampleComponent />
        );
    });
