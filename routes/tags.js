const express = require('express');
const router = express.Router();

const { tagsForm, registerTags, getTags, getIndividualTags } = require('../controllers/tagsController');

router.get('/',  tagsForm);
router.post('/', registerTags);
router.get('/showtags', getTags);

 router.route('/:id').get(getIndividualTags);

module.exports = router;
