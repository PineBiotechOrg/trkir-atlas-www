const winston = require('winston');
const datef = require('datef');
const environment = require('yandex-environment');

/**
 * [28/10/2014:17:26:12 -03:00]
 *
 * @return {string}
 */
function format() {
    return datef('dd/MM/YYYY:HH:mm:ss Z');
}

const __DEV__ = environment === 'development';
const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            colorize: __DEV__,
            timestamp: __DEV__ ? false : format
        })
    ]
});

module.exports = logger;
