const MongoClient = require('mongodb').MongoClient;

const url = process.env.DB_CONNECTION_URL;
const dbName = process.env.DB_NAME;

let state = null;

module.exports = async () => {
    if (state) return state;

    const client = await MongoClient.connect(url);
    const db = client.db(dbName);

    state = { client, db };
    return state;
};
