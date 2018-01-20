var http = require('http'); // Require http module

http.createServer( function(request, response){
    response.writeHead(200); // Code status code
    // response.write("Hello, this is dog."); // Response
    response.write("Dog is running\n"); // Response
    // console.log("Dog is running\n"); // Response
    
    setTimeout(function(){
        response.write("Dog is done.\n");
        // console.log("Dog is done\n"); // Response
        response.end()
    }, 5000)

    // response.end(); // Close connection
}).listen(8080); // Listen for connectino on 8080

console.log('Listening on port 8080 ...');