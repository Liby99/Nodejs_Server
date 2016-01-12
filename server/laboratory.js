function process () {
    var mysql = require("./mysql");
    var data = mysql.query("SELECT * FROM user", function (results) {
        console.log(JSON.stringify(results));
    });
}

process();