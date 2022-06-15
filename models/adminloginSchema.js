const mongoose = require('mongoose')

const adminLoginModel = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const admin = mongoose.model('admin',adminLoginModel);
module.exports = admin;