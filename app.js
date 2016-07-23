var express = require('express');
var morgan = require('morgan');
var routes = require('./routes/');
var swig = require('swig');
var tweetBank = require('./tweetBank');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded());
app.use(routes);


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

app.use(morgan(':method :url :status'));

app.use(express.static('public'));

app.use(function (req, res, next) {
   console.log(req.method + " " + req.originalUrl + " " + res.statusCode);
   next();
});

app.use('/special/', function (req, res, next) {
   console.log("You reached the special area.");
   next();
});

app.get('/', function(req, res){

	res.render('index', tweetBank.list());
});



app.get('/', function(req, res){

	res.render('index', tweetBank.list());
});

app.listen(3000);


