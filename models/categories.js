const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  category: {
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
  categoriesSchema,
  categoriesModel: mongoose.model('categories', categoriesSchema),
};