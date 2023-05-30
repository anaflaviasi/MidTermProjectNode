const express = require('express');

const {
    registerForm,
    register,
    logout,
    loginForm,
    login,
} = require('../controllers/authorizationController');

const router = express.Router();

router.get('/register', registerForm);
router.post('/register', register);

router.get('/login', loginForm);
router.post('/login', login);

router.post('/logout', logout);

module.exports = router;