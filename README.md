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

From the client Javascript, you need to request the url: 

    /ajax/[target]?action=[data]

Where the [target] should not contain any extension names. (And [data] follows the original structure.)
Containing <code>action</code> is easy for the handler to recognize what thing it needs to do.

# Paths

<code>/</code>
Store .html pages.

<code>/css</code>
Store .css stylesheets. Could be accessed by anyone

<code>/js</code>
Store client .js scripts. Could be accessed by anyone

<code>/img</code>
Store basic images

<code>/fonts</code>
Store fonts

<code>/handler</code>
Store handler for get/post requests. Couldn't be accessed by client. 

<code>/server</code>
The Place storing server scripts. Couldn't be accessed by client.

<code>/server/index.js</code>
The main server script to be run by 
  <code>$ node index.js</code>
Distributes the request to corresponding part of handling

<code>/server/file.js</code>
If the request is for certain files, the request will be distributed here. 
Will read the code config so that the user will get 403 Forbidden for requesting forbidden files. 
If there's no such files, the user will get 404 Not Found. 

<code>/server/ajax.js</code>
The script that handles the ajax get/post requests. Distribute the requests to ~/handler directory. 

<code>/server/request.js</code>
The script encapsulates the method for getting post body data. 
Note: Should be able to discriminate malevolence post.

<code>/server/response.js</code>
The script encapsulates the method for standardizing response data, including error_code, error_log, content

<code>/server/mysql.js</code>
The script encapsulates the methods for making connection to mysql database (reading the config files), 
query and execute

<code>/server/data/</code>
Stores data files, including the path authentication, http port, mysql connection config, and http return type. 

<code>/server/data/path.js</code>
If the entry gets value 0, it means that this path could be accessed by client
Otherwise cannot.

<code>/server/module/</code>
The place storing encapsulated object-oriented classes. 

<code>/server/node_modules/</code>
The place storing npm (nodejs package manager) installed libraries.
