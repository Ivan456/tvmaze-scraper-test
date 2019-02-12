let winston = require('winston');

const level = process.env.LOG_LEVEL || 'error';
const maxsize = Number(process.env.LOG_SIZE) || 50000000;
let logger;

const getLogger = () => {
    if (logger) return logger;

    logger = winston.createLogger({
        level,
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.printf(info => {
                return `${info.timestamp} ${info.level}: ${info.message}`;
            })
        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ maxsize, filename: 'combined.log' }),
            new winston.transports.File({ maxsize, level: 'error', filename: 'error.log' }),
        ]
    });

    return logger;
};

module.exports = { getLogger };
