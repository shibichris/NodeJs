const express = require("express");

const app = express();

var alert = require('alert');

 
app.use('/',function(req,res,next){
   alert("Welcome");
    console.log('Req method is',req.method);
    next();
});

app.get('/',function(req,res,next){
    console.log("First Page");
    res.send("Welcome Shibin");
    next();   
});
app.get('/exit',function(req,res,next){
    console.log("Second page");
    res.send("Second Page");
    next();

});
app.use(function(req,res){
    alert("The End")
    console.log("The End");
});
app.listen(8081);