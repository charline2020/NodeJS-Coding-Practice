// import module
const http = require('http');

// create server
const server = http.createServer((request, response) => {    
    
    // get http method
    // console.log(request.method);

    // get url
    // console.log(request.url); // only shows url path and search text

    // get http request head
    // console.log(request.headers);

    // get host from http request head
    // console.log(request.headers.host);

    // set response status
    response.statusCode = 200;
    
    // set response message
    response.statusMessage = 'OK';

    // set response header
    response.setHeader('content-type', 'text/html;charset=utf-8')

    // set response body
    response.write('hello <br/>');
    response.write('this is main page');

    // show response body
    response.end();

});

// listen port then start server
server.listen(9000, () => { // now port  9000 is already used by this node js application
    console.log('server started ...')
});

// when we type http://127.0.0.1:9000 on the web, we can see 'hello http server'