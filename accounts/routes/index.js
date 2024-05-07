var express = require('express');
var router = express.Router();

// 导入 lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname+'/../data/db.json');
const db = low(adapter)

// 导入 shortid
const shortid = require('shortid')

/* list of accounts */
router.get('/account', function(req, res, next) {
  let accounts = db.get('account').value();
  // console.log(accounts);

  // res.render('index', { title: 'Express' });
  // res.send('account list');
  res.render('list', {accounts: accounts}); // views -> list.ejs
});

/* create account  */
router.get('/account/create', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('account create');
  res.render('create');
});

router.post('/account', (req,res) =>{
  //generate id
  let id = shortid.generate();

  // console.log(req.body)
  db.get('account').unshift({id: shortid.generate(), ...req.body}).write();
  // res.send('add record');
  res.render('success', {message: '添加成功',redirectUrl: '/account'});

});

// 删除
router.get('/account/:id',  (req, res)=>{
  let id = req.params.id;
  db.get('account').remove({id: id}).write();
  // res.send('delete');
  res.render('success', {message: '删除成功',redirectUrl: '/account'});
})


module.exports = router;
