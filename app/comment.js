var mysql = require("../server/mysql.js");

exports.Comment = function (comment_id) {
    
    var parent = this;
    var comment = mysql.query("SELECT * FROM comment WHERE comment_id = '" + comment_id + "'", function () {
        parent.comment_id = comment.comment_id;
        parent.user_id = comment.user_id;
        parent.star = comment.star;
        parent.content = comment.content;
        parent.dateTime = comment.date_time;
    });
    
    this.getId = function () {
        return id;
    };
    
    this.getCommentId = function () {
        return parent.commentId;
    };
    
    this.getUserId = function () {
        return parent.userId;
    };
    
    this.getContent = function () {
        return parent.content;
    };
    
    this.getDateTime = function () {
        return parent.dateTime;
    }
}

exports.addComment = function (user_id, star, content) {
    mysql.execute({
        query: "INSERT INTO comment (user_id, star, content) VALUES (?, ?, ?)",
        data: {
            'user_id': user_id,
            'star': star,
            'content': content
        }
    });
}