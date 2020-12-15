
import { setupWorker, rest } from 'msw';
import * as token from './mock.token.json';

/** 
 * Export the worker instance, so we can await the activation on Storybook's runtime.
 * You can use this reference to start the worker for local development as well.
 **/
export const worker = setupWorker(
    rest.post('/oauth/token', (req, res, ctx) => {
        return res(
            ctx.json(token)
        )
    }),
)