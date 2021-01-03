
exports.getHome = (req, res, next) => {
  res.render("blogs", { title: "Blog Page" });
};

exports.getCreate = (req, res, next) => {
  res.render("create-blog", { title: "Create Blog" });
};

