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
        req.session.name = name;
        req.session.account = account;
        req.session.password = hashedPassword;
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
    const account = req.body.account;
    const password = req.body.password;

    // console.log(inputUser);


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
        const user = await users.usersModel.findOne({ account });

        console.log(user);
        
        if (!user) {
          res.json({
            error: true,
            message: 'User not found!',
          });
        }

        if (await bcrypt.compare(password, user.password)) {
        //   const accessToken = generateAccessToken(user);
        //   res.json({ accessToken: accessToken });
        req.session.name = user.name;
        req.session.account = user.account;
        req.session.password = user.password;

        console.log(user.name, user.account, user.password);
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