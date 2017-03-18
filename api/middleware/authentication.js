const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  const { token } = req.cookies;

  const allowedRoutes = ['/user/register', '/user/login', '/user/logout'];

  if (allowedRoutes.includes(req.path)) {
    return next();
  }

  if (token && req.session.currentUser) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).end();
      }
      req.decoded = decoded;
      next();
    });
  } else {
    res.clearCookie('token');
    return res.status(401).end();
  }
};

module.exports = authentication;
