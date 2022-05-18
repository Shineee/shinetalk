var express = require('express');
var package = require("../package.json");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { package: package});
});
router.get('/index', function (req, res, next) {
  res.render('index', { package: package });
});

module.exports = router;
