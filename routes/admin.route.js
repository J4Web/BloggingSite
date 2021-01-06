const route = require("express").Router();
const controller = require("../controllers/admin.controller");

route.get("/create", controller.getCreate);

route.post("/create", controller.postCreate);

route.get('/login', controller.AdminLogin);



module.exports = route;