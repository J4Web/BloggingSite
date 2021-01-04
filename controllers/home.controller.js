const Blog = require('../models/blogs.model');

exports.getHome = async(req, res, next) => {
  try{
    const blogs = await Blog.find();
    res.render('blogs',{blogs})
  }catch(err){
    console.log(err)
  }
};
