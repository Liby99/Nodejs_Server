/**
 * Author: Liby Lee
 * Version: 0.0.2
 * Date: 01/11/2016
 * File: comment.js
 * 
 * Temporary
 */

var url = require("url");
var req = require("../server/request");
var res = require("../server/response");
var mysql = require("../server/mysql");

exports.process = function (request, response) {
    
    var query = url.parse(request.url, true).query;
    var action = query.action;
    
    switch (action) {
        case "load_comments":
            loadComments(response);
            break;
        case "add_comment":
            addComment(request, response);
            break;
        default:
            response.writeHead(404, {'Content-Type': "text/plain"});
            response.write("404 Not Found");
            response.end();
            break;
    }
}

function loadComments(response) {
    try {
        
        //Generate comments array
        var comments = new Array(10);
        for (var i = 0; i < comments.length; i++) {
            comments[i] = new Object();
            comments[i].UUID = "A9SD" + (i + 5) + "F0BHF" + i;
            comments[i].name = "user" + i;
            comments[i].time = "2015-10-" + (12 + i);
            comments[i].content = "你是不是猪";
        }
        
        //Generate response content
        var content = new Object();
        content.comments = comments;
        
        //Make response
        response.writeHead(200, {'Content-Type': "text/plain"});
        response.write(res.genData(0, "none", content));
        response.end();
    }
    catch (ex) {
        
        //Make response
        response.writeHead(400, {'Content-Type': "text/plain"});
        response.write(res.genData(1, ""))
    }
}

function addComment(request, response) {
    req.getPostBody(request, function (data) {
        console.log(require("util").inspect(data));
        response.writeHead(200, {'Content-Type': "text/plain"});
        response.end();
    });
}