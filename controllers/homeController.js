const users = require('../models/users');
const bcrypt = require('bcrypt');

const home = async (req, res) => {
    const name = req.session.name;
    const account = req.session.account;
    const password = req.session.password;
           
    const userData = { name , account , password};

    res.render('home', { userData });

};

module.exports = { home };
