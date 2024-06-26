const express = require('express');
const moment = require('moment')
const AccountModel = require('../../models/accountmodel');
const router = express.Router();
const checklogin = require('../../middlewares/checklogin');

router.get('/', (req,res)=>{
  res.redirect('/account');
})

/* list of accounts */
router.get('/account', checklogin, function (req, res, next) {
  AccountModel.find().sort({ happenTime: -1 }).then(data => { 
    // console.log(data);
    res.render('list',{accounts: data, moment:moment});

  }).catch(err => {
    res.status(500).send('Failed to read');
  })
});

/* create account  */
router.get('/account/create', checklogin, function (req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('account create');
  res.render('create');
});

router.post('/account', checklogin, (req, res) => {

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
router.get('/account/:id', checklogin, (req, res) => {
  let id = req.params.id;
  // db.get('account').remove({ id: id }).write();

  AccountModel.deleteOne({_id: id}).then(data => {
    res.render('success', { message: 'Successfully deleted', redirectUrl: '/account' });
  }).catch(err =>{
    res.status(500).send('Failed to delete');
  })
})

module.exports = router;
