var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var config = require('./../config/config');
mongoose.connect(config.mongo.url);

var usersSchema = new Schema({
    name: String,
    email: String,
    password: String
});

var UsersCollection = mongoose.model('users', usersSchema);

module.exports = {
    UsersColl: UsersCollection
};