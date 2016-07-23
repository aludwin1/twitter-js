var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');


router.get('/', function (req, res, next) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find({'name': name});
  res.render( 'index', { title: 'Twitter.js', tweets: tweets} );
});

module.exports = router;