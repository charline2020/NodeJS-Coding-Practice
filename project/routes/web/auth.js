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

router.get('/login', (req,res)=>{
    res.render('auth/login');
})

router.post('/login', (req,res)=>{
    let {username, password} = req.body;

    usermodel.findOne({username: username, password:md5(password)}).then(data => {
        if (!data){
            res.send('wrong username or password');
        }
        else{
            req.session.username = data.username;
            req.session._id = data._id;
            res.render('success', { message: 'Successfully login', redirectUrl: '/account' });
        }
    }).catch(err =>{
        res.status(500).send('Login failed');
    })
    // res.render('auth/login');
})

router.post('/logout', (req,res)=>{
    req.session.destroy(()=>{
        res.render('success', { message: 'Successfully logout', redirectUrl: '/account' });
    })
})


module.exports = router;
