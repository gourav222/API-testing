const mongoose = require('mongoose');

//Room Schema
const roomModel = new mongoose.Schema({
    roomNumber : {
        type : Number,
        required : [true,'Room number is required']
    },
    type : {
        type : String
    },
    price : {
        type : Number
    },
    guests : {
        type : Number
    }
})

module.exports = roomModel;