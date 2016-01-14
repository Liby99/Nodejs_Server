# Nodejs_Server

A self-written Node.js Server Application. 

# Introduction

Note: The Application is written integrating the file structure. So do not change the name of server files or path names.

To Start running the server after installed node.js, open terminal, go to /server directory, and run:

    $ node index.js
    
Then you will see a log

    Server now running on port 8080

To change the port, go to /server/data/config.js
And change the port entry to the port you want.

To connect to your mysql database, also go to /server/data/config.js
And change the corresponding

    mysql_username
    
    mysql_password
    
    mysql_database
    
So that you will successfully connect to your database

# Samples

There are several samples in the published files:

The front end files: 

    /index.html
    
    /css/basic.css
    
    /js/basic.js

The back end files:

    /handler/comment.js
    
    /server/module/comment.js
    
    /server/module/user.js
    
Hope you can know how to use the server application through these files.

# Note for Get/Post AJAX Requests

From the html files, you need to request the url: 

    .../ajax/[target]?action=[data]

Where the [target] should not contain any extension names. (And [data] follows the original structure)
Containing action is easy for the handler to recognize what thing it needs to do.

# Paths

/
Store .html pages.

/css
Store .css stylesheets. Could be accessed by anyone

/js
Store client .js scripts. Could be accessed by anyone

/img
Store basic images

/fonts
Store fonts

/handler
Store handler for get/post requests. Couldn't be accessed by client. 

/server
The Place storing server scripts. Couldn't be accessed by client.

/server/index.js
The main server script to be run by 
  $ node index.js
Distributes the request to corresponding part of handling

/server/file.js
If the request is for certain files, the request will be distributed here. 
Will read the path config so that the user will get 403 Forbidden for requesting forbidden files. 
If there's no such files, the user will get 404 Not Found. 

/server/ajax.js
The script that handles the ajax get/post requests. Distribute the requests to ~/handler directory. 

/server/request.js
The script encapsulates the method for getting post body data. 
Note: Should be able to discriminate malevolence post.

/server/response.js
The script encapsulates the method for standardizing response data, including error_code, error_log, content

/server/mysql.js
The script encapsulates the methods for making connection to mysql database (reading the config files), 
query and execute

/server/data/
Stores data files, including the path authentication, http port, mysql connection config, and http return type. 

/server/data/path.js
If the entry gets value 0, it means that it could be accessed by client
Otherwise cannot.

/server/module/
The place storing encapsulated object-oriented classes. 

/server/node_modules/
The place storing npm (nodejs package manager) installed libraries.
