// import express
const express = require('express');

// create application target
const app = express();

// create router
app.get('/response', (req, res) => {
    // res.statusCode= 404;
    res.statusMessage = 'love you';
    res.setHeader('xxx', 'yyy');
    res.write('hello express');

    // res.end('hello response');

    // express framework
    res.status(500); // status code
    res.set('aaa', 'bbb'); // set header
    res.send('hello  你好'); // response body

    // same as above
    res.status(500).set('aaa', 'bbb').send('你好');
});

// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  3000 listening... ')
})
