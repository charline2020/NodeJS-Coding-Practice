const mongoose = require('mongoose');

// create model structure
let Accountchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    time: Date,
    type: {
        type: Number,
        default: -1
    },
    account:{
        type: Number,
        requried: true
    },
    remarks: {
        type: String
    }
});

let AccountModel = mongoose.model('accounts', AccountSchema);

// export the object
module.exports = AccountModel;