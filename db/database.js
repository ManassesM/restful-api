const mongoose = require('mongoose')

const uri      = process.env.DB_CONNECT

const options  = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

mongoose.connect(uri, options, err => {
  if(err) return console.log(`Erro! D: \n${err}`)
  
  console.log(`Conectado! :D`)
})