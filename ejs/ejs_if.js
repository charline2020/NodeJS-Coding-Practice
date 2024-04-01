const ejs = require('ejs');

let islogin = false;

// if (islogin){
//     console.log('<span> welcome back </span>');
// }else{
//     console.log('<button> login </button> <button> registration </button>')
// }

// let result = ejs.render(`
//     <% if (islogin) {  %>

//     <span> welcome back </span> 
//     <% } else{ %>
//     <button> login </button> <button> registration </button>
//     <% }  %>
     
// `, { islogin: islogin });

// console.log(result);

const fs = require('fs');

let html = fs.readFileSync('./ejs/html_if.html').toString();

let result = ejs.render(html, { islogin: islogin });

console.log(result);