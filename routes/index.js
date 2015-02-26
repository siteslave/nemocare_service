var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function (req, res) {
    res.render('login');
});

router.post('/death/detail', function (req, res) {
    var hospcode = req.body.hospcode;
    var knex = req.db;

    knex('accident')
        .where('hospcode', hospcode)
        .exec(function (err, rows) {
            if (err) {
                res.send({ok: false, msg: err});
            } else {
                res.send({ok: true, rows: rows});
            }
        });

});


module.exports = router;
