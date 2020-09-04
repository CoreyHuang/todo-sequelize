

module.exports = (req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.message = req.flash('error')
  next()
}