const app = require('express');
const router = app.Router();

router.get('/customer', function (req, res) {
    res.render('customer.html');
});

router.get('/trainer', function (req, res) {
    res.render('trainer.html');
});

module.exports = router;