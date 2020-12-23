import React from 'react';
import Code from 'react-code-prettify';

const txtCode = `
import React, {useState} from 'react';

/**
 * @requires 🖖LogicKit
 */
import {
    LoginStatus, 
    useAuth,
    AuthProvider
} from '../../../../../logickit';


/**
 * A component that showcases the functionalities of the hook useAuth
 *
 * @export
 * @returns
 */
export function ExampleComponentUseAuth() {

    const [authData, actions] = useAuth();
    const [username, setUsername] = useState("shukut");
    const [password, setPassword] = useState("shukut");

    const clickLoginHandler = (e) => {
        actions.login();
    }

    const clickLogoutHandler = (e) => {
        actions.logout();
    }

    return (
        <>
            {/* {status === LoginStatus.IDLE && <div> 😴 Please click the button to start </div>} */}
            {authData.status === LoginStatus.loggingIn && <div> ✋ Logging you in... ✋ </div>}
            {authData.status === LoginStatus.logInSuccess && <div> 🙌 Logged in! 🙌 </div>}
            {authData.status === LoginStatus.logInFail && <div> 😞 Log in failed! 😞 </div>}
            {authData.status === LoginStatus.loggingOut && <div> ✋ Logging you out... ✋ </div>}
            {authData.status === LoginStatus.loggedOut && <div> 🙌 You are logged out 🙌 </div>}
            {authData.status === LoginStatus.logOutFailed && <div> 🙌 You are logged out 🙌 </div>}

            <input type="text" placeholder="username" value={username} onChange={e => { setUsername(e.target.value) }} />   
            <input type="password" placeholder="password" value={password} onChange={e => { setPassword(e.target.value) }} />   

            <button
                onClick={clickLoginHandler}
                disabled={authData.status === LoginStatus.loggingIn}
            >
                {authData.status === LoginStatus.loggingIn ? '✋ Loading...' : '👉 Login'}
            </button>

            {
                authData && <>
                    <h3>Form Data</h3>
                    <pre className="pre-well">
                        {JSON.stringify({username, password}, null, 4)}
                    </pre>
                    <h3>Auth Data</h3>
                    <pre className="pre-well">
                        {JSON.stringify(authData.data, null, 4)}
                    </pre>
                </>
            }

            {
                authData.status === LoginStatus.logInSuccess 
                && 
                <button
                    onClick={clickLogoutHandler}
                >
                    Logout
                </button>


            }
        </>
    )

}


/**
 * A HOC that wraps a child component in the AuthProvider
 *
 * @export
 * @param Child A react element
 * @returns
 */
export function connectAuthProvider(Child) {
    return (
        <AuthProvider>
            <Child/>
        </AuthProvider>
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
