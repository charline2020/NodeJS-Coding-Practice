// import express
const express = require('express');

// create application target
const app = express();

// create router
app.get('/other', (req, res) => {
    // redirect to other link
    res.redirect('https://www.youtube.com/');

    // download file
    res.download(__dirname + '/xxx.json');

    // show json file
    res.json({
        name: 'hello',
        slogon: 'world'

    })

    // show file content
    res.sendFile(__dirname + '/xxx.html');


});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  3000 listening... ')
})
