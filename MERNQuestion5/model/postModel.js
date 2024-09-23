var mongoose = require('mongoose');

const scheme = new mongoose.Schema({
    title: {
        required : true,
        type : String
    },
    description : {
        required: true,
        type : String
    },
    postedOn : {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model("data", scheme);