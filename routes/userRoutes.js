const express = require('express');
const router = express.Router();
const { registerUser, listUsers } = require('../controllers/userController');

router.post('/register', registerUser);
router.get('/', listUsers);

module.exports = router;
