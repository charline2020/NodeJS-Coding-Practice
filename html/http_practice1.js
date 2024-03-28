// import module
const http = require('http');
const url = require('url');
 
// create server
const server = http.createServer((request, response) => {    
    
    let method = request.method;
    // parse url
    let res = url.parse(request.url, true);
    
    let pathname = res.pathname;
    // console.log(pathname);

    if(method == 'GET' && pathname =='/login'){
        response.end('this is a login page');
    }
    
    else if(method == 'GET' && pathname =='/reg'){
        response.end('this is a registation page');
    }

    // show response body 
    else {
        response.end('web page');
    }

});

// listen port then start server
server.listen(9000, () => { // now port  9000 is already used by this node js application
    console.log('server started ...')
});
