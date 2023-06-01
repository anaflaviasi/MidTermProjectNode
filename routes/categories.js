const express = require('express');
const router = express.Router();

const { categoriesForm, registerCategories, getCateogories, getIndividualCategories } = require('../controllers/categoriesController');

router.get('/',  categoriesForm);
router.post('/', registerCategories);
router.get('/showcategories', getCateogories);

 router.route('/:id').get(getIndividualCategories);

module.exports = router;