const rpn = require('request-promise-native');
const logger = require('./utils').getLogger();

module.exports = async (page) => {
    try {
        let shows = await rpn(`http://api.tvmaze.com/shows?page=${page}`);
        shows = JSON.parse(shows);

        return shows;
    } catch (error) {
        logger.error(error);
        return null;
    }
};
