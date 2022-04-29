var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/HTML' });
    response.end("<html><head></head><body><p>Hello World!</p><p>Version:0.1.5</p><p>Date:2022-4-29</p></body>");
}).listen(8082);
console.log("Server running at http://127.0.0.1:8082");
