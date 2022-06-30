const express = require("express");

const app = express();

var alert = require('alert');
const router = express.Router();

 
router.use(function(req,res,next){
   alert("Welcome");
    console.log('Req method is',req.method);
    next();
});

app.get('/',function(req,res,next){
    console.log("First Page");
    res.send("Lets go to the home page");
    next();   
});

app.get('/tech',function(req,res,next){
    console.log("Second Page");
    res.send("Welcome");
    next();   
});
router.get('/contact',function(req,res,next){
    console.log("Third Page");
    res.send("Contact Me");
    next();   
});
router.get('/exit',function(req,res,next){
    console.log("Fourth page");
    res.send("EXIT");
    next();

});
app.use('/tech',router);
app.listen(8081);