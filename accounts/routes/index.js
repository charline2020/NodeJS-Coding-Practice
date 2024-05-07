var express = require('express');
var router = express.Router();

/* list of accounts */
router.get('/account', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('account list');
  res.render('list'); // views -> list.ejs
});

/* create account  */
router.get('/account/create', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('account create');
  res.render('create');
});

router.post('/account', (req,res) =>{
  console.log(req.body)
  res.send('add record');
});

module.exports = router;
