// import module
const http = require('http');
const url = require('url');
 
// create server
const server = http.createServer((request, response) => {    
    
    // parse url
    let res = url.parse(request.url, true);
    console.log(res);

    let pathname = res.pathname;
    console.log(pathname);

    let kw = res.query.keyword;
    console.log(kw);

    // show response body 
    response.end('url');

});

// listen port then start server
server.listen(9000, () => { // now port  9000 is already used by this node js application
    console.log('server started ...')
});

// when we type http://127.0.0.1:9000 on the web, we can see 'hello http server'