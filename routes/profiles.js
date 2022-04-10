var express = require('express');
var router = express.Router();
var profilesCtrl = require("../controllers/profile.js");

/* GET users listing. */
router.get('/', profilesCtrl.index)
router.get('/quiz', profilesCtrl.renderquiz)
router.post('/', profilesCtrl.submitquiz)

module.exports = router;
