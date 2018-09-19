var express = require('express');
var router = express.Router();

var publish = require('./../controller/share/publish');
var list = require('./../controller/share/list');

router.post('/publish', publish);
router.get('/list', list);

module.exports =  router;