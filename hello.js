var http = require('http'); // Require http module
var fs = require('fs')

http.createServer( function(request, response){
    console.log('Request made')
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.readFile('index.html', function(err, contents){
        console.log("Displaying request")
        response.write(contents)
        response.end()
    })

    
}).listen(8080); // Listen for connectino on 8080

console.log('Listening on port 8080 ...');