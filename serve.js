var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    fs.readFile('./index_global.html', function(error, content) {
        if(error){
            response.writeHead(500);
            response.end(error);
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });
}).listen(8765);
