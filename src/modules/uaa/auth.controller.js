import express from 'express';
import { createModuleFactory } from '../system/factories/module.factory';
import { HttpResponseBuilder } from '../system/builders/http-response.builder';
import { login } from './auth.service';
import { createHandler } from '../system/builders/handler.builder';

const router = express.Router();

router.get('/', createHandler(async (req, res) => {
    const credentials = await login();

    return HttpResponseBuilder.buildOK(res, credentials);
}));

export const createAuthModule = createModuleFactory({
    path: '/auth',
    router
});
