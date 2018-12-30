var express = require('express');
var serveStatic = require('serve-static')
var path = require('path');
var app = express();

// viewed at http://localhost:8080
app.use('/',serveStatic(path.join(__dirname,'/dist')))


const port = process.env.PORT|| 8080

app.listen(port);

console.log('Listening on port: '+ port);
