var express = require('express');
var router = express.Router();
var { formidable } = require('formidable');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// show website table list
router.get('/portrait', (req, res) => {
  res.render('portrait');
});

// address document upload
// files are usually save in website root folder => public

router.post('/portrait', (req, res) => {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '/../public/images',
    keepExtensions: true
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields); // save data like text checkbox select
    // console.log(files); // save data like file 

    // server save request url for accessing images in the future
    let url = '/images/' + files.portrait[0].newFilename;
    // console.log(url);

    // res.json({ fields, files });

    res.send(url);
    // res.send('okay');

  });
});

module.exports = router;
