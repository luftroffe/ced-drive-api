var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/read/drive_type', function (req, res) {
  var data = fs.readFileSync('./data.txt');
  res.status(200).set('Content-Type', 'text/plain').send(data);
});

router.get('/api/write/drive_type/:type', function (req, res) {
  let type = req.params.type;
  fs.writeFile('./data.txt', type, function (err) {
    console.log(err);
  })
  res.status(200).set('Content-Type', 'text/plain').send(type);
});

module.exports = router;