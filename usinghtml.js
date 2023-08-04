const http = require('http');
const fs = require('fs');
// const path = require('path');
let path = require('path');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello world! I am so excited to learn about node.');
    path = './htmlfiles/';
switch(req.url) {
 case '/':
     path += 'index.html';
     break;
 case '/about':
     path += 'about.html';
     break;
 default:
     path += '404.html';
     break;
}
fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    } else {
       res.end(data);
    }
});
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening to port 3000.');
})