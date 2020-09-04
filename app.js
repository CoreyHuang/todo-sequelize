const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
// const bcryptjs = require('bcryptjs')
const bodyParser = require('body-parser')
const session = require('express-session')
const usePassport = require('./config/passport')
const router = require('./routes/index')
const PORT = 3000
const app = express()
app.engine('hbs', exphbs({ defaultLayout: "main", extname: "hbs" }))
app.set('view engine', 'hbs')


app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))


app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
usePassport(app)

app.use(router)

app.listen(PORT, () => {
  console.log('server is enable~')
})

