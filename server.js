//npm libraries
var express = require('express');
var bodyParser = require('body-parser');

//files
var UserRouter = require('./server/routes/user');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client', {index: 'views/index.html'}));


// app.use('/admin', AdminRouter);
app.use('/user', UserRouter);

app.listen(4003);