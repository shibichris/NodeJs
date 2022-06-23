//Crpto
const readline = require('readline');
const crypto = require('crypto');

const r1= readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

r1.question('what is your name?',(ans)=>{
    const hash = crypto.createHmac('sha123','klajshsh').update(ans).digest('hex');
    console.log(hash);
    r1.close();
});
r1.on('close',()=>{
    console.log('name encrypted !!!!');
})

