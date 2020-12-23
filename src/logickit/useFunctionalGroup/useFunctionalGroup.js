/**
 * @requires Libraries
 */
import {useState, useEffect} from 'react';

/**
 * @requires Models
 */
import { 
    Roles,
    CascadingRoles
} from './functionalGroup.models';


/**
 * Decides whether or not a user is authenticated and authourised for a given role
 *
 * @export
 * @param {*} accessToken The users accessToken that contains their roles for a particular resource
 * @param {*} resource The resource they are checking for authourisation (eg dashboard)
 * @param {*} [rolesAllowed=[]] An array of roles that will decide whether or not the user is authourised
 * @returns
 */
export function useFunctionalGroup(accessToken, resource, rolesAllowed = [])
{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthourised, setIsAuthourised] = useState(false);

    useEffect(() => {

        // -- Revalidate the access token
        if (accessToken)
        {
            // -- TODO: Check if the accessToken is expired
            setIsAuthenticated(true);

            // -- Check if the access token is authourised
            if (rolesAllowed && Array.isArray(rolesAllowed) && rolesAllowed.length > 0)
            {
                let isAuthourised = false;

                // -- First catch the public role. If it exists then we are authourised
                if (rolesAllowed.includes(Roles.PUBLIC))
                {
                    isAuthourised = true;
                }
                else if (accessToken.roles?.hasOwnProperty(resource))
                {
                    // -- Fetch the cascading rules for the users resource role
                    console.error("This is the resource: ", accessToken.roles[resource]);
                    const cascadingRoles = CascadingRoles[accessToken.roles[resource]];

                    // -- Check if the user is authourised
                    isAuthourised = rolesAllowed.some((role) => cascadingRoles.includes(role));
                }
                setIsAuthourised(isAuthourised);
            }
        }

    }, [accessToken, rolesAllowed]);

    console.error("This is the functional group: ", isAuthourised);
    return {
        isAuthourised,
        isAuthenticated
    }
}