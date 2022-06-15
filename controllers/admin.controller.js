
const adminRegisterModel = require('../models/adminRegistrationSchema.js')
const adminRegistrationModel = require('../models/adminRegistrationSchema.js');
const jwt = require('jsonwebtoken')
const path = require('path')


const response = {
    status : "Pass",
    statuscode : 201
}

const adminLogin = (req,res) => {
    const adminEmail = {email : req.body.email}
    adminRegisterModel.find(adminEmail)
    .exec()
    .then(data => {
        if(data < 1){
            response.status = "Fail"
            response.statuscode = 204
            res.send(response);
        }
        else{
            if(data[0].password === req.body.password){ 
               const tmp = jwt.sign(adminEmail,"dUlegbCLuVWa8MYTCaAvwMpAdNEH9O77",{algorithm : 'HS256'})
               res.send({accessToken : tmp,response})
            }
            else{
                response.status = "Fail"
                response.statuscode = 204
                res.send(response);
            }
        }
    })
    .catch(err => {
        console.log(err)
    })
}

const adminRegistration = (req,res) => {
    adminRegistrationModel.create(req.body)
    .then(data => {
        res.send(response)
    })
    .catch(err => {
        response.status = "Fail",
        response.statuscode = 204
        res.send(err)
    })
}

const adminList = (req,res) => {
    adminRegistrationModel.find()
    .then(adminData => {
        res.json({adminDetails : adminData})
    })
    .catch(err => {
        res.json({error : err})
    })
}

const updateAdminDetails = async (req,res) =>{
    try{    
        const _id = req.params.id
        const updateDetails = await adminRegisterModel.findByIdAndUpdate(_id,req.body,{
            new : true
        })
        res.send(updateDetails)
    }
    catch(err){
        console.log(err)
        res.status(404).send(err)
    }
}
module.exports = {adminLogin,adminRegistration,adminList,updateAdminDetails};
