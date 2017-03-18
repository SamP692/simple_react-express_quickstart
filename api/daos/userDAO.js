const db = require('../db/db');
const sql = require('../db/sqlInjection/sqlProvider').users;
const User = require('../models/user');

class UserDAO {
  static findUser(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
             .then((row) => new User(row))
             .catch((err) => {
               console.log(`DAO Error: ${err}`);
             });
  }
  
  static create({ name, email, password }) {
    return db.one(sql.create, [name, email, password])
             .then((row) => new User(row))
             .catch((err) => {
               console.log(`DAO Error: ${err}`);
             });
  }
}

module.exports = UserDAO;
