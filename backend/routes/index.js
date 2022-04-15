var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.
router.post('/api/transaction', function(req, res, next) {
  const body = JSON.stringify(req.body)
  console.log(req.body)
  res.status(200).json(body)

});


module.exports = router;
