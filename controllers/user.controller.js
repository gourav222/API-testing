const register = require("../models/userRegisterSchema");
const bookingModel = require('../models/bookingSchema')
const jwt = require('jsonwebtoken')
const response = {
    status : "Pass",
    statuscode : 201
}

const userLogin = (req,res) => {
    const userEmail = {email:req.body.email} 
    register.find(userEmail)
    .exec()
    .then(user => {
        const response = {
            status : "Pass",
            statuscoe : 201
        }
        if(user < 1){
            response.status = "Fail";
            response.statuscoe = 204;
            res.send(response);
        }
        else{
            if(user[0].password === req.body.password){
                const tmp = jwt.sign(userEmail,"J3SdtW07P05RCSbRkpaB98VwmxG1XI19",{algorithm : 'HS256'})
                res.send({accessToken : tmp,response})
            }
            else{
                response.status = "Fail";
                response.statuscoe = 204;
                res.send(response);
            }
        }
    })
}

const userRegistration = (req,res) => {
    register.create(req.body)
    .then(data => {
        res.send(response)
    })
    .catch(err => {
        response.status = "Fail"
        response.statuscode = 204
        console.log(err)
        res.send(err)
    })
}

const userList = (req,res) => {
    register.find().then(result => {
        res.json({User_data:result});
    }).catch(err=>{
        res.json({error:err})
    });
}

const cancelBooking = (req,res) => {
    const cancel = {'hotel' : req.params.Name}
    bookingModel.findOne(cancel).then(function(doc){
        if(!doc)
            res.send({message : 'Booking not found',statuscode:500})
        bookingModel.deleteOne(cancel,function(err){
            if(err)
                throw err
            res.send({statuscode : 201})    
        })
    })
}

const updateUsersDetails = async(req,res) => {
    try{    
        const _id = req.params.id
        const updateDetails = await register.findByIdAndUpdate(_id,req.body,{
            new : true
        })
        res.send(updateDetails)
    }
    catch(err){
        console.log(err)
        res.status(404).send(err)
    }
}
module.exports = {userLogin,userRegistration,userList,cancelBooking,updateUsersDetails}