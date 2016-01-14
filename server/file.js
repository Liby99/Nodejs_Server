/**
 * Author: Liby Lee
 * Version: 0.0.2
 * Date: 01/11/2016
 * File: file.js
 * 
 * Offers File reading API 
 */

//Load basic file system and path data.
var fs = require("fs");
var pt = require("path");
var pd = require("./data/path").path;
var td = require("./data/type").type;
var conf = require("./data/config").config;

exports.readFile = function (pathname, response) {
    
    //Start processing Path
    if (pd[pt.dirname(pathname)] == 0) {
        
        //Check if the pathname is empty
        if (pathname == "/") {
            fs.readFile(conf['default_page'], function (error, data) {
                
                //Check if the read file process have any error
                if (error) {
                    
                    //Record the homepage not found error
                    console.log("Default Homepage Not Found");
                    response404Page(response);
                }
                else {
                    
                    //Response with the default homepage
                    response.writeHead(200, td[pt.extname(pathname)]);
                    response.write(data.toString());
                }
            });
        }
        else {
            
            //Process pathname
            pathname = ".." + pathname;
            
            //If can access the document under this path
            fs.readFile(pathname, function (error, data) {

                //Check if the read file process have any error.
                if (error) {
                    
                    //Record the document not found error
                    console.log(error);
                    
                    //Response with 404
                    response404Page(response);
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

function response404Page (response) {

    //Read the Default 404 Page
    fs.readFile(conf['404_page'], function (error, data) {

        //Check if the read file process have any error.
        if (error) {

            //If Default 404 Page not found
            console.log("Default 404 Page Not Found");
            responseFileNotFound(response);
        }
        else {

            //Response with 404 Page
            response.writeHead(404, td["html"]);
            response.write(data.toString());
        }
    });
}

function responseFileNotFound (response) {
    response.writeHead(404, td["html"]);
    response.write("<h1>404 Not Found</h1>");
}