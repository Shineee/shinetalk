var http = require("http");
var version = require("./version");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/HTML' });
    response.end("<html><head></head><body><p>Hello World!</p><p>Version:" + version.version_code + "</p><p>Date:" + version.build_time + "</p></body>");
}).listen(8082);
console.log("Server running at http://127.0.0.1:8082");
