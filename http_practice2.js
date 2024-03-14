// import module
const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((request, response) => {

    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    if (pathname == '/') {
        let html = fs.readFileSync(__dirname + '/table.html')
        // show response body
        response.end(html);
    } 
    else if (pathname == '/style.css'){
        let css = fs.readFileSync(__dirname + '/style.css')
        // show response body
        response.end(css); 
    }
    else if (pathname == '/script.js'){
        let js = fs.readFileSync(__dirname + '/script.js')
        // show response body
        response.end(js); 
    }
    else{
        response.end('not found');  
    }


});

// listen port then start server
server.listen(9000, () => { // now port  9000 is already used by this node js application
    console.log('server started ...')
});

