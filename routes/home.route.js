const route = require("express").Router();
const controller = require("../controllers/home.controller");

route.get("/", controller.getHome);


module.exports = route;