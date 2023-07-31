let http = require('http');
let mymodule = require('./mymodule');
 http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('The date and time are currently: ' + mymodule.myDateTime());
    res.end();
}).listen(8080);
