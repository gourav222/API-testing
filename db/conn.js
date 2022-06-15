//To Establish a connection with the database

const mongoose = require('mongoose');
const uri = "mongodb+srv://Gourav:Gouravparmar@cluster0.p2a4ne6.mongodb.net/hoteldb?retryWrites=true&w=majority";
mongoose.connect(uri,{
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
    //useFindAndModify: false

}).then(() => {
    console.log("connection successfull")
}).catch((err) => {
    console.log(err);
})