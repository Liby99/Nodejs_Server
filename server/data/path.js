/**
 * Author: Liby Lee
 * Version: 0.0.3
 * Date: 01/12/2016
 * File: path.js
 * 
 * Basically list all path and state that it's accessible or not.
 * 0: everyone can access. 
 * 1: cannot access from http request.
 */

exports.path = {
    '/': 0,
    '/css': 0,
    '/fonts': 0,
    '/img': 0,
    '/js': 0,
    '/server': 1,
    '/handler': 1,
}