require('dotenv').config()
const express = require('express')
const app = express()

// DB
require('./db/database')


// ROUTER
app.get('/', (req, res) => {
  res.send('Hello World')
})

// SERVER
const porta = process.env.PORTA || 3000
app.listen(porta, err => {
  if (err) return console.log(`Erro! D: \n${err}`)
  
  console.log(`Tudo ok! PORTA: ${porta}`)
})