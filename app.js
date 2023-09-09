const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
let workItems = [];

app.get("/" ,function(req,res){
    res.render("index");
});

app.post("/", function(req,res){
    let number1 = Number(req.body.num1);
    let number2 = Number(req.body.num2);
    var result = number1 + number2;
    workItems.push(result);
    res.redirect("/result");

});
app.get("/result", function(req,res){
    res.render("result",{myResult: workItems.slice(-1)});
})
// app.post("/result",function(req,res){
//     let items = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })


app.listen(5000,function(){
    console.log("The server is started at port 5000.");
});