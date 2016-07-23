var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan(':method :url :status'));

app.listen(3000);