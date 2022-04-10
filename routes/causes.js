var express = require('express');
var router = express.Router();
var causesCtrl = require("../controllers/cause.js");

/* GET users listing. */
router.get('/', causesCtrl.index)
router.post('/', causesCtrl.create)

module.exports = router;
