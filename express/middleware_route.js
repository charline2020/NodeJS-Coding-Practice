// /admin and /setting need to have code = 521 


// import express
const express = require('express');

// create application target
const app = express();


// create router
app.get('/home', (req, res) => {
    res.send('frontend page');
})

function codemiddleware(req, res, next) {
    if (req.query.code == '521') {
        next();
    } else {
        res.send('wrong code') //  http://127.0.0.1:9000/admin
    }
}

app.get('/admin', codemiddleware, (req, res) => {
    // if (req.query.code == '521') {
    //     res.send('backend page'); // http://127.0.0.1:9000/admin?code=521
    // } else {
    //     res.send('wrong code') //  http://127.0.0.1:9000/admin
    // }
    res.send('backend page');
})

app.get('/setting', codemiddleware, (req, res) => {
    res.send('backend setting page');
})

app.all('*', (req, res) => {
    res.send('<h1>404 not found</h1>');
});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  3000 listening... ')
})
