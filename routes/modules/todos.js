const express = require('express')
const router = express.Router()
const db = require('../../models')
const { where } = require('sequelize')
const Todo = db.Todo

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})


router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  const UserId = req.user.id
  Todo.findOne({ where: { id, UserId } })
    .then(todoData => {
      const todo = todoData.toJSON()
      console.log('edit todo', todo)
      res.render('edit', { todo })
    })
    .catch(err => console.log(err))

})

router.put('/:id', (req, res) => {
  console.log('in put')
  const id = req.params.id
  const UserId = req.user.id
  let { name, isDone } = req.body
  Todo.findOne({ where: { id, UserId } })
    .then(todo => {
      isDone ? isDone = true : isDone = false
      todo.update({ name, isDone })
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))

})

router.delete('/:id', (req, res) => {
  console.log('in delete')
  console.log('req.user', req.user.id)
  console.log('req.params', req.params.id)

  const UserId = req.user.id
  const id = req.params.id
  Todo.findOne({ where: { id, UserId } })
    .then(todo => {
      console.log('todo', todo)
      todo.destroy()
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))

})

module.exports = router