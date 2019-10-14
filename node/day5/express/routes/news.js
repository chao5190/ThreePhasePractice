var express = require('express');
var router = express.Router();
const {
    find
} = require('../../CURD/curd')
/* GET users listing. */
router.get('/', async function (req, res, next) {
    let news = await find('news')
    res.json({
        news
    });
});

module.exports = router;