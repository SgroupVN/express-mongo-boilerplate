import { logger } from '../../logging/logger';

export function createModuleFactory({ path, router, name }) {
    return app => {
        if (name) {
            logger.info(`[${name}] register`);
        }

        app.use(path, router);
    };
}
