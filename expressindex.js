//Thirdparty module

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

//Body Parser
app.use(express.json());


//Middle ware

app.use(morgan('dev'));

//Router

const personsRoute = require('./personsRoute');
app.use('/persons',personsRoute);


//get

app.get('/',(req,res)=>{
    res.status(400).json(myPersons);
})

//GET SPECIFIC PERSONS

app.get('/:id',(req,res)=>{
    const getOne=myPersons.filter(e=>e.id===req.params.id)
    res.status(200).json(getOne);
});

//POST PERSONS

app.post('/',(req,res)=>{
    myPersons.push(req.body);
    res.status(200).json(req.body);
});


//Local host

app.listen(2000,()=>{
    console.log('Server Started on 2000');
});

//DB server creation

mongoose.connect(process.env.MYDB_CONNECTION,(err)=>{
    if(err){
        console.log('db not connected')
    }
    console.log('DB connected succesfully');
})