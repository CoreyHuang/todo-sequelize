const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const users = require('./modules/users')
const home = require('./modules/home')
const todos = require('./modules/todos')
const authFacebook = require('./modules/authFacebook.js')

router.use('/users', users)
router.use('/todos', auth, todos)
router.use('/auth', authFacebook)
router.use('/', auth, home)

module.exports = router