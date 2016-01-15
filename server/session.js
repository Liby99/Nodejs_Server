var config = require("./data/config").config;
var dt = require("./module/DateTime");

exports.session = function () {
    
    //The Main Session Object Storing Sessions
    this._session = {};
    
    /**
     * Retrieve the session
     */
    this.get = function (key) {
        return refresh(key);
    };
    
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
            var diff = dt.getDifference(session.startTime, Date.parse(new Date()));
            if (diff > config.session_expire_time) {
                this.delete(session.key);
            }
        }
    };
}