var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	res.render('message', { title: 'Messagebox' });
});

/* GET users listing. */
router.post('/submit', function(req, res) {
	res.send("Successed!");
});

module.exports = router;
