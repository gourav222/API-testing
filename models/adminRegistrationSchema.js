const mongoose = require('mongoose');

//Admin Model
const adminRegistrationModel = new mongoose.Schema({
    Name :  {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    contact : {
        type : Number,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const adminRegister = mongoose.model('adminRegister',adminRegistrationModel);
module.exports = adminRegister