/**
 * Author: Liby Lee
 * Version: 0.0.1
 * Date: 01/11/2016
 * File: request.js
 * 
 * Offers API for getting the post request body data.
 */

var querystring = require('querystring');

exports.getPostBody = function (request, callback) {
    var data = "";
    request.on("data", function (chunk) {
        data += chunk;
    });
    request.on("end", function () {
        callback(querystring.parse(data));
    });
};