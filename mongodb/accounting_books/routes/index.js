var express = require('express');
var router = express.Router();

// import lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../data/db.json');
const db = low(adapter)

// import shortid
const shortid = require('shortid')

// import moment
const moment = require('moment')
// console.log(moment('2023-02-04').toDate())

const AccountModel = require('../models/accountmodel');

/* list of accounts */
router.get('/account', function (req, res, next) {
  AccountModel.find().sort({ happenTime: -1 }).then(data => { 
    // console.log(data);
    res.render('list',{accounts: data, moment:moment});

  }).catch(err => {
    res.status(500).send('Failed to read');
  })
});

/* create account  */
router.get('/account/create', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('account create');
  res.render('create');
});

router.post('/account', (req, res) => {

  AccountModel.create({
    ...req.body,
    time: moment(req.body.happenTime).toDate()
  }).then(data => {
    res.render('success', { message: 'Successfully added', redirectUrl: '/account' });
  }).catch(err => {
    res.status(500).send('Failed to add');
  })
});

// delete record
router.get('/account/:id', (req, res) => {
  let id = req.params.id;
  db.get('account').remove({ id: id }).write();
  // res.send('delete');
  res.render('success', { message: '删除成功', redirectUrl: '/account' });
})

module.exports = router;
