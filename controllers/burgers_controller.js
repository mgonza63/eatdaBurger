var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');


router.get("/", function(req, res) {
    burger.selectAll((data) => {
      handlebarsObject = {
        burger: data
      };
      res.render("index", handlebarsObject);
    });

});