// import express
const express = require('express');

// create application target
const app = express();

app.get('/home', (req, res)=>{
    res.end('hello express');
});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port 9000 listening... ')
});