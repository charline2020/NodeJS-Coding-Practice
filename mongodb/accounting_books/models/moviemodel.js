const mongoose = require('mongoose');

// create model structure
let MovieSchema = new mongoose.Schema({
    title: String,
    director: String
});

let MovieModel = mongoose.model('movie', MovieSchema);

// export the object
module.exports = MovieModel;