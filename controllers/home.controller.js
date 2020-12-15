exports.getHome = (req, res, next) => {
  res.render("blogs", { title: "Blog Page" });
};
