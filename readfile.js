let http = require('http');
let fileRead = require('fs');
const server = http.createServer((req, res) => {
    // res.end('Hey there trying out another module in javascript.');
    fileRead.readFile('./textfiles/new.txt', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);
        return res.end();
    })
});
server.listen(3000, 'localhost', () => {
    console.log('Listening to requests from port 8080.')
});