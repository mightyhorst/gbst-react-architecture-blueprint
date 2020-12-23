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