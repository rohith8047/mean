var express = require('express');
var Router = express.Router();

var loginFunc = require('../modules/user').login;

Router.post('/login', function(req, res) {
    loginFunc(req.body.email, req.body.password, function(result) {
        res.json(result);
    })
});

module.exports = Router;