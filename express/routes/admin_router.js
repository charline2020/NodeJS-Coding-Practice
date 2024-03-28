const express= require('express')

const adminrouter = express.Router();

adminrouter.get('/admin',(req, res) => {
    res.send('backend page');
})

adminrouter.get('/setting', (req, res) => {
    res.send('backend setting page');
})

module.exports = adminrouter;