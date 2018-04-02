var express = require('express')
var router = express.Router()

router.get('/studio', function( req, res, next) {
    res.render('studio', { title: 'Studio'});
});

module.exports = router;