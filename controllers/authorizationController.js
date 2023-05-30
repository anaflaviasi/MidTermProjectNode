const bcrypt = require('bcrypt');
const { hashPassword } = require('../helpers/userHelper');
const users = require('../models/users');
const jwt = require('jsonwebtoken');


const registerForm = (req, res) => {
    res.render('register');
};

const register = async ( req, res) => {
    const name = req.body.name;
    const account = req.body.account;
    const hashedPassword = await hashPassword(req.body.password);

    try {
        const userObject = {
          name: name,
          account: account,
          password: hashedPassword,
        };
        const createAccount = await users.usersModel.create(userObject);

        // res.json(createAccount);
        req.session.account = account;
        res.redirect('/user/home');
      } catch (error) {
        res.json({
          error: true,        
          message: error.message,
        });
      }
};

const loginForm = (req, res) => {
    res.render('login');
};

const logout = (req, res) => {
    req.session = null;
    res.redirect('/authorization/login');
};

const login  = async (req, res) => {
    const inputUser = req.body.account;
    const InputPassword = req.body.password;


    // const user = users.test.account == inputUser ? users.test : null;

    // let isMatch;

    // if (!user){
    //     isMatch = await bcrypt.compare(InputPassword, user.password);
    // }

    // if (!user || !isMatch) return res.send('Invalid username or password');

    // if (isMatch){
    //     req.session.account = inputUser;
    //     return res.redirect('/user/home');
    // }

    try {
        const user = await users.usersModel.findOne({ inputUser });

        
        if (!user) {
          res.json({
            error: true,
            message: 'User not found!',
          });
          return;
        }
        if (await bcrypt.compare(InputPassword, user.password)) {
        //   const accessToken = generateAccessToken(user);
        //   res.json({ accessToken: accessToken });
        //   return;
        req.session.account = account;
        res.redirect('/user/home');
        }
        res.json({
          error: true,
          message: 'Invalid credentials!',
        });
      } catch (error) {
        res.json({
          error: true,
          message: error.message,
        });
      }
};

module.exports = {
    registerForm,
    register,
    login,
    loginForm,
    logout,
};