// import module
const http = require('http');

// create server
const server = http.createServer((request, response) => {    
    
    // get request body
    let body = '';
    // use 'data' to read the body dataflow 
    request.on('data', chunk =>{
        body += chunk;
    })
    // after read all data from request body we need to end the process
    request.on('end', () => {
        console.log(body);
        response.end('got all request body');
    });
    // show response body 
    response.end('hello http server');

});

// listen port then start server
server.listen(9000, () => { // now port  9000 is already used by this node js application
    console.log('server started ...')
});

// when we type http://127.0.0.1:9000 on the web, we can see 'hello http server'