var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("Hello World!\nVersion:0.1.1\nDate:2022-4-23 4:07");
}).listen(8888);
console.log("Server running at http://127.0.0.1:8888");
