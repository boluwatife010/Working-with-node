const http = require('http');
const fs = require('fs');
let path = require('path');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hey, I am just trying to see if i uderstand basic modules in javascript.');
    res.end();
    path = './textfiles/';
    switch (req.url) {
        case '/':
            path += 'new.txt';
            break;
        case '/nodetext.txt':
            path +=  'nodetext.txt';
            break;
        case 'output.txt':
            path += 'output.txt';
            break;
        default :
            path += 'nodetext2.txt';
            break;
    }
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            req.end(err);
        }   else {
            res.end(data);
        }
    })
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening to port 3000.');
})