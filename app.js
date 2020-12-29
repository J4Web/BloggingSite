const express = require("express");
const app = express();

//connecting our DB
require('./models/db');

// importing routes
const HomeRoute = require("./routes/home.route");

// static files
app.use(express.static(__dirname + "/public"));

// setting up view engine
app.set("view engine", "ejs");

// setting up routes
app.use("/", HomeRoute);



// server
app.listen(8080, () => {
  console.log("Running on port 8080!");
});
