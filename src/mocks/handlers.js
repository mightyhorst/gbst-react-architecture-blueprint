/**
 * @requires Libraries
 */
import { rest } from 'msw';

/**
 * @requires MockData
 */
import { accessToken } from './data.mock';

export const handlers = [
    rest.get('/error', (req, res, ctx) => {
        return res(
            ctx.status(400),
            ctx.json({
                msg : "You have fired an error!"
            })
        )
    }),
    rest.get('/users', (req, res, ctx) => {

        return res(
            ctx.json([
                {
                    id : 1,
                    username : "johndoe1",
                    name : "John",
                    lastname: "Doe",
                    email : "John.doe@email.com"
                },
                {
                    id : 2,
                    username : "janedoe2",
                    name : "Jane",
                    lastname: "Doe",
                    email : "Jane.doe@email.com"
                }
            ])
        )

    }),
    rest.post('/oauth/token', (req, res, ctx) => {

        const { username } = req.body;

        return res(
            ctx.json(accessToken)
        )

    }),
    rest.post('/oauth/logout', (req, res, ctx) => {
        return res(
            ctx.json({
                success: true
            })
        )
    })
//   rest.post('/login', (req, res, ctx) => {
//     const { username } = req.body

//     return res(
//       ctx.json({
//         id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
//         username,
//         firstName: 'John',
//         lastName: 'Maverick',
//       })
//     )
//   }),
]