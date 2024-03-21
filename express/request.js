// import express
const express = require('express');

// create application target
const app = express();

// create router
app.get('/request', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

    // express operation
    console.log(req.path);
    console.log(req.query);
    // express get ip
    console.log(req.ip);
    // express get request host headers
    console.log(req.get('host'));

    res.end('hello express');
});

app.all('*', (req, res) => {
    res.end('404 not found');
});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  3000 listening... ')
})
