const getCastByShowId = require('./getCastByShowId');
const logger = require('./utils').getLogger();

module.exports = async (reqInterval, shows) => {
    let castPatches = await shows.map((show) => async () => {
        show.cast = await getCastByShowId(show.id);
    });

    let castPatch;
    while (castPatches.length) {
        await timeout(reqInterval);
        castPatch = castPatches.pop();
        try {
            await castPatch();
        } catch (error) {
            logger.error(error);
        }
    }
    return shows;
};

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
