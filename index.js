var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res) => {
    res.send("Hello");
})
app.post("/",(req,res) => {
    var a = {};
    var body = req.body;
    var name = "Gourav";
    var prime = [];
    var cnt = 0;
    for(i = 0;i<body.numbers.length;i++){
        var f = true;
        for(j = 2;j<body.numbers[i];j++){
            if(body.numbers[i] % j == 0)
            {
                f = false;
                break;
            }
        }
        if(f === true){
            prime[cnt++] = body.numbers[i];
        }
    }
    a = {name:name,prime:prime};
    res.json(a);
})
app.listen(port);
