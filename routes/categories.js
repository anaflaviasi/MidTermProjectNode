const express = require('express');
const router = express.Router();

const { getCateogories } = require('../controllers/categoriesController');

router.route('/:id').get(getCateogories);

module.exports = router;