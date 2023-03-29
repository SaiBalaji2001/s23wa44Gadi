var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let x = req.query.x;

let randomVal = Math.random().toFixed(2);
let hypot = Math.hypot(randomVal).toFixed(2);
let ceil = Math.ceil(randomVal).toFixed(2);
let clz32 = Math.clz32(randomVal).toFixed(2);

if(x == undefined){
    x= randomVal;
}
  res.render("computation",{
    hypot: `Math.hypot() applied to ${x} is  ${hypot}`,
     ceil: `Math.ceil() applied to ${x} is  ${ceil}`,
      clz32: `Math.clz32() applied to ${x} is ${clz32}`,
  });
});

module.exports = router;
