var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/student', function(req, res, next) {
  res.send([
    { id: 1, name: 'tom', age: 88 },
    { id: 2, name: 'jerry', age: 11 },
    { id: 3, name: 'john', age: 18 }
  ]);
});

module.exports = router;
