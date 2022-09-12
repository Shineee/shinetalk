var express = require('express');
var package = require("../package.json");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('nav', { package: package});
});
router.get('/nav', function (req, res, next) {
  res.render('nav', { package: package });
});
router.get('/tech/index', function (req, res, next) {
  res.render('tech/index', { package: package });
});
router.get('/tech/css', function (req, res, next) {
  res.render('tech/css', { package: package });
});
router.get('/tech/html', function (req, res, next) {
  res.render('tech/html', { package: package });
});
router.get('/tech/javascript', function (req, res, next) {
  res.render('tech/javascript', { package: package });
});
router.get('/tech/nodejs', function (req, res, next) {
  res.render('tech/nodejs', { package: package });
});
router.get('/english/index', function (req, res, next) {
  res.render('english/index', { package: package });
});
router.get('/english/listen', function (req, res, next) {
  res.render('english/listen', { package: package });
});
router.get('/english/read', function (req, res, next) {
  res.render('english/read', { package: package });
});
router.get('/english/speak', function (req, res, next) {
  res.render('english/speak', { package: package });
});
router.get('/english/write', function (req, res, next) {
  res.render('english/write', { package: package });
});
module.exports = router;
