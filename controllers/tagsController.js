const tags = require('../models/tags');

const tagsForm = (req, res) => {
    const name = req.session.name;
    const tag = req.session.tag;
             
    const userData = { name , tag};
  
    res.render('tags', { userData });
  };
  
  const registerTags = async (req, res) => {
      const name = req.session.name;
      const tag = req.body.tags;
      
      try {
          const tagObject = {
            tag: tag,
          };
  
          const createTags = await tags.tagsModel.create(tagObject);
  
           req.session.name = name;
           req.session.tag = tag;
           res.redirect('/tags');
           return;
           
        } catch (error) {
          res.json({
            error: true,        
            message: error.message,
          });
        }
  };
  

const getTags = async (req, res) => {
    const tagsList = await tags.tagsModel.find({}).populate('post');
    res.json(tagsList);
    res.render('showtags');
};

const getIndividualTags = async (req, res) => {
  const individualTags = await tags.tagsModel
    .findById(req.params.id)
    .populate('post');
  res.json(individualTags);
};

module.exports = { tagsForm, registerTags, getTags, getIndividualTags};