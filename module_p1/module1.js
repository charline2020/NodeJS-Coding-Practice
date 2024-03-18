function sayhello() {
    console.log('say hello');
}

function saygoodbye() {
    console.log('say goodbye');
}

// module.exports = sayhello;

// module.exports = {
//     sayhello,
//     saygoodbye
// }

// another way to export
exports.sayhello = sayhello;
exports.saygoodbye = saygoodbye;