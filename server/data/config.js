/**
 * Author: Liby Le
 * Version: 0.0.1
 * Date: 01/12/2016
 * File: config.js
 * 
 * Includs the configuration of the MySQL account, database, and http server 
 * port
 */

exports.config = {
    'mysql_username': 'root',
    'mysql_password': '********',
    'mysql_database': 'Yobs',
    'default_page': '../index.html',
    '404_page': '../404.html',
    'port': 8080
}