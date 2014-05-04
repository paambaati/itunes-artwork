/**
 * iTunes Artwork API - API Handler
 * Author: GP.
 * Version: 1.0
 * Release Date: 04-May-2014
 */

/**
 * Module dependencies.
 */

var restify = require('restify'),
    utils = require('./utils');

/**
 * Common variables.
 */

var required_params = ['term', 'country'],
    itunes_client = restify.createJsonClient({
        url: 'http://itunes.apple.com'
    });

/**
 * Handler functions.
 */

var find = function(req, res, next) {
    for (index in required_params) {
        if (!(required_params[index] in req.query)) {
            return next(new restify.MissingParameterError('Parameter `%s` is mandatory.', required_params[index]));
        }
    }
    //req.query['limit'] = 3;
    itunes_client.get('/search?' + utils.serialize(req.query), function(err, request, response, data) {
        res.send(201, data);
    });
    return next();
};

/**
 * Module exports.
 */

module.exports = {
    find: find
}