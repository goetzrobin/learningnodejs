'use strict';

const Hapi = require('hapi');
const Settings = require('./settings');
const Routes = require('./lib/routes');
const Models = require ('./lib/models/index.js');
const server = new Hapi.server({
    host:'localhost',
    port:Settings.port
});

server.route(Routes)

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

Models.sequelize.sync().then(() => {
    start();
  });

console.log(Settings.port)