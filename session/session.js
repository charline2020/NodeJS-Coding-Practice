const express = require('express');
const session = require('express-session');
const mongostore = require('connect-mongo');


const app = express();

app.use(session({
    name: 'sid',
    secret: 'hachi',
    saveUninitialized: false,
    resave: true,
    store: mongostore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/test'
    }),
    cookie:{
        httpOnly: true,
        maxAge: 1000 * 60 * 5
    },
  }))

app.get('/', (req, res)=>{
    res.send('home page')

})

app.get('/login', (req,res)=>{
    if (req.query.usernam === 'admin' && req.query.password === 'admin'){
         req.session.username = 'admin';

         res.send('Successfully login')
    }else{
        res.send('Failed login');
    }
})

app.get('/cart', (req,res)=>{
    if(req.session.username){
        res.send(`welcome ${req.session.username}`)

    }else{
        res.send('please login')
    }
})

app.get('/logout', (req,res)=>{
    req.session.destroy(()=>{
        res.send('Successfully logout');
    })
})

app.listen(3000);