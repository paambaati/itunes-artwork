/**
 * iTunes Artwork API - Entry Point
 * Author: GP.
 * Version: 1.0.1
 * Release Date: 04-May-2014
 */

/**
 * Main app dependencies.
 */

var restify = require('restify');

/**
 * Settings.
 */

var ip_addr = '127.0.0.1';
var port = '3000';

/**
 * Server
 */

var server = restify.createServer({
    name: 'iTunes Artwork API'
});

server.use(restify.queryParser());
server.use(restify.urlEncodedBodyParser());
require('./routes')(server);

server.listen(port, ip_addr, function() {
    console.log('%s listening at %s ', server.name, server.url);
});