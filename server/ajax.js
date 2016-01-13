/**
 * Author: Liby Lee
 * Version: 0.0.1
 * Date: 01/11/2016
 * File: ajax.js
 * 
 * Process function mainly distribute the request into specific handler.
 */

exports.process = function (request, response) {
    
    //Load path module
    var pt = require("path");
    var url = require("url");
    
    //Pick out the basename from the request
    var basename = pt.basename(url.parse(request.url).pathname);
    
    try {
        //Load corresponding handler module
        var handler = require("../handler/" + basename);

        //Call Process method of the handler
        handler.process(request, response);
    }
    catch (ex) {
        
        //Generate the Error String
        var str = "Tempting to request AJAX " + basename + " FAILED";
        
        //Log the error to the console
        console.log(str);
        
        //Make 404 Response
        response.writeHead(404, "text/plain");
        response.write(str);
        response.end();
    }
}