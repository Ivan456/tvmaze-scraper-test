The app was deployed to heroku: https://safe-lowlands-73599.herokuapp.com/api/shows/cast?page=4&size=10

How to run app locally?
1. Create .env file in root with configs:
    DB_CONNECTION_URL=mongodb://*:*@ds121461.mlab.com:21461/heroku_67pfzt2j
    DB_NAME=heroku_67pfzt2j
    PORT=3000
    LOG_LEVEL=info
    LOG_SIZE=50000000
2. npm i
3. npm test
4. npm start
5. get request http://localhost:3000/api/shows/cast?page=0&size=10

How to run scraping app locally?
1. Create .env file in root with configs:
    DB_CONNECTION_URL=mongodb://*:*@ds121461.mlab.com:21461/heroku_67pfzt2j
    DB_NAME=heroku_67pfzt2j
    PORT=3000
    LOG_LEVEL=info
    LOG_SIZE=50000000
    SCRAPING_REQUEST_INTERVAL=500
2. npm i
3. npm run scraping
