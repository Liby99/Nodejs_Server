/**
 * Author: Liby Lee
 * Version: 0.0.1
 * Date: 01/11/2016
 * File: response.js
 * 
 * Offers API for generating formatted string data
 */

exports.genData = function (errorCode, errorLog, content) {
    
    //Create a new object for return
    var obj = new Object();
    
    //Enter error code and log
    obj.error_code = errorCode;
    obj.error_log = errorLog;
    
    //Enter the main data
    obj.content = content;
    
    //Return the string of object
    return JSON.stringify(obj);
}