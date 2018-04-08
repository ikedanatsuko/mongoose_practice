var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');

var db = require('../db/db');
var Test = db.Test;

router.get('/', function (req, res) {
    mongoose.connect('mongodb://localhost/chat_api');

    Test.find(function (err, result) {
        if (err) console.log(err);

        if (result.length == 0) {
            console.log('データが見つからないよ！' + result[0]);
        } else {
            console.log('データがあったよ！ ' + result[0]);
        }
    });
});

module.exports = router;