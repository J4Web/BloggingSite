const route = require("express").Router();
const controller = require("../controllers/home.controller");

route.get("/", controller.getHome);

route.get("/create", controller.getCreate);

module.exports = route;
