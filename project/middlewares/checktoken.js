const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.get('token');

    if (!token) {
        return res.json({
            code: '2003',
            msg: 'Missing token',
            data: null
        })
    } 

    jwt.verify(token, 'nodejs', (err, data) => {
        if (err) {
            return res.json({
                code: '2004',
                msg: 'Failed to verify token',
                data: null
            })
        }
        next();
    });
 
}