const mongoose = require('mongoose');

const personsSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true},
        
        Age : {
            type : String,
            required : true
        },
        CreatedDate : {
            type : Date,
            default :Date.now
        }

    
})

module.exports = mongoose.model('Persons',personsSchema);