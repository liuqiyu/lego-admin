var express = require('express');
var router = express.Router();

var list = require('./../controller/recommend/list');
var attention = require('./../controller/recommend/attention');
var unsubscribe = require('./../controller/recommend/unsubscribe');

router.get('/list', list);
router.get('/attention', attention);
router.get('/unsubscribe', unsubscribe);

module.exports =  router;