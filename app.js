var express = require('express');
var morgan = require('morgan');
var routes = require('./routes/');
var swig = require('swig');
var app = express();

app.use(morgan(':method :url :status'));
app.use(express.static('public'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', routes);

app.listen(3000);