const hotelModel = require("../models/hotelsSchema.js");
const bookingModel = require("../models/bookingSchema.js");
const roomModel = require('../models/roomSchema');

const response = {
    status : "Added successfully",
    statuscode : 201
}

const hotels = (req,res) => {
    body = req.body
    
    const details = new hotelModel();
        details._id = req.body._id;
        details.hotel = req.body.hotel;
        details.location = req.body.location;
        details.stars = req.body.stars;
        details.room = []
    
    details.save((err) => {
        if(!err){
            res.send("Added successfully");
        }
        else{
            res.send(err);
        }
    })
}

const hotelList = (req,res) => {
    hotelModel.find().then(result => {
        res.send({data:result});
    }).catch(err => {
        res.send({error:err});
    })
}

const deleteHotel = (req,res) => {
    const delHotel = {'hotel' : req.params.Name}
     hotelModel.findOne(delHotel)
    .then(function(doc){
        if(!doc)
            res.send({message : "Hotel not found",statuscode : 500})
        hotelModel.deleteOne(delHotel,function(err){
            if(err)
                throw err
            res.send({statuscode : 201})  
        })
    })
}

const hotelBooking = (req,res) => {
    body = req.body
    const details = new bookingModel({
        _id : req.body._id,
        hotel : req.body.hotel,
        checkin : req.body.checkin,
        checkout : req.body.checkout,
        guests : req.body.guests
    })
    details.save((err) => {
        if(!err){
            res.send(response);
        }
        else{
            res.send(err);
        }
    })
}

const bookingList = (req,res) => {
    bookingModel.find().then(result => {
        res.send({booking_details:result});
    }).catch(err => {
        res.send({error:err});
    })
}

const rooms = (req,res) => {
    body = req.body;
    const roomDetails = new roomModel({
        roomNumber : req.body.roomNumber,
        type : req.body.type,
        price : req.body.price,
        guests : req.body.guests
    })
    roomDetails.save(err => { 
        if(!err){
            res.send("Added succussfully");
        }
        else{
            res.send(err)
        }
    })
}

const hotelByName = (req,res) => {
    const hotelName = {'hotel' : req.params.Name}
    hotelModel.findOne(hotelName).then(function(doc){
        if(!doc)
            res.send({message : "Hotel not exists" , statuscode : 500})
        res.send(doc)    
    })
}

module.exports = {hotels,hotelList,deleteHotel,hotelBooking,bookingList,rooms,hotelByName}
