// import express
const express = require('express');

// create application target
const app = express();

// create router
app.get('/home', (req, res) => {
    res.end('hello express');
});

app.get('/', (req, res) => {
    res.end('home page');
});

app.post('/login', (req, res)=>{
    res.end('log in page');
});

// all methods will response test page
app.all('/test', (req, res)=>{
    res.end('test page');
});

app.all('*', (req, res)=>{
    res.end('404 not found');
});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  3000 listening... ')
})
