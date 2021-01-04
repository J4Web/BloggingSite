const route = require("express").Router();
const controller = require("../controllers/admin.controller");

route.get("/create", controller.getCreate);

route.post("/create", controller.postCreate);

module.exports = route;