// import express
const express = require('express');
const { singers } = require('./singers.json'); // { } singers is array now 

// console.log(singers);

// create application target
const app = express();

// create router
app.get('/singer/:id.html', (req, res) => {

    let { id } = req.params;

    let result = singers.find(item => { // item means the set in singer array 
        if (item.id == Number(id)) {
            return true;
        }
    });

    if (!result) {
        res.statusCode = 404;
        res.end('not found');
        return;
    }

    res.end(` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2> ${result.name}</h2>
        <image src = '${result.images}'width="150" height="150" /> 
    </body>
    </html>
    `);

});



// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  3000 listening... ')
})
