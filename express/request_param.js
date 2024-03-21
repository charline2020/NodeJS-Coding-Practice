// import express
const express = require('express');

// create application target
const app = express();

// create router
app.get('/:id.html', (req, res) => { 
    // get router parameters id
    console.log(req.params.id);

    res.end('parameter id test');
});

app.all('*', (req, res) => {
    res.end('404 not found');
});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  3000 listening... ')
})
