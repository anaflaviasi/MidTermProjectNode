const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postname: {
    type: String,
    required: true,
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tags',
    },
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories',
    }
  ]
});

module.exports = {
  postSchema,
  postModel: mongoose.model('post', postSchema),
};