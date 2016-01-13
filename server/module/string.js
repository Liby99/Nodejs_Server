/**
 * Author: Liby Lee
 * Version: 1.0.0
 * Date: 01/11/2016
 * File: string.js
 * 
 * An encapsulated string class offers some extra methods.
 */

exports.String = function (str) {
    
    //When created, initiate the string.
    this.str = str;
    
    /**
     * Cut the string from the given start index
     * throw out of bounds exception if the given start string is longer than this string
     */
    this.cutStringFrom = function (start) {
        if (start > this.str.length) {
            throw "IndexOutOfBounds Exception";
        }
        else {
            var result = "";
            for (var i = start; i < this.str.length; i++) {
                result += this.str.charAt(i);
            }
            return result;
        }
    };
    
    this.cutStringBetween = function (start, end) {
        if (start > this.str.length || end > this.str.length || start > end) {
            throw "IndexOutOfBounds Exception";
        }
        else {
            var result = "";
            for (var i = start; i < end; i++) {
                result += this.str.charAt(i);
            }
            return result;
        }
    };
    
    this.substring = function (args) {
        if (args.length == 1) {
            return this.cutStringFrom(args[0]);
        }
        else if (args.length == 2) {
            return this.cutStringBetween(args[0], args[1]);
        }
        else {
            throw "NoMatchParamSet Exception";
        }
    };
    
    this.startsWith = function (start) {
        if (start.length > this.str.length) {
            return false;
        }
        else {
            for (var i = 0; i < start.length; i++) {
                if (start.charAt(i) != this.str.charAt(i)) {
                    return false;
                }
            }
            return true;
        }
    };
    
    this.endsWith = function (end) {
        if (end.length > this.str.length) {
            return false;
        }
        else {
            for (var i = 0; i < end.length; i++) {
                if (end.charAt(i) != this.str.charAt(i + this.str.length - end.length)) {
                    return false;
                }
            }
            return true;
        }
    };
    
    this.charAt = function (i) {
        return this.str.charAt(i);
    };
    
    this.equals = function (stringToCompare) {
        return this.startsWith(stringToCompare);
    }
}