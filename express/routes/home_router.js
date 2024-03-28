const express = require('express');

const router = express.Router();

// create router
router.get('/home', (req, res) => {
    res.send('frontend page');
})

router.get('/search', (req, res) => {
    res.send('search page');
})

module.exports=router;