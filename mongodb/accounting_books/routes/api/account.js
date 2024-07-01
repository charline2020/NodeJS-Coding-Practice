const express = require('express');
const moment = require('moment')
const AccountModel = require('../../models/accountmodel');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/account');
})

/* list of accounts */
router.get('/account', function (req, res, next) {
    AccountModel.find().sort({ happenTime: -1 }).then(data => {
        // console.log(data);
        res.json({
            code: '0000', //status 200 * 100 or 0000 or 000000
            msg: 'Successfully read',
            data: data
        });

    }).catch(err => {
        res.json({
            code: '1001',
            msg: 'Failed to read',
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
            code: '0000', //status 200 * 100 or 0000 or 000000
            msg: 'Successfully create',
            data: data
        });
    }).catch(err => {
        res.json({
            code: '1002',
            msg: 'Failed to create',
            data: null
        })
    })
});

// delete record
router.delete('/account/:id', (req, res) => {
    let id = req.params.id;
    // db.get('account').remove({ id: id }).write();

    AccountModel.deleteOne({ _id: id }).then(data => {
        res.json({
            code: '0000', //status 200 * 100 or 0000 or 000000
            msg: 'Successfully delete',
            data: {}
        });
    }).catch(err => {
        res.json({
            code: '1003',
            msg: 'Failed to delete',
            data: null
        })
    })
})

// get single record
router.get('/account/:id', (req, res) => {
    let { id } = req.params;
    // db.get('account').remove({ id: id }).write();

    AccountModel.findById(id).then(data => {
        res.json({
            code: '0000', //status 200 * 100 or 0000 or 000000
            msg: 'Successfully get the single record',
            data: data
        });
    }).catch(err => {
        res.json({
            code: '1004',
            msg: 'Failed to find this record',
            data: null
        })
    })
})

// update single record
router.patch('/account/:id', (req, res) => {
    let { id } = req.params;
    AccountModel.updateOne({ _id: id }, req.body).then(data => {
        
        AccountModel.findById(id).then(data => {
            res.json({
                code: '0000',
                msg: 'Successfully update',
                data: data
            })

        }).catch(err => {
            res.json({
                code: '1004',
                msg: 'Failed to find this record',
                data: null
            })

        })

    }).catch(err => {
        res.json({
            code: '1005',
            msg: 'Failed to update',
            data: null
        })
    })
})

module.exports = router;
