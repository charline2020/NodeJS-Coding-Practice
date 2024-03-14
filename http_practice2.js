// import module
const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((request, response) => {

    let html = fs.readFileSync(__dirname + '/table.html')
    // show response body
    response.end(html);

});

// listen port then start server
server.listen(9000, () => { // now port  9000 is already used by this node js application
    console.log('server started ...')
});

