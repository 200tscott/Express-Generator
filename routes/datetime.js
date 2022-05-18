var express = require('express');
var router = express.Router();
var date = new Date()


//get date and time


router.get('/', function (req, res, next) {
    res.json(date);
  });
 
  
  
  module.exports = router;