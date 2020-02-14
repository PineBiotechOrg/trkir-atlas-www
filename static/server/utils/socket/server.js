const worker = require('cluster').worker;
const yandexConfig = require('yandex-config');

const config = require('./configs/default');
const app = require('./app');
const logger = require('./logger');

const server = app.listen(yandexConfig.server.port || yandexConfig.server.socket, function () {
    logger.info('[%s] Worker spawned(v:%s, e:%s)', worker.process.pid, config.app.version, app.get('env'));
});

app.use(function (err, req, res, next) {
    try {
        const timeout = setTimeout(function () { process.exit(1); }, 30000);
        timeout.unref();
        worker.disconnect();
        server.close();

        res.statusCode = 500;
        logger.error('[%s] Caught exception: %s', worker.process.pid, err.stack || err.toString());
        res.end('Internal error. Refresh at will.');
    } catch (e) {
        logger.error('[%s] Failed to send 500: %s', worker.process.pid, e.stack || e.toString());
    }
});
