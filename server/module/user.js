/**
 * 
 */

var mysql = require("../mysql");
var encode = require("./encode");

exports.newUser = function (email, firstName, lastName, password) {
    
}

exports.login = function (data) {
    
    //First encode password
    var encoded = encode.encode(data.password);
    
    try {
        //Check if there's any corresponding user
        mysql.query({
            query: "SELECT COUNT(user_id) AS amount FROM user WHERE email = ? AND password = ?",
            data: [email, encoded],
            success: function (result) {
                if (result[0].amount === 0) {
                    data.failed();
                }
                else {
                    data.success();
                }
            },
            error: function () {
                obj.error();
            }
        });
    }
    catch (ex) {
        obj.systemError();
    }
}

exports.User = function (user_id) {
    
    var parent = this;
    mysql.query("SELECT * FROM user WHERE user_id = '" + user_id + "'", function (results) {
        parent.userId = results.user_id;
        parent.email = results.email;
        parent.firstName = results.first_name;
        parent.lastName = results.last_name;
    });
    
}

User.prototype.getFirstName = function () {
    return this.firstName;
}

User.prototype.getLastName = function () {
    return this.lastName;
}

User.prototype.getFullName = function () {
    return this.getFirstName() + " " + this.getLastName();
}