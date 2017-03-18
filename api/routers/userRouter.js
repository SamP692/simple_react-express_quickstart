const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.post('/signout', UserController.logOut);

module.exports = router;
