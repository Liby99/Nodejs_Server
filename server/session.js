/**
 * Author: Liby Lee
 * Version: 0.0.1
 * Date: 01/14/2016
 * File: session.js
 * 
 * Offers basic API for restoring sessions.
 */

var config = require("./data/config").config;
//var dt = require("./module/DateTime");

module.exports = {
    
    //The Main Session Object Storing Sessions
    sessions: new Object(),
    /**
     * Refresh the session with the given key.
     * @param key, the key to the session which needs refresh.
     */
    refresh: function (key) {
        if (this.sessions[key]) {
            this.sessions[key].startTime = Date.parse(new Date());
            return this.sessions[key].value;
        }
        else {
            return undefined;
        }
    },
    /**
     * Get the session by given key.
     * @param key, the key to search for a session. return undefined if unfind.
     */
    get: function (key) {
        return this.refresh(key);
    },
    add: function (key, value) {
        var session = {
            'key': key,
            'value': value,
            'startTime': Date.parse(new Date())
        };
        this.sessions[key] = session;
    },
    del: function (key) {
        if (this.get(key)) {
            delete this.ssessions[key];
        }
    }/*,
    start: function () {
        setInterval(function () {
            garbageCollect();
        }, config.session_beats);
    },
    garbageCollect: function () {
        for (var session in this._session) {
            var diff = dt.getTimeSpan(new Date(session.startTime), new Date());
            if (diff > config.session_expire_time) {
                this.del(session.key);
            }
        }
    }*/
}