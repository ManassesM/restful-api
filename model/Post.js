const mongoose = require('mongoose')

// SCHEMA
const postSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    default: ""
  },
  data: {
    type: Date,
    default: Date.now
  }
})

// MODEL
module.exports = mongoose.model('Post', postSchema)