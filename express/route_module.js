// import express
const express = require('express');
const homerouter = require('./routes/home_router');
const adminrouter = require('./routes/admin_router');

// create application target
const app = express();

app.use(homerouter);
app.use(adminrouter);

app.all('*', (req, res) => {
    res.send('<h1>404 not found</h1>');
});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  9000 listening... ')
})
