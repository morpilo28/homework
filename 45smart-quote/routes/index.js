var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile('allQuotes.txt', (e, d) => {
    const allQuotes = d && d.length > 0 ? JSON.parse(d.toString()) : [];
    if (e) {
      console.log(e);
    } else {
      res.render('index', { allQuotes: allQuotes });
    }
  })
});

router.get('/rate-quote', function (req, res, next) {
  res.render('rating');
});

router.post('/rate-quote', function (req, res, next) {
  console.log('quoteId: ' + req.body.quoteId, ' rate: ' + req.body.rate);
  res.render('rating');
});

module.exports = router;

