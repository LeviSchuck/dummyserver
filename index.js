const express = require('express')
const app = express()

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

app.post(/\/.*/, function (req, res) {
  let ms = getRandomInt(100, 5000);
  console.log(`POST ${req.url} - ${ms}ms`)
  setTimeout(()=> {
    res.send('hello world')
  }, ms);
})

app.get(/\/.*/, function (req, res) {
  let ms = getRandomInt(100, 5000);
  console.log(`GET ${req.url} - ${ms}ms`)
  setTimeout(()=> {
    res.send('hello world')
  }, ms);
})
  
app.listen(3000)