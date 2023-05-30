const users = require('../models/users');
const bcrypt = require('bcrypt');

const home = async (req, res) => {
    const name = req.session.name;
    const account = req.session.account;
    const password = req.session.password;

    // if (!account && users.test.account == account)
    //     return res.redirect('/authorization/login');

    //     const userData = users.test;
           
           const userData = { name , account , password};

           res.render('home', { userData });


    // try {
    //     const user = await users.usersModel.findOne({ account }).lean();
    //     if (!user) {
    //       res.json({
    //         error: true,
    //         message: 'User not found!',
    //       });
    //     }
    //     if (await bcrypt.compare(password, user.password)) {
    //     //   const accessToken = generateAccessToken(user);
    //     //   res.json({ accessToken: accessToken });
    //     //   return;
    //       const userData = user;
    //       res.render('home', { userData });
    //     }
    //     res.json({
    //       error: true,
    //       message: 'Invalid credentials!',
    //     });

    //   } catch (error) {
    //     res.json({
    //       error: true,
    //       message: error.message,
    //     });
    //     return res.redirect('/authorization/login');
    // }

    
};

module.exports = { home };
