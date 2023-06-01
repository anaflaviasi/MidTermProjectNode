const express = require('express');
const router = express.Router();

const { postForm,
        registerPost,
        getPost,
        getIndividualPosts,
} = require('../controllers/postController');

router.get('/',  postForm);
router.post('/', registerPost);
router.get('/showpost', getPost);

 router.route('/:id').get(getIndividualPosts);

module.exports = router;