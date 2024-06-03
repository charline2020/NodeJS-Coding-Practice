const mongoose = require('mongoose');

// create model structure
let AccountSchema = new mongoose.Schema({
    item: {
        type:String,
        required: true
    },
    happenTime: Date,
    type: {
        type: Number,
        default: -1
    },
    amount:{
        type: Number,
        requried: true
    },
    remark: {
        type: String
    }
});

let AccountModel = mongoose.model('accounts', AccountSchema);

// export the object
module.exports = AccountModel;