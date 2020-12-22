// import React, { useState } from 'react';

// /**
//  * @requires Mock 
//  */
// import MockAdapter from 'axios-mock-adapter';

// /**
//  * @requires Storybook 
//  */
// import { storiesOf } from '@storybook/react';
// import { withKnobs, boolean as booleanKnob, number as numberKnob, object as objectKnob, text as textKnob } from '@storybook/addon-knobs';
// import { withNotes } from '@storybook/addon-notes';
// import { withConsole } from '@storybook/addon-console';

// /**
//  * @requires Hooks 
//  */
// import { useAuth } from './useAuth.hook';
// import { AuthProvider } from './auth.context';
// import { StatusEnum } from '../useAsync';
// import { TOKEN_URI } from './auth.config';

// /**
//  * @requires Sequence Diagrams
//  */
// import SequenceDiagram from 'react-sequence-diagram';


// /**
//  * @namespace mock 
//  */
// import { worker } from './mocks/mock.api';
// worker.start(); 


// /**
//  * @namespace storybook 
//  */
// storiesOf('🖖LogicKit/hooks/03-useAuth', module)
//     .addDecorator(withKnobs)
//     .addDecorator(withNotes)
//     .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
//     .add('architecture', () => {

//         const seqDia = [
//             'Andrew->China: Says Hello',
//             'Note right of China: China thinks\\nabout it',
//             'China-->Andrew: How are you?',
//             'Andrew->>China: I am good thanks!'
//         ].join('\n'); 
//         const onError = err => console.error('Sequence diagram error:', err);

//         return <SequenceDiagram 
//             input={seqDia} 
//             options={{theme: 'simple'}} 
//             onError={onError} 
//         />
//     })
//     .add('useAuth simple example', () => {

//         /**
//          * @function ExampleComponent
//          * @desc How to use hook in the wild  
//          */
//         function ExampleComponent() {

//             /**
//              * @step use hook 
//              * @desc 
//              *  Hooks are pub/sub. When the "executeAsyncFn" is invoked, the state for status/value/error will be automatically updated; 
//              *  and the render function will get these values instantly as the hook progresses through its lifecycle from idle -> pending -> success or failure
//              */
//             const [authStore, authActions] = useAuth(); 
//             const [username, setUsername] = useState('shukut');
//             const [password, setPassword] = useState('shukut');

//             /**
//              * @function login handler
//              */
//             function login(){
//                 authActions.login(username, password); 
//             }
            
//             /**
//              * @step render
//              */
//             return (
//                 <>
//                     {status === StatusEnum.IDLE && <div> 😴 Please click the button to start </div>}
//                     {status === StatusEnum.PENDING && <div> ✋ Pending... ✋ </div>}
//                     {status === StatusEnum.SUCCESS && <div> 🙌 Success! 🙌 </div>}
//                     {status === StatusEnum.FAILED && <div> 😞 Oh no there was an error 😞 </div>}

//                     <input type="text" value={username} onChange={e => { setUsername(e.target.value) }} />   
//                     <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} />   

//                     <button
//                         onClick={login}
//                         disabled={status === StatusEnum.PENDING}
//                     >
//                         {status === StatusEnum.PENDING ? '✋ Loading...' : `👉 Login`}
//                     </button>

//                     {authStore && <>
//                         <h3>Form Data</h3>
//                         <pre>
//                             {JSON.stringify({username, password}, null, 4)}
//                         </pre>
//                         <h3>Auth Data</h3>
//                         <pre>
//                             {JSON.stringify(authStore.data, null, 4)}
//                         </pre>
//                     </>}
//                 </>
//             );

//         }

//         return (
//             <AuthProvider>
//                 <ExampleComponent />
//             </AuthProvider>
//         );
//     });
