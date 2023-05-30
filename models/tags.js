const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post',
    }
  ],
});

module.exports = {
  tagsSchema,
  tagsModel: mongoose.model('tags', tagsSchema),
};