/**
 * Author: Liby Lee
 * Version: 0.0.1
 * Date: 01/12/2016
 * File: mysql.js
 * 
 * Offers API for connecting to MySQL database
 */

var mysql = require("mysql");
var config = require("./data/config_data").config;

exports.query = function (query, callback) {
    
    //Start Client and make query
    var client = startClient();
    client.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
            throw "DatabaseQueryError";
        }
        else {
            callback(results);
        }
    });

}

exports.execute = function (obj) {
    
    //Start Client and make execution
    var client = startClient();
    client.query(obj.query, obj.data);
}

function startClient() {
    
    //Create new Client object
    var client = mysql.createConnection({
        user: config["mysql_username"],
        password: config["mysql_password"]
    });
    client.query("USE " + config["mysql_database"]);
    
    //Return client
    return client;
}
