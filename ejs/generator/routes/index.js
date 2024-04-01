var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// show website table list
router.get('/portrait', (req, res)=>{
  res.render('portrait');
});

// address document upload
router.post('/portrait', (req, res)=>{
  res.end('success');
});

module.exports = router;
