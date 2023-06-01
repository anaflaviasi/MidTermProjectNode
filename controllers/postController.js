const post = require('../models/post');
const users = require('../models/users');

const postForm = (req, res) => {
  const name = req.session.name;
  const postname = req.session.postname;
           
  const userData = { name , postname};

  res.render('post', { userData });

};

const registerPost = async ( req, res) => {
    const name = req.session.name;
    const postname = req.body.post;
    try {
        const postObject = {
          postname: postname,
        };

        const createPost = await post.postModel.create(postObject);

         req.session.name = name;
         req.session.postname = postname;
         res.redirect('/post');
         return;
      } catch (error) {
        res.json({
          error: true,        
          message: error.message,
        });
      }
};

const getPost = async (req, res) => {
  const postList = await post.postModel
  .find({})
  .populate('users')
  .populate('tags')
  .populate('categories');
  res.json(postList);

  res.render('showpost');
};

const getIndividualPosts = async (req, res) => {
  const individualPosts = await post.postModel
    .findById(req.params.id)
    .populate('users')
    .populate('tags')
    .populate('categories');
  res.json(individualPosts);
};

module.exports = { postForm, registerPost, getPost, getIndividualPosts };