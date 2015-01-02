var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	res.render('message', { title: 'Messagebox' });
});

/* GET users listing. */
router.post('/submit', function(req, res) {
	res.render('output', {
		msg: {
			num:'1',
			key:'123',
			message:'TEST'
		}
	});
});

module.exports = router;
