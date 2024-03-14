// import module
const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((request, response) => {

    let { pathname } = new URL(request.url, 'http://127.0.0.1');

    let filepath = __dirname + '/page' + pathname;
    fs.readFile(filepath, (err, data) => {
        if (err) {
            response.statusCode = 404;
            response.end('error');
            return;
        }

        response.end(data);
    })


});

// listen port then start server
server.listen(9000, () => { // now port  9000 is already used by this node js application
    console.log('server started ...')
});
