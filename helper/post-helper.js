const Post = require('../model/Post')

// ======================> GET ALL
const getAll = async () =>
  await Post.find({}, (err, data) => {
    if (err) return console.log(`Erro! D: \n${err}`)
    
    return data
  })

// ======================> GET BY ID
const getById = async (id) =>
  await Post.findById(id, (err, data) => {
    if (err) return console.log(`Erro! D: \n${err}`)
    
    return data
  })
  
// ======================> CREATE
const createPost = async (newPost) => {
  await Post.create(newPost, (err, data) => {
    if (err) return console.log(`Erro! D: \n${err}`)
    
    return data
  })
}

module.exports = {
  getAll,
  getById,
  createPost
}