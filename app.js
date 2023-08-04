const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Listening to port 3000');
});
app.get('/', (req, res) => {
    // res.send('Hello world!!');
    res.sendFile('./htmlfiles/index.html', {root: __dirname});
} );
app.get('/about', (req, res) => {
    // res.send('Nice to know a little bit about express');
    res.sendFile('./htmlfiles/about.html', {root: __dirname});
} )
app.get('/new', (req, res) => {
    // res.send('Down to the texts...');
    res.sendFile('./textfiles/new.txt', {root: __dirname});
} )
app.get('/new-me', (req, res) => {
    // res.send('Down to the texts...');
    res.redirect('./textfiles/new.txt', {root: __dirname});
} )
app.get('/nodetext', (req, res) => {
    // res.send('Learnt about node.');
    res.sendFile('./textfiles/nodetext.txt', {root: __dirname});
} )
app.use('/', (req, res) => {
    res.status(404).sendFile('./htmlfiles/404.html', {root: __dirname});
})
