function isAuthenticated(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/auth/discord');
    }
  }
  
  module.exports = { isAuthenticated };