/**
 * iTunes Artwork API - Miscellaneous utilities.
 * Author: GP.
 * Version: 1.0
 * Release Date: 04-May-2014
 */

/**
 * Serializes an associative array (or dictionary) into
 * an URL-encoded query string.
 *
 * @param {Object} associative array to serialize.
 */

var serialize = function(obj) {
    var str = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
    }
    return str.join('&');
}

/**
 * Module exports.
 */

module.exports = {
    serialize: serialize
}