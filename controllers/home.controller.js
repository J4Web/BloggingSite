const Post = require('../models/blogs.model');
const mongoose = require('mongoose');
exports.getHome = (req, res, next) => {
  Post.find({}, (err, blog) => {
    res.render('blogs', {
      blog: blog

    });
  })
};

exports.getCreate = (req, res, next) => {
  res.render("create-blog", {
    title: "Create Blog"
  });
};