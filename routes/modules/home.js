const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo


router.get('/', (req, res) => {
  console.log('check x')
  return Todo.findAll({
    raw: true,
    nest: true
  })
    .then((todos) => {
      // console.log('todos', todos)
      return res.render('index', { todos: todos })
    })
    .catch((error) => { return res.status(422).json(error) })
})


module.exports = router