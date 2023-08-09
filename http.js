const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.query);
    res.send('We are GETTING 😎');
})
app.post('./textfiles/new.txt', (req, res) => {
    res.send('We are POSTING😁');
})
app.delete('./textfiles/nodetext.txt', (req, res) => {
    res.send('We are DELETING😌');
})
app.get ('/nodefiles/output.txt', (req, res) => {
    res.send('Well, well, well...👌');
})
app.listen(8000, 'localhost', () => {
    console.log('Listening to port 8000 from local host.');
})