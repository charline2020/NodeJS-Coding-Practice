var express = require('express');
var router = express.Router();

// import moment
const moment = require('moment')
// console.log(moment('2023-02-04').toDate())

const AccountModel = require('../../models/accountmodel');

/* list of accounts */
router.get('/account', function (req, res, next) {
  AccountModel.find().sort({ happenTime: -1 }).then(data => { 
    // console.log(data);
    res.json({
      code: '0000', // can use 000000 or 20000
      msg: 'Successfully read',
      data: data
    })

  }).catch(err => {
    res.json({
      code: '1001',
      msg:'Failed to read',
      data: null
    })
  })
});

router.post('/account', (req, res) => {

  AccountModel.create({
    ...req.body,
    time: moment(req.body.happenTime).toDate()
  }).then(data => {
    res.json({
      code: '0000',
      msg: 'Successfully add',
      data: data
    })

  }).catch(err => {
    res.json({
      code: '1002',
      msg: 'Failed to add',
      data: null
    })
  })
});

// delete record
router.delete('/account/:id', (req, res) => {
  let id = req.params.id;
  // db.get('account').remove({ id: id }).write();

  AccountModel.deleteOne({_id: id}).then(data => {
    res.json({
      code: '0000',
      msg: 'Successfully deleted',
      data:{}
    })
  }).catch(err =>{
    res.json({
      code: '1003',
      msg: 'Failed to deltet',
      data: null
    })
  })
})

// get single record
router.get('/account/:id', (req,res)=>{
  let {id} = req.params;
  AccountModel.findById(id).then(data=>{
    res.json({
      code: '0000',
      msg: 'Successfully read',
      data: data
    })
  }).catch(err =>{
    res.json({
      code: '1004',
      msg: 'Failed to read single data',
      data: null
    })
  })
})


// updat single record info
router.patch('/account/:id', (req, res)=>{
  let {id} = req.params;

  AccountModel.updateOne({_id: id}, req.body).then(data =>{
    
    AccountModel.findById(id).then(data=>{
      res.json({
        code: '0000',
        msg: 'Successfully update',
        data: data
      })
    }).catch(err =>{
      res.json({
        code: '1004',
        msg: 'Failed to read single data',
        data: null
      })

    })
    
  }).catch(err =>{
    res.json({
      code: '1005',
      msg: 'Failed to update single data',
      data: null
    })
  })
})


module.exports = router;
