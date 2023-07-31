const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
     const pathName = req.url;
     if (pathName === '/' || pathName === '/overview') {
       res.end('This is the OVERVIEW page.');
     }
     else if (pathName === '/products') {
        res.end('This is the PRODUCTS page.');
     }
     else {
        res.writeHead('404');
        res.end('This page could not be found.');
     }
    res.end('Heyy welcome to the server, how are you doing today?');
});
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to port 8000...');
});