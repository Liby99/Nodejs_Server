/**
 * Author: Liby Lee
 * Version: 0.0.2
 * Date: 01/12/2016
 * File: mysql.js
 * 
 * Offers API for connecting to MySQL database
 */

var mysql = require("mysql");
var config = require("./data/config").config;

exports.query = function (obj) {
    
    /*
     * Sample input
     * obj = {
     *     query: "",
     *     data: [ ],
     *     success: function (result) { },
     *     error: function (error) { },
     *     finally: function () { }
     * }
     */
    
    //Start Client and make query
    var client = startClient();
    client.query(obj.query, obj.data, function (error, results, fields) {
        if (error) {
            console.log(error);
            
            //Check if there's error function in obj
            if (obj.error) {
                obj.error();
            }
        }
        else {
            
            //Success function is required
            obj.success(results);
        }
        
        //If there's finally function in obj, then call finally function.
        if (obj.finally) {
            obj.finally();
        }
    });

}

exports.execute = function (obj) {
    
    /*
     * Sample input
     * obj = {
     *     query: "query",
     *     data: [ ]
     * }
     */
    
    //Start Client and make execution
    var client = startClient();
    
    //Make execution
    client.query(obj.query, obj.data, function (error, results, fields) {
        if (error) {
            
            //Log error if there's an error
            console.log(error);
        }
    });
}

function startClient() {
    
    try {
        //Create new Client object
        var client = mysql.createConnection({
            user: config["mysql_username"],
            password: config["mysql_password"]
        });
        
        try {
            client.query("USE " + config["mysql_database"]);

            //Return client
            return client;
        }
        catch (ex) {
            
            console.log("Cannot find database: " + config["mysql_database"]);
            throw ex;
        }
    }
    catch (ex) {
        
        console.log("Wrong Username or Password! ");
        throw ex;
    }
}
