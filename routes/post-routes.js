const router = require('express').Router()
const helper = require('../helper/post-helper')
const Post   = require('../model/Post')

// ======================> TESTE
router.get('/teste', (req, res) => {
  res.send('Hello World')
})

// ======================> GET ALL
router.get('/', (req, res) => {

  helper
    .getAll()
    .then(data => {
      if (data.length < 1) return res.send(`Não há dados no banco D:`)
      
      res.send(`Retornado com sucesso! \nQuantidade: ${data.length} \n\n${data}`)
    })
    .catch(err => {
      res.send(err)
    })
})

// ======================> GET BY ID
router.get('/:id', (req, res) => {

  const id = req.params.id

  helper
    .getById(id)
    .then(data => {
      
      res.send(`Retornado com sucesso!\n\n${data}`)
    })
    .catch(err => {
      res.send(err)
    })
})

// ======================> CREATE
router.post('/create', (req, res) => {

  const newPost = new Post({
    titulo: req.body.titulo,
    descricao: req.body.descricao
  })

  helper
    .createPost(newPost)
    .then(() => {
      
      res.send(`Criado com sucesso!\n\n${newPost}`)
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router