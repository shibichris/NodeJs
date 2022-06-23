//File system

const path = require('path');
 
const fs = require('fs');

fs.mkdir('ans',(err)=>{
    if(err){throw err}
    fs.writeFile(path.join(`${__dirname}/ans/ans.js`),'I love node',(err)=>{
        if(err){throw err}
        console.log('File Created');
    })
})

