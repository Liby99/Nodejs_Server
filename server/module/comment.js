var mysql = require("../server/mysql.js");

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

exports.Comment = function (comment_id) {
    
    var parent = this;
    var comment = mysql.query("SELECT * FROM comment WHERE comment_id = '" + comment_id + "'", function () {
        parent.comment_id = comment.comment_id;
        parent.user_id = comment.user_id;
        parent.star = comment.star;
        parent.content = comment.content;
        parent.dateTime = comment.date_time;
    });
    
}

Comment.prototype.getId = function () {
    return parent.id;
};

Comment.prototype.getCommentId = function () {
    return parent.commentId;
};

Comment.prototype.getUserId = function () {
    return parent.userId;
};

Comment.prototype.getContent = function () {
    return parent.content;
};

Comment.prototype.getDateTime = function () {
    return parent.dateTime;
}

Comment.prototype.setDateTime = function (dateTime) {
    mysql.execute({
        query: "UPDATE comment SET date_time = '" + dateTime + "' WHERE comment_id = '" + this.comment_id + "'"
    });
}