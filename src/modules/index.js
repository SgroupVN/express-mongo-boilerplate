import express from 'express';
import { createModuleFactory } from './system/factories/module.factory';
import { createAuthModule } from './uaa';

const router = express.Router();

createAuthModule(router);

export const createRootModule = createModuleFactory({
    path: '/api',
    router,
    name: 'Auth'
});
