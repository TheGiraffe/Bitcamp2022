var express = require('express');
var router = express.Router();
var profileCtrl = require("../controllers/profile.js");

/* GET users listing. */
router.get('/profile', profileCtrl.index)

module.exports = router;
