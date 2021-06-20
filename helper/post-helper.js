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

// ======================> UPDATE
const updatePost = async (id, updatedPost) => {
  await Post.findByIdAndUpdate(id, {
    titulo: updatedPost.titulo,
    descricao: updatedPost.descricao
  }, (err, data) => {
    if (err) return console.log(`Erro! D: \n${err}`)
    
    return data
  })
}

// ======================> DELETE ALL
const deleteAll = async () => {
  await Post.deleteMany({}, err => {
    if (err) return console.log(`Erro! D: \n${err}`)
    
    return true
  })
}

// ======================> DELETE BY ID
const deletePost = async (id) => {
  await Post.findByIdAndDelete(id, err => {
    if (err) return console.log(`Erro! D: \n${err}`)
    
    return true
  })
}


module.exports = {
  getAll,
  getById,
  createPost,
  updatePost,
  deleteAll,
  deletePost
}