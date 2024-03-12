// import module
const http = require('http');

// create server
const server = http.createServer((request, response) => {
    response.end('hello http server'); // response body 
});

// listen port then start server
server.listen(9000, () => { // now port  9000 is already used by this node js application
    console.log('server started ...')
});

// when we type http://127.0.0.1:9000 on the web, we can see 'hello http server'