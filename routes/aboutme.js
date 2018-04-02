var express = require('express');
var router = express.Router();

/* GET about me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});


module.exports = router;
