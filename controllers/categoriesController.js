const categories = require('../models/categories');

const getCateogories = async (req, res) => {
    const categoriesList = await categories.categoriesModel
    .find({})
    .populate('post');
    res.json(categoriesList);
};

module.exports = { getCateogories };