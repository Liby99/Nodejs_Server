/**
 * Author: Liby Lee
 * Version: 0.0.1
 * Date: 01/14/2016
 * File: session.js
 * 
 * Offers basic API for restoring sessions.
 */

var config = require("./data/config").config;
var dt = require("./module/DateTime");

exports.session = function () {
    
    //The Main Session Object Storing Sessions
    this._session = {};
    
    /**
     * Get the session by given key.
     * @param key, the key to search for a session. return undefined if unfind.
     */
    this.get = function (key) {
        return refresh(key);
    };
    
    /**
     * Refresh the session with the given key.
     * @param key, the key to the session which needs refresh.
     */
    this.refresh = function (key) {
        if (this._session[key]) {
            _session[key].startTime = Date.parse(new Date());
            return _session[key];
        }
        else {
            return undefined;
        }
    };
    
    this.add = function (key, value) {
        var session = {
            'key': key,
            'value': value,
            'startTime': Date.parse(new Date());
        };
        _session[key] = session;
    };
    
    this.delete = function (key) {
        if (this.get(key)) {
            delete this._session[key];
        }
    };
    
    this.start = function () {
        setInterval(function () {
            garbageCollect();
        }, config.session_beats);
    };
    
    this.garbageCollect = function () {
        for (var session in this._session) {
            var diff = dt.getTimeSpan(new Date(session.startTime), new Date());
            if (diff > config.session_expire_time) {
                this.delete(session.key);
            }
        }
    };
}