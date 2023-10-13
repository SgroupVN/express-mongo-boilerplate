import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import swaggerUi from 'swagger-ui-express';
import { notFoundHandler } from './modules/system/filters/not-found.filter';
import { httpHandler } from './modules/system/filters/http-exception-filter';
import { createRootModule } from './modules';
import { connectDatabase } from './modules/database/database-connector';

const app = express();

(async () => {
    app.use(cors({
        origin: '*',
        optionsSuccessStatus: 200
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(methodOverride('X-HTTP-Method-Override'));
    createRootModule(app);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup({}));
    app.use(notFoundHandler);
    app.use(httpHandler);

    await connectDatabase();
})();

export default app;
