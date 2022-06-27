
const express = require('express');
const router = express.Router();
const Persons = require('./personsSchema');


//Post Persons
router.post('/',async(req,res)=>{
    const postPersons = await new Persons({
        Name : req.body.Name,
        Age : req.body.Age
    });
    const savePersons = await postPersons.save();
    res.status(200).json(savePersons);
})

//Get Persons

router.get('/',async(req,res)=>{
    const getPersons = await Persons.find();
    res.status(200).json(getPersons);
})

//Get By Id

router.get('/:id',async(req,res)=>{
    const getById = await Persons.findById(req.params.id);
    res.status(200).json(getById);
})

//Update 

router.put('/:id',async(req,res)=>{
    const updatePersons =await Persons.updateOne({_id:req.params.id},{$set:{Name:req.body.Name,Age:req.body.Age}})
    res.status(200).json(updatePersons);
})

//Delete

router.delete('/:id',async(req,res)=>{
    const delPersons = await Persons.remove({_id:req.params.id});
    res.status(200).json(delPersons);
})

module.exports = router;