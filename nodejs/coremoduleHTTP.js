//HTTp

const http = require('http');

const app = http.createServer((req,res)=>{
    res.end('<h1>Home<h1>')
})

app.listen(2500,()=>{
    console.log('Server Started On 2500');
})
