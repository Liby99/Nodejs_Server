/**
 * Author: Liby Le
 * Version: 0.0.1
 * Date: 01/12/2016
 * File: config.js
 * 
 * Includes the configuration of the MySQL account, database, and http server port
 */

exports.config = {
    'mysql_username': 'root',
    'mysql_password': '********',
    'mysql_database': 'Yobs',
    'default_page': [
        'index.html',
        'default.html'
    ],
    '404_page': '404.html',
    'session_beats': 1000 * 60 * 3,
    'session_expire_time': 1000 * 60 * 30,
    'port': 8080
}