if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()

const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const session = require('express-session')
const usePassport = require('./config/passport')
const router = require('./routes/index')
const useLocalStorage = require('./middleware/localStorage')
const PORT = process.env.PORT
const app = express()
app.engine('hbs', exphbs({ defaultLayout: "main", extname: "hbs" }))
app.set('view engine', 'hbs')


app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))


app.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: true
}))
usePassport(app)
app.use(useLocalStorage)
app.use(router)

app.listen(PORT, () => {
  console.log('server is enable~')
})

