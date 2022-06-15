const mongoose = require("mongoose");

//users schema
const user_details = new mongoose.Schema({
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

const registration = mongoose.model('registration',user_details);

module.exports = registration;