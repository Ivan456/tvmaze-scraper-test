const apiRouter = require('express').Router();
const showsRouter = require('./shows');

module.exports = apiRouter;

apiRouter.use('/shows', showsRouter);
