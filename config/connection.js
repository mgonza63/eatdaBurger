var mysql = require("mysql");


// require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "glezguerrero",
    database: "burgers_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;