var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    buffer = new Buffer(100);
    var fileContents = fs.readFileSync('index.html');
    var message = fileContents.toString();
    bytes = buffer.write('fileContents');
//    var message = buffer.toString(buffer,0,bytes);
//    response.send(message);
    response.send(message);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
