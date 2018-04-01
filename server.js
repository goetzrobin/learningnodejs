'use strict';

const Hapi = require('hapi');
const Settings = require('./settings');
const Routes = require('./lib/routes');
const Models = require('./lib/models/');
const Path = require('path');
const Vision = require('vision');
const Pug = require('pug');
const Inert = require('inert');
const server = new Hapi.server({
    host: 'localhost',
    port: Settings.port
});

async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err)
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

const provision = async () => {
    await server.register(Vision)
    await server.register(Inert)

    // View settings
    server.views({
        engines: { pug: Pug },
        relativeTo: __dirname,
        path: Path.join(__dirname, 'lib/views'),
        //     compileOptions: {
        //         pretty: false
        //     },
        //     isCached: Settings.env === 'production'
    });

    // Add routes
    server.route(Routes);

    await start();
};

Models.sequelize.sync().then(() => {
    provision();
});


console.log(Settings.port)