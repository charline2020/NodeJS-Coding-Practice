const mongoose = require('mongoose');

// create model structure
let bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
});

let bookModel = mongoose.model('novel', bookSchema);

// export the object
module.exports = bookModel;