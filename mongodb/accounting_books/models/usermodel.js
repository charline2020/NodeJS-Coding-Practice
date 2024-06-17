const mongoose = require('mongoose');

// create model structure
let UserSchema = new mongoose.Schema({
    username: String,
    password: String 
});

let UserModel = mongoose.model('users', UserSchema);

// export the object
module.exports = UserModel;