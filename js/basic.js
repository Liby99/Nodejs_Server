function getComments() {
    $.ajax({
        url: "/ajax/comment?action=load_comments",
        type: "get",
        success: function (result) {
            var data = JSON.parse(result);
            if (data.error_code == 0) {
                $("#content").html(generateComments(data.content.comments));
            }
            else {
                alert("System Error");
            }
        },
        error: function (result) {
            alert("Connection Error");
        }
    });
}

function generateComments(comments) {
    var str = "";
    for (var i = 0; i < comments.length; i++) {
        str += generateComment(comments[i]);
    }
    return str;
}

function generateComment(comment) {
    return "<div class=\"comment\">"
             + "<div class=\"head\">"
                 + "<strong class=\"name\">" + comment.name + "</strong>"
                 + "<span class=\"time\">" + comment.time + "</span>"
             + "</div>"
             + "<div class=\"content\">" + comment.content + "</div>"
             + "<hr />"
         + "</div>";
}

function post() {
    $.ajax({
        url: "/ajax/comment?action=add_comment",
        type: "post",
        data: { star: 5, content: "Ahahahahaha" },
        success: function (result) {
            
        },
        error: function () {
            alert("Connection Error");
        }
    });
}

function logSession() {
    $.ajax({
        url: "/ajax/login?action=log_session",
        type: "get",
        success: function (result) {
            alert("success");
        },
        error: function () {
            alert("Connection Error");
        }
    });
}

function checkSession() {
    $.ajax({
        url: "/ajax/login?action=check_session",
        type: "get",
        success: function (result) {
            alert(result.content);
        },
        error: function () {
            alert("Connection Error");
        }
    })
}