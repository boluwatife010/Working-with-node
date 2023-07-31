// const http = require('http');
// http.createServer ((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(8080);
let http = require('http');
let url = require('url');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    let value = url.parse(req.url, true).query;
    let text = value.year + " " + value.month;
}).listen(8080);