

const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bcryptjs = require('bcryptjs')
const bodyParser = require('body-parser')

const app = express()
app.engine('hbs', exphbs({ defaultLayout: "main", extname: "hbs" }))
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 3000

app.get('/', (req, res) => {
  res.send('good')
})

app.listen(PORT, () => {
  console.log('server is enable~')
})