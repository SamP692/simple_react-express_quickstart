if (!process.env.DATABASE_URL) {
  require('dotenv').config();
}

const pgp = require('pg-promise')();

const dbURL = process.env.DATABASE_URL;

const db = pgp(dbURL);

module.exports = db;
