const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  });
