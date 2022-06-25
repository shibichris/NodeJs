
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

router.get('/:id',async(req,res)=>{
    const getPersons = await Persons.find();
    res.status(200).json(getPersons);
})

//Get By Id

router.get('/',async(req,res)=>{
    const getById = await Persons.findById(req.params.id);
    res.status(200).json(getById);
})



module.exports = router;