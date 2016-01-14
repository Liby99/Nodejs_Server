
var url = require("url");
var req = require("../server/request");
var res = require("../server/response");
var mysql = require("../server/mysql");

exports.process = function (request, response) {
    
    var query = url.parse(request.url, true).query;
    var action = query.action;
    
    switch (action) {
        case "login":
            login(request, response);
            break;
        case "logout":
            logout(request, response);
            break;
        default:
            response.writeHead(400, {'Content-Type': "text/plain"});
            response.write(res.genData(401, "Command Not Found"));
            response.end();
            break;
    }
}

function login(request, response) {
    req.getPostBody(request, function (data) {
        var log = require("../server/module/User").login;
        log({
            email: data.email,
            password: data.password,
            success: function () {
                response.writeHead(200, {'Content-Type': "text/plain"});
                response.write(res.genData(0, ""));
                response.end();
            },
            fail: function () {
                response.writeHead(200, {'Content-Type': "text/plain"});
                response.write(res.genData(1, "Wrong Username or Password"));
                response.end();
            },
            error: function () {
                response.writeHead(200, {'Content-Type': "text/plain"});
                response.write(res.genData(-1, "System Error"));
                response.end();
            }
        });
    });
}