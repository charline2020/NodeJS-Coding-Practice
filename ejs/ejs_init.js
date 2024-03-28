const ejs = require('ejs');
const fs = require('fs');

let hel = 'hello';
let weather = 'good weather';
// let str = `${hel}, i love you `;

let str = fs.readFileSync('./html_1.html').toString();

let result = ejs.render(str, {hel:hel, weather:weather});

console.log(result);
