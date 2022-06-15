const mongoose = require("mongoose");

const userLogin = new mongoose.Schema({
      email : {
          type : String,
          required : true
      },  
      password : {
          type : String,
          required : true
      }

})