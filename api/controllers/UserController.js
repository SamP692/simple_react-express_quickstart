const bcrypt = require('bcrypt');
const UserDAO = require('../daos/userDAO');
const createToken = require('../utils/createToken');

class UserController {
  static login(req, res) {
    const { email, password } = req.body;
    UserDAO.findUser({ email })
           .then((user) => {
             if (!bcrypt.compareSync(password, user.password)) {
               res.status(401).end();
             } else {
               req.session.currentUser = user;
               const token = createToken(user);
               res.cookie('token', token);
               res.status(200).json(user);
             }
           })
           .catch((err) => {
             res.status(401).end();
           });
  }
  static register(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    let password = req.body.password;
    if (email.length > 0 && password.length > 0) {
      password = bcrypt.hashSync(password, 10);
      UserDAO.create({ name, email, password })
             .then((user) => {
               req.session.currentUser = user;
               const token = createToken(user);
               res.cookie('token', token);
               res.status(200).json(user);
             })
             .catch((err) => {
               res.status(500).json(err);
               console.log(err);
             });
    } else {
      req.status(400).end();
    }
  }
  static logOut(req, res) {
    req.session.currentUser = null;
    res.clearCookie('token');
    res.status(204).end();
  }
}

module.exports = UserController;
