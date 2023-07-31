// Synchronous Node 

/*
let fs = require('fs');
const textIn = fs.readFileSync('./textfiles/nodetext.txt', 'utf-8');
console.log(textIn);
const textOut = `This is what i know about Nodejs so far😊: ${textIn}. \n Created on ${Date()};`
fs.writeFileSync('./textfiles/output.txt', textOut);
console.log('File written!');
*/
// Asynchronous node
fs.readfile('./textfiles/output.txt', 'utf-8', (err, data) => {
    console.log(data);
});