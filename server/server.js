/**
 * Author: Liby Lee
 * Version: 0.0.3
 * Date: 01/12/2016
 * File: server.js
 * 
 * Start running the server on the given file, and start processing file
 * requests and ajax requests.
 */

//Load Basic framework
var http = require("http");
var url = require("url");
var path = require("path");

//Load Server framework
var config = require("./data/config").config;
var file = require("./file");
var ajax = require("./ajax");

function startServer () {
    http.createServer(function (request, response) {
        
        //Save the pathname from the request
        var pathname = url.parse(request.url).pathname;
        
        //Check if the request is AJAX
        if (path.dirname(pathname) == "/ajax") {
            
            //Start Ajax and process the request
            ajax.process(request, response);
        }
        else {
            
            //Start reading files and process request
            file.readFile(pathname, response);
        }
    }).listen(config.port);
    
    console.log("Server Now Run On Port " + config.port);
}

//Start the server.
startServer();