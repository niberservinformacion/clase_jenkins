var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Niber. Este es un ejemplo de Cont/Deployment. This page is running Node.js version: ");
  response.write(process.version);
  response.end();
}).listen(8888);
