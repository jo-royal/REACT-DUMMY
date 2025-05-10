import { setupWorker } from 'msw/browser';
import { handlers, authHandlers, validateToken } from './handlers';

export const worker = setupWorker(...handlers, ...authHandlers, ...validateToken);
