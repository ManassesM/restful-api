const Post = require('../model/Post')

// ======================> GET ALL
const getAll = async () =>
  await Post.find({}, (err, data) => {
    if (err) return console.log(`Erro! D: \n${err}`)
    
    return data
  })

module.exports = {
  getAll
}