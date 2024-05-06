var express = require('express');
var router = express.Router();

/* list of accounts */
router.get('/account', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('account list');
});

/* create account  */
router.get('/account/create', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('account create');
});

module.exports = router;
