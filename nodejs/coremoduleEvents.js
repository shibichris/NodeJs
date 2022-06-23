//Core Module
const events = require('events');

const myEmitter=new events.EventEmitter();

var x=['John','Harry','Kevin']

myEmitter.addListener('my',()=>{
 for(let i=0;i<x.length;i++){
    console.log(i +" "+x[i])
 }
 
   console.log('SUCCESSFULL');
});


//Calling Listener

myEmitter.emit('my');