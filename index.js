require('dotenv').config()
const express = require('express')
const app = express()

// DB
require('./db/database')

// MIDDLEWARE
app.use(express.json())

const routes = require('./routes/post-routes')
app.use('/post', routes)

// SERVER
const porta = process.env.PORTA || 3000
app.listen(porta, err => {
  if (err) return console.log(`Erro! D: \n${err}`)
  
  console.log(`Tudo ok! PORTA: ${porta}`)
})