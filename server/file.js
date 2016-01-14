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
            
            //Start Recursively Read the Homepage
            readHomepage(response, 0);
        }
        else {
            
            //Process pathname
            pathname = ".." + pathname;
            
            //If can access the document under this path
            fs.readFile(pathname, function (error, data) {

                //Check if the read file process have any error.
                if (error) {
                    
                    //Record the document not found error
                    console.log("Cannot Find Following File: ")
                    console.log(error);
                    
                    //Response with 404
                    response404Page(response);
                }
                else {
                    response.writeHead(200, td[pt.extname(pathname)]);
                    response.write(data.toString());
                    response.end();
                }
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

function readHomepage (response, index) {
    
    var pathname = "../" + conf['default_page'][index];
    
    //Iterate through all homepage using index
    fs.readFile(pathname, function (error, data) {

        //Check if the read file process have any error
        if (error) {
            
            //If index as surpassed the length
            if (++index >= conf['default_page'].length) {

                //Record Homepage Not Found Error
                console.log("Default Homepage Not Found");
                response404Page(response);
            }
            else {
                
                //Recursively read the next homepage
                readHomepage(response, index);
            }

        }
        else {

            //Response with the default homepage
            response.writeHead(200, td[pt.extname(pathname)]);
            response.write(data.toString());
            response.end();
        }
    });
}

function response404Page (response) {

    var pathname = "../" + conf['404_page'];
    
    //Read the Default 404 Page
    fs.readFile(pathname, function (error, data) {

        //Check if the read file process have any error.
        if (error) {

            //If Default 404 Page not found
            console.log("Default 404 Page Not Found");
            responseFileNotFound(response);
        }
        else {

            //Response with 404 Page
            response.writeHead(301, td["html"]);
            response.write(data.toString());
        }
        
        response.end();
    });
}

function responseFileNotFound (response) {
    response.writeHead(404, td["html"]);
    response.write("<h1>404 Not Found</h1>");
}