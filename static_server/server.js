// import module
const http = require('http');
const fs = require('fs');
const path = require('path');
let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}
// create server
const server = http.createServer((request, response) => {

    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    // console.log(pathname.toString());

    let root = __dirname + '/page';

    let filepath = root + pathname;

    fs.readFile(filepath, (err, data) => {
        if (err) {
            response.statusCode = 500;
            response.end('not found ');
            return;
        }
        // console.log(data.toString());

        // set content-type
        let ext = path.extname(filepath).slice(1);
        let type = mimes[ext];
        if (type) {
            response.setHeader('content-type', type);
        } else {
            response.setHeader('content-type', 'application/octet-stream');
        }
        // console.log(ext);
        // response.setHeader('content-type', '');

        response.end(data);
    })

});

// listen port then start server
server.listen(9000, () => { // now port  9000 is already used by this node js application
    console.log('server started ...')
});

