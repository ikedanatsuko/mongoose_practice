var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
var connect = function () {mongoose.connect('mongodb://localhost/chat_api')};

var db = require('../db/db');
var Test = db.Test;

router.get('/', function (req, res) {
    connect();
    Test.find(function (err, result) {
        if (err) console.log(err);

        if (result.length == 0) {
            console.log('データが見つからないよ！' + result[0]);
        } else {
            console.log('データがあったよ！ ' + result[0]);
        }
    });
});

router.post('/create', function (req, res) {
    connect();
    var test = new Test();
    test.name = req.body.name;
    console.log('名前はこれだね ' + test.name);

    test.save(function (err) {
        if (err) console.log(err);
        console.log('保存したよ！');
    });
});

module.exports = router;