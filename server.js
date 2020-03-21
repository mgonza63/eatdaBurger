var mysql = require("mysql");

var express = require("express");

var handlebars = require("express-handlebars");

const bodyParser = require("body-parser")

var app = express();

let PORT = process.env.PORT || 3002; 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static("public")); 

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});