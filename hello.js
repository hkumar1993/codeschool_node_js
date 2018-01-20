var http = require('http'); // Require http module

http.createServer( function(request, response){
    response.writeHead(200); // Code status code
    response.write("Hello, this is dog."); // Response
    response.end(); // Close connection
}).listen(8080); // Listen for connectino on 8080

console.log('Listening on port 8080 ...');