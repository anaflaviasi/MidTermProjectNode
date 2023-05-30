const express = require('express');
const router = express.Router();

const { getTags } = require('../controllers/tagsController');

router.route('/:id').get(getTags);

module.exports = router;
