/**
 * iTunes Artwork API - Routes
 * Author: GP.
 * Version: 1.0
 * Release Date: 04-May-2014
 */

/**
 * Module dependencies.
 */

var api = require('./api');

/*
 * Module exports.
 */

module.exports = function(server) {
    server.get('/find/:query_string', api.find);
}