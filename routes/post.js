const express = require('express');
const router = express.Router();

const {
  getIndividualPosts,
} = require('../controllers/postController');

router.route('/:id').get(getIndividualPosts);

module.exports = router;