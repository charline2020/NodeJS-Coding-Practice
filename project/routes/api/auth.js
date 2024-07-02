var express = require('express');
var router = express.Router();
const usermodel = require('../../models/usermodel');
const md5 = require('md5');
const jwt = require('jsonwebtoken');


router.post('/login', (req,res)=>{
    let {username, password} = req.body;

    usermodel.findOne({username: username, password:md5(password)}).then(data => {
        if (!data){
            res.json({
                code: '2002',
                msg: 'Wrong username or password',
                data: null
            })           
        }
        else{

            let token = jwt.sign({
                username: data.username,
                _id: data._id
            }, 'nodejs', {
                expiresIn: 7*24*60*60 // a week
            });

            res.json({
                code: '0000',
                msg: 'Successfully login',
                data: token
            })

            req.session.username = data.username;
            req.session._id = data._id;
            res.render('success', { message: 'Successfully login', redirectUrl: '/account' });
        }
    }).catch(err =>{
        res.json({
            code: '2001',
            msg: 'Failed to connect',
            data: null
        })
    })
    // res.render('auth/login');
})

router.post('/logout', (req,res)=>{
    req.session.destroy(()=>{
        res.render('success', { message: 'Successfully logout', redirectUrl: '/login' });
    })
})


module.exports = router;
