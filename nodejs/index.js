//Thirdparty module

const express = require('express');

const app = express();

const morgan = require('morgan');

const mongoose = require('mongoose');

const uuid = require('uuid');


//Middle ware

app.use(morgan('dev'));

const myPersons=[{
    id:uuid.v4(),
    name:"Shibin",
    age:23
},
{
    id:uuid.v4(),
    name:"Peter",
    age:24
},
{
    id:uuid.v4(),
    name:"Kevin",
    age:25
}
]



//get

app.get('/',(req,res)=>{
    res.status(400).json(myPersons);
})

//about

app.get('/:id',(req,res)=>{
    res.json(req.params.id);
})

//Local host

app.listen(2000,()=>{
    console.log('Server Started on 2000');
});

//DB server creation

mongoose.connect('mongodb://localhost:27017/myapp',(err)=>{
    if(err){
        console.log('db not connected')
    }
    console.log('DB connected succesfully');
})