const ejs = require('ejs');
const fruits = ['apple','banana','lemon','pinapple'];

// let str = '<ul>';

// fruits.forEach(item =>{
//     str += `<li> ${item} </li>`;
// })
 
// str += '</ul>';

// console.log(str);

const fs = require('fs');
let html = fs.readFileSync('./ejs/html_list.html').toString();

let result = ejs.render(html, {fruits: fruits});

console.log(result);