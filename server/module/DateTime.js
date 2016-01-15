exports.DateTime = function (date) {
    this.dateTime = date;
}

exports.getTimeSpan = function (start, end) {
    return Math.abs(Date.parse(start) - Date.parse(end));
}

DateTime.prototype.toSqlDateTime = function () {
    return this.dateTime.Format("yyyy-MM-dd hh:mm:ss");
}

Date.prototype.Format = function (fmt) {
    
    //Format the parameters
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    
    //
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    
    //Return the formatted
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) 
                              ? (o[k]) 
                              : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}