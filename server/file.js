/**
 * Author: Liby Lee
 * Version: 0.0.2
 * Date: 01/11/2016
 * File: file.js
 * 
 * Offers File reading API 
 */

exports.readFile = function (pathname, response) {
    
    //Load basic file system and path data.
    var fs = require("fs");
    var pt = require("path");
    var pd = require("./data/path").path;
    var td = require("./data/type").type;
    
    //Start processing Path
    if (pd[pt.dirname(pathname)] == 0) {
        
        //Process pathname
        pathname = ".." + pathname;
        
        //If can access the document under this path
        fs.readFile(pathname, function (error, data) {
            
            //Check if the read file process have any error.
            if (error) {
                console.log(error);
                response.writeHead(404, td["html"]);
                response.write("<h1>404 Not Found</h1>");
            }
            else {
                response.writeHead(200, td[pt.extname(pathname)]);
                response.write(data.toString());
            }
            
            //End response
            //P.S. Write inside function because this function is not synced.
            response.end();
        });
    }
    else {
        
        //If cannot access the document
        console.log("Access to " + pathname + " denied");
        response.writeHead(403, td["html"]);
        response.write("<h1>403 Forbidden</h1>");
        
        //End response
        response.end();
    }
    
};