// import express
const express = require('express');
const path = require('path');

// create application target
const app = express();

// set module engine
app.set('view engine','ejs');

app.set('views', path.resolve(__dirname,'./views')); // html files which have  ejs inside

app.get('/home', (req, res)=>{
    // res.end('hello express');
    let title = 'how to use ejs in express';
    res.render('home', {title});
});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port 9000 listening... ')
});
