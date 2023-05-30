const post = require('../models/post');
const users = require('../models/users');

const getPost = async (req, res) => {
  const postList = await post.postModel
  .find({})
  .populate('users')
  .populate('tags')
  .populate('categories');
  res.json(postList);
};

const getIndividualPosts = async (req, res) => {
  const individualPosts = await post.postModel
    .findById(req.params.id)
    .populate('users')
    .populate('tags')
    .populate('categories');
  res.json(individualPosts);
};

// const getPostedBy = async (req, res) => {
//   const postedBy = await posts.postsModel
//   .find({})
//   .populate('users')
//   .populate('tags')
//   .populate('categories');
//   res.json(postedBy);
// };

module.exports = { getPost, getIndividualPosts };