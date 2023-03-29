var express = require('express');
var router = express.Router();

let more = 0;
let sum =0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  more = more + 1;
  sum = more;
  res.send(`Sum is: ${sum}`);
});

module.exports = router;
