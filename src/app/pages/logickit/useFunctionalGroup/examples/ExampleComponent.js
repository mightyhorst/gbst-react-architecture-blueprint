import React, {useState, useMemo} from 'react';

/**
 * @requires 🖖LogicKit
 */
import {
    useFunctionalGroup,
    Roles
} from '../../../../../logickit';

/**
 * @requires MockData
 */
import { 
    accessToken
} from '../../../../../mocks';


export function ExampleComponent()
{
    const [roles, setRoles] = useState({
        ...accessToken.roles
    });

    const {
        isAuthenticated: dashboardIsAuthenticated, 
        isAuthourised: dashboardIsAuthourised
    } = useFunctionalGroup({...accessToken, roles}, 'dashboard', [Roles.READER]);

    const {
        isAuthenticated: billingIsAuthenticated, 
        isAuthourised:billingIsAuthourised
    } = useFunctionalGroup({...accessToken, roles}, 'billing', [Roles.ADMIN]);

    const roleElements = useMemo(() => {

        const roleElements = [];

        for (let resource in roles)
        {
            const role = roles[resource];

            const onChangeRoleHandler = (e) => {
                setRoles((oldRoles) => {
                    const newRoles = {
                        ...oldRoles
                    }
                    newRoles[resource] = e.target.value;
                    return newRoles;
                })
            }

            roleElements.push(
                <div
                    key={resource}
                >
                    <label>Resource: {resource}</label>
                    <select
                        value={role}
                        onChange={onChangeRoleHandler}
                    >
                        <option 
                            value={Roles.OWNER}
                            label={Roles.OWNER}
                        />
                        <option 
                            value={Roles.ADMIN}
                            label={Roles.ADMIN}
                        />
                        <option 
                            value={Roles.WRITER}
                            label={Roles.WRITER}
                        />
                        <option 
                            value={Roles.READER}
                            label={Roles.READER}
                        />
                    </select>
                </div>
            )
        }

        return roleElements;
    }, [roles, Roles]);

    return (
        <>
            <div>
                <div>User roles</div>
                {roleElements}
            </div>
            <div>
                <h3>Authn/Authz</h3>
                <div>
                    <h4>Dashboard</h4>
                    <p>
                        Authenticated: {dashboardIsAuthenticated ? "true" : "false"}
                    </p>
                    <p>
                        Authourised: {dashboardIsAuthourised ? "true" : "false"}
                    </p>
                </div>
                <div>
                    <h4>Billing</h4>
                    <p>
                        Authenticated: {billingIsAuthenticated ? "true" : "false"}
                    </p>
                    <p>
                        Authourised: {billingIsAuthourised ? "true" : "false"}
                    </p>
                </div>
            </div>
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

