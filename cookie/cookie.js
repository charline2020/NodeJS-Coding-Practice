const express = require('express');
const cookieParser = require('cookie-parser');

const app = express()
app.use(cookieParser())

// set cookie
app.get('/set-cookie', (req,res)=>{
    //res.cookie('name', 'hachi'); 
    // when close the browser the cookie will also be destroyed
    
    res.cookie('name', 'hello', {maxAge: 60 * 1000}); 
    res.cookie('theme', 'blue');
    // the cookie will stay for a while 
    // and the unit is ms in this case is 1 min

    res.send('home');
});

// delete cookie
// when to use remove cookie -> when user logs out
app.get('/remove-cookie', (req,res)=>{
    res.clearCookie('name');
    res.send('deleted!')
});

// how to read cookie -> npm i cookie-parser 
app.get('/get-cookie', (req,res)=>{
    console.log(req.cookies);
    res.send('get cookie');
})

app.listen(3000);