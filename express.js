// Express practice
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    // res.write('This is my first express experience');
   res.send('Hello World');
   res.send('Hey world, i just started learning about the express framework. \n and i just installed it.')
})

let server = app.listen(8081, function () {
  let host = server.address().address
  let port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});