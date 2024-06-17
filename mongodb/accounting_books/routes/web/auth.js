var express = require('express');
var router = express.Router();

const usermodel = require('../../models/usermodel');
const md5 = require('md5');

router.get('/reg', (req,res)=>{
    res.render('auth/reg');
})

router.post('/reg', (req,res)=>{

    usermodel.create({...req.body, password: md5(req.body.password)}).then(data => {
        res.render('success', { message: 'Successfully registered', redirectUrl: '/reg' });
        }).catch(err => {
        res.status(500).send('Registration failed');
        })    
})

module.exports = router;
