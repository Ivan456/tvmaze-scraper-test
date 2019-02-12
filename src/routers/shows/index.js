const showsRouter = require('express').Router();
const castRouter = require('express').Router();

const controllers = require('../../controllers');
const models = require('../../models');
const db = require('../../db');

module.exports = showsRouter;

showsRouter.use('/cast', castRouter);

castRouter.get('/', controllers.shows.cast(db, models));
