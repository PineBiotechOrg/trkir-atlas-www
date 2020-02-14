const path = require('path');
const recluster = require('recluster');
const mkdirp = require('mkdirp');
const fs = require('fs');
const environment = require('yandex-environment') || 'development';

process.env.NODE_ENV = environment;
process.env.NODE_CONFIG_DIR = path.join(__dirname, 'configs');

const config = require('./configs/default');
const logger = require('./logger');

const cluster = recluster(path.join(__dirname, 'server.js'), {
    workers: config.cluster.workersCount
});

cluster.on('exit', function (worker) {
    if (worker.process.exitCode) {
        logger.error('[%s] Worker died (exit code: %s)', worker.process.pid, worker.process.exitCode);
    }
});

cluster.on('disconnect', function (worker) {
    logger.warn('[%s] Worker disconnected', worker.process.pid);
});

(function cleanupSocket() {
    const socket = config.server.socket;
    if (socket) {
        mkdirp.sync(path.dirname(socket));

        if (fs.existsSync(socket)) {
            fs.unlinkSync(socket);
        }
    }
})();

cluster.run();

process.on('SIGUSR2', function () {
    logger.info('[master] Got SIGUSR2, reloading cluster...');
    cluster.reload();
});

logger.info('[master] Spawned cluster v:%s, kill -s SIGUSR2 %s to reload', config.app.version, process.pid);
