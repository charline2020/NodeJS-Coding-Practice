// import express
const express = require('express');

// create application target
const app = express();

app.use(express.static(__dirname + '/public')); // static source folder
// in public the index.html is the default response 
 
// create router
app.get('/home', (req, res) => {
    res.end('hello express');
});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  300 0 listening... ')
})
