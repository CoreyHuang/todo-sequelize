// const { is } = require("sequelize/types/lib/operators")

module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log('check pass')
    return next()
  }
  res.redirect('/users/login')
}