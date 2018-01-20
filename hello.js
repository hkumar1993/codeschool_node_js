var http = require('http'); // Require http module
var fs = require('fs')

var server = http.createServer();

server.on('request', function(request, response){
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.readFile('index.html', function (err, contents) {
        response.write(contents)
        response.end()
    })
})

server.on('request', function(request, response){
    console.log('New request coming in ...')
})

server.on('close', function(){
    console.log('Closing down server...')
})

server.listen(8080); // Listen for connectino on 8080

console.log('Listening on port 8080 ...');