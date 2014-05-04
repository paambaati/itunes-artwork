/**
 * iTunes Artwork API - API Handler
 *
 * iTunes Search/Lookup API Documentation - http://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html
 * Restify API Documentation - http://mcavage.me/node-restify/
 *
 * Author: GP.
 * Version: 1.0.1
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

/**
 * Find album artwork.
 * Returns a JSON response that looks like this -
 * [
 *  {
 *      'album': '<ALBUM_NAME>',
 *      'artist': '<ARTIST NAME>',
 *      'artwork_100': '<URL TO 100x100 ARTWORK THUMBNAIL>',
 *      'artwork_600': '<URL TO 600x600 ARTWORK COVER (MEDIUM-RES)>',
 *      'artwork_100': '<URL TO 1200x1200 ARTWORK COVER (HI-RES)>'
 *  },
 *  {...},...
 * ]
 *
 * @api public
 */
var find = function(req, res, next) {
    var response_json = [],
        result = null;
    //Validate mandatory fields.
    for (var index = 0; index < required_params.length; index++) {
        if (!(required_params[index] in req.query)) {
            return next(new restify.MissingParameterError('Parameter `%s` is mandatory.', required_params[index]));
        }
    }

    //Hardcoded defaults.
    //Find only 'album' artwork for 'music'.
    req.query['media'] = 'music';
    req.query['entity'] = 'album';
    //req.query['limit'] = 3;

    itunes_client.get('/search?' + utils.serialize(req.query), function(err, request, response, data) {
        for (var index = 0; index < data.results.length; index++) {
            result = data.results[index];
            response_json.push({
                'album': result.collectionName,
                'artist': result.artistName,
                'artwork_100': result.artworkUrl100,
                'artwork_600': result.artworkUrl100.replace('.100x100-', '.600x600-'),
                'artwork_1200': result.artworkUrl100.replace('.100x100-', '.1200x1200-')
            });
        }
        res.send(201, response_json);
    });
    return next();
};

/**
 * Module exports.
 */

module.exports = {
    find: find
}