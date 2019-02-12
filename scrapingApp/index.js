require('dotenv').load();
const logger = require('./utils').getLogger();

const dbConnect = require('../src/db/connect');
const getShowsByPage = require('./getShowsByPage');
const patchByCast = require('./patchByCast');

const reqInterval = Number(process.env.SCRAPING_REQUEST_INTERVAL) || 500;

const run = async () => {
    const { client, db } = await dbConnect();
    const showsCollection = db.collection('shows-v1');

    let shows = [];
    let i = 0;
    while (shows) {
        shows = await getShowsByPage(i++);
        if (!shows) return client.close();

        await patchByCast(reqInterval, shows);

        try {
            await showsCollection.insertMany(shows);
        } catch (error) {
            logger.error(error);
            client.close();
        }
    }
};

run();
