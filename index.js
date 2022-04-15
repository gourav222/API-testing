var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res) => {
    res.send("Hello");
})
app.post("/bfhl",(req,res) => {
    var a = {};
    var status = true;
    var User_Id = "gourav_parmar_28012001";
    var colleage_Roll_Number = "0827CS191096"
    var Email_Id = "gouravparmarcs19@acropolis.in"; 
    var body = req.body.data;
    var alpha = [];
    var number = [];
    var cnt1 = 0,cnt2 = 0;
    str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(i = 0;i<body.length;i++){
        var flag = false;
        for(let j = 0; j < str.length; j++){
            if(body[i] == str[j]){ 
                flag = true;
                break;
            }    
        }
        if(flag){
            alpha[cnt2++] = body[i];
        }
        if(!isNaN(body[i])){
            number[cnt1++] = body[i];
        }
    }
    var is_success = true;
    a = {is_success:is_success,user_id:User_Id,email:Email_Id,roll_number:colleage_Roll_Number,numbers:number,alphabets:alpha};
    res.json(a);
})
app.listen(port);
