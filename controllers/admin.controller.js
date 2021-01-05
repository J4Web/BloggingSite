const Blog = require("../models/blogs.model");


exports.AdminLogin=(req,res,next)=>
{
  res.render("admin-login", {
      title: "Create Blog",
  });
};

exports.getCreate = (req, res, next) => {
  res.render("create-blog", {
    title: "Create Blog",
  });
};
exports.postCreate = (req, res, next) => {
  const { title, tag, content } = req.body;
  try {
    const blog = new Blog({
      title,
      tag,
      content,
    });
    if (blog) {
      blog
        .save()
        .then((result) => {
          res.redirect("/");
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Failed to save the blog");
      res.redirect("/create");
    }
  } catch (err) {
    console.log(err);
  }
};