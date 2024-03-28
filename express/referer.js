// import express
const express = require('express');

// create application target
const app = express();

// middleware
app.use((req, res, next) => {
    // check require head referer 

    // get referer
    let referer = req.get('referer');
    console.log(referer);

    if (referer) {
        let url = new URL(referer);
        let hostname = url.hostname;
        console.log(hostname);

        if (hostname !== '127.0.0.1') {
            res.status(404).send('<h1> 404 not found </h1>')
            return;
        }

    }
    next();
});

app.use(express.static(__dirname + '/public')); // static source folder
// in public the index.html is the default response 


// listen port and start server
app.listen(9000, () => {
    console.log('server started, port  9000 listening... ')
})
