const mongoose = require('mongoose')

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

module.exports = mongoose.model('Post', postSchema)