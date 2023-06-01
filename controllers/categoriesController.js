const categories = require('../models/categories');
const bcrypt = require('bcrypt');

const categoriesForm = (req, res) => {
  const name = req.session.name;
  const category = req.session.category;
           
  const userData = { name , category};

  res.render('categories', { userData });

};

const registerCategories = async ( req, res) => {
    const name = req.session.name;
    const category = req.body.categories;
    try {
        const categoryObject = {
          category: category
        };

        const createCategories = await categories.categoriesModel.create(categoryObject);

         req.session.name = name;
         req.session.category = category;
         res.redirect('/categories');
         return;
      } catch (error) {
        res.json({
          error: true,        
          message: error.message,
        });
      }
};

const getCateogories = async (req, res) => {
    const categoriesList = await categories.categoriesModel
    .find({})
    .populate('post');
    res.json(categoriesList);
    res.render('showcategories');
};


const getIndividualCategories = async (req, res) => {
  const getIndividualCategories = await categories.categoriesModel
    .findById(req.params.id)
    .populate('post');
  res.json(getIndividualCategories);
};

module.exports = { categoriesForm, registerCategories, getCateogories, getIndividualCategories };