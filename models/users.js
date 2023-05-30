const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    },
  account: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post',
    },
  ],
});

module.exports = {
  usersSchema,
  usersModel: mongoose.model('users', usersSchema),
};