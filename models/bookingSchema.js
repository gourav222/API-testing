const mongoose = require("mongoose");

//Booking schema
const booking_details = new mongoose.Schema({
    _id : {
        type : Number
    },
    hotel :  {
        type : String,
        required : [true,'Hotel name is required']
    },
    checkin : {
        type : Date,
        required : [true,'Checkin date is required']
    },
    checkout : {
        type : Date,
        required : [true,'Checkout date is required']
    },
    guests : {
        type : Number,
        required : [true,'Number of guests is required']
    }
})

const booking = mongoose.model('booking',booking_details);

module.exports = booking;