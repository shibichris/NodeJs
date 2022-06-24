//Thirdparty module

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const uuid = require('uuid');

//Body Parser
app.use(express.json());


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

mongoose.connect('mongodb://localhost:27017/myapp',(err)=>{
    if(err){
        console.log('db not connected')
    }
    console.log('DB connected succesfully');
})