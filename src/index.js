const express = require('express');
require('dotenv').load();
const app = express();
const responseTime = require('response-time');

const apiRouter = require('./routers');
const logger = require('./utils').getLogger();

const port = process.env.PORT || 3000;
const errorMsg = 'Something broke!';

const run = async () => {
    app.use(responseTime((req, res, time) => {
        logger.info(`${req.method} ${req.originalUrl} status: ${res.statusCode} time: ${time}`);
    }));

    app.use('/api', apiRouter);

    app.use((err, req, res, next) => {
        logger.error(err.stack);
        res.status(500).send(errorMsg);
    });

    await app.listen(port);

    logger.info(`App started on port ${port}. http://localhost:${port}/api/shows/cast?page=0&size=10`);
};

run();
