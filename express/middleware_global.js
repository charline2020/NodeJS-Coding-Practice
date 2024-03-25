// record each request's url and ip 

// import express
const express = require('express');
const fs = require('fs');
const path = require('path');

// create application target
const app = express();

// use middleware to record each url and ip
function middlewarerecord(req, res, next) {
    let { url, ip } = req;
    fs.appendFileSync(path.resolve(__dirname + '/access.log'), `${url} ${ip} \r\n`);

    next(); // to run the following route
}
app.use(middlewarerecord); // use middleware function

// create router
app.get('/home', (req, res) => {
    // let { url, ip } = req;
    // fs.appendFileSync(path.resolve(__dirname + '/access.log'), `${url} ${ip} \r\n`);
    res.send('frontend page');
})

app.get('/admin', (req, res) => {
    res.send('backend page');
})

app.all('*', (req, res) => {
    res.send('<h1>404 not found</h1>');
});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  3000 listening... ')
})
